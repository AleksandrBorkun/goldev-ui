import styled from "styled-components";

import { FooterMobile } from "../components/FooterMobile";

const DummyBG = styled.div`
  height: 150vh;
  background-color: rgba(1, 1, 1, 0.05);
  position: relative;
  padding: 0 25px;
`;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/FooterMobile",
  component: FooterMobile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // args:{

  // }
};

const Template = (args) => (
  <>
    <DummyBG></DummyBG>
    <FooterMobile {...args} />
  </>
);

export const Default = Template.bind({});
