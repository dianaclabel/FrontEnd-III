import { useState } from "react";

export const BoxItemsModoForm = () => {
  const [items, setItems] = useState([]);

  function handleAdd(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = formData.get("text");
    setItems([...items, { id: crypto.randomUUID(), text }]);
    e.target.reset();
  }

  // console.log(items);

  return (
    <>
      <h3>React: Modo FORM</h3>
      <form onSubmit={handleAdd}>
        <input name="text" type="text" placeholder="Agrega un item" />
        <button>Agregar</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
};
