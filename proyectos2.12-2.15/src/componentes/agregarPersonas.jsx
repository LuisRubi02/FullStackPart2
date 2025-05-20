export const AgregarPersonas = ({
  agregarNombre,
  setNewName,
  setNewNumber,
}) => {
  return (
    <form onSubmit={agregarNombre}>
      <div>
        name: <input onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        number:{" "}
        <input type="tel" onChange={(e) => setNewNumber(e.target.value)} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
