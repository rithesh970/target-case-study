import React, { useContext } from "react";
import AppContext from "../../store";
import Select from "../Select/Select";

const Dropdowns = () => {
  const { dropdowns } = useContext(AppContext);
  const dropdownData = dropdowns.map((dropdown) => {
    return (
      dropdown.options.length !== 0 && (
        <Select
          onChange={dropdown.onChangeHandler}
          options={dropdown.options}
          id={dropdown.id}
          key={dropdown.id}
          label={dropdown.label}
        />
      )
    );
  });
  return (
    <form className="row">
      <div className="col-lg-3 col-sm-hide"></div>
      <div className="col-lg-6 col-xs-12 m-3">{dropdownData}</div>
      <div className="col-lg-4 col-sm-hide"></div>
    </form>
  );
};

export default Dropdowns;
