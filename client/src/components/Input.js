import React from "react";

export default function Input({ tipo, id, name, placeholder, handelChange,value }) {
  return (
    <input
      type={tipo}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value === null ? "" :value}
      className="w-full p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm"
      onChange={handelChange}
    />
  );
}
