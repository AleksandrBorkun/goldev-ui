import { HeaderMobile } from "../src/components/HeaderMobile";
import { FireIcon, MedalIcon } from "../src/components/Icons";
import { H3 } from "../src/components/Typography";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/HeaderMobile",
  component: HeaderMobile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // args:{

  // }
};

const Template = (args) => <HeaderMobile {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: [<h1>Hello OB Web Dev</h1>],
};

export const HeaderWithTwoElems = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HeaderWithTwoElems.args = {
  children: [
    <H3>Main Title</H3>,
    <H3 color="blue" alignCenter>
      <MedalIcon />3
    </H3>,
    <H3 color="orange" alignCenter>
      <FireIcon />3
    </H3>,
  ],
};
