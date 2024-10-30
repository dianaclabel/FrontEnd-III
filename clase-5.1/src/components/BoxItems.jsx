import { useState } from "react";

export const BoxItems = () => {
  const [item, setItem] = useState([{ item: "" }]);

  function handleChange(e) {
    return e.target.value;
  }

  function handleAdd() {
    let valorInput = handleChange();
    setItem(...item, { item: valorInput });
  }

  return (
    <>
      <form className="boxAdd">
        <input
          type="text"
          placeholder="Agrega un item"
          onChange={handleChange}
        />
        <button onChange={handleAdd}> Agregar </button>
        {/* <p>{item}</p> */}
      </form>

      <ul></ul>
    </>
  );
};
