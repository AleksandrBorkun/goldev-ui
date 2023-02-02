import styled from "styled-components";
import { LockedIcon } from "./Icons";
import { H3 } from "./Typography";

import PropTypes from "prop-types";

const Holder = styled.div`
  ${({ isWrap }) => `
    flex-basis: ${isWrap ? "100%" : "50%"};
    text-align: center;
    `}
`;

const OuterCircle = styled.div`
  border: 10px solid #c4c4c4;
  border-radius: 50%;
  display: inline-block;
  padding: 5px;
  margin: 10px 0;
  @media (min-width: 768px) {
    margin: 20px 0;
  }
`;

const Circle = styled.a`
  ${({ bgColor }) => `
    display: grid;
    place-content: center;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background-color: ${bgColor ? bgColor : "grey"};
`}
  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const CircleConteiner = ({ isWrap, bgColor, href, src, alt, title }) => (
  <Holder isWrap={isWrap}>
    <OuterCircle>
      <Circle href={href} bgColor={bgColor}>
        {src ? <Image alt={alt} src={src} /> : <LockedIcon />}
      </Circle>
    </OuterCircle>
    <H3>{title}</H3>
  </Holder>
);

CircleConteiner.propTypes = {
  /**
   * Set this true if you want to see single item in the row
   */
  isWrap: PropTypes.bool,

  /**
   * Set background color of inner circle
   */
  bgColor: PropTypes.string,
  /**
   * Href param for the link
   */
  href: PropTypes.string,

  /**
   * Path to the image
   */
  src: PropTypes.string,
  /**
   * Alt for the image
   */
  alt: PropTypes.string,
  /**
   * Title underneath the circle
   */
  title: PropTypes.string,
};

CircleConteiner.defaultProps = {
  isWrap: false,
  bgColor: "grey",
  href: "#same",
  src: undefined,
  alt: "Locked Image",
  title: "",
};
