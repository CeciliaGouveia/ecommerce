import { axiosPublic } from "../api/axios"
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const response = await axiosPublic.post("/auth/login", user)
    dispatch(loginSuccess(response.data))
  } catch (err) {
    dispatch(loginFailure(), err)
  }
}
