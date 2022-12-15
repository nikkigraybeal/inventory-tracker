import { useState } from 'react'
import { Link } from 'react-router-dom'

// styles
import './SearchProducts.css'

export default function SearchProducts({ products }) {
  const [searchInput, setSearchInput] = useState("")
  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchInput.toLowerCase()))

  return (
    <div className="search-products card">
      <input type="text" 
             placeholder="Search Products"
             value={searchInput}
             onChange={(e) => setSearchInput(e.target.value)} />
             <p>Enter product name to start your search.</p>
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
