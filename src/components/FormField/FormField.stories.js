/* eslint-disable */
import FormField from './FormField';

export default {
  title: "FormField",
  component: FormField
};


const Template = args =>
  <FormField
    {...args}
  />;
export const Controls = Template.bind({})

Controls.args = {
  isLeftIconHidden: false,
  isRightIconHidden: false,
  valid: true,
  disabled: false,
  placeholder: 'something something'

}

const SuccessTemplate = args =>
  <FormField
    {...args}
    valid={true}
  />;

export const Success = SuccessTemplate.bind({})

Success.args = {
  isLeftIconHidden: false,
  isRightIconHidden: false,
}

Success.story = {
  name: 'success',
};

const ErrorTemplate = args =>
  <FormField
    {...args}
  />

export const Error = ErrorTemplate.bind({})

Error.args = {
  isLeftIconHidden: false,
  isRightIconHidden: false,
}

// export const Success = (args) =>
//   <FormField
//     {...args}
//     valid={true}
//   />;

Error.story = {
  name: 'error'
}


const DisabledTemplate = args =>
  <FormField
    {...args}
    disabled={true}
  />;

export const Disabled = DisabledTemplate.bind({})

Disabled.args = {
  isLeftIconHidden: false,
  isRightIconHidden: false,
}

Disabled.story = {
  name: 'disabled',
};

const ReadOnlyTemplate = args =>
  <FormField
    {...args}
    isReadOnly={true}
  />;

export const ReadOnly = ReadOnlyTemplate.bind({})

ReadOnly.args = {
  isLeftIconHidden: false,
  placeholder: 'Input text here'
}

ReadOnly.story = {
  name: 'readOnly',
};







