import React, { useEffect, useState } from "react";
import PhoneInput, {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
//import 'react-phone-number-input/style.css'
import { formatPhoneNumberIntl } from "react-phone-number-input";

const PhoneInputInternational = (props) => {
  const { name, placeholder, btnClicked, getValuesFn } = props;
  const [value, setValue] = useState(props.value);
  const [validPhone, setValidPhone] = useState(props.value ? true : false);
  let countryCode = formatPhoneNumberIntl(value)?.split(" ")[0];
  let phone = value?.split(countryCode)[1];

  useEffect(() => {
    if(phone?.length === 11 && phone?.charAt(0) === '0'){
      setValue(`${countryCode} ${phone.slice(1, 11)}`);
    }

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
      if (!value?.includes("+91") && value?.length > countryCode?.length) {
        setValidPhone(true);
        setDataFn();

        return;
      }

      setValidPhone(false);
      setDataEmptyFn();
    }
  }, [btnClicked, value]);

  return (
    <div className="form-input mtop-1 form-input-phone">
      <PhoneInput
        international
        countryCallingCodeEditable={false}
        defaultCountry="IN"
        value={value}
        placeholder={placeholder}
        onChange={setValue}
      />
      {value &&
        !validPhone &&
        value?.includes("+91") &&
        phone?.length != 10 && (
        <span className="validation-err"> must be of 10 digits </span>
      )}

      {btnClicked && !value && (
        <span className="validation-err"> Please enter phone number here</span>
      )}
    </div>
  );
};

export default PhoneInputInternational;
