import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta = {
  title: "Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};
