import { calculateSalaries } from "../../scripts/calculate";
import css from "./Result.module.css";

export default function Result({ data }) {
  const { brutto, netto } = calculateSalaries(data);

  return (
    <div className={css.result}>
      <div className={css.item}>
        <p className={css.name}>Brutto</p>
        <p className={css.value}>{brutto}</p>
      </div>
      <div className={css.item}>
        <p className={css.name}>Netto</p>
        <p className={css.value}>{netto}</p>
      </div>
    </div>
  );
}
