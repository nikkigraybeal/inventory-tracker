// styles
import './SearchImages.css'

export default function SearchImages() {

  return (
    <div className="search-images">
      <h1>Product Image Search</h1>
      <p>Enter search terms to find product images then cick on the image you wish to use.</p>
      <div className="search-div">
        <input type="text" placeholder="search" />
        <button >find images</button>
      </div>
      
      <div id = "img-box">
        images mapped here
      </div>
    </div>
  )
}
