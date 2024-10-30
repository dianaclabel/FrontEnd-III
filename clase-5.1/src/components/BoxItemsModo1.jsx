import { useState } from "react";

export const BoxItemsModo1 = () => {
  const [items, setItems] = useState([{ id: 1, text: "uno" }]);
  const [text, setText] = useState("");

  function handleAdd() {
    setItems([...items, { id: crypto.randomUUID(), text }]);
    setText("");
  }

  function handleDelete(id) {
    const updateItems = items.filter((item) => {
      item.id !== id;
    });

    setItems(updateItems);
  }

  console.log("React: Modo Input + Button", items);

  return (
    <>
      <h3>React: Modo Input + Button</h3>
      <div className="">
        <input
          type="text"
          placeholder="Agrega un item"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && handleAdd()}
        />

        <button onClick={handleAdd}> Agregar </button>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleDelete(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  );
};
