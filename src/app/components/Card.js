import Link from  'next/link'
import Images from './Images'
const Card =({propertyName,slug,rentalPrice,beds,image})=>{

    return (
        <Link href={`/property/${slug}`}>
            <div className={'card'}>
                <Images url={image.url} fileName={image.fileName}></Images>
                <div className={'text-container'}>
                    <h3>${rentalPrice}/m</h3>
                    <h3>{beds} beds</h3>
                    <p>{propertyName}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card