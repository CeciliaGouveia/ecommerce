import styled from "@emotion/styled"
import { mobile } from "../../responsive"

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${mobile({ flexDirection: "column" })}
`
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`
export const Logo = styled.h2`
  text-transform: uppercase;
  ${mobile({ fontSize: "1.1rem" })}
`
export const Description = styled.p`
  ${mobile({ fontSize: "0.9rem" })}
`

export const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${mobile({ width: "25px", height: "25px", borderRadius: "20%" })}
`

export const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`
export const Title = styled.h3`
  margin-bottom: 25px;
  ${mobile({ fontSize: "1.1rem" })}
`

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  ${mobile({ fontSize: "0.9rem" })}
`

export const Right = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  ${mobile({ fontSize: "0.9rem" })}
`

export const Payment = styled.img`
  width: 50%;
  max-width: 220px;
  ${mobile({ width: "70%" })}
`
