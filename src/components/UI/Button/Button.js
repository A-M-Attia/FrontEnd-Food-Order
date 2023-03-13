import React from 'react';
// import styled from 'styled-components';

import classes from './Button.module.css';


// const Button = styled.button`

//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

// @media (max-width: 500px){
//   width: 100%
// }
// &:focus {
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }

// `
const Button = props => {
  const cls = `${classes.button} ${props.className}`
  return (
    <>
   { console.log("Button...." + props.arr)}
    <button type={props.type} className={cls} onClick={props.onClick}>
      {props.children}
    </button>
    </>
  );
};

export default React.memo(Button);
