import React from "react";
import { Meta, Story } from "@storybook/react";
import StoryLayout from "./StoryLayout";
import Button from "../src/Button";
import { Figma } from "../src/data";
import { FiArrowRight, FiStar } from "react-icons/fi";

const meta: Meta = {
  title: "Button",
  component: Button,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.Button,
    },
  },
};
export default meta;

interface Props extends ButtonProps {
  darkMode: boolean;
}
const StoryButton: Story<Props> = (args) => (
  <StoryLayout {...args} className="s[ace-y-2">
    <Button {...args}> Button CTA</Button>
    <Button {...args} LeadingIcon={<FiStar />}>
      {" "}
      Button CTA
    </Button>
    <Button {...args} TrailingIcon={<FiArrowRight />}>
      Button CTA
    </Button>
    <Button {...args} IconOnly={<FiArrowRight />} />
  </StoryLayout>
);

export const Default = StoryButton.bind({});

Default.args = {
  darkMode: false,
  size: "md",
  variant: "primary",
  disabled: false,
};

Default.parameters = {
  controls: { exclude: ["LeadingIcon", "TrailingIcon", "IconOnly"] },
};
