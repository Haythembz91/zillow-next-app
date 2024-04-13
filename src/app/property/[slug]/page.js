


const getProperty = async (slug) => {
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
              query Property ($slug: String!) {
                  property (where: {slug: $slug){
                    id
                    name
                    parking
                    petFriendly
                    pool
                    rentalPrice
                    slug
                    images {
                      url
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
    console.log(property)

    return(
        <div>I'm a property!</div>
    )
}

export default Property