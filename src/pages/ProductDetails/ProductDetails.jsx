import { useParams } from 'react-router-dom'

// styles
import './ProductDetails.css'

export default function ProductDetails({ data, error, isPending}) {
  const { id } = useParams()

  if (data) {
    var product = data.find(p => p.id === id)
    var price = parseFloat(product.price).toFixed(2)
    var units = parseInt(product.units)
    var totalVal = (price * units).toFixed(2)
  }
  
  return (
    <div className="product-details">
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {product &&
        <div>
          <div>
            <h3>{product.name}</h3>
          </div>
          <div className="img-div">
            <img src={product.imgSrc} alt={product.imgAlt} />
            <div>
              <p>{product.description}</p>
            </div>
          </div>
    
          <div className="product-stats">
            <div>Quantity: {units}</div>
            <div>Total Value: $ {price}</div>
            <div>Last Update: {product.lastUpdate}</div>
          </div>
    
          <div className="product-details">
            <div>
              <h4>Quantity</h4>
              <div>{units}</div>
            </div>
            <div>
              <h4>Purchase Date</h4>
              <div>{product.purchaseDate}</div>
            </div>
            <div>
              <h4>Price</h4>
              <div>$ {price}</div>
            </div>
            <div>
              <h4>Total Value</h4>
              <div>$ {totalVal}</div>
            </div>
          </div>
        </div>}
    </div>
  )
}
