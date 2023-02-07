import { BasicInfo } from "../src/components/BasicInfo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/BasicInfo",
  component: BasicInfo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // args:{

  // }
};

const Template = (args) => <BasicInfo {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  name: "OB Web Dev",
  nickname: "obweb",
  date: "Joined January 2023",
  src: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
};
