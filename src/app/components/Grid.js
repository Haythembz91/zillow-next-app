"use client"
import { useState } from "react"
import Card from './Card.js'
const Grid = ({properties})=>{

    const [input,setInput]=useState('')
    const [houses,setHouses]=useState(properties)  
    const handleChange = (value)=>{
        setInput(value);
        setHouses(properties.filter(property=>property.name.toLowerCase( ).includes(value.toLowerCase())))
    }  
    return (
        <>
        <div className="search-bar">
            <form>
                <label htmlFor="search-input">Search: </label>
                <input type="text" id="search-input" placeholder="Search location" onChange={e=>handleChange(e.target.value)} value={input}></input>
                
            </form>

        </div>
        <main>
      <article className="map">
        
      </article>
      <article className="listings">
        <h2 style={{padding:'20px'}}>Rental Listings</h2>
        <div className="card-container">
            {houses.map(property=><Card key={property.id}
                                            propertyName={property.name}
                                            slug={property.slug}
                                            rentalPrice={property.rentalPrice}
                                            beds={property.beds}
                                            image={property.images[0]}>
            </Card>)}
        </div>
      </article>
    </main>
        </>
    )
}

export default Grid