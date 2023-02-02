import styled from "styled-components";

export const H3 = styled.h3`
  ${({ color }) => `
    color: ${color || "black"};
    margin: 0;
    font-size: 20px;
    line-height: 32px;
    font-weight: 400;
    @media (min-width: 768px) {
    font-size: 28px;
    }
`}
  ${({ alignCenter }) =>
    alignCenter &&
    `
    display: flex;
    align-items: center;
`}
`;
