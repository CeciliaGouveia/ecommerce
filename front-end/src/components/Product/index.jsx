import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import { Info, Container, Circle, Image, Icon } from "./styles"
import { Link } from "react-router-dom"

const Product = ({ product }) => {
  return (
    <Container>
      <Circle />
      <Image src={product.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          {/* "_id" nesse contexto se refere ao id do registro no banco de dados */}
          <Link to={`/product/${product._id}`}>
            <SearchOutlinedIcon />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
