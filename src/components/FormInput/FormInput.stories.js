/* eslint-disable */
import FormInput from './FormInput';

export default {
  title: "FormInput",
  component: FormInput,
  isInvalid: false,
  argTypes: {
    labelPosition: {
      control: {
        type: 'select'
      },
      options: ['inline', 'block']
    },
  }
};


const Template = args => <FormInput {...args} />
export const Controls = Template.bind({});

Controls.args = {
  labelPosition: 'inline',
  isInvalid: false,
  labelText: 'Label Text'
}

// Controls.args = {
//   isInvalid: false,
//   argTypes: {
//     labelPosition: {
//       control: {
//         type: 'select'
//       },
//       options: ['inline', 'block']
//     }
//   }
// }


export const Default = Template.bind({})
Default.args = {
  labelPosition: 'inline',
  isInvalid: true,
  labelText: 'Label Text'
}


// export const Default = (args) =>
//   <FormInput
//     {...args}
//     labelText="Label Text"
//     labelPosition="inline"
//   />;

Default.story = {
  name: 'default',
};




