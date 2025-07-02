import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <h1 className={css.title}>Salary calculator</h1>
    </header>
  );
}
