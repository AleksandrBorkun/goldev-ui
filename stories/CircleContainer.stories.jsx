import { CircleConteiner } from "../src/components/CircleContainer";
import { MultiLineFlex } from "../src/components/layout/MultiLineFlex";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/CircleContainer",
  component: CircleConteiner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // args:{

  // }
};

const Template = (args) => <CircleConteiner title="Hello Me" />;

export const SingleCircle = Template.bind({});

const FlexTemplate = (args) => (
  <MultiLineFlex>
    <CircleConteiner
      isWrap={true}
      title="Title 1"
      src={
        "https://images.ctfassets.net/gmfhtos0wyy5/7J1B6RNKOsM88neyBMDhZ3/1ab5e03a9a4d9f47d3dc283d20632635/3327770_448145-PEXK2V-252-ai.png"
      }
    />
    <CircleConteiner title="Title 2" bgColor={"#FF9869"} />
    <CircleConteiner
      title="Title 3"
      bgColor={"#FF9869"}
      src={
        "https://images.ctfassets.net/gmfhtos0wyy5/7J1B6RNKOsM88neyBMDhZ3/1ab5e03a9a4d9f47d3dc283d20632635/3327770_448145-PEXK2V-252-ai.png"
      }
    />
    <CircleConteiner isWrap title="Title 4" />
    <CircleConteiner title="Title 5" bgColor={"yellow"} />
    <CircleConteiner title="Title 6" bgColor={"blue"} />
  </MultiLineFlex>
);

export const CircleConteinerInFlex = FlexTemplate.bind({});
