import React, { useState } from 'react'
import "./AddPlant.css"
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import ImgPlant from "./plant-.png"
import Leaf from "./leaf.png"
import { Link } from 'react-router-dom'


function AddPlant() {
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")


    const addPlant = async () => {
        if (!name || !category || !price || !image || !description) {
            toast.error("Enter all details")
            return
        }

        const response = await axios.post(`${process.env.REACT_APP_API_URL}/plant`, {
            name: name,
            price: price,
            category: category,
            image: image,
            description: description
        })
        toast.success(response.data.message)

        setName("")
        setCategory("")
        setPrice("")
        setImage("")
        setDescription("")
    }

    return (
        <div className='form-conatiner'>

            <div className='img-container'>
                <img src={ImgPlant} alt='plant-img' className='leaf-img' />
            </div>
            <form className='form-text'>
                <div className='form-ele'>
                    Enter plant name:
                    <input type='text' value={name}
                        onChange={(e) => setName(e.target.value)} className='input-box' />
                </div>


                <div className='form-ele'>
                    Enter price:
                    <input type='number' value={price}
                        onChange={(e) => setPrice(e.target.value)} className='input-box' />
                </div>


                <div className='form-ele'>
                    <label for='category'>Select category: </label>
                    <select name='category' value={category} onChange={(e) => setCategory(e.target.value)} className='input-box'>
                        <option>Category:</option>
                        <option>Indoor</option>
                        <option>Outdoor</option>
                    </select>
                </div>


                <div className='form-ele'>
                    Enter plant image URL:
                    <input type='text' value={image}
                        onChange={(e) => setImage(e.target.value)} className='input-box' />
                </div>

                <img src={image} className='img-preview' alt='url-img'/><br />


                <div className='form-ele'>
                    <label for='desc'>Enter description:</label>
                    <input type='text' name='desc' value={description}
                        onChange={(e) => setDescription(e.target.value)} className='input-box' />
                </div>


                <button type='button' onClick={addPlant} className='add-plant-btn mt'>Add plant <img src={Leaf} height="20px" alt='img'/></button>

               <br/>
               <button type='button' className='add-plant-btn'> <Link to="/" className='link-home'>Show all plants</Link> <img src={Leaf} height="20px" alt='img'/></button>
            </form>
            <Toaster />
        </div>
    )
}

export default AddPlant