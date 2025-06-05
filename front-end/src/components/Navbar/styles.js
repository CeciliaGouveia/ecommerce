import styled from "@emotion/styled"
import { mobile } from "../../responsive"

export const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "80px",
  })}
`

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  ${mobile({
    padding: "5px 0px",
    gap: "10px",
  })}
`

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}
`

export const SearchContainer = styled.div`
  border: 0.5 solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "10px" })}
`

export const Input = styled.input`
  border: none;
  ${mobile({
    width: "120px",
  })}
`

export const Center = styled.div`
  flex: 1;
  text-align: center;
`

export const Logo = styled.h1`
  font-weight: bold;
  text-transform: uppercase;
  ${mobile({
    fontSize: "1.2rem",
  })}
`

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  ${mobile({
    justifyContent: "center",
    flex: "2",
  })}
`

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ fontSize: "0.9rem", marginLeft: "10px" })}
`
