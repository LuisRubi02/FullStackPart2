export const Filtro=({filtrarNombre})=>{
    return(
        <div>
        filter information <input onChange={(e)=>filtrarNombre(e.target.value)}/>
      </div>

    )
}