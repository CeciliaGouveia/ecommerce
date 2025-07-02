import Axios from "axios"

const BASE_URL = "http://localhost:5000/api"

export const axiosPublic = Axios.create({
  baseURL: BASE_URL,
})

export const axiosPrivate = Axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})

// const TOKEN_USER = JSON.parse(
//   JSON.parse(localStorage.getItem("persist:root")).currentUser
// ).accessToken
