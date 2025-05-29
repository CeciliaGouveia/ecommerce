import React from "react"
import styled from "@emotion/styled"
import { categories } from "../../data"
import CategoryItem from "../../components/CategoryItem"

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`

const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Container>
  )
}

export default Categories
