import { useState } from 'react'
import { Filtro } from './componentes/filtro'
import { AgregarPersonas } from './componentes/agregarPersonas'
import { VerPersonas } from './componentes/verPersonas'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '87520431'},
    {name:'Luis Rubi', number:'12345678'}
  ]) 
  const [newFilter, setNewFilter] = useState(persons)

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const agregarNombre = (event)=>{
    event.preventDefault(); 
    if(persons.some((person => person.name === newName))==true && persons.some((person => person.number === newNumber))==true){
      alert(`${newName} is already added to phonebook and has the number ${newNumber}`)
      return
    }
    else if(persons.some((person => person.name === newName))==true){
      alert(`${newName} is already added to phonebook`)
      return
    }
    else if(persons.some((person => person.number === newNumber))==true){
      alert(`${newNumber} is already added to phonebook`)
      return
    }

    let itemPush={name:newName,number:newNumber}
    let arregloTemp=[...persons,itemPush]
   setPersons(arregloTemp)
   setNewFilter(arregloTemp)
  }
  const filtrarNombre = (valorFiltro)=>{
    setNewFilter(persons)
    if(valorFiltro.length>0){
      setNewFilter(persons.filter((person)=>person.name.toLowerCase().includes(valorFiltro.toLowerCase())))
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filtro filtrarNombre={filtrarNombre}/>


      <AgregarPersonas agregarNombre={agregarNombre} setNewName={setNewName} setNewNumber={setNewNumber}/>
 
      <h2>Numbers</h2>
      <VerPersonas newFilter={newFilter}/>
    </div>
  )
}

export default App