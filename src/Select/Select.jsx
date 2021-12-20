import React, { Component, useState } from "react";
import Select from "react-select";

const TodosStatus = ({ filterTodos, selectedOption, setSelectedOption }) => {
  const changeHandler = (e) => {
    setSelectedOption(e);
    filterTodos(e.value);
  };

  const optionStatus = [
    { value: "All", label: "All" },
    { value: "uncomplated", label: "Uncomplated" },
    { value: "complated", label: "Complated" },
  ];

  return (
    <Select
      className="selectOption"
      onChange={changeHandler}
      options={optionStatus}
      value={selectedOption}
    />
  );
};

export default TodosStatus;
