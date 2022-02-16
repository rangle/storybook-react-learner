import React from 'react';
import PropTypes from 'prop-types';
import styles from './CheckBox.module.css';

import styled from 'styled-components';

const Input = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  margin: 0;
  font: inherit;
  color: green;
  width: 24px;
  height: 24px;
  border: 2px solid #262626;
  border-radius: 0.15em;
  background-color: white;

  ${props => console.log(props.isSelected)}

  ${props =>
    props.isSelected && !props.isInvalid &&
    `
      background-color: blue;
      border: 2px solid black;

      &:checked::before {
        border: solid white;
        border-width: 0 2px 2px 0;
      }
    `}  

  display: grid;
  place-content: center;

  // TODO
  &::before {
    display: none;
    transform: scale(5);
  }
  &:checked::before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 11px;
    margin-bottom: 2px;
    border: solid blue;
    border-width: 0 2px 2px 0;
    padding-bottom: 1px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    border-radius: 0px;
  }

  ${props =>
    props.isSelected &&
    `
    &:checked::before {
      border: solid white;
      border-width: 0 2px 2px 0;
    }
  `} 

  ${props =>
    props.isInvalid &&
    `
      border: 2px solid #D60000;
    `}

  ${props =>
    props.disabled &&
    `
      border: 2px solid #DEDEDE; 
    `}  
  
  // Change style based on hover state

  :hover {
    border: 3px solid #828181;
  }

  ${props =>
    props.isSelected &&
    `
        :hover {
          background-color: #828181;
        }
    `}

  ${props =>
    props.isInvalid &&
    `
      :hover {
        border: 3px solid #ED1A1A;
      }
    `
  }  

  ${props =>
    props.isInvalid && props.isSelected &&
    `
      background-color: #D60000;
      :hover {
        border: 2px solid #ED1A1A;
        background-color: #ED1A1A;
      }
    `}

   ${props =>
    props.disabled &&
    `
    :hover {
      border: 2px solid #DEDEDE;
    }
    `}

  ${props =>
    props.disabled && props.isSelected &&
    `
      background-color: #DEDEDE;

      &::before {
        content: "";
        display: inline-block;
        width: 6px;
        height: 11px;
        margin-bottom: 2px;
        border: solid white;
        border-width: 0 2px 2px 0;
        padding-bottom: 1px;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        border-radius: 0px;
      }

      :hover {
         background-color: #DEDEDE;
      }
    `}
  
  }   

`

export default class CheckBox extends React.Component {
  state = { isSelected: false };
  toggleCheckbox = () => this.setState({ isSelected: !this.state.isSelected })

  render() {
    const isSelected = this.state.isSelected;
    const isDisabled = this.props.disabled;
    console.log(isDisabled);

    console.log('Is Selected ', isSelected);
    return (
      <div>
        <Input

          onClick={this.toggleCheckbox}
          isSelected={isSelected ? isSelected : this.props.isSelected}
          isInvalid={this.props.isInvalid}
          disabled={isDisabled}>
        </Input>
      </div>

    )
  }
}




// const Input = styled.input.attrs({ type: 'checkbox' })`

// // accent-color: red;
// appearance: none;
// margin: 0;
// font: inherit;
// color: green;
// width: 24px;
// height: 24px;
// border: 2px solid #262626;
// border-radius: 0.15em;
// background-color: white;

// ${props =>
//     props.isSelected &&
//     `
//     background-color: black;
//   `}  

// display: grid;
// place-content: center;

// // TODO
// &::before {
//   display: none;
//   transform: scale(5);
// }
// &:checked::before {
//   content: "";
//   display: inline-block;
//   width: 5px;
//   height: 8px;
//   margin-bottom: 2px;
//   border: solid blue;
//   border-width: 0 2px 2px 0;
//   padding-bottom: 1px;
//   transform: rotate(45deg);
//   -webkit-transform: rotate(45deg);
//   -ms-transform: rotate(45deg);
//   border-radius: 0px;
// }

// ${props =>
//     props.isSelected &&
//     `
//   &:checked::before {
//     border: solid white;
//     border-width: 0 2px 2px 0;
//   }
//   background-color: black;

// `}  

// :hover {
//   border: 3px solid #828181;
// }



// `
// const CheckboxContainer = styled.div`
//   display: inline-block;
//   vertical-align: middle;
// `

//Props isInvalid
//Props isSelected 
//Props isDisabled

// const CheckBox = ({ ...props }) => (
//   <Input {...props}></Input>
// )

// const StyledSpan = styled.input`

// `


// export function CheckBox({ ...props }) {
//   return (
//     <StyledCheckBox {...props}>
//       <StyledInput type="checkbox"></StyledInput>
//       <StyledSpan></StyledSpan>
//     </StyledCheckBox>
//   )
// }


// const CheckBox = () => (
//   <div className={styles.CheckBox}>
//     CheckBox Component
//   </div>
// );

CheckBox.propTypes = {};

CheckBox.defaultProps = {};

// export default CheckBox;
