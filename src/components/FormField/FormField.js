import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormField.module.css';
import styled from 'styled-components';
import { ReactComponent as IconMagnify } from '../../shared/icons/icon_magnify.svg';
import { ReactComponent as IconClose } from '../../shared/icons/icon_close.svg';
import * as icons from '../../shared/icons'

const StyledInput = styled.input`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: none;
  outline: none;
  margin-left: 4px;

  ${props => props.disabled && `
    background-color: #DEDEDE;
  `}

  ${props => props.isReadOnly && `
    background-color: transparent;
    pointer-events: none;
  `}
`
const Icon = (props) => <img width="14.6" height="14.6" src={props.type} />


// const StyledIcon = styled.img.attrs(props => ({
//   src: props.iconType
// }))``

const svgPathColorSelector = `& path {
  fill: #9C9C9C 
}`

//Icon Styled Components
const StyledIconMagnify = styled(IconMagnify)`${props => (props.disabled || props.isReadOnly) && svgPathColorSelector}`

const StyledIconClose = styled(IconClose)`${props => props.disabled && svgPathColorSelector}`

// Icon Components
function IconCloseComponent(props) {
  if (props.isReadOnly || props.isHidden) {
    return null
  }
  return <StyledIconClose
    disabled={props.disabled}
  />
}

function IconMagnifyComponent(props) {
  if (props.isHidden) {
    return null
  }

  return <StyledIconMagnify
    disabled={props.disabled}
    isReadOnly={props.isReadOnly}
    isHidden={props.isHidden}
  />
}


function getSVG(svgIconName) {
  for (const [key, value] of Object.entries(icons.default)) {

    if (key === svgIconName) {

      console.log(key);
      console.log(value);

      const StyledIcon = styled(key)`
        &path {
          fill: green;
        }
      `
      return StyledIcon
    }
  }
}

getSVG('IconCheck');

const InputContainer = styled.div`
    //NOTE: Always have the base condition at the top otherwise the css will be overridden
    //Base is black outline
    border: 1px solid black;
    display: flex;
    align-items: center;
    flex-direction: row;
    max-width: 281px;
    padding: 0 12px 0 12px;
    height: 40px;

    //ERROR
    ${props => !props.valid &&
    `
        border: 1px solid #D60000;
      `}

    ${props => props.disabled &&
    `
        border: 1px solid #DEDEDE;
        background-color: #DEDEDE;
      `}  

    ${props => props.isReadOnly && `
        border: 1px solid transparent;
      `}
`

const FormField = (props) => {
  return (
    <div>
      <InputContainer
        {...props}
      >
        <IconMagnifyComponent
          {...props}
          isHidden={props.isLeftIconHidden}
        />
        <StyledInput
          disabled={props.disabled}
          isReadOnly={props.isReadOnly}
          placeholder={props.placeholder}
        >
        </StyledInput>
        {!props.isReadOnly && !props.isRightIconHidden && <StyledIconClose disabled={props.disabled} />}

      </InputContainer>
    </div>
  )
};

FormField.propTypes = {};

FormField.defaultProps = {};

export default FormField;
