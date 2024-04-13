
const Images = ({url,fileName})=>{
    
    
    return (
        <img src={url} style={{width:'100%'}} alt={fileName}/>
    )
}

export default Images