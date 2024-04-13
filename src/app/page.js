
import NavBar from "./components/NavBar.js"
import SearchBar from "./components/SearchBar.js"
import Map from './components/Map.js'
import Card from './components/Card.js'



const getProperties = async ()=>{
    const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT
    if(!HYGRAPH_ENDPOINT){
      throw new Error('Please provide a valid HyGraph Endpoint')
    }
    const options = {
    url:HYGRAPH_ENDPOINT,
    method:'POST',
    headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        query:`
        query Properties {
          properties {
            beds
            description
            images {
              fileName
              url
            }
            name
            rentalPrice
            slug
            id
            location {
              latitude
              longitude
            }
          }
        }`
      })
    }

      const response = await fetch(options)
      const json = await response.json()
      return json.data.properties

}

const Home = async ()=>{
  const properties = await getProperties()

  return (
    <>
    <NavBar></NavBar>
    <SearchBar></SearchBar>
    <main>
      <article className="map">
        <Map></Map>
      </article>
      <article className="listings">
        <h2 style={{padding:'20px'}}>Rental Listings</h2>
        <div className="card-container">
            {properties.map(property=><Card key={property.id}
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

export default Home