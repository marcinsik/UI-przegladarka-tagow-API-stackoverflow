import React from "react";
import TagTable from "../components/TagTable";

export default {
  title: "Components/TagTable",
  component: TagTable,
  argTypes: {
    tags: {
      control: "array",
    },
  },
};

const Template = (args) => <TagTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: [
    { name: "JavaScript", count: 1000 },
    { name: "React", count: 500 },
    { name: "HTML", count: 800 },
  ],
};
