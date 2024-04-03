import React from "react";
import Pagination from "../components/Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    currentPage: {
      control: { type: "number" },
    },
    pageSize: {
      control: { type: "number" },
    },
    totalItems: {
      control: { type: "number" },
    },
    onPageChange: { action: "pageChanged" },
    onPageSizeChange: { action: "pageSizeChanged" },
  },
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  pageSize: 10,
  totalItems: 100,
};
