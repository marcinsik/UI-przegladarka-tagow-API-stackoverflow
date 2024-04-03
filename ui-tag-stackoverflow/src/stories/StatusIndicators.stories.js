import React from "react";
import StatusIndicators from "../components/StatusIndicators";

export default {
  title: "Components/StatusIndicators",
  component: StatusIndicators,
  argTypes: {
    isLoading: {
      control: "boolean",
    },
    error: {
      control: "object",
    },
  },
};

const Template = (args) => <StatusIndicators {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  error: null,
};

export const Error = Template.bind({});
Error.args = {
  isLoading: false,
  error: null,
};
