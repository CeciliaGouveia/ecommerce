import React from "react"
import { Container, Wrapper, Title, Form, Input, Button, Link } from "./styles"

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button>login</Button>
          <Link>do not you remenber the password?</Link>
          <Link>create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
