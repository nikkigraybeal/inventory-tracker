import { Link } from 'react-router-dom'

// styles
import './Product.css'

export default function Product({ product }) {
const price = parseFloat(product.price).toFixed(2)
const units = parseFloat(product.units)
const totalValue = (price * units).toFixed(2)

  //const roundPrice = (product.price).toFixed(2)
  //const roundTotalVal = (product.price*product.units).toFixed(2)
  return (
    <div className="product">
      <div className="img-div">
        <img src={product.imgSrc} alt={product.imgAlt} />
      </div>

      <div>
        <div>
        <Link to={`/${product.id}`}><h4>{product.name}</h4></Link>
        </div>
        <div>
          <h5>Units</h5><span>{units}</span>
          <button>+</button>
          <button>-</button>
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
          <h5>Retail Price</h5><span>${price}</span>
        </div>
      </div>
      <button>Delete</button>
    </div>
  )
}
