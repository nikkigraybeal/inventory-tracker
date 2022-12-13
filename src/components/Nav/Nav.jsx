import { Link, useLocation } from 'react-router-dom'

// styles
import './Nav.css'

export default function Nav() {
  const location = useLocation()
  console.log(location)

  return (
    <div>
      <h2>Inventory Tracker</h2>
      {location.pathname !== '/' ? 
      <Link to="/">Home</Link> :
      <Link to="/addproduct">Add Product</Link>
      } 
    </div>
  )
}
