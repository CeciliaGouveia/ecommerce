import React from "react"
import { Container, Wrapper, Title, Form, Input, Button, Link } from "./styles"
import { login } from "../../app/apiCalls"
import { useDispatch } from "react-redux"

const Login = () => {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const dispatch = useDispatch()

  const handleClick = (event) => {
    event.preventDefault()
    login(dispatch, { username, password })
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick}>login</Button>
          <Link>do not you remenber the password?</Link>
          <Link>create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
