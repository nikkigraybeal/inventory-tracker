import { db } from '../../firebase/config'
import { collection, addDoc } from 'firebase/firestore'
import { useState } from 'react'

// styles
import './AddProduct.css'

export default function AddProduct() {
  const [newProduct, setNewProduct] = useState({
    lastUpdate: new Date(),
    imgSrc: "",
    imgAlt: "",
    purchaseDate: "",
    name: "",
    description: "",
    units: 0,
    price: 0.00
  })

  const colRef = collection(db, 'products')

  const handleAdd = (e) => {
    e.preventDefault()

    addDoc(colRef, newProduct)
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
        <div className="img-div">
          <img src="mock" alt="mock"/>
        </div>
        <input className="hide" 
               type="text" 
               onChange={handleImageSourceChange}
               placeholder="img src" 
               value={newProduct.imgSrc}
               />
        <input className="hide" 
               type="text" 
               onChange={handleAltDescChange}
               placeholder="alt desc" 
               value={newProduct.imgAlt}
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
