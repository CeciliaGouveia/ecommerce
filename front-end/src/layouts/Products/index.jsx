import styled from "@emotion/styled"
import { popularProducts } from "../../data"
import Product from "../../components/Product"

const Container = styled.div`
  padding: 20px;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  )
}

export default Products
