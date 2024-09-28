import React, { useEffect, useState } from "react";
import PhoneInput, {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
//import 'react-phone-number-input/style.css'

const PhoneInputInternational = (props) => {
  const { name, placeholder, btnClicked, getValuesFn } = props;
  const [value, setValue] = useState(props.value);
  const [validPhone, setValidPhone] = useState(props.value ? true : false);

  useEffect(() => {
    // for validation check
    // console.log("vemail value", props.value)
    console.log(value);

    const setDataFn = () => {
      const data = {
        value: value,
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

    if (value && isPossiblePhoneNumber(value) && isValidPhoneNumber(value)) {
      setValidPhone(true);
      setDataFn();
    } else {
      setValidPhone(false);
      setDataEmptyFn();
    }
  }, [btnClicked, value]);

  // const handleChange = (event) => {
  //   setValue(event.target.value);

  //   const setDataFn = () => {
  //     const data = {
  //       value: event.target.value,
  //       id: name,
  //     };
  //     getValuesFn(data);
  //   };

  //   const setDataEmptyFn = () => {
  //     const data = {
  //       value: "",
  //       id: name,
  //     };
  //     getValuesFn(data);
  //   };

  //   if (event.target.value.length != 10) {
  //     setValidPhone(false);
  //     setDataEmptyFn();
  //   } else {
  //     setValidPhone(true);
  //     setDataFn();
  //   }
  // };

  return (
    <div className="form-input mtop-2">
      <PhoneInput
        international
        countryCallingCodeEditable={false}
        defaultCountry="IN"
        value={value}
        placeholder={placeholder}
        onChange={setValue}
      />
      {(!value || !validPhone) && btnClicked && (
        <span className="validation-err">must be a valid phone number</span>
      )}
    </div>
  );
};

export default PhoneInputInternational;
