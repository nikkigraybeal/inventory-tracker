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
    <div className="product-details card">
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {product &&
        <div>
          <div className="prod-details-name">
            <h3>{product.name}</h3>
          </div>
          <div className="img-div">
            <img src={product.imgSrc} alt={product.imgAlt} />
          </div>

          <div className="product-details-desc">
            <p><b>Description:</b> {product.description}</p>
          </div>
    
          <div className="product-stats">
            <div>Quantity <b>{units}</b></div>
            <div>Total Value <b>$ {totalVal}</b></div>
            <div>Last Update <b>{product.lastUpdate}</b></div>
          </div>
    
          <div className="product-stats">
          <div>Price<b>$ {price}</b></div>
            <div>Purchase Date <b>{product.purchaseDate}</b></div>
          </div>
        </div>}
    </div>
  )
}
