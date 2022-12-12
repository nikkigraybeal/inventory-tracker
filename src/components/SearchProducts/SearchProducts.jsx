// styles
import './SearchProducts.css'

export default function SearchProducts() {
  return (
    <div className="search-products">
      <input type="text" placeholder="Search Products" />
      <ul>
        <li>search results mapped here</li>
      </ul>
    </div>
  )
}
