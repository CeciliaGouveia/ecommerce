import { axiosPublic } from "../api/axios"
import { loginFailure, loginStart, loginSucces } from "./userRedux"

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const response = await axiosPublic.post("/auth/login", user)
    dispatch(loginSucces(response.data))
  } catch (err) {
    dispatch(loginFailure())
  }
}
