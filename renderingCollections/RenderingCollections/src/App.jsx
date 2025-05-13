const Notes = ({notas}) =>{
  return(
    <>
    {notas.map(note=><li key={note.id}>{note.content}</li>)}
    </>
  )
}

const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
      <Notes notas={notes} />
      </ul>
    </div>
  )
}

export default App