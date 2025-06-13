import { Container, Image, Info, Title, Button } from "./styles"
import { Link } from "react-router-dom"

const CategoryItem = ({ category }) => {
  return (
    <Container>
      <Link to={`/products/${category.cat}`}>
        <Image src={category.img} />
        <Info>
          <Title>{category.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem
