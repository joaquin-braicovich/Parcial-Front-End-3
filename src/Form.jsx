import { useState } from "react";

function Form({ onAddUser }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [error, setError] = useState(""); // Nuevo estado para el mensaje de error

  const validarCampos = (nombre, apellido, pokemon) => {
    const camposValidos =
      nombre.trim().length >= 3 &&
      apellido.trim().length >= 3 &&
      pokemon.trim().length >= 6;

    const sonNumeros =
      !isNaN(nombre.trim()) ||
      !isNaN(apellido.trim()) ||
      !isNaN(pokemon.trim());

    return camposValidos && !sonNumeros;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const camposValidos = validarCampos(nombre, apellido, pokemon);
    if (!camposValidos) {
      setError("Por favor chequea que la información sea correcta");
    } else {
      setError("");
      onAddUser({ nombre, apellido, pokemon });
      setNombre("");
      setApellido("");
      setPokemon("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=" Ingrese tu nombre"
          className="myInput"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder=" Ingrese tu Apellido"
          className="myInput"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <input
          type="text"
          placeholder=" Elige un Pokemon"
          className="myInput"
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
        />
        <button type="submit">Crear Tarjeta</button>
      </form>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
    </div>
  );
}

export default Form;
