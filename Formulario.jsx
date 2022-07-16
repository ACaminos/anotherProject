import React from 'react'

function Formulario() {
  return (
    <div>
        <form action="">
            <label htmlFor="Nombre">
                Nombre <input type="text" name="" id="Nombre" />
            </label><br/><br/>
            <label htmlFor="Apellido">
                Apellido <input type="text" name="" id="Apellido" />
            </label><br/><br/>
            <label htmlFor="Email">
                Email <input type="email" name="" id="Email" />
            </label><br/><br/>
            <label htmlFor="Telefono">
                Telefono <input type="tel" name="" id="Telefono" />
            </label><br/><br/>
            <label htmlFor="password">
                Contrasena <input type="password" name="" id="password" />
            </label><br/><br/>
            <label htmlFor="confirmPassword">
                Confirmar Password <input type="text" name="" id="confirmPassword" />
            </label>
        </form>
    </div>
  )
}

export default Formulario