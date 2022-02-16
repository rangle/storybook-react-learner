/* eslint-disable */
import Button from './Button';

export default {
  title: "Button",
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      options: ['small', 'large']
    }
  }
};

const Template = args => <Button {...args} />
export const Controls = Template.bind({});

Controls.args = {
  appearance: 'primary',
  btnText: 'primary',
  size: 'small'
}

export const Default = (args) =>
  <div>
    <Button
      {...args}
      appearance="primary"
      btnText="primary"
    >
      Primary
    </Button>
  </div>

Default.story = {
  name: 'default',
};


export const SecondaryBtn = (args) =>
  <div>
    <Button
      {...args}
      appearance="secondary"
      btnText="secondary"
    ></Button>
  </div>

SecondaryBtn.story = {
  name: 'Secondary'
}





