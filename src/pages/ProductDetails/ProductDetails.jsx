// styles
import './ProductDetails.css'

export default function ProductDetails() {
  return (
    <div className="product-details">
      <div>
        <h3>Product Name</h3>
      </div>
      <div className="img-div">
        <img src="mock" alt="mock" />
        <div>
          <p>Description</p>
        </div>
      </div>

      <div className="product-stats">
        <div>Quantity: units</div>
        <div>Total Value: $ units * price</div>
        <div>Last Update: update</div>
      </div>

      <div className="product-details">
        <div>
          <h4>Quantity</h4>
          <div>units</div>
        </div>
        <div>
          <h4>Purchase Date</h4>
          <div>date</div>
        </div>
        <div>
          <h4>Price</h4>
          <div>$ price</div>
        </div>
        <div>
          <h4>Total Value</h4>
          <div>$ price * units</div>
        </div>
      </div>
    </div>
  )
}
