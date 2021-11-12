import React from "react";

const CustomInput = ({ onChange, label, type, name, value, placeHolder }) => {
  return (
    <div className="input-group mt-3">
      <div className="input-group-prepend">
        <span className="input-group-text">{label}</span>
      </div>
      <input
        type={type}
        className="form-control"
        placeholder={placeHolder}
        required
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
  )
}

export default CustomInput;