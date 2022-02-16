/* eslint-disable */
import CheckBox from './CheckBox';

export default {
  title: "CheckBox",
  component: CheckBox
};

const Template = args => <CheckBox {...args} />;
export const Controls = Template.bind({});

Controls.args = {
  isInvalid: false,
  disabled: false,
}

export const Default = (args) =>
  <CheckBox
    {...args}
  />;

Default.story = {
  name: 'default',
};

export const Error = () =>
  <CheckBox
    isInvalid={true}
  >
  </CheckBox>

Error.story = {
  name: 'error'
}

export const Disabled = () =>
  <CheckBox
    disabled={true}
  >
  </CheckBox>


Disabled.story = {
  name: 'disabled'
}

export const DisabledSelected = () =>
  <CheckBox
    disabled={true}
    isSelected={true}
  />

DisabledSelected.story = {
  name: 'disabled-selected'
}


