import styled from "@emotion/styled"
import { mobile } from "../../responsive"

export const Container = styled.div``

export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`

export const ImageContainer = styled.div`
  flex: 1;
`

export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "0px" })}
`

export const Title = styled.h1`
  font-weight: 200;
`

export const Description = styled.p`
  margin: 20px 0;
`

export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

export const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  ${mobile({ width: "100%" })}
`

export const Filter = styled.div`
  display: flex;
  align-items: center;
`

export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`

export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`

export const FilterSizeOption = styled.option``

export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  ${mobile({ width: "100%" })}
`

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

export const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`
