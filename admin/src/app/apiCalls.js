import { axiosPrivate, axiosPublic } from "../api/axios"
import { loginStart, loginSuccess, loginFailure } from "./userRedux"
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from "./productRedux"

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const response = await axiosPublic.post("/auth/login", user, {
      withCredentials: true,
    })
    dispatch(loginSuccess(response.data))
  } catch (err) {
    dispatch(loginFailure(), err)
  }
}

export const getProducts = async (dispatch) => {
  dispatch(getProductStart())
  try {
    const response = await axiosPublic.get("/products")
    dispatch(getProductSuccess(response.data))
  } catch (err) {
    dispatch(getProductFailure(), err)
  }
}

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart())
  try {
    const response = await axiosPrivate.delete(`/products/${id}`, {
      withCredentials: true,
    })
    dispatch(deleteProductSuccess(response.data))
  } catch (err) {
    dispatch(deleteProductFailure(), err)
  }
}

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart())
  try {
    const response = await axiosPrivate.update(`/products/${id}`, {
      withCredentials: true,
    })
    dispatch(updateProductSuccess({ id: id, product: product }))
  } catch (err) {
    dispatch(updateProductFailure(), err)
  }
}

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart())
  try {
    const response = await axiosPrivate.post(`/products`, product, {
      withCredentials: true,
    })
    dispatch(addProductSuccess(response.data))
  } catch (err) {
    dispatch(addProductFailure(), err)
  }
}
