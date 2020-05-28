import React from "react";
import classes from './Input.module.css'

const Input = props => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  switch(props.elementType){
    case 'input' : 
        inputElement = <input 
            type="text"
            className={inputClasses.join(' ')} 
            value={props.value}
            onChange={props.changed}
            />;
        break;
    case 'select':
        inputElement = (
          <select 
            className={inputClasses.join(' ')}
            style={{backgroundColor: "white"}} 
            value={props.value}
            defaultValue=""
            onChange={props.changed}>
            <option defaultValue="DEFAULT" disabled hidden/>
            {props.options.map(option => (
              <option key={option.value} value={option.value} className={classes.Option}>{option.displayValue}</option>
            ))}
          </select>
        );
        break;
    case 'textarea' :
        inputElement = <textarea 
            className={inputClasses.join(' ')} 
            value={props.value}
            onChange={props.changed}
            ></textarea>
        break;
    default :
        inputElement = <input 
            className={inputClasses.join(' ')} 
            value={props.value}
            onChange={props.changed}/>;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;