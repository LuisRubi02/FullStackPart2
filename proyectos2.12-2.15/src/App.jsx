import { useState, useEffect } from "react";
import { Filtro } from "./componentes/filtro";
import { AgregarPersonas } from "./componentes/agregarPersonas";
import { VerPersonas } from "./componentes/verPersonas";
import agenda from "./services/agenda";
import { mensajeError } from "./componentes/mensajeError";
const App = () => {
  const [persons, setPersons] = useState([{}]);
  const [newFilter, setNewFilter] = useState(persons);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await agenda.getAll();
      setPersons(data);
      setNewFilter(data);
    };

    fetchData();
  }, []);

  const agregarNombre = (event) => {
    event.preventDefault();
    if (
      persons.some((person) => person.name === newName) == true &&
      persons.some((person) => person.number === newNumber) == true
    ) {
      alert(
        `${newName} is already added to phonebook whith the number ${newNumber}`
      );
      return;
    } else if (persons.some((person) => person.name === newName) == true) {
      if (
        window.confirm(
          "Do you want to replace the telefonic number of this person?"
        )
      ) {
        agenda
          .update(persons.find((person) => person.name === newName).id, {
            name: newName,
            number: newNumber,
          })
          .then(() => {
            agenda.getAll().then((data) => {
              setPersons(data);
              setNewFilter(data);
            });
          });
      }
      return;
    } else if (persons.some((person) => person.number === newNumber) == true) {
      alert(`${newNumber} is already added to phonebook`);
      return;
    }

    let itemPush = { name: newName, number: newNumber };
    let arregloTemp = [...persons, itemPush];
    agenda
      .create(itemPush)
      .then(() => {
        setPersons(arregloTemp);
        setNewFilter(arregloTemp);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const filtrarNombre = (valorFiltro) => {
    setNewFilter(persons);
    if (valorFiltro.length > 0) {
      setNewFilter(
        persons.filter((person) =>
          person.name.toLowerCase().includes(valorFiltro.toLowerCase())
        )
      );
    }
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filtro filtrarNombre={filtrarNombre} />

      <AgregarPersonas
        agregarNombre={agregarNombre}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />

      <h2>Numbers</h2>
      <VerPersonas
        newFilter={newFilter}
        setPersons={setPersons}
        setNewFilter={setNewFilter}
      />
    </div>
  );
};

export default App;
