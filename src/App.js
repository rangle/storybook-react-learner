import logo from './logo.svg';
import './App.css';

import Button from './components/Button/Button';
import FormInput from './components/FormInput/FormInput';
import CheckBox from './components/CheckBox/CheckBox';
import FormField from './components/FormField/FormField';
import IconMagnify from './shared/icons/icon_magnify.svg'
import IconClose from './shared/icons/icon_close.svg'

function App() {
  return (
    <div>
      <Button
        appearance="primary"
        btnText="primary"
      >
      </Button>
      <Button
        appearance="secondary"
        btnText="secondary"
      >
      </Button>
      <FormInput
        isInvalid={true}
        labelText="Invalid Label"
      >
      </FormInput>
      <FormInput
        labelText="Valid Label"
        labelPosition="inline"
      >
      </FormInput>

      <div >
        <Button
          style={{ display: "block" }}
          appearance="primary"
          btnText="primary"
        >
        </Button>
        <Button
          appearance="secondary"
          btnText="secondary"
        >
        </Button>
      </div>

      <CheckBox>
      </CheckBox>
      <CheckBox
        isSelected={true}
      >
      </CheckBox>
      <CheckBox
        isInvalid={true}
      >
      </CheckBox>
      <CheckBox
        disabled={true}
      >
      </CheckBox>
      <CheckBox
        isSelected={true}
        disabled={true}
      >
      </CheckBox>
      <div style={{ marginBottom: "20px" }}>
        No Error
        <FormField
          valid={true}
        />
        Left Icon
        <FormField
          valid={true}
          isRightIconHidden={true}
        />
        Right Icon
        <FormField
          valid={true}
          isLeftIconHidden={true}
        />
        No Icons
        <FormField
          valid={true}
          isLeftIconHidden={true}
          isRightIconHidden={true}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        Error
        <FormField
          valid={false}
        />
        Left Icon
        <FormField
          valid={false}
          isRightIconHidden={true}
        />
        Right Icon
        <FormField
          valid={false}
          isLeftIconHidden={true}
        />
        No Icons
        <FormField
          valid={false}
          isLeftIconHidden={true}
          isRightIconHidden={true}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>

        Disabled
        <FormField
          disabled={true}
        />
        No Icons
        <FormField
          disabled={true}
          isLeftIconHidden={true}
          isRightIconHidden={true}
        />
        Right Icon
        <FormField
          disabled={true}
          isLeftIconHidden={true}
        />
        Left Icon
        <FormField
          disabled={true}
          isRightIconHidden={true}
        />
      </div>
      <div>
        <FormField
          isReadOnly={true}
          placeholder="something something"
        />
        <FormField

          leftIcon="IconCheck"
          rightIcon="IconAlarm"
          isReadOnly={true}
          valid={true}
          isLeftIconHidden={true}
          isRightIconHidden={true}
        />
      </div>
    </div>
  );
}

export default App;
