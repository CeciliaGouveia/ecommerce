import React from "react"
import Navbar from "../../components/Navbar"
import Announcement from "../../components/Announcement"
import Newsletter from "../../layouts/Newsletter"
import Footer from "../../layouts/Footer"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import {
  Container,
  Wrapper,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Description,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from "./styles"
import { useLocation } from "react-router-dom"
import { axiosPublic } from "../../api/axios"

const Product = () => {
  // O useLocation é um hook do React Router que serve para acessar informações sobre a URL atual da aplicação
  // Pegando o ID do produto para carregar as informações dele na tela
  const location = useLocation()
  const id = location.pathname.split("/")[2]

  const [product, setProduct] = React.useState({})
  const [quantity, setQuantity] = React.useState(1)
  const [color, setColor] = React.useState("")
  const [size, setSize] = React.useState("")

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axiosPublic.get("/products/find/" + id)
        setProduct(res.data)
      } catch (err) {
        alert(err)
      }
    }
    getProducts()
  }, [id])

  function handleQuantity(type) {
    type === "dec"
      ? quantity > 1 && setQuantity(quantity - 1)
      : setQuantity(quantity + 1)
  }

  // function handleClick(event) {
  //   // atualizar um cart
  // }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.desc}</Description>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle disable selected>
                Color
              </FilterTitle>
              {product.color &&
                product.color.map((c) => (
                  <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(event) => setSize(event.target.value)}>
                {product.size &&
                  product.size.map((s) => (
                    <FilterSizeOption key={s}>
                      {s.toUpperCase()}
                    </FilterSizeOption>
                  ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <AddIcon onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product
