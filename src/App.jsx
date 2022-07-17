import { useState, useEffect } from 'react'
import { getAll } from './Services/ProductosService'

function App() {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(
    ()=>{
      getAll()
      .then(res=>{
        console.log(res)
        if (res.data.results){
          setProductos(res.data.results)
          setLoading(false)
        }
      })
    },[]
  )

  if(loading){
    return(
      <div>Loading...</div>
    )
  }
    else{
      return(
        <>
          Listado de productos
          {productos.map( producto =>
            <>
              <p>{producto.title}</p>
              <p>{producto.price}</p> 
            </>
            )}
        </>
      )
    }
  }

export default App