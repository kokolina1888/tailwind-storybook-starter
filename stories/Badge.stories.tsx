import React from "react";
import { Meta, Story } from "@storybook/react";
import StoryLayout from "./StoryLayout";
import { Figma } from "../src/data";
import { images } from "../src/data/images";
import { FiArrowDownRight, FiStar } from "react-icons/fi";
import Badge from "../src/Badge";
import BadgeProps from "../src/Badge";
const meta: Meta = {
  title: "Badge",
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.Badge,
    },
  },
};
export default meta;

interface Props extends BadgeProps {
  darkMode: boolean;
}
const StoryBadge: Story<Props> = (args) => (
  <StoryLayout>
    <Badge {...args} LeadingIcon={<FiStar />}>
      Label
    </Badge>
    <Badge
      {...args}
      LeadingIcon={<img src={images.NL} alt="nl" className="w-4 h-4" />}
    >
      Label
    </Badge>
    <Badge {...args} TrailingIcon={<FiArrowDownRight />}>
      Label
    </Badge>
  </StoryLayout>
);

export const Default = StoryBadge.bind({});

Default.args = {
  darkMode: false,
  variant: "primary",
  size: "md",
};

Default.parameters = {
  controls: { exclude: ["LeadingIcon", "TrailingIcon", "className"] },
};
