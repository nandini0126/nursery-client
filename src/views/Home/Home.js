import React,{useState, useEffect} from 'react'
import "./Home.css"
import PlantCard from '../../components/PlantCard/PlantCard'
import axios from 'axios'
import toast,{Toaster} from 'react-hot-toast'
import AddImg from "./add-img.png"
import { Link } from 'react-router-dom'

function Home() {
    const [plants,setPlants]= useState([])

    const loadPlants= async ()=>{
        toast.loading("Loading plants...")
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/plants`)
        toast.dismiss()

        toast.success("Plants loaded successfully")
        setPlants(response.data.data)
    }

    useEffect(()=>{
        loadPlants()
    },[])

  return (
    <div>
        <h1 className='plant-title'>Plants</h1>
        <div className='plant-container'>
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
                description={description} loadPlants={loadPlants}/>
            })
        }
        </div>
        <Toaster/>
        <Link to="/add"><img src={AddImg} className='btn-add' alt='img'/>
        </Link>
    </div>
  )
}

export default Home