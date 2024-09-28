import React, { useEffect, useState } from 'react';
import NoValueErr from '../NoValueErr/noValueErr';

function Select(props) {
  const { name, placeholder, options, btnClicked, getValuesFn } = props;

  const [value, setValue] = useState(props.value);

  useEffect(() => {
    // for validation check
    // console.log(btnClicked)
  }, [btnClicked]);

  const handleChange = (event) => {
    setValue(event.target.value);

    const data = {
      value: event.target.value,
      id: name,
    };

    getValuesFn(data);
  };

  return (
    <div className="form-input selectgroup mtop-2">
      <select id="lead_type" onChange={handleChange} value={value} name={name}>
        <option value="" disabled hidden>
          {placeholder}
        </option>

        {options.map((options, k) => (
          <option key={k} value={options}>
            {options}
          </option>
        ))}
      </select>
      {btnClicked && !value && <NoValueErr />}
    </div>
  );
}

export default Select;
