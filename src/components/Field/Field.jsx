import { useState } from "react";
import { hasOnlyDigits } from "../../scripts/testDigits";
import css from "./Field.module.css";

export default function Field({ id, label, type, value, onGetValue }) {
  const [inputValue, setInputValue] = useState(value === 0 ? "" : value);

  const sign = type === "currency" ? "zł" : "h";

  const onInput = (e) => {
    let newValue = e.target.value.replace(",", ".");

    if (type !== "currency") {
      if (!hasOnlyDigits(newValue)) {
        return;
      }

      newValue = newValue.replace(/\D/g, "");
    }

    setInputValue(newValue);

    onGetValue({ id, value: Number(newValue) });
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
          type={"text"}
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
