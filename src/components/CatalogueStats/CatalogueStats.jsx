// styles
import './CatalogueStats.css'

export default function CatalogueStats() {
  return (
    <div className="catalogue-stats">
      <p>Products: # of products</p>
      <p>Total Quantity: total # of units</p>
      <p>Total Value: $ total val of all products</p>
      <button>Add Product</button>
    </div>
  )
}
