import React, { useState, useContext } from "react";
import styled from "styled-components";
import Icon from "react-icons-kit";
import { u1F3EE } from "react-icons-kit/noto_emoji_regular/u1F3EE";
import { bars } from "react-icons-kit/fa/bars";
import content from "../../utils/content";
import logo from "./logo.png";

import {
  HeaderContainer,
  NavBarContainer,
  HamburgerContainer,
  LogoContainer,
  SideBarContainer,
  Link
} from "./Header.scmp";
import SanoButton from "../SanoButton/SanoButton";
import { LanguageContext } from "../../utils/LanguageContext";

function Hamburger({ clickHandler }) {
  return (
    <HamburgerContainer onClick={clickHandler}>
      <Icon size={24} style={{ color: "#333232" }} icon={bars}></Icon>
    </HamburgerContainer>
  );
}

const logoImage =
  "https://scontent.fskp2-1.fna.fbcdn.net/v/t1.0-9/29695158_1505439182899081_2428008730019178701_n.jpg?_nc_cat=100&_nc_oc=AQkFXN3Kj9wME90bH9KVi40BWiCuIfxY2gEsao8pmuJMLDr8Xbo4Ji16do9-BxZtyVk&_nc_ht=scontent.fskp2-1.fna&oh=5757160b0e6b5b9d0ab903137f290727&oe=5E18FB72";

function Logo({ use, content }) {
  const { icon, logoImage, buttonText } = content;
  return (
    <Link to="/">
      <LogoContainer>
        {use === "icon" && <Icon size={30} icon={icon}></Icon>}
        {use === "image" && <img src={logo} alt="logo" />}
        <div className="ngoName">{buttonText}</div>
      </LogoContainer>
    </Link>
  );
}

function LanguageSelect({ color }) {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      <span style={{ color }}>Lang: </span>
      <SanoButton
        active={language === "eng"}
        onClick={() => setLanguage("eng")}
        variant="language"
      >
        eng
      </SanoButton>
      <SanoButton
        active={language === "mk"}
        onClick={() => setLanguage("mk")}
        variant="language"
      >
        mk
      </SanoButton>
    </div>
  );
}

function NavBar({ setShowSidebar, content }) {
  const { menuLinks, engageButtons } = content;
  return (
    <NavBarContainer>
      <div className="surround" style={{ marginRight: 50 }}>
        {menuLinks.map(link => {
          return <Link to={link.path}>{link.name}</Link>;
        })}
      </div>
      <div>
        {engageButtons.map(eB => {
          return (
            <Link border to={eB.path}>
              {eB.name}
            </Link>
          );
        })}
      </div>
      <div className="surround">
        <LanguageSelect />
      </div>

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
        <LanguageSelect color={"black"} />
      </div>
    </SideBarContainer>
  ) : null;
}

const Header = () => {
  const { language } = useContext(LanguageContext);

  const headerContent = content[language].header;
  const { logo: logoContent, navbar: navbarContent } = headerContent;

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <HeaderContainer>
      <Logo use="image" content={logoContent} />
      <NavBar setShowSidebar={setShowSidebar} content={navbarContent} />
      <SideBar visible={showSidebar} setShowSidebar={setShowSidebar} />
    </HeaderContainer>
  );
};

export default Header;
