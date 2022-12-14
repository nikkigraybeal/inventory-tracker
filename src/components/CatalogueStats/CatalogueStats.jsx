// styles
import './CatalogueStats.css'

export default function CatalogueStats({ products }) {

  if (products) {
   var units = (products.map(p => p.units)).reduce((a,b) => a + b, 0)
   var totalValue = (products.map(p => p.price * p.units)).reduce((a,b) => a + b, 0)
  }
 
  return (
    <div className="catalogue-stats card">
      {products && 
      <div>
        <h2>Inventory Summary</h2>
        <div className="stats">
          <div className="stat">
            <p className="stat-label">Products: </p>
            <p className="stat-value">{products.length}</p>
          </div>
          <div className="stat">
            <p className="stat-label">Total Qty:</p>
            <p className="stat-value">{units}</p>
          </div>
          <div className="stat">
            <p className="stat-label">Total Value:</p>
            <p className="stat-value">${totalValue.toFixed(2)}</p>
          </div>
        </div>
        
      </div>
      }
    </div>
  )
}
