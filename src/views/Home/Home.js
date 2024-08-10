import React,{useState, useEffect} from 'react'
import "./Home.css"
import PlantCard from '../../components/PlantCard/PlantCard'
import axios from 'axios'
import toast,{Toaster} from 'react-hot-toast'

function Home() {
    const [plants,setPlants]= useState([])

    const loadPlants= async ()=>{
        toast.loading("Loading plants...")
        const response = await axios.get(`https://nursery-0u93.onrender.com/plants`)
        toast.dismiss()

        toast.success("Plants loaded successfully")
        setPlants(response.data.data)
    }

    useEffect(()=>{
        loadPlants()
    },[])

  return (
    <div>
        <h1>Plants</h1>

        {
            plants.map((plant,i)=>{
                const {_id,
                    name,
                    category,
                    image,
                    price,
                    description}=plant

                return <PlantCard key={i} _id={_id} 
                name={name} category={category} image={image} price={price}
                description={description}/>
            })
        }
        <Toaster/>
    </div>
  )
}

export default Home