import { Meta, StoryFn, StoryObj } from "@storybook/react";

import TestButton from "../components/button";

const meta: Meta<typeof TestButton> = {
  title: "Components/Base/Button",
  component: TestButton
};

export default meta;

type ButtonStoryFn = StoryFn<typeof TestButton>;
type ButtonStoryObj = StoryObj<typeof TestButton>;

const Template: ButtonStoryFn = (args) => {
  return <TestButton {...args} />;
};

export const Primary: ButtonStoryObj = {
  args: {
    icon: "None",
    label: "Hello"
  },
  render: Template
};
