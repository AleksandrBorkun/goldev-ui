import { useState } from "react";
import styled from "styled-components";
import { FriendsIcon, GoalsIcon, HomeIcon, SettingsIcon } from "./Icons";

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 25px;
  left: 0;
  width: 100%;
`;
const FooterMobileHolder = styled.div`
  height: 71px;
  background: rgba(229, 229, 229, 0.8);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 25px;
`;

const FooterMobileLink = styled.a``;

const HOME = "home";
const GOALS = "goals";
const FRIENDS = "friends";
const CONFIG = "config";

export const FooterMobile = ({ activeColor = "#FF9869" }) => {
  const [activeLink, setActiveType] = useState("");
  return (
    <FooterWrapper>
      <FooterMobileHolder>
        <FooterMobileLink href="#home" onClick={() => setActiveType(HOME)}>
          <HomeIcon bgColor={activeLink === HOME && activeColor} />
        </FooterMobileLink>
        <FooterMobileLink href="#home" onClick={() => setActiveType(GOALS)}>
          <GoalsIcon bgColor={activeLink === GOALS && activeColor} />
        </FooterMobileLink>
        <FooterMobileLink href="#home" onClick={() => setActiveType(FRIENDS)}>
          <FriendsIcon bgColor={activeLink === FRIENDS && activeColor} />
        </FooterMobileLink>
        <FooterMobileLink href="#home" onClick={() => setActiveType(CONFIG)}>
          <SettingsIcon bgColor={activeLink === CONFIG && activeColor} />
        </FooterMobileLink>
      </FooterMobileHolder>
    </FooterWrapper>
  );
};
