import react from 'react'

function PlantCard({_id,name,category,image,price,description}) {
  return (
    <div>
        <h1>{name}</h1>
        <p>{price}</p>
    </div>
  )
}

export default PlantCard