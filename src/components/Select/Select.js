import React from "react";

const Select = (props) => {
  const options = props.options.map((item) => {
    return (
      <option key={item.value} value={item.value}>
        {item.description}
      </option>
    );
  });
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <select onChange={props.onChange} className="form-control" id={props.id}>
        {options}
      </select>
    </div>
  );
};

export default Select;
