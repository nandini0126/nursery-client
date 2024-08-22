
import "./PlantCard.css"
import ImgEdit from "./edit.png"
import ImgDel from "./delete.png"
import axios from "axios"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"

function PlantCard({ _id, name, category, image, price, description, loadPlants}) {

  const deletePlant = async(plantId)=>{
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/plant/${plantId}`)


    toast.success(response.data.message)
    
    loadPlants()
  }
  return (
    <div className='plant-container'>
      <div className='card'>
        <img src={image} className='plant-img' alt='plant-img'/>
        <h2 className='plant-name' >{name}</h2>
        <div className="price-cate">
          <span><b>Price: </b>{price}/-</span>
          <span className='category'><b>Category: </b>{category}</span>
        </div>
        <p className="desc">{description}</p>
        <div className="btn-div">
          <button className="edit-btn"><Link to={`/update/${_id}`} className="txt-none">Edit <img src={ImgEdit} alt="img" height="20px" /></Link> </button>
          <button type="button" className="edit-btn"
          onClick={()=>{deletePlant(_id)}}>Delete<img src={ImgDel} alt="img" height="20px" /></button>
        </div>
      </div>
    </div>
  )
}

export default PlantCard