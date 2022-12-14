import { useState } from 'react'
import { Link } from 'react-router-dom'

// styles
import './SearchProducts.css'

export default function SearchProducts({ products }) {
  const [searchInput, setSearchInput] = useState("")

  //filter product names 
  const filteredProducts = products.filter(p => p.name.includes(searchInput))
  //map list of filtered products with product name as link to details
  return (
    <div className="search-products">
      <input type="text" 
             placeholder="Search Products"
             value={searchInput}
             onChange={(e) => setSearchInput(e.target.value)} />
      <ul>
        {searchInput !== "" && filteredProducts.map(p => {
          return (
            
              <li key={p.id}><Link to={`/${p.id}`}>{p.name}</Link></li>
           
          )
        })}
      </ul>
    </div>
  )
}
