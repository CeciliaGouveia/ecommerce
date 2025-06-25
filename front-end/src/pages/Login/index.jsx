import React from "react"
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link,
  Error,
} from "./styles"
import { login } from "../../app/apiCalls"
import { useDispatch, useSelector } from "react-redux"

const Login = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const dispatch = useDispatch()
  const { isFetching, error } = useSelector((state) => state.user)

  const handleClick = (event) => {
    event.preventDefault()
    login(dispatch, { email, password })
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            login
          </Button>
          {error && <Error>Something went wrong ...</Error>}
          <Link>do not you remenber the password?</Link>
          <Link>create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
