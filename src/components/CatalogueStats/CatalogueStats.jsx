// styles
import './CatalogueStats.css'

export default function CatalogueStats({ products }) {

  if (products) {
   var units = (products.map(p => p.units)).reduce((a,b) => a + b, 0)
   var totalValue = (products.map(p => p.price * p.units)).reduce((a,b) => a + b, 0)
  }
 
  return (
    <div className="catalogue-stats">
      {products && 
      <div>
        <p>Products: {products.length}</p>
        <p>Total Quantity: {units}</p>
        <p>Total Value: $ {totalValue.toFixed(2)}</p>
      </div>
      }
    </div>
  )
}
