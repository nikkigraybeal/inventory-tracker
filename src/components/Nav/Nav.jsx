import { Link, useLocation } from 'react-router-dom'

// styles
import './Nav.css'

export default function Nav() {
  const location = useLocation()

  return (
    <div className="nav-div">
      <h1>Inventory Tracker</h1>
      {location.pathname !== '/' ? 
      <Link to="/"><button>Home</button></Link> :
      <Link to="/addproduct"><button>Add Product</button></Link>
      } 
    </div>
  )
}
