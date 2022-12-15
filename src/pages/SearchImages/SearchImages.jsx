import { Link } from 'react-router-dom'

// styles
import './SearchImages.css'

import { useState } from 'react'

export default function SearchImages({ handleChooseImage }) {
  const [images, setImages] = useState(null)
  const [searchInput, setSearchInput] = useState("")
  
  const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY

  function makeRequestToUnsplash(requestUrl){
    fetch(requestUrl)
      .then( res => res.json())
      .then((data) => {
        setImages(data.results)
      });
  };

  const normalizeInput = (input) => {
    return input.split(" ").join("-")
  }
  
  const handleSearch = () => {
    const input = normalizeInput(searchInput)
    const request = `https://api.unsplash.com/search/photos?page=1&query=${input}&client_id=${API_KEY}`;
  
    makeRequestToUnsplash(request)
  }
  
  return (
    <div className="search-images card">
      <h1>Product Image Search</h1>
      <p>Enter search terms to find product images then cick on the image you wish to use.</p>
      
      <div className="search-div">
        <input type="text" 
               onChange={(e) => setSearchInput(e.target.value)}
               placeholder="search" />
        <button onClick={handleSearch}>find images</button>
      </div>
      
      <div id="img-box">
        {images && images.map(image => {
          return (
            <div className="img-div" 
                  key={image.id}>
              <Link to='/addproduct'><img className="image" 
                  src={image.urls.regular} 
                  alt={image.alt_description}
                  onClick={handleChooseImage}
                  />
              </Link>
            </div>
          )
       })}
      </div>
    </div>
  )
}
