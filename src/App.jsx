import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Card from "./Card";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const addUsuario = (user) => {
    setUsuarios([...usuarios, user]);
    console.log(usuarios);
  };

  return (
    <div className="App">
      <h1>Poke-Card</h1>
      <Form onAddUser={addUsuario} />
      <Card usuarios={usuarios} />
    </div>
  );
}

export default App;
