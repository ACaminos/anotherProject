import { useState, useEffect } from 'react'

function App() {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(
    ()=>{
      fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod")
      .then(res=>res.json())
      .then(data =>{
        console.log(data)
        if(data.results){
          setProductos(data.results)
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