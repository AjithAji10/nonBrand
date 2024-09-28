import React, { useEffect, useState } from "react";

function Specialisations({ name, btnClicked, getValuesFn, slots }) {
  const [value, setValue] = useState([]);

  useEffect(() => {
    
  }, [btnClicked]);

  useEffect(() => {
    let arr = [];

    slots.forEach((slot) => {
      if (slot.isChecked) {
        arr.push(slot.value);
      }
    });
    setValue(arr);
    const data = {
      value: arr,
      id: name,
    };

    getValuesFn(data);
  }, []);

  const handleChange = (event) => {
    let newArr = [...value];

    if (value.includes(event.target.value)) {
      const Index = newArr.indexOf(event.target.value);

      if (index > -1) {
        newArr.splice(index, 1);
      }

      setValue(newArr);
    } else {
      newArr.push(event.target.value);
      setValue(newArr);
    }

    const data = {
      value: newArr,
      id: name,
    };

    getValuesFn(data);
  };

  return (
    <div className="slot-group mtop-2">
      {/* <div className="slot-text">Evaluate me for*</div>
      {slots.map((slot, k) => (
        <div className="mtop-1" key={k}>
          <label className="optin-spec-container">
            <div className="wrapper-check" htmlFor={slot.id}>
              {slot.title}
            </div>
            <input
              type="checkbox"
              className="optin-spec-input"
              value={slot.value}
              disabled={slot.isDisabled}
              defaultChecked={slot.isChecked}
              name={name}
              id={slot.id}
              onChange={handleChange}
            />
            <span className="optin-spec-checkmark"></span>
          </label>
        </div>
      ))}

      {btnClicked && value.length === 0 && <NoValueErr />} */}
    </div>
  );
}

export default Specialisations;
