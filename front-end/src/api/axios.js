import Axios from "axios"

const BASE_URL = "http://localhost:5000/api"

const TOKEN_USER =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NDk3OTY0Nzg0ZTExMGQ2N2RmOWM4OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc0OTgzNDY3NiwiZXhwIjoxNzUwMDkzODc2fQ.Gswr4A4goKW_TCzLUY_pztRmhk6KX4R2RSkc06JQW90"

export const axiosPublic = Axios.create({
  baseURL: BASE_URL,
})

export const axiosPrivate = Axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN_USER}` },
})
