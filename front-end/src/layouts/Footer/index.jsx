import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import XIcon from "@mui/icons-material/X"
import PinterestIcon from "@mui/icons-material/Pinterest"
import PlaceIcon from "@mui/icons-material/Place"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import EmailIcon from "@mui/icons-material/Email"
import {
  Container,
  Left,
  Logo,
  Description,
  SocialContainer,
  SocialIcon,
  Center,
  Title,
  List,
  ListItem,
  Right,
  ContactItem,
  Payment,
} from "./styles"

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>c's clothes</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officiis,
          voluptates placeat pariatur libero suscipit saepe iure, non
          reprehenderit fugit aliquid. Obcaecati quo architecto quae numquam
          inventore officia, animi quas!
        </Description>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55acee">
            <XIcon />
          </SocialIcon>
          <SocialIcon color="e60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Whishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <PlaceIcon />
          622 Dixie Path, South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon />
          +1 234 56 78
        </ContactItem>
        <ContactItem>
          <EmailIcon />
          contact@email.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer
