import styled from "@emotion/styled"
import { mobile } from "../../responsive"

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 60vh;
  position: relative;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h2`
  font-size: 26px;
  color: white;

  text-shadow: 0px 1px 2px rgba(128, 123, 123, 0.6);
`

export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`
