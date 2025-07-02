import { useState } from "react";
import { hasOnlyDigits } from "../../scripts/testDigits";
import css from "./Field.module.css";

export default function Field({ id, label, type, value, onGetValue }) {
  const [inputValue, setInputValue] = useState(value === 0 ? "" : value);

  const sign = type === "currency" ? "zła" : "h";

  const onInput = (e) => {
    let value = e.target.value;

    if (type !== "currency") {
      if (!hasOnlyDigits(value)) {
        return;
      }

      value = value.replace(/\D/g, "");
    }

    setInputValue(value.replace(",", "."));

    onGetValue({ id, value: Number(value.replace(",", ".")) });
  };

  return (
    <div className={css.field}>
      <label htmlFor={id} className={css.label}>
        {label}
      </label>
      <div className={css.inputWrapper}>
        <input
          id={id}
          name={id}
          type={type === "currency" ? "number" : "text"}
          placeholder="0"
          step="any"
          className={css.input}
          onInput={onInput}
          value={inputValue}
          inputMode="decimal"
        />
        <span className={css.type}>{sign}</span>
      </div>
    </div>
  );
}
