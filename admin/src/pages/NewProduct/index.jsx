import React from "react"
import "./styles.css"
import PublishIcon from "@mui/icons-material/Publish"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"
import { useDispatch } from "react-redux"
import app from "../../services/firebase.js"
import { addProduct } from "../../app/apiCalls"

const NewProduct = () => {
  const [inputs, setInputs] = React.useState({})
  const [file, setFile] = React.useState(null)
  const [cat, setCat] = React.useState([])
  const [colors, setColors] = React.useState([])
  const [sizes, setSizes] = React.useState([])
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setInputs((prev) => {
      return { ...prev, [event.target.name]: event.target.value }
    })
  }

  const handleSizeChange = (event) => {
    const { value, checked } = event.target

    if (checked) {
      setSizes((prevSizes) => [...prevSizes, value])
    } else {
      setSizes((prevSizes) => prevSizes.filter((size) => size !== value))
    }
  }

  const handleCategories = (event) => {
    const catArray = event.target.value.split(",").map((item) => item.trim())
    setCat(catArray)
  }

  const handleColor = (event) => {
    const colorsArray = event.target.value.split(",").map((item) => item.trim())
    setColors(colorsArray)
  }

  const handleClick = (event) => {
    event.preventDefault()
    const fileName = new Date().getTime() + file.name
    const storage = getStorage(app)
    const storageRef = ref(storage, fileName)

    const uploadTask = uploadBytesResumable(storageRef, file)

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log("Upload is " + progress + "% done")
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused")
            break
          case "running":
            console.log("Upload is running")
            break
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error)
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            ...inputs,
            img: downloadURL,
            categories: cat,
            color: colors,
            size: sizes,
          }
          addProduct(product, dispatch)
        })
      }
    )
  }

  return (
    <div className="newProduct">
      <div className="productTitleContainer">
        <h1 className="productTitle">New Product</h1>
      </div>
      <div className="productContainer">
        <form className="productForm">
          <div className="addProductItem">
            <label htmlFor="file">Image</label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="addProductItem">
            <label htmlFor="">Title</label>
            <input
              name="title"
              type="text"
              placeholder="Apple Airpods"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label htmlFor="">Description</label>
            <input
              name="desc"
              type="text"
              placeholder="Description..."
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label htmlFor="">Price</label>
            <input
              name="price"
              type="number"
              placeholder="$"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label htmlFor="">Categories</label>
            <input
              name="categories"
              type="text"
              placeholder="jeans, skirts"
              onChange={handleCategories}
            />
          </div>
          <div className="addProductItem">
            <label htmlFor="">Color</label>
            <input
              name="color"
              type="text"
              placeholder="black, white"
              onChange={handleColor}
            />
          </div>
          <div className="addProductItem">
            <fieldset>
              <legend>Size</legend>
              <div className="sizeOption">
                <input
                  type="checkbox"
                  id="xs"
                  placeholder="xs"
                  value="xs"
                  onChange={handleSizeChange}
                />
                <label htmlFor="xs">XS</label>
              </div>
              <div className="sizeOption">
                <input
                  type="checkbox"
                  id="s"
                  placeholder="s"
                  value="s"
                  onChange={handleSizeChange}
                />
                <label htmlFor="s">S</label>
              </div>
              <div className="sizeOption">
                <input
                  type="checkbox"
                  id="m"
                  placeholder="m"
                  value="m"
                  onChange={handleSizeChange}
                />
                <label htmlFor="m">M</label>
              </div>
              <div className="sizeOption">
                <input
                  type="checkbox"
                  id="l"
                  placeholder="l"
                  value="l"
                  onChange={handleSizeChange}
                />
                <label htmlFor="l">L</label>
              </div>
              <div className="sizeOption">
                <input
                  type="checkbox"
                  id="xl"
                  placeholder="xl"
                  value="xl"
                  onChange={handleSizeChange}
                />
                <label htmlFor="xl">XL</label>
              </div>
            </fieldset>
          </div>

          <div className="addProductItem">
            <label htmlFor="inStock">Stock</label>
            <select name="inStock" id="inStock" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <button onClick={handleClick} className="productButton">
            Create
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewProduct
