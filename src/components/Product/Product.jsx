import { Link } from 'react-router-dom'
import { db } from '../../firebase/config'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore'

// styles
import './Product.css'

export default function Product({ product }) {
const totalValue = (product.price * product.units).toFixed(2)
const productRef = doc(db, 'products', product.id)

const handleIncrementUnits = () => {
  const units = product.units + 1
  updateDoc(productRef, {
    units
  })
}

const handleDecrementUnits = () => {
  const units = product.units -1 
  updateDoc(productRef, {
    units
  })
}

const handleDelete = () => {
  deleteDoc(productRef)
}

  return (
    <div className="product card">
      <div className="img-div">
        <img src={product.imgSrc} alt={product.imgAlt} />
      </div>
      <div className="name-nav">
        <Link to={`/${product.id}`}><h2>{product.name}</h2></Link>
        <Link to={`/${product.id}`}><button>product detail</button></Link>
      </div>

      <div className="quick-stats">

        <div className="prod-stat units">
          <h5>Units</h5>
          <div className="buttons">
            <p>{product.units}</p>
            <button onClick={handleIncrementUnits}>+</button>
            <button onClick={handleDecrementUnits}>-</button> 
          </div>
          
        </div>
        
       
        <div className="prod-stat value">
          <h5>Total Value</h5><p>${totalValue}</p>
        </div>

      </div>

      <button className="delete" onClick={handleDelete}>Delete</button>
    </div>
  )
}
