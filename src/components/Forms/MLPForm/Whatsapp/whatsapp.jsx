import React, { useState } from 'react';
import NoValueErr from '../NoValueErr/noValueErr';

function Whatsapp({
  name,
  placeholder,
  btnClicked,
  getValuesFn,
  options,
  checkedValue,
}) {
  const [value, setValue] = useState('');



  const handleChange = (event) => {
    setValue(event.target.value);
    const data = {
      value: event.target.value,
      id: name,
    };

    getValuesFn(data);
  };

  return (
    <React.Fragment>
      <div className="mlp-radio-group" >
        <div className="radio-group">
          {options.map((option, k) => {
            return (
              <div key={k} className="date">
                <input
                  type="radio"
                  name="marketing_exp"
                  className=""
                  onChange={handleChange}
                  value={option}
                  checked={option === checkedValue ? true : false}
                />
                <label className='radio-label' htmlFor={option}>{option}</label>
              </div>
            );
          })}
        </div>
      </div>
      {btnClicked && !value && <NoValueErr />}
    </React.Fragment>
  );
}

export default Whatsapp;

