import React from "react";
import { action } from "@storybook/addon-actions";
import Filters from "../components/Filters";

export default {
  title: "Components/Filters",
  component: Filters,
};

const Template = (args) => <Filters {...args} />;

export const Default = Template.bind({});
Default.args = {
  sortBy: "name",
  sortOrder: "asc",
  pageSize: 15,
  onSortByChange: action("Sort By Changed"),
  onSortOrderChange: action("Sort Order Changed"),
  handlePageSizeChange: action("Page Size Changed"),
};
