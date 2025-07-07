import React from "react"
import "./styles.css"
import { DataGrid } from "@mui/x-data-grid"
import Paper from "@mui/material/Paper"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { deleteProduct, getProducts } from "../../app/apiCalls.js"

const ProductList = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products)

  React.useEffect(() => {
    getProducts(dispatch)
  }, [dispatch])

  const handleDelete = (id) => {
    deleteProduct(id, dispatch)
  }

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        )
      },
    },
    { field: "inStock", headerName: "Stock", width: 90 },
    { field: "price", headerName: "Price", width: 90 },
    { field: "size", headerName: "Size", width: 90 },
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        )
      },
    },
  ]

  const paginationModel = { page: 0, pageSize: 5 }

  return (
    <div className="productList">
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={products}
          disableRowSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  )
}

export default ProductList
