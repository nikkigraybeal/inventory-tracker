import { Link, useLocation } from 'react-router-dom'

// styles
import './Nav.css'

export default function Nav({ handleResetImage }) {
  const location = useLocation()

  return (
    <div className="nav-div">
      <div className="nav-items">
        <h1>Inventory Tracker</h1>
        {location.pathname !== '/' ? 
        <Link to="/"><button onClick={handleResetImage}>Home</  button></Link> :
        <Link to="/addproduct"><button>Add Product</button></Link>
      } 
      </div>
      
    </div>
  )
}
