import { useState } from 'react'
import Formulario from '../Formulario'

function App() {
  const [titulo, setTitulo] = useState('clase de react')
  const [texto, setTexto] = useState('')

  return (
    <div className="App">
      {/* <Formulario/> */}
      <h1>{titulo}</h1>
      <p>Contenido de clase {texto}</p>
      <button onClick={()=>setTexto('2021')}>Agregar</button>
      <button onClick={()=>setTexto('')}>Limpiar</button>
      <button onClick={()=>setTitulo('Nuevo titulo')}>Nuevo titulo</button>
    </div>
  )
}

export default App