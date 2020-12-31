import { useState, useEffect, useRef } from 'react';// need to fix update route and button, create a separate form



export default (props) => {
    const nameInput = useRef(null);
    const cityInput = useRef(null);
    const zipInput = useRef(null);
    const cultureInput = useRef(null);
    const dishInput = useRef(null);
    const ruleoutInput = useRef(null);


    const [collections, setCollections] = useState([])

   // CREATE
    const createCollection = async (event) => {
        event.preventDefault()
        const name = nameInput.current.value
        const city = cityInput.current.value;
        const zip = zipInput.current.value;
        const culture = cultureInput.current.value
        const dish = dishInput.current.value;
        const ruleout = ruleoutInput.current.value;
        const body = JSON.stringify({
            name, city, zip, culture, dish, ruleout
        });// turns js object to json database
        event.currentTarget.reset();
        try{
            const response = await fetch('http://localhost:3000/collections', {
                method : 'POST',
                headers : {
                    'Content-type': 'application/json'
                },
                body: body
            })
            const data = await response.json();
            console.log(collections)
            setCollections([...collections, 
            data])
            
            console.log(event.target)
        } catch (error) {
            console.error(error)
        }
    }
    
    // READ
  const fetchCollections = async () => {
    try {
      const response = await fetch('http://localhost:3000/collections')
      const data = await response.json();
      setCollections(data)
    } catch (error) {
      console.error(error)
    }
  }


    // DELETE
    const deleteCollection = async (id) => {
        try{
            const response = await fetch(`http://localhost:3000/collections/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                }
            })
            const data = await response.json();
            const filteredCollections = collections.filter(collection => collection._id !== data._id)
            setCollections(filteredCollections);
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(() =>{
    fetchCollections();
    }, [])

    return (
        <>
            <h3>Was it good! Add your fav Restaurant location and dish on this page!</h3>
            <br />
            <form className="collectionsForm" onSubmit={createCollection}>
            <label> Name: <input type="text" ref={nameInput} /> </label>  
            <label> City: <input type="text" ref={cityInput} /> </label>   
            <label> Zip: <input type="text" ref={zipInput} /> </label> <br />
            <label> Culture: <input type="text" ref={cultureInput} /> </label>  
            <label> Dish: <input type="text" ref={dishInput} /> </label>  
            <label> Ruleout: <input type="text" ref={ruleoutInput} /> </label> 
                <input type="submit" value="Add A Restaurant" />  
            </form><br />
            
            {
                collections.map(collection => {
                return (
                    <>
                    <li key={collection._id}>
                    {collection.name}
                    <button onClick={
                        (event) => {
                            deleteCollection(collection._id)
                        }
                    }>Delete {collection.name}</button>
                    </li>
                    </>
                )
                })
            }
        </>
    )

}