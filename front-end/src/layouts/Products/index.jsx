import React from "react"
import styled from "@emotion/styled"
import Product from "../../components/Product"
import { axiosPublic } from "../../api/axios"

const Container = styled.div`
  padding: 20px;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = React.useState([])
  const [filteredProducts, setFilteredProducts] = React.useState([])

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        // no endereço passado no get, passamos exatamente aquele da API
        const res = await axiosPublic.get(
          cat ? `/products?category=${cat}` : `/products/`
        )
        setProducts(res.data)
      } catch (err) {
        alert("Erro ao buscar dados na API", err)
      }
    }
    getProducts()
  }, [cat])

  React.useEffect(() => {
    products &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => {
            return item[key].includes(value)
          })
        )
      )
  }, [products, filters])

  React.useEffect(() => {
    if (sort === "newest") {
      // Pedindo para que os produtos sejam organizados por ordem de publicação no site
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      )
    } else if (sort === "asc") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price))
    } else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price))
    }
  }, [sort])

  return (
    <Container>
      {products
        ? filteredProducts.map((product) => (
            <Product product={product} key={product._id} />
          ))
        : products
            .slice(0, 7)
            .map((product) => <Product product={product} key={product._id} />)}
    </Container>
  )
}

export default Products
