import React from "react";
import {
    NavbarParent,
    NavbarWrapper,
    LogoContainer,
    BigLinkContainer,
    NavbarLink,
    ButtonWrapper,
    Button
} from "./navbar.styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import searchicon from "../../assets/searchicon.png";




const Navbar = () => {

    return (
        <NavbarParent>
            <NavbarWrapper>
                <LogoContainer><Link to="/"><img src={logo} alt="logo" /></Link>
                </LogoContainer>
                <BigLinkContainer>
                    <NavbarLink><Link to='/' style={{ textDecoration: 'none', color: 'white' }} >Discover</Link></NavbarLink>
                    <NavbarLink> <Link to='/project-details' style={{ textDecoration: 'none', color: 'white' }}>Explore</Link></NavbarLink>
                    <NavbarLink> <Link  style={{ textDecoration: 'none', color: 'white' }}>Contact us</Link></NavbarLink>
                    <NavbarLink><Link to='/sign-in' style={{ textDecoration: 'none', color: 'white' }}>Sign in </Link></NavbarLink>
                <NavbarLink><Link to='/sign-up' style={{ textDecoration: 'none', color: 'white' }}>Sign up </Link></NavbarLink>
                </BigLinkContainer>
                <ButtonWrapper>
                    <img src={searchicon} alt='searchicon' width='13px' height='13px' />

                    <Button>Connet Wallet</Button>



                </ButtonWrapper>




            </NavbarWrapper>
        </NavbarParent >
    )



}

export default Navbar;