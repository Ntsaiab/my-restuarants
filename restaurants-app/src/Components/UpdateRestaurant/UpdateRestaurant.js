import React from 'react'
import { useRef } from 'react'
import RestaurantInfo from '../Home/RestaurantInfo'


const UpdateRestaurant = (props) => {
    const nameInput = useRef(null);
    const cityInput = useRef(null);
    const zipInput = useRef(null);
    const cultureInput = useRef(null);
    const dishInput = useRef(null);
    const ruleoutInput = useRef(null);

    // const [collections, setCollections] = useState([])
    
    
    
//     // show - Update
//   const showCollection = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:3000/collections/${id}`, {
//           method: 'GET',
//           headers: {
//               'Content-type': 'application/json',
//           }
//       })
//       const collections = await response.json();
//       console.log(collections[0]._id);
//       setCollections(collections);
//       console.log(collections);
     
//       const filteredCollections = collections.filter(collection => collection._id !== collections._id)
//       console.log(filteredCollections);
//       setCollections(filteredCollections)
//     } catch (error) {
//       console.error(error)
//     }
//   }

    // UPDATE
    const updateCollection = async (event) => {

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
                const response = await fetch(`http://localhost:3000/collections/${props.id}`, {
                    method : 'PUT',
                    headers : {
                        'Content-type': 'application/json'
                    },
                    body: {
                        "name": {name},
                        "city": {city},
                        "zip": {zip},
                        "culture": {culture},
                        "dish": {dish},
                        "ruleout": {ruleout}
                }
                })
            const data = await response.json();
            console.log(data.id)
            const filteredCollections = props.collections.filter(collection => collection._id !== data._id)
            console.log(props.collections)
            props.collections([...filteredCollections, data])
        } catch (error) {
            console.error(error)
        }
    }







    return (
        <div>
            <h2>UPDATE INFO</h2>
            <h3>Need to make a change or add a new dish! Update it here!</h3>
            <br />
            <form className="collectionsForm" onSubmit={updateCollection}>
            <label> Name: <input type="text" ref={nameInput} />{props.name} </label>  
            <label> City: <input type="text" ref={cityInput} /> {props.city}</label>   
            <label> Zip: <input type="text" ref={zipInput} />{props.zip} </label> <br />
            <label> Culture: <input type="text" ref={cultureInput} />{props.culture} </label>  
            <label> Dish: <input type="text" ref={dishInput} />{props.dish} </label>  
            <label> Ruleout: <input type="text" ref={ruleoutInput} />{props.ruleout} </label> 
                <input type="submit" value="Update Restaurant Info" />  
            </form><br />
            
            {/* {
                collections.map(collection => {
                return (
                    <>
                    <li key={collection._id}>
                    {collection.name}
                    <button onClick={
                        (event) => {
                            updateCollection(collection._id)
                        }
                    }>Update {collection.name}</button>
                    </li>
                    </>
                )
                })
            } */}
        </div>
    )
}

export default UpdateRestaurant;