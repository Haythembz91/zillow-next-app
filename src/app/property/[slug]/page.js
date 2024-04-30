import NavBar from './../../components/NavBar.js'
import Link from 'next/link.js'



const getProperty = async (slug) => {
    const HYGRAPH_ENDPOINT = 'https://eu-west-2.cdn.hygraph.com/content/cluvvu2nn13ya08waujkgrs42/master'
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
              query Property ($slug: String!) {
                  property (where: {slug: $slug}){
                    id
                    name
                    parking
                    petFriendly
                    pool
                    rentalPrice
                    images {
                      url
                      id
                      fileName
                    }
                    elevator
                    description
                    beds
                    inUnitDryer
                    managingBroker{
                      name
                      phoneNumber
                    }
                  }
            }`,
        variables: {
                slug: slug
        },
        }),
    }

    const response = await fetch(options)
    const json = await response.json()
    return json.data.property
}


const Property = async ({params})=>{
    const property = await getProperty(params.slug)
    console.log(property.name)
    console.log(params.slug)

    return(
        <div>
            <NavBar></NavBar>
            <>
            <div className='final-container'>  
            <div className="image-container">                
                    {property.images.map(image=>
                        <img key={image.id} src={image.url} alt={image.fileName}></img>
                    )}               
            </div>
            <div className="content-container">
            <h1>{property.name}</h1>
            <h3><span>${property.rentalPrice}</span></h3>
            <h2><span>{property.beds} Beds</span></h2>
            <h2>Overview</h2>
            <p>{property.description}</p>
            <h2>Amenities:</h2>
            <ul>
                {property.parking && <li>Parking</li>}
                {property.petFriendly && <li>Pet Friendly</li>}
                {property.pool && <li>Pool</li>}
                {property.elevator && <li>Elevator</li>}
                {property.inUnitDryer && <li>In-Unit Dryer</li>}

            </ul>
            <h3>Broker: </h3>
            <p>Managing broker: {property.managingBroker.name}</p>
            <p>Phone Number: {property.managingBroker.phoneNumber}</p>

            <Link href={"/"}><button>Go Back</button></Link>
            </div>
        </div></>
        </div>
        
    )
}

export default Property