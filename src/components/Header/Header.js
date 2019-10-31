import React, { useState } from "react";
import styled from "styled-components";
import Icon from "react-icons-kit";
import { u1F3EE } from "react-icons-kit/noto_emoji_regular/u1F3EE";
import { bars } from "react-icons-kit/fa/bars";

import {
  HeaderContainer,
  NavBarContainer,
  HamburgerContainer,
  LogoContainer,
  SideBarContainer,
  Link
} from "./Header.scmp";

function Hamburger({ clickHandler }) {
  return (
    <HamburgerContainer onClick={clickHandler}>
      <Icon size={24} style={{ color: "#333232" }} icon={bars}></Icon>
    </HamburgerContainer>
  );
}

function Logo() {
  return (
    <Link to="/">
      <LogoContainer>
        <Icon size={30} icon={u1F3EE}></Icon>
        <div className="ngoName">SANO</div>
      </LogoContainer>
    </Link>
  );
}

function NavBar({ setShowSidebar }) {
  return (
    <NavBarContainer>
      <div className="surround">
        <Link to="articles">Articles</Link>
        <Link to="about-us">About Us</Link>
        <Link to="gallery">Gallery</Link>
        <Link to="contact-us">Contact Us</Link>
        <Link marginright={50} to="projects">Projects</Link>
      </div>

      <Link border to="donate">
        Donate
      </Link>
      <Link border to="volunteer">
        Get Involved
      </Link>

      <Hamburger clickHandler={() => setShowSidebar(true)} />
    </NavBarContainer>
  );
}

function SideBar({ visible, setShowSidebar }) {
  const closeSidebar = () => setShowSidebar(false);
  return visible ? (
    <SideBarContainer>
      <div>
        <div onClick={closeSidebar} className="closeButton">
          +
        </div>
      </div>
      <div className="linksContainer">
        <Link onClick={closeSidebar} to="/">
          Home
        </Link>
        <Link onClick={closeSidebar} to="donate">
          Donate
        </Link>
        <Link onClick={closeSidebar} to="volunteer">
          Volunteer
        </Link>
        <Link onClick={closeSidebar} to="articles">
          Articles
        </Link>
        <Link onClick={closeSidebar} to="about-us">
          About Us
        </Link>
        <Link onClick={closeSidebar} to="gallery">
          Gallery
        </Link>
        <Link onClick={closeSidebar} to="contact-us">
          Contact Us
        </Link>
        <Link onClick={closeSidebar} to="projects">
          Projects
        </Link>
        
      </div>
    </SideBarContainer>
  ) : null;
}

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <HeaderContainer>
      <Logo />
      <NavBar setShowSidebar={setShowSidebar} />
      <SideBar visible={showSidebar} setShowSidebar={setShowSidebar} />
    </HeaderContainer>
  );
};

export default Header;
