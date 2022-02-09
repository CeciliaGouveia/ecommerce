import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import "./Header.css"

const Header = () => {
    return (
        <React.Fragment>
            <header>
                <div className='container'>
                    <div className='logo'>
                        Flora
                    </div>
                    
                    <nav>
                        <Link to="/" className='link'>
                            <Button color="primary">Home</Button>
                        </Link>
                        <Link to="/contato" className='link'>
                            <Button color="primary">Contato</Button>
                        </Link>
                        <Cart />
                    </nav>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;
