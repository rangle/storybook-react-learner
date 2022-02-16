import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormInput.module.css';
import styled from 'styled-components'
import { color, textColor } from '../../shared/styles'

// const FormInput = () => (
//   <div className={styles.FormInput}>
//     FormInput Component
//   </div>
// );


const LABEL_POSITION = {
  INLINE: 'inline',
  STACKED: 'stacked'
}




function handleChange(e) {
  console.log(e.target.value)
}





// const ErrorMessage = (props) => {
//   if (props.isInvalid) {
//     return (<div>whoops invalid</div>)
//   }
//   return (<div></div>)
// }


const Input = styled.input``
// ${props =>
//     props.isInvalid &&
//     `
//       color: ${textColor.error};
//     `}
// `

const InputLabel = styled.label`
  display: ${props => (props.labelPosition === LABEL_POSITION.INLINE ? '' : 'block')}  
`



const ErrorMessage = styled.div`

${props => console.log(props)}
${props =>
    props.isInvalid === true &&
    `
      color: ${textColor.error};
    `}
`

const ErrorMessageWrapper = (props) => {
  console.log(props)

  if (props.isInvalid) {
    return (
      <ErrorMessage isInvalid={props.isInvalid} >
        whoops
      </ErrorMessage>
    )
  }
  return (<div></div>)
}


export function FormInput({ isInvalid, labelText, labelPosition, ...props }) {
  return (
    <div>
      <InputLabel
        labelPosition={labelPosition}
      >{labelText}
      </InputLabel>
      {/* <label>label</label> */}
      <Input
        type="text"
        value={props.input}
        onChange={handleChange}>
      </Input>
      <ErrorMessageWrapper
        isInvalid={isInvalid}>
      </ErrorMessageWrapper>
    </div>
  )
}

FormInput.propTypes = {};

FormInput.defaultProps = {};

export default FormInput;
