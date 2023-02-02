import styled from "styled-components";
import { CrownIcon, LockedIcon } from "./Icons";
import { H3 } from "./Typography";

const ModuleHolder = styled.div`
  background: rgba(196, 196, 196, 0.4);
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 227px;
  width: 180px;
  padding: 20px 15px;
  ${({ isHorizontal }) =>
    isHorizontal &&
    `

    justify-content: end;
    margin-top: 50px;
    width: 211px;
    height: 128px;
    position: relative;
`}
`;

const ModuleImage = styled.img`
  width: 125px;
  height: 100px;
  margin: 15px auto;
  ${({ isHorizontal }) =>
    isHorizontal &&
    ` 
    margin: 0;
    position: absolute;
    top: -50px;
`}
`;

const ProgressHolder = styled.div`
  display: flex;
  align-items: end;
  width: 100%;
  rgba(0, 0, 0, 0.5);
`;

const ProgressBar = styled.span`
  ${({ progress, withText }) => `

height: 14px;
width: 100%;
display: inline-block;
border-radius: 20px;
position: relative;
background: rgb(196, 196, 196);
margin-right: ${withText ? 5 : 0}px;
&::before {
  position: absolute;
  content: '';
  height: 14px;
  left: 0;
  width: ${100 * progress}%;
  background-color: black;
  border-radius: 20px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
`}
`;

const StyledCrownIcon = styled(CrownIcon)`
  z-index: 5;
  fill: red;
`;

export const ModuleBlock = ({
  isOpen,
  title,
  progress,
  src,
  progressTxt,
  isHorizontal,
}) => {
  return (
    <ModuleHolder isHorizontal={isHorizontal}>
      {isOpen ? (
        <>
          <H3>{title}</H3>
          <ModuleImage
            src={src}
            alt={`${title} icon`}
            isHorizontal={isHorizontal}
          />
          <ProgressHolder>
            <StyledCrownIcon />
            <ProgressBar progress={progress} withText={progressTxt} />
            {progressTxt}
          </ProgressHolder>
        </>
      ) : (
        <LockedIcon width="47px" height="59px" zIndex={2} />
      )}
    </ModuleHolder>
  );
};
