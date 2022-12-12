// styles
import './Product.css'

export default function Product() {
  return (
    <div className="product">
      <div className="img-div">
        <img src="mock" alt="mock" />
      </div>

      <div>
        <div>
          <h4>Product Name (link to details)</h4>
        </div>
        <div>
          <h5>Units</h5><span># of units</span>
          <button>+</button>
          <button>-</button>
        </div>
        <div>
          <h5>Total Value</h5><span>$ price * units</span>
        </div>
      </div>

      <div>
        <div>
          <h5>Purchase Date</h5><span>date</span>
        </div>
        <div>
          <h5>Last Update</h5><span>date</span>
        </div>
        <div>
          <h5>Retail Price</h5><span>$ price</span>
        </div>
      </div>
      <button>Delete</button>
    </div>
  )
}
