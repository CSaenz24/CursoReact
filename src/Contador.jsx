import React, { useState } from 'react'

const Contador = () => {
    const [contador,setContador]= useState(1)
    console.log(`El contador va por : ${contador}`);
    console.log(`El componente se renderizo`);
    const sumar= ()=>{
        setContador(contador+1)
    }
    
  return (
    <div>
      <h2>El contador esta en {contador}</h2>
      <button onClick={sumar}>Agregar</button>
      <button onClick={()=> setContador(contador-1)}>Restar</button>
    </div>
  )
}

export default Contador
