import styled from "@emotion/styled"
import { mobile } from "../../responsive"

export const Container = styled.div``

export const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px 0px" })}
`

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ gap: "50px" })}
`
export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`
export const TopTexts = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  ${mobile({ display: "none" })}
`

export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`

export const Info = styled.div`
  flex: 3;
`

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  /* ${mobile({ flexDirection: "column", alignItems: "center" })} */
`

export const Image = styled.img`
  width: 200px;
`

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const ProductName = styled.span``

export const ProductId = styled.span``

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`

export const ProductSize = styled.span``

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  /* ${mobile({ flexDirection: "row" })} */
`

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProductAmount = styled.span`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`

export const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
  margin-left: -5px;
  ${mobile({ marginBottom: "20px" })}
`

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

export const SummaryTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 200;
`

export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`

export const SummaryItemText = styled.span``

export const SummaryItemPrice = styled.span``

export const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`
