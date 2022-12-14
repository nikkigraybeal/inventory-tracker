// compnents
import SearchProducts from '../../components/SearchProducts/SearchProducts'
import CatalogueStats from '../../components/CatalogueStats/CatalogueStats'
import Product from '../../components/Product/Product'

// styles
import './Catalogue.css'

export default function Catalogue({ data, error, isPending }) {
  

  return (
     <div>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {!isPending && !data &&
      <p className="no-products">You have no products to display. Add Products to get started!</p>
      }
      {data && 
        <div>
          <SearchProducts products={data} />
          <CatalogueStats products={data} />
          <h2>Your Products</h2>
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
