export const VerPersonas = ({newFilter})=>{
    return(
        <ul>
        
        {newFilter.map((person)=>
          <li key={person.name}>{person.name} {person.number}</li>
        )}
      </ul>
    )
}