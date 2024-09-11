import React from "react";
import { useState } from "react";
import converter from "../converter";

export function Hex2RGB() {
  const [input, setInput] = useState({
    name: "",
    color: converter(),
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const color = converter(value);
    setInput((prevInput) => ({ ...prevInput, [name]: value, color: color }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="converter" style={{ backgroundColor: input.color }}>
      <p className="title">
        Введите значение цвета в формате HEX, <br /> не забудьте #!
      </p>

      <form className="converter__form" onSubmit={handleSubmit}>
        <input
          className="converter__input"
          placeholder="#"
          name="name"
          type="text"
          maxLength="7"
          minLength="1"
          value={input.name}
          autocomplete="off"
          onChange={handleChange}
        />
      </form>
      <div className="r-g-b-code">
        <div>{input.color}</div>
      </div>
    </div>
  );
}
