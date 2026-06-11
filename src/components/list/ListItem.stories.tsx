import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { ListItem } from "./list-item";

const meta = {
  title: "Components / ListItem",
  component: ListItem,

  args: {
    title: "An important title",
    description: "There is penty more to do, don't sleep on it",
  },
  argTypes: {},
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Next big thing",
    description: "There is penty more to do, don't sleep on it",
  },
};
