import { mobile } from "../../responsive"
import styled from "@emotion/styled"

export const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
`

export const Title = styled.h2`
  font-size: 70px;
  ${mobile({ fontSize: "1.5rem" })}
`

export const Description = styled.div`
  font-size: 24px;
  font-weight: 300;

  ${mobile({ fontSize: "0.9rem", margin: "0px 10px", textAlign: "center" })}
`

export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`

export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`

export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`
