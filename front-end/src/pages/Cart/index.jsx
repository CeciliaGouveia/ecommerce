import React from "react"
import Navbar from "../../components/Navbar"
import Announcement from "../../components/Announcement"
import Footer from "../../layouts/Footer"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  TopTexts,
  TopText,
  Bottom,
  Info,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  SummaryButton,
} from "./styles.js"
import { useSelector } from "react-redux"
import StripeCheckout from "react-stripe-checkout"
import { axiosPrivate } from "../../api/axios.js"
import { useNavigate } from "react-router-dom"

const STRIPE_PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY

const Cart = () => {
  const navigate = useNavigate()

  const cart = useSelector((state) => state.cart)

  const [stripeToken, setStripeToken] = React.useState(null)

  const onToken = (token) => {
    setStripeToken(token)
  }

  React.useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await axiosPrivate.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        })
        console.log(response)
        navigate("/success", { state: { data: response.data } })
      } catch (err) {
        console.log(err)
      }
    }
    stripeToken && cart.total >= 1 && makeRequest()
  }, [stripeToken, cart.total, navigate])

  console.log("Cart contents:", cart)

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>continue shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Whishlist</TopText>
          </TopTexts>
          <TopButton type="filled">check out now</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <strong>Product:</strong> {product.title}
                    </ProductName>
                    <ProductId>
                      <strong>ID:</strong> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <strong>Size:</strong> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <AddIcon />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <RemoveIcon />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>order summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ - 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>

            <StripeCheckout
              name="CS Clothes"
              image="https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Kurt&hairColor=BlondeGolden&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Red&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={STRIPE_PUBLIC_KEY}
            >
              <SummaryButton>Pay Now</SummaryButton>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
