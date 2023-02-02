import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const H1 = styled.h1`
  color: grey;
`;

/**
 * Primary UI component for user interaction
 */
export const Test = ({ title, ...props }) => {
  return <H1>{title}</H1>;
};

Test.propTypes = {
  /**
   * This is Just a test Title
   */
  title: PropTypes.string,
};

Test.defaultProps = {
  title: "",
};
