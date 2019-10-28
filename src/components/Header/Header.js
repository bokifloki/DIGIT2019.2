import React from 'react';
import styled from 'styled-components';
import { HeaderContainer} from './Header.scmp'
import { Link } from "@reach/router"



function Logo(){
    return 'hey'
}

function NavBar(){
    return <div> 
        <Link to="events"> Events</Link>
        <Link to="donations">Donations</Link>
        <Link to="/">Homepage</Link>
    </div>
}

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <NavBar />
        </HeaderContainer>
    );
}

export default Header;