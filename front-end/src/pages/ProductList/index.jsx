import React from "react"
import Navbar from "../../components/Navbar"
import Announcement from "../../components/Announcement"
import Products from "../../layouts/Products"
import Newsletter from "../../layouts/Newsletter"
import Footer from "../../layouts/Footer"
import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
} from "./styles"
import { useLocation } from "react-router-dom"

const ProductList = () => {
  // O useLocation é um hook do React Router que serve para acessar informações sobre a URL atual da aplicação
  // Pegando as cateogiras selecionadas
  const location = useLocation()
  const cat = location.pathname.split("/")[2] || null

  // Filtrando as categorias selecionadas
  const [filters, setFilters] = React.useState({})

  const [sort, setSort] = React.useState("newest")

  const handleFilters = (event) => {
    const value = event.target.value.toLowerCase()
    // utilizamos o "...filter" para pegare, tanto o filtro de cor quanto o filtro de tamanho
    setFilters({ ...filters, [event.target.name]: value })
  }

  return (
    <Container>
      <Announcement />
      <Navbar />

      <Title>{cat?.toUpperCase() || "ALL PRODUCTS"}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          {/* O "name" e o "value" são atributos que você pode adicionar a qualquer elemento de formulário (input, select etc) usados frequentemente para manipular valores dos seus campos. O "name" serve como identificador para o campo, e o "value" controla o valor que será exibido no campo */}
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            <Option>Pink</Option>
            <Option>Orange</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(event) => setSort(event.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      {/* Quero que na lista de produtos, só apareçam aqueles da "categoria" (cat) indicada na URL, obedecendo o "filtro" (filters) de "color" e "size" da página, bem como a "ordem" (sort) definida por nós na página */}
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
