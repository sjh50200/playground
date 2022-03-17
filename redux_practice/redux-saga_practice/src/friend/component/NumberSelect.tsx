import React from "react";

interface SelectProps {
  value: string;
  options: Array<number>;
  postfix: string;
  onChange: any;
}

const NumberSelect = (props: SelectProps) => {
  const { value, options, postfix, onChange } = props;

  return (
    <div>
      <select
        onChange={(e) => {
          const value = Number(e.currentTarget.value);
          onChange(value);
        }}
        value={value}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {postfix}
    </div>
  );
};

export default NumberSelect;
