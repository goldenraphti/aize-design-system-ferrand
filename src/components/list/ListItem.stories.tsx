import type { Meta, StoryObj } from "@storybook/react-vite";
import { DocumentBlankIcon } from "../../assets/icons";

import { ListItem } from "./list-item";

// TODO: always wrap the previewed list item inside a <List> element
const meta = {
  title: "Components / ListItem",
  component: ListItem,

  args: {
    title: "An important title",
    description: "There is penty more to do, don't sleep on it",
    key: "list-item-1",
  },
  argTypes: {
    startIcon: {
      description: "Icon component to display at the start of the list item",
      control: false,
    },
    endAction: {
      description:
        "Callback function triggered when the action button is clicked",
      control: false,
    },
    disabled: {
      control: "boolean",
      description: "Disables the list item",
    },
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Next big thing",
    description: "There is penty more to do, don't sleep on it",
  },
};

export const Icon: Story = {
  args: {
    title: "Make it pretty",
    description: "There is penty more to do, don't sleep on it",
    startIcon: <DocumentBlankIcon />,
  },
};

export const Disabled: Story = {
  args: {
    title: "Make it unactionable",
    description: "There is penty more to do, don't sleep on it",
    disabled: true,
  },
};
