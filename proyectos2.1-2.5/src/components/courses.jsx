import { useEffect, useState } from "react"
export const Course = ({course}) =>{
    const valorInicialCiclo=0
    const [total, setTotal] = useState(course[0].parts.reduce((acumulator, currentValue)=>acumulator+currentValue.exercises,valorInicialCiclo))
    const [totalSecond, setTotalSecond] = useState(course[1].parts.reduce((acumulator, currentValue)=>acumulator+currentValue.exercises,valorInicialCiclo))
    
    return(
      <>
        <header>
          <h1>{course[0].name}</h1>
        </header>
        <section>
          {course[0].parts.map(part=><p key={part.id}>{part.name} {part.exercises}</p>)}
        </section>
        
          <p>Sum of exercises {total}</p>
     
        <h2>{course[1].name} </h2>
        <section>
        {course[1].parts.map(part=><p key={part.id}>{part.name} {part.exercises}</p>)}
        </section>
        <p>Sum of exercises {totalSecond}</p>
      </>
    )
  }