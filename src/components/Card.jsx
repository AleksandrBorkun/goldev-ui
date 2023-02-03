import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { BronzeIcon, FireIcon, MedalIcon, XPIcon } from "./Icons";
import { H3 } from "./Typography";

const IconTypes = {
  XP: XPIcon,
  FIRE: FireIcon,
  BRONZE: BronzeIcon,
  TOP: MedalIcon,
};

const Description = styled.span`
  color: rgba(1, 1, 1, 0.4);
  font-size: 15px;
  @media (min-width: 768px) {
    font-size: 17px;
  }
`;

const TextHolder = styled.div`
  margin-left: 14px;
`;

const CardHolder = styled.div`
  display: flex;
  align-items: center;
  border: 3px solid rgba(1, 1, 1, 0.1);
  border-radius: 20px;
  padding: 10px 15px;
  @media (min-width: 768px) {
    padding: 24px;
  }
`;

const ImageHolder = styled.div`
  width: 32px;
  height: 32px;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const Card = ({ title, description, iconType = "XP" }) => {
  const SelectedIcon = IconTypes[iconType.toLocaleUpperCase()] || XPIcon;

  return (
    <CardHolder>
      <ImageHolder>
        <SelectedIcon width={"100%"} height={"100%"} />
      </ImageHolder>
      <TextHolder>
        <H3>{title}</H3>
        <Description>{description}</Description>
      </TextHolder>
    </CardHolder>
  );
};

Card.propTypes = {
  /**
   * This is a card Title
   */
  title: PropTypes.string,
  /**
   * This is a card Description
   */
  description: PropTypes.string,
  /**
   * Based on type you'll see diferent icon. Avalieable type are:
   */
  iconType: PropTypes.oneOf(Object.keys(IconTypes)),
};

Card.defaultProps = {
  title: "",
  description: "",
  iconType: "XP",
};
