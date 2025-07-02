import { useState } from "react";
import Field from "../Field/Field";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Result from "../Result/Result";
import css from "./App.module.css";
import { loadData, saveData } from "../../scripts/data";

export default function App() {
  const [data, setData] = useState(loadData());

  const updateData = (updatedData) => {
    setData(updatedData);
    saveData(updatedData);
  };

  return (
    <main className={css.main}>
      <section>
        <Header />
      </section>
      <section>
        <Form data={data} onDataChange={updateData} />
      </section>
      <section>
        <Result data={data} />
      </section>
    </main>
  );
}
