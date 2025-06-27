import React from "react"
import "./styles.css"
import { DataGrid } from "@mui/x-data-grid"
import Paper from "@mui/material/Paper"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import { userRows } from "../../dummyData.js"
import { Link } from "react-router-dom"

const UserList = () => {
  const [data, setData] = React.useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        )
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 90 },
    { field: "transaction", headerName: "Transaction", width: 90 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]

  const paginationModel = { page: 0, pageSize: 5 }
  return (
    <div className="userList">
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          disableRowSelectionOnClick
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  )
}

export default UserList
