import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Catalogue from './pages/Catalogue/Catalogue'
import AddProduct from './pages/AddProduct/AddProduct'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import SearchImages from './pages/SearchImages/SearchImages'

// styles
import './App.css';

function App() {
  
  return (
    <div className="App">
      <h1>Inventory Tracker</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Catalogue />} />
          <Route exact path="/addProduct" element={ <AddProduct />} />
          <Route exact path="/:id" element={ <ProductDetails />} />
          <Route exact path="/searchimages" element={ <SearchImages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;