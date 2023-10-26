import type { Meta, StoryObj } from "@storybook/react";
import Button, { SIZES, TYPES } from "./Button";

const meta: Meta = {
  title: "☝️Actions/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    onClick: { action: "clicked" },
    $type: {
      control: "select",
      options: TYPES,
    },
    $size: {
      control: "select",
      options: SIZES,
    },
    $disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Neutral: Story = {
  args: {
    children: "Neutral",
    $type: TYPES.NEUTRAL,
  },
};

export const Primary: Story = {
  args: {
    children: "Primary",
    $type: TYPES.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    $type: TYPES.SECONDARY,
  },
};

export const Accent: Story = {
  args: {
    children: "Accent",
    $type: TYPES.ACCENT,
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    $type: TYPES.GHOST,
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    $type: TYPES.LINK,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    $disabled: true,
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    $size: SIZES.LARGE,
  },
};

export const Normal: Story = {
  args: {
    children: "Normal",
    $size: SIZES.NORMAL,
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    $size: SIZES.SMALL,
  },
};

export const Tiny: Story = {
  args: {
    children: "Tiny",
    $size: SIZES.TINY,
  },
};
