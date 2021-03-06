import React from "react";
import classes from './Input.module.css'

const Input = props => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch( props.elementType ){
    case 'input' :
        inputElement = <input 
            type='text'
            className={inputClasses.join(' ')} 
            value={props.value}
            onChange={props.changed}
            disabled={props.disabled}
            />;
        break;
    case 'select':
        inputElement = (
          <select 
            className={inputClasses.join(' ')}
            style={{backgroundColor: "white"}} 
            value={props.value}
            onChange={props.changed}>
            <option defaultValue='' disabled hidden/>
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
            style={props.buzz?{border: 'none'}:{}}
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