import React, { ChangeEvent, useState, FocusEvent, MouseEvent, useEffect } from "react";
import { SelectProps } from "./types";
import "./styles.css";

export const Select = ({ list, placeholder, onSelect }: SelectProps) => {
  const [filtered, setFiltered] = useState(list);
  const [value, setValue] = useState("");

  const onChangeValue = (inputValue: string) => {
    inputValue = inputValue || "";
    setFiltered(list.filter(item => item.name.includes(inputValue)));
    setValue(inputValue);
    onSelect(inputValue);
  };

  const onChangeValueFromList = (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>, selectValue: string) => {
    onChangeValue(selectValue);
    e.currentTarget?.parentElement?.classList.add("d-none");
  };

  const onClickInput = (e: React.MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => {
    e.currentTarget.parentNode?.querySelector(".select-body")?.classList.remove("d-none");
  };

  const onClickDocument = (e: any) => {
    if (e.target.tagName === "INPUT" || e.target.closest(".select-item")) return;
    e.currentTarget.querySelector(".select-body")?.classList.add("d-none");
  };

  useEffect(() => {
    document.addEventListener("click", onClickDocument);
    return () => document.removeEventListener("click", onClickDocument);
  }, []);

  return (
    <div className="form-group p-relative">
      <input
        className="form-input"
        type="text"
        placeholder={placeholder}
        onChange={e => onChangeValue(e.target.value)}
        onClick={onClickInput}
        value={value}
      />
      <div tabIndex={0} className="select-body d-none">
        {filtered.map(item => (
          <div className="select-item text-break" onClick={e => onChangeValueFromList(e, item.value)} key={item.value}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
