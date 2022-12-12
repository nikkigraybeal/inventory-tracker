// compnents
import SearchProducts from '../../components/SearchProducts/SearchProducts'
import CatalogueStats from '../../components/CatalogueStats/CatalogueStats'
import Product from '../../components/Product/Product'

// styles
import './Catalogue.css'

export default function Catalogue() {
  return (
    <div className="catalogue">
      <SearchProducts />
      <CatalogueStats />
      <Product />
    </div>
  )
}
