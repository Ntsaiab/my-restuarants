import { useState, useEffect, useRef } from 'react'; // Need to add code for location button for search results and link to goole maps if have time
import { Route, Link, Switch } from 'react-router-dom';


const PullBackend = (props) => {
    const [collections, setCollections] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const searchInput = useRef(null);
    
    const fetchCollections = async () => {
        try {
            const response = await fetch('http://localhost:3000/collections');
            const data = await response.json();
            if (data) { // null checker
                console.log(data);
            setCollections(data)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchCollections()
    }, [])


    // MyModel.find({ name: new RegExp('john', 'i') }, null).exec();
const handleFilter = (e) => {
    const found = collections.filter(elements => {
        if (elements.ruleout.toLowerCase().includes(e)) {
            return elements;
        }
    });
    if (e.length > 0) {
        setFilteredItems(found);
    } else {
        setFilteredItems([]);
    }
    
}

    return (
        
        <>
            <form>
                <label> Ruleout: <input onChange= {(e) => handleFilter(e.target.value)} type="text" options=""></input></label>
                {/* <input  type='submit'></input> */}
            </form>
            {
                filteredItems.length > 1 ? 
                filteredItems.map(collection => {
                    return (
                        <>
                    <Link to={`/UpdateRestaurant/${collection._id}`}><div key={collections._id}>
                    <h3>Name: {collection.name}, City: {collection.city}, Zip: {collection.zip}, <br />
                    Cuisine: {collection.culture}, Dish: {collection.dish}, Ruleout: {collection.ruleout}</h3>
                    </div>
                    </Link>
                    
                    </>
                    )
                }) : 
                (<div>Search for what you need to ruleout of your meal! <br />
                Click on Restaurant to update information</div>)
            }
        </>
    )
}

export default PullBackend;