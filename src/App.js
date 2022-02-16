import logo from './logo.svg';
import './App.css';

import Button from './components/Button/Button';
import FormInput from './components/FormInput/FormInput';
import CheckBox from './components/CheckBox/CheckBox';

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

      <CheckBox
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
    </div>
  );
}

export default App;
