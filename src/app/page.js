
import NavBar from "./components/NavBar.js"
import Grid from "./components/Grid.js"



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
    <Grid properties={properties}></Grid>
    
    </>
  )
}

export default Home