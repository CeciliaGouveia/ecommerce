import React from "react"
import "./styles.css"
import { Link, useLocation } from "react-router-dom"
import Chart from "../../components/Chart"
import PublishIcon from "@mui/icons-material/Publish"
import { useSelector } from "react-redux"
import { axiosPrivate } from "../../api/axios.js"

const Product = () => {
  const location = useLocation()
  const productId = location.pathname.split("/")[2]
  const [pStats, setPStats] = React.useState([])

  const product = useSelector((state) =>
    // dentro da nossa matriz de produtos, vamos tentar encontrar nosso produto utilizando o ID dele
    state.product.products.find((product) => product._id === productId)
  )

  const MONTHS = React.useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  )

  React.useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axiosPrivate.get("/orders/income?pid=" + productId)
        const list = res.data.sort((a, b) => {
          return a._id - b._id
        })
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        )
      } catch (err) {
        console.log(err)
      }
    }
    getStats()
  }, [MONTHS, productId])

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">ID:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Price</span>
              <span className="productInfoValue">${product.price}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">5123</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">In Stock:</span>
              <span className="productInfoValue">
                {product.inStock === true ? "Yes" : "No"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label htmlFor="">Product Name</label>
            <input type="text" placeholder={product.title} />
            <label htmlFor="">Product Description</label>
            <input type="text" placeholder={product.desc} />
            <label htmlFor="">Price</label>
            <input type="number" placeholder={product.price} />
            <label htmlFor="inStock">In Stock</label>
            <select name="inStock" id="inStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.img} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <PublishIcon />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Product
