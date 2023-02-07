import { ModuleBlock } from "../src/components/ModuleBlock";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ModuleBlock",
  component: ModuleBlock,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // args:{

  // }
};

const Template = (args) => <ModuleBlock {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  isOpen: true,
  title: "HTML",
  progress: 1,
  src: "https://images.ctfassets.net/gmfhtos0wyy5/5CcMIMcJGemngT3L6qfrXW/d69e962b2573151baf13f0ecc9837103/HTML5_Section_Btn.png",
};

export const LockedModule = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LockedModule.args = {
  isOpen: false,
  title: "HTML",
  progress: 0.5,
  src: "https://images.ctfassets.net/gmfhtos0wyy5/5CcMIMcJGemngT3L6qfrXW/d69e962b2573151baf13f0ecc9837103/HTML5_Section_Btn.png",
};

export const HorizontalModule = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HorizontalModule.args = {
  isOpen: true,
  isHorizontal: true,
  title: "HTML",
  progress: 1,
  progressTxt: "20/20",
  src: "https://images.ctfassets.net/gmfhtos0wyy5/5CcMIMcJGemngT3L6qfrXW/d69e962b2573151baf13f0ecc9837103/HTML5_Section_Btn.png",
};
