import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Button,
  title: "Components/Button",
  parameters: {
    layout: "centered",
    chromatic: {
      // viewports: [320, 768, 1024], // Test multiple screen sizes
    },
  },


  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "text"],
      description: "Visule style variant",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Button size",
    },
    color: {
      control: "select",
      options: ["blue", "green", "purple"],
      description: "Color theme",
    },
    onClick:{
      action: "clicked!",
    }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
};
export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",

  },
};

export const Text: Story = {
  args: {
    children: "Text",
    variant: "text",
  },
};

export const ColorVariants: Story = {
  render: () => (
    
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary" color="blue">Blue</Button>
      <Button variant="primary" color="purple" >Purple</Button>
      <Button variant="primary" color="green" >Green</Button>
    </div>
  ),
};


export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
      <Button variant="primary" size="sm" onClick={() => {}}>Small</Button>
      <Button variant="primary" size="md" onClick={() => {}}>Medium</Button>
      <Button variant="primary" size="lg" onClick={() => {}}>Large</Button>
    </div>
  ),
};


export const AllVariantsMatrix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Primary variants */}
      <div>
        <h3>Primary Variants</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary" color="blue" size="sm" onClick={() => {}}>Primary Blue SM</Button>
          <Button variant="primary" color="blue" size="md" onClick={() => {}}>Primary Blue MD</Button>
          <Button variant="primary" color="blue" size="lg" onClick={() => {}}>Primary Blue LG</Button>
          <Button variant="primary" color="purple" size="md" onClick={() => {}}>Primary Purple</Button>
          <Button variant="primary" color="green" size="md" onClick={() => {}}>Primary Green</Button>
        </div>
      </div>
      
      {/* Secondary variants */}
      <div>
        <h3>Secondary Variants</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="secondary" color="blue" size="sm" onClick={() => {}}>Secondary Blue SM</Button>
          <Button variant="secondary" color="blue" size="md" onClick={() => {}}>Secondary Blue MD</Button>
          <Button variant="secondary" color="blue" size="lg" onClick={() => {}}>Secondary Blue LG</Button>
          <Button variant="secondary" color="purple" size="md" onClick={() => {}}>Secondary Purple</Button>
          <Button variant="secondary" color="green" size="md" onClick={() => {}}>Secondary Green</Button>
        </div>
      </div>
      
      {/* Text variants */}
      <div>
        <h3>Text Variants</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="text" color="blue" size="sm" onClick={() => {}}>Text Blue SM</Button>
          <Button variant="text" color="blue" size="md" onClick={() => {}}>Text Blue MD</Button>
          <Button variant="text" color="blue" size="lg" onClick={() => {}}>Text Blue LG</Button>
          <Button variant="text" color="purple" size="md" onClick={() => {}}>Text Purple</Button>
          <Button variant="text" color="green" size="md" onClick={() => {}}>Text Green</Button>
        </div>
      </div>
    </div>
  ),
};


