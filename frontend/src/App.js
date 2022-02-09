import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Routes from './routes';
import { Container } from '@material-ui/core/';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css";

const App = () => {
  
  const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'))
  
  if(localCart !== null) {
    store.dispatch({type: 'CHANGE_CART', localCart})
  }
  
  return(
    <body>
    <Provider store={store}>
      {/* <Container maxWidth="xl"> */}
        <Router>
          <Header />
          <Routes />
          <Footer />
        </Router>
      {/* </Container>  */}
    </Provider>
    </body>
  )
}

export default App;
