import React from "react";

function Card({ usuarios }) {
  return (
    <div>
      {usuarios.map((usuario, index) => (
        <div key={index} className="card">
          <h3>
            Hola {usuario.nombre} {usuario.apellido}!
          </h3>
          <h3>Tu pokemon es:</h3>
          <h3 className="pokemon-card">{usuario.pokemon}!</h3>
        </div>
      ))}
    </div>
  );
}

export default Card;
