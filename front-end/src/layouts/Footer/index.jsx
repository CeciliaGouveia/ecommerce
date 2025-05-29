import React from "react"
import styled from "@emotion/styled"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import XIcon from "@mui/icons-material/X"
import PinterestIcon from "@mui/icons-material/Pinterest"
import PlaceIcon from "@mui/icons-material/Place"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import EmailIcon from "@mui/icons-material/Email"

const Container = styled.div`
  display: flex;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`
const Logo = styled.h2`
  text-transform: uppercase;
`
const Description = styled.p``

const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`
const Title = styled.h3`
  margin-bottom: 25px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const ContactItem = styled.div`
  display: flex;
  align-items: center;
`

const Payment = styled.img``

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
