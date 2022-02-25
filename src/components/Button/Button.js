import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

import { color, textColor } from '../../shared/styles'
import styled from 'styled-components';

const APPEARANCES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  ALERT: 'alert'
}

const SIZES = {
  SMALL: 'small',
  LARGE: 'large'
}

// const defaultButton = ({ appearance, btnText }) => {

// }


//Understanding props and how they're passed down 
// function DefaultButton(props) {
//   return <div>
//     <div className={styles[props.appearance]}>
//       {props.btnText}
//     </div>
//   </div>
// }

// function Button(props) {
//   return (<div>
//     <DefaultButton appearance={props.appearance} btnText={props.btnText} />
//   </div>
//   )
// }


// const DefaultButton = ({ appearance, btnText }) => {
//   return <div>
//     <div className={styles[appearance]}>
//       {btnText}
//     </div>
//   </div>
// }

const StyledButton = styled.button`
  text-align: center;
  border: 0;
  cursor: pointer;
  padding: 8px 16px;

  ${props =>
    props.appearance === APPEARANCES.PRIMARY &&
    `
      background: ${color.primary};
      color: ${textColor.primary};
    `}

  ${props =>
    props.size === SIZES.LARGE &&
    `
      padding: 16px 24px; 
    `}  

  ${props =>
    props.size === SIZES.SMALL &&
    `
      padding: 8px 16px; 
    `}  
`;


// const Button = (props) => {
//   return <div>
//     <DefaultButton appearance={props.appearance} btnText={props.btnText} />
//   </div>
// }


export function Button({ ...props }) {
  return (
    <StyledButton {...props}>
      {props.btnText}
    </StyledButton>
  )
}

// const Button = (props) => {



//   // function defaultButton(props) {
//   //   return <div>
//   //     <div className={styles[props.appearance]}>
//   //       {props.btnText}
//   //     </div>
//   //   </div>
//   // }

//   const appearance = props.appearance
//   return <defaultButton>

//   </defaultButton>
//   // <div>
//   //   <defaultButton props={props}>

//   //   </defaultButton>
//   //   {/* {appearance === APPEARANCES.PRIMARY &&
//   //     <div className={styles.primary} >
//   //       {props.btnText}
//   //     </div >
//   //   }
//   //   {appearance === APPEARANCES.SECONDARY &&
//   //     <div className={styles.secondary} >
//   //       {props.btnText}
//   //     </div >
//   //   } */}

//   // </div>

// };

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
