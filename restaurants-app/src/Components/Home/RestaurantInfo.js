import { useState, useEffect } from 'react';

const PullBackend = (props) => {
    const [collections, setCollections] = useState([]);
    
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


    return (
        
        <>
            {
                collections.map(collection => {
                    return <h3>{collection.name}, {collection.city}, {collection.dish}</h3>
                })
            }
        </>
    )
}

export default PullBackend;