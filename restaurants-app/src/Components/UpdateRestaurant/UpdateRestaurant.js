import React from 'react'
import { useState, useEffect, useRef } from 'react'


const UpdateRestaurant = () => {
    const nameInput = useRef(null);
    const cityInput = useRef(null);
    const zipInput = useRef(null);
    const cultureInput = useRef(null);
    const dishInput = useRef(null);
    const ruleoutInput = useRef(null);

    const [collections, setCollections] = useState([])
    
    
    
    // show - Update
  const showCollection = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/collections/${id}`, {
          method: 'GET',
          headers: {
              'Content-type': 'application/json',
          }
      })
      const data = await response.json();
      const filteredCollections = collections.filter(collection => collection._id !== data._id)
      setCollections(filteredCollections)
    } catch (error) {
      console.error(error)
    }
  }

    // UPDATE
    const updateCollection = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/collections/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: {
                'name': {nameInput},
                'city': {cityInput},
                'zip': {zipInput},
                'culture': {cultureInput},
                'dish': {dishInput},
                'ruleout': {ruleoutInput}
            }
        })
            const data = await response.json();
            const filteredCollections = collections.filter(collection => collection._id !== data._id)
            setCollections(filteredCollections);
        } catch (error) {
            console.error(error)
        }
    }









    return (
        <div>
            <h2>UPDATE INFO</h2>
            <h3>Need to make a change or add a new dish! Update it here!</h3>
            <br />
            <form className="collectionsForm" onSubmit={showCollection}>
            <label> Name: <input type="text" ref={nameInput} /> </label>  
            <label> City: <input type="text" ref={cityInput} /> </label>   
            <label> Zip: <input type="text" ref={zipInput} /> </label> <br />
            <label> Culture: <input type="text" ref={cultureInput} /> </label>  
            <label> Dish: <input type="text" ref={dishInput} /> </label>  
            <label> Ruleout: <input type="text" ref={ruleoutInput} /> </label> 
                <input type="submit" value="Update Restaurant Info" />  
            </form><br />
            
            {
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
            }
        </div>
    )
}

export default UpdateRestaurant;