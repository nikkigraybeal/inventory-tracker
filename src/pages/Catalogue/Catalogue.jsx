import { useState, useEffect } from 'react'
import { db } from '../../firebase/config';
import { onSnapshot, collection } from 'firebase/firestore'

// compnents
import SearchProducts from '../../components/SearchProducts/SearchProducts'
import CatalogueStats from '../../components/CatalogueStats/CatalogueStats'
import Product from '../../components/Product/Product'

// styles
import './Catalogue.css'

export default function Catalogue() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

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

  return (
     <div>
      {console.log(data)}
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && 
        <div>
          <SearchProducts products={data} />
          <CatalogueStats products={data} />
          {data.map(product => {
            return (
              <div key={product.id}>
                <Product product={product} />
              </div>
            )
          })}
        </div>}
    </div>
  )
}
