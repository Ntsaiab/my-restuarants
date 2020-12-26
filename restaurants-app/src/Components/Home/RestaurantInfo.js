import { useState, useEffect, useRef } from 'react'; // Need to add code for searching on homepage

const PullBackend = (props) => {
    const [collections, setCollections] = useState([]);
    const searchInput = useRef(null);
    
    const fetchCollections = async () => {
        try {
            const response = await fetch('http://localhost:3000/collections');
            const data = await response.json();
            console.log(data);
            setCollections(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchCollections()
    }, [])


    // MyModel.find({ name: new RegExp('john', 'i') }, null).exec();

    return (
        
        <>
            <form>
                <label> Search: <input type="text" ref={searchInput}></input></label>
                <input type='submit'></input>
            </form>
            {
                collections.map(collection => {
                    return <h3>Name: {collection.name}, City: {collection.city}, Zip: {collection.zip}, <br />
                    Cuisine: {collection.culture}, Dish: {collection.dish}, Ruleout: {collection.ruleout}</h3>
                })
            }
        </>
    )
}

export default PullBackend;