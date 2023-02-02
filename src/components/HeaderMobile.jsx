import styled from "styled-components";

const Header = styled.div`
  ${({ bgColor }) => `
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${bgColor || "rgba(229, 229, 229, 0.8)"};
  height: 71px;
  `}
`;

export const HeaderMobile = ({ children, bgColor }) => {
  return <Header bgColor={bgColor}>{children}</Header>;
};
