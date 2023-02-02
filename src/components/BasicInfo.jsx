import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import { ClockIcon } from "./Icons";

const ClockIconStyled = styled(ClockIcon)`
  margin-right: 5px;
`;

const H2 = styled.h1`
  color: black;
  font-size: 30px;
  margin: 0 0 7px 0;
`;

const NickNameTxt = styled.span`
  font-size: 20px;
  opacity: 0.5;
`;

const JoinedTxt = styled.span`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-top: 15px;
`;

const BasicInfoHolder = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 3px solid rgba(1, 1, 1, 0.1);
  padding: 30px 25px 33px;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

const ImageWrapper = styled.div`
  margin-left: auto;
  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: 80px;
  }
`;

const InfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin-right: auto;
  }
`;

const UserIcon = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 45px;
`;

/**
 * Primary UI component for user interaction
 */
export const BasicInfo = ({ name, nickname, date, src, ...props }) => {
  return (
    <BasicInfoHolder>
      <InfoHolder>
        <H2>{name}</H2>
        <NickNameTxt>{nickname}</NickNameTxt>
        <JoinedTxt>
          <ClockIconStyled />
          {date}
        </JoinedTxt>
      </InfoHolder>
      <ImageWrapper>
        <UserIcon src={src} alt={`Photo of ${nickname}`} />
      </ImageWrapper>
    </BasicInfoHolder>
  );
};

BasicInfo.propTypes = {
  /**
   * This is user name
   */
  name: PropTypes.string,
  /**
   * This is nickname
   */
  nickname: PropTypes.string,
  /**
   * This is date when user joined
   */
  date: PropTypes.string,
  /**
   * This is url to the user avatar photo
   */
  src: PropTypes.string,
};

BasicInfo.defaultProps = {
  name: "",
  nickname: "",
  date: "",
  src: "",
};
