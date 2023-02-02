import { Test } from "../components/Test";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Template",
  component: Test,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // args:{

  // }
};

const Template = (args) => <Test {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: "Hello Me",
};

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  title: "Hello World",
};
