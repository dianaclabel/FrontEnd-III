import { useState } from "react";
import style from "../components/style.module.css";

export const Form = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    poke: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    age: false,
    poke: false,
  });

  const [showSummary, setShowSummary] = useState(false);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const regexAge = /^[0-9]{2}$/;

    const upgradeErrors = {
      name: form.name.trim().length <= 3,
      age: !regexAge.test(form.age),
      poke: form.poke.trim().length <= 3,
    };

    if (Object.values(upgradeErrors).some((error) => error)) {
      setErrors(upgradeErrors);
      return;
    }

    setShowSummary(true);

    console.log(form);
    console.log(upgradeErrors);
  }

  return !showSummary ? (
    <>
      <h1></h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" onChange={handleChange} />
          {errors.name && <p>Coloca tu nombre</p>}
        </div>

        <div>
          <label htmlFor="age">Edad</label>
          <input type="number" id="age" name="age" onChange={handleChange} />
          {errors.age && <p>Coloca tu edad</p>}
        </div>

        <div>
          <label htmlFor="poke">Pokemón Favorito</label>
          <input type="text" id="poke" name="poke" onChange={handleChange} />
          {errors.poke && <p>Coloca tu Pokemon</p>}
        </div>

        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  ) : (
    <article>
      <p>Nombre: {form.name}</p>
      <p>Edad: {form.age}</p>
      <p>Pokemón: {form.poke}</p>
    </article>
  );
};
