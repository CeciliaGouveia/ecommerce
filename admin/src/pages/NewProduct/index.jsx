import React from "react"
import "./styles.css"
import PublishIcon from "@mui/icons-material/Publish"

const NewProduct = () => {
  return (
    <div className="newProduct">
      <div className="productTitleContainer">
        <h1 className="productTitle">New Product</h1>
      </div>
      <div className="productContainer">
        <form className="productForm">
          <label for="file">Image</label>
          <input type="file" id="file" />
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Apple Airpods" />
          <label htmlFor="">Price</label>
          <input type="number" placeholder="$" />
          <label htmlFor="inStock">Stock</label>
          <input type="number" placeholder="123" />
          <label htmlFor="active">Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <button className="productButton">Create</button>
        </form>
      </div>
    </div>
  )
}

export default NewProduct
