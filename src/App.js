import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { onSnapshot, collection } from 'firebase/firestore'
import { db } from './firebase/config';

// components
import Catalogue from './pages/Catalogue/Catalogue'
import AddProduct from './pages/AddProduct/AddProduct'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import SearchImages from './pages/SearchImages/SearchImages'

// styles
import './App.css';

function App() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)
  const [imgData, setImgData] = useState(null)

  useEffect(() => {
    setIsPending(true)
    const colRef = collection(db, 'products')

    const unsub = onSnapshot(colRef, (snapshot) => {
      if (snapshot.empty) {
        setError('no products to load')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id})
          setData(results)
          setIsPending(false)
        })
      }
    },
    (err) => {
      setError(err.message)
      setIsPending(false)
    })

    return () => unsub()

  }, [])

  const handleChooseImage = (e) => {
    setImgData({ imgSrc: e.target.src,
                imgAlt: e.target.alt
               })
  }
  
  return (
    <div className="App">
      <h1>Inventory Tracker</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ 
            <Catalogue data={data} 
                       error={error} 
                       isPending={isPending}/>} 
                       />
          <Route exact path="/addProduct" element={ <AddProduct imgData={imgData}/>} />
          <Route exact path="/:id" element={ 
            <ProductDetails data={data}
                            error={error}
                            isPending={isPending}/>} 
                            />
          <Route exact path="/searchimages" element={ 
            <SearchImages handleChooseImage={handleChooseImage} />} 
                          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;