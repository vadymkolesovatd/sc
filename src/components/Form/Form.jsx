import { findSectionFieldKey } from "../../scripts/findSection";
import Field from "../Field/Field";
import css from "./Form.module.css";
import CheckIcon from "../../assets/check.svg?react";
import { useState } from "react";
import clsx from "clsx";

export default function Form({ data, onDataChange }) {
  const [checkboxChecked, setCheckboxChecked] = useState(data.underTwentySix);

  const getValue = ({ id, value }) => {
    const section = findSectionFieldKey(data, id);
    const updatedData = { ...data };
    updatedData[section][id].value = value;
    onDataChange(updatedData);
  };

  const onCheckboxChange = () => {
    const updatedData = { ...data, underTwentySix: !checkboxChecked };
    setCheckboxChecked(!checkboxChecked);
    onDataChange(updatedData);
  };

  return (
    <div className={css.form}>
      {data.general && (
        <ul className={css.list}>
          {Object.keys(data.general)
            .filter((key) => key !== "underTwentySix")
            .map((key) => (
              <li key={key} className={css.item}>
                <Field
                  id={data.general[key].id}
                  label={data.general[key].label}
                  type={data.general[key].type}
                  value={data.general[key].value}
                  onGetValue={getValue}
                />
              </li>
            ))}
        </ul>
      )}
      <div className={css.checkfield}>
        <input
          id="checkbox"
          type="checkbox"
          checked={checkboxChecked}
          onChange={onCheckboxChange}
          className={css.nativeCheckbox}
        />
        <label htmlFor="checkbox" className={css.checkboxLabel}>
          <span className={clsx(css.checkbox, checkboxChecked && css.checked)}>
            <CheckIcon
              className={clsx(css.checkIcon, !checkboxChecked && css.hidden)}
            />
          </span>
          <p>Under 26 y.o.</p>
        </label>
      </div>
      {data.additional && (
        <ul className={css.list}>
          {Object.keys(data.additional).map((key) => (
            <li key={key} className={css.item}>
              <Field
                id={data.additional[key].id}
                label={data.additional[key].label}
                type={data.additional[key].type}
                value={data.additional[key].value}
                onGetValue={getValue}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
