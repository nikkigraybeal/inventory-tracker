// styles
import './AddProduct.css'

export default function AddProduct() {
  return (
    <div className="add-product">
      <form action="" className="add-form">
        <div className="img-div">
          <img src="mock" alt="mock"/>
        </div>
        <input type="text" placeholder="img src" />
        <input type="text" placeholder="alt desc" />

        <label>Product Name: </label>
        <input type="text" placeholder="enter name" />
        <label>Product Description: </label>
        <textarea placeholder='enter description'></textarea>
        <label>Purchase Date:</label>
        <input type="date" />
        <label>Number of Units:</label>
        <input type="number" min="0" placeholder="enter units" />
        <label>Retail Price:</label>
        <input type="text" placeholder='enter price' />
        <button type="submit">Add Product</button>
      </form>
  </div>
    )
}
