import styled from "@emotion/styled"
import { mobile } from "../../responsive"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`

export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`

export const Button = styled.button`
  text-transform: uppercase;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`
