import styled from "@emotion/styled"
import { mobile } from "../../responsive"

export const Container = styled.div``

export const Title = styled.h1`
  margin: 20px;
  ${mobile({ margin: "0px 0px 15px 20px", fontSize: "1.5rem" })}
`

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", gap: "15px" })}
`

export const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px", fontSize: "1.0rem" })}
`

export const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ fontSize: "0.9rem", margin: "5px 0" })}
`

export const Option = styled.option``
