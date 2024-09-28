import React, { useEffect, useState } from "react";
import NoValueErr from "../NoValueErr/noValueErr";
import { EMAIL_REGEX } from "../../../../../config/config.js";

const Input = (props) => {
  const {
    name,
    placeholder,
    type,
    btnClicked,
    getValuesFn,
    isRequired,
    id,
  } = props;
  const [value, setValue] = useState(props.value);

  const [validName, setValidName] = useState(props.value ? true : false);
  const [validEmail, setValidEmail] = useState(props.value ? true : false);
  const [validPhone, setValidPhone] = useState(props.value ? true : false);

  useEffect(() => {
    // for validation check
    // console.log("vemail value", props.value)
  }, [btnClicked, props.value]);

  function ValidateName(inputText) {
    var nameformat = /^[a-zA-Z ]{1,40}$/;

    if (nameformat.test(inputText)) {
      return true;
    }
 
    return false;
    
  }

  function ValidateEmail(inputText) {
    var mailformat = EMAIL_REGEX;

    if (mailformat.test(inputText)) {
      return true;
    }
 
    return false;
    
  }

  const handleChange = (event) => {
    setValue(event.target.value);

    const setDataFn = () => {
      const data = {
        value: event.target.value,
        id: name,
      };

      getValuesFn(data);
    };

    const setDataEmptyFn = () => {
      const data = {
        value: "",
        id: name,
      };

      getValuesFn(data);
    };

    if (name === "name") {
      if (ValidateName(event.target.value)) {
        setValidName(true);
        setDataFn();
      } else {
        setValidName(false);
        setDataEmptyFn();
      }
    } else if (type === "email") {
      if (ValidateEmail(event.target.value)) {
        setValidEmail(true);
        setDataFn();
      } else {
        setValidEmail(false);
        setDataEmptyFn();
      }
    } else if (type === "tel") {
      if (event.target.value.length != 10) {
        setValidPhone(false);
        setDataEmptyFn();
      } else {
        setValidPhone(true);
        setDataFn();
      }
    } else {
      setDataFn();
    }
  };

  return (
    <div className="form-input mtop-1">
      {id ? <input
        type={type}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        value={value}
        id={id}
      /> : <input
        type={type}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        value={value}
      />}
      
      {btnClicked && isRequired && !value && <NoValueErr />}{" "}
      {value && name === "name" && !validName && (
        <span className="validation-err">
          should not contain special characters or numbers
        </span>
      )}
      {btnClicked && type === "email" && !validEmail && (
        <span className="validation-err">must be a valid email</span>
      )}
      {value && type === "tel" && !validPhone && (
        <span className="validation-err">must be of 10 digits</span>
      )}
    </div>
  );
};

export default Input;
