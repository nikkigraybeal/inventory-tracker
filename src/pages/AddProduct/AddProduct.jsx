import { db } from '../../firebase/config'
import { collection, addDoc } from 'firebase/firestore'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// styles
import './AddProduct.css'

export default function AddProduct({ imgData }) {
  const imgSrc = imgData ? imgData.imgSrc : ""
  const imgAlt = imgData ? imgData.imgAlt : ""
  const [newProduct, setNewProduct] = useState({
    lastUpdate: new Date().toDateString(),
    imgSrc,
    imgAlt,
    purchaseDate: "",
    name: "",
    description: "",
    units: 0,
    price: 0.00
  })

  const navigate = useNavigate()
  const colRef = collection(db, 'products')

  const handleAdd = (e) => {
    e.preventDefault()
    const purchaseDate = new Date(newProduct.purchaseDate).toDateString()
    addDoc(colRef, {
      ...newProduct, 
      purchaseDate: purchaseDate
    })
    navigate('/')
  }

  const handleImageSourceChange = (e) => {
    setNewProduct({
      ...newProduct,
      imgSrc: e.target.value
    })
  }

  const handleAltDescChange = (e) => {
    setNewProduct({
      ...newProduct,
      imgAlt: e.target.value
    })
  }

  const handleNameChange = (e) => {
    setNewProduct({
      ...newProduct,
      name: e.target.value
    })
  }

  const handleDescriptionChange = (e) => {
    setNewProduct({
      ...newProduct,
      description: e.target.value
    })
  }

  const handlePurchaseDateChange = (e) => {
    setNewProduct({
      ...newProduct,
      purchaseDate: e.target.value
    })
  }

  const handleUnitsChange = (e) => {
    setNewProduct({
      ...newProduct,
      units: e.target.value
    })
  }

  const handlePriceChange = (e) => {
    setNewProduct({
      ...newProduct,
      price: e.target.value
    })
  }

  return (
    <div className="add-product">
      <form action="" 
            onSubmit={handleAdd} 
            className="add-form">
       {!imgData && 
         <div className="img-div">
           <Link to='/searchimages'>Find Product Images</Link>
         </div>
       }
       {imgData && 
         <div className="img-div">
           <img src={imgData.imgSrc} alt={imgData.imgAlt}/>
         </div>
       }
        <input className="hide" 
               type="text" 
               onChange={handleImageSourceChange}
               placeholder="img src" 
               value={imgData ? imgData.imgSrc : ""}
               />
        <input className="hide" 
               type="text" 
               onChange={handleAltDescChange}
               placeholder="alt desc" 
               value={imgData ? imgData.imgAlt : ""}
               />

        <label>Product Name: </label>
        <input type="text" 
               placeholder="enter name"
               value={newProduct.name}
               onChange={handleNameChange}
              />
        <label>Product Description: </label>
        <textarea placeholder='enter description'
                  value={newProduct.description}
                  onChange={handleDescriptionChange}
                  ></textarea>
        <label>Purchase Date:</label>
        <input type="date"
               value={newProduct.purchaseDate}
               onChange={handlePurchaseDateChange} 
               />
        <label>Number of Units:</label>
        <input type="number" 
               min="0" 
               placeholder="enter units"
               value={newProduct.units}
               onChange={handleUnitsChange} 
               />
        <label>Retail Price:</label>
        <input type="number" 
               placeholder='enter price'
               value={newProduct.price}
               onChange={handlePriceChange} />
        <button type="submit">Add Product</button>
      </form>
  </div>
    )
}
