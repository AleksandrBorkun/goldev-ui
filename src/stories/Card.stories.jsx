import { Card } from "../components/Card";
import { TwoByTwoGrid } from "../components/layout/Grid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // args:{

  // }
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: "Bronze",
  description: "Current League",
  iconType: "BRONZE",
};

const GridTemplate = (args) => (
  <TwoByTwoGrid>
    <Card {...args[0]} />
    <Card {...args[1]} />
    <Card {...args[2]} />
    <Card {...args[3]} />
  </TwoByTwoGrid>
);

export const GridWithCards = GridTemplate.bind({});
GridWithCards.args = [
  {
    title: "3",
    description: "Day Streak",
    iconType: "FIRE",
  },
  {
    title: "1432",
    description: "Total XP",
    iconType: "XP",
  },
  {
    title: "Bronze",
    description: "Current League",
    iconType: "BRONZE",
  },
  {
    title: "0",
    description: "Top 3 Finishes",
    iconType: "TOP",
  },
];
