import { useState } from 'react'
import Formulario from '../Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Formulario/>
    </div>
  )
}

export default App