import agenda from "../services/agenda.js";
export const VerPersonas = ({
  newFilter,
  setPersons,
  setNewFilter,
  setMensajeError,
}) => {
  const eliminarPersona = (id) => {
    if (window.confirm("Do you want to delete this person?")) {
      agenda
        .deleteP(id)
        .then((response) => {
          agenda.getAll().then((response) => {
            setPersons(response);
            setNewFilter(response);
          });
        })
        .catch((error) => {
          setMensajeError("Se ha producido un error al eliminar");
          setTimeout(() => {
            setMensajeError(null);
          }, 5000);
        });
    }
  };
  return (
    <ul>
      {newFilter.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}{" "}
          <button onClick={() => eliminarPersona(person.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};
