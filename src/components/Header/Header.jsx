import icon from "../../assets/icons/icon-192.png";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <img src={icon} className={css.icon} />
      <h1 className={css.title}>Salary calculator</h1>
    </header>
  );
}
