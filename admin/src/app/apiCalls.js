import { axiosPublic } from "../api/axios"
import { loginStart, loginSuccess, loginFailure } from "./userRedux"

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
