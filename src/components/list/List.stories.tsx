import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItem } from "./list-item";
import { DocumentBlankIcon, TagIcon } from "../../assets/icons";
import { userEvent, within, expect, spyOn } from "storybook/test";

import { List } from "./list";

const defaultListItems = [
  <ListItem
    key='list-item-1'
    title='DN02-H5300-P-XB-7102'
    description='Structural analysis report for foundation bearing capacity CS-2847-HV'
    startIcon={<DocumentBlankIcon />}
  />,
  <ListItem
    key='list-item-2'
    title='DN02-H5300-P-XB-7103'
    description='Overview diagram for system 77-R45 lq c789-yui-123456'
    startIcon={<DocumentBlankIcon />}
  />,
  <ListItem
    key='list-item-3'
    title='DN02-H5300-P-XB-7104'
    description='Electrical schematic for main distribution panel MDP-5600-QX'
    startIcon={<DocumentBlankIcon />}
  />,
  <ListItem
    key='list-item-4'
    title='DN02-H5300-P-XB-7105'
    description='HVAC layout plan with thermal load distribution TLD-3245-NM'
    startIcon={<DocumentBlankIcon />}
  />,
  <ListItem
    key='list-item-5'
    title='DN02-H5300-P-XB-7106'
    description='Reinforced concrete mix design specification RCM-8901-TP'
    startIcon={<DocumentBlankIcon />}
  />,
  <ListItem
    key='list-item-6'
    title='DN02-H5300-P-XB-7107'
    description='Crane load capacity certification for heavy equipment CLC-7234-RW'
    startIcon={<DocumentBlankIcon />}
  />,
  <ListItem
    key='list-item-7'
    title='DN02-H5300-P-XB-7108'
    description='Safety compliance checklist for fall protection systems FPS-6123-KL'
    startIcon={<DocumentBlankIcon />}
  />,
];

// Spy on console.log
const consoleSpy = spyOn(console, "log").mockImplementation(() => {});

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/List",
  component: List,

  args: {
    children: defaultListItems,
    className: "max-w-sm",
    title: "Documents",
    description: "Preview or add documents to board",
  },
  argTypes: {},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: defaultListItems,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const listItems = canvas.getAllByRole("listitem");
    const firstItem = listItems[0];
    const firstItemActionButton = within(firstItem).getByRole("button");
    expect(firstItem).toHaveAttribute("aria-disabled", "false");
    expect(firstItemActionButton).not.toBeDisabled();
    await userEvent.click(firstItemActionButton);
    expect(consoleSpy).not.toHaveBeenCalledWith("🐠end action🐒");
  },
};

export const DisabledItems: Story = {
  args: {
    children: defaultListItems.map((item, index) =>
      index === 0 || index === 2 ? (
        <ListItem key={item.key} {...item.props} disabled='true' />
      ) : (
        item
      ),
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const listItems = canvas.getAllByRole("listitem");
    const firstItem = listItems[0];
    const firstItemActionButton = within(firstItem).getByRole("button");
    expect(firstItem).toHaveAttribute("aria-disabled", "true");
    expect(firstItemActionButton).toBeDisabled();
    await userEvent.click(firstItemActionButton);
    expect(consoleSpy).not.toHaveBeenCalledWith("🐠end action🐒");
  },
};

export const CustomIcons: Story = {
  args: {
    children: defaultListItems.map((item, index) =>
      index === 0 || index === 2 ? (
        <ListItem key={item.key} {...item.props} startIcon={<TagIcon />} />
      ) : (
        item
      ),
    ),
  },
};

export const LongHiddenList: Story = {
  args: {
    maxItemsBeforeCrop: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const listItems = canvas.getAllByRole("listitem");
    expect(listItems).not.toHaveLength(7);
    const expandButton = canvas.queryByRole("button", {
      name: /view all documents/i,
    });
    expect(expandButton).toBeInTheDocument();
  },
};

export const LongUncroppedList: Story = {
  args: {
    showAllNoCropButton: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const listItems = canvas.getAllByRole("listitem");
    expect(listItems).toHaveLength(7);
    const expandButton = canvas.queryByRole("button", {
      name: /view all documents/i,
    });
    expect(expandButton).not.toBeInTheDocument();
  },
};
