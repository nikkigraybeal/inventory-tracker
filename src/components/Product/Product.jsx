import { Link } from 'react-router-dom'
import { db } from '../../firebase/config'
import { deleteDoc, doc } from 'firebase/firestore'

// styles
import './Product.css'

export default function Product({ product }) {
const totalValue = (product.price * product.units).toFixed(2)

const handleDelete = () => {
  const productRef = doc(db, 'products', product.id)
  deleteDoc(productRef)
}

  return (
    <div className="product">
      <div className="img-div">
        <img src={product.imgSrc} alt={product.imgAlt} />
      </div>

      <div>
        <div>
        <Link to={`/${product.id}`}><h4>{product.name}</h4></Link>
        </div>
        <div className="btn-div">
          <h5>Units</h5><span>{product.units}}</span>
          <button className="small-btn">+</button>
          <button className="small-btn">-</button>
        </div>
        <div>
          <h5>Total Value</h5><span>${totalValue}</span>
        </div>
      </div>

      <div>
        <div>
          <h5>Purchase Date</h5><span>{product.purchaseDate}</span>
        </div>
        <div>
          <h5>Last Update</h5><span>{product.lastUpdate}</span>
        </div>
        <div>
          <h5>Retail Price</h5><span>${product.price.toFixed(2)}</span>
        </div>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
