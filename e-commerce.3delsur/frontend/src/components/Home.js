import React, { useState, useEffect } from "react";


function Reloj({hora}) {
    return <h4>{hora}</h4>
}

const Home = ()=>{

    const [hora, setHora] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setHora(new Date().toLocaleTimeString());
    })
              
    return (
    <div style={{ backgroundImage: "url(/img.jpg)",backgroundRepeat: 'no-repeat', webkitBackgroundSize: "cover",
    mozBackgroundSize: "cointainer", oBackgroundSize: "cover"}}>
                
                <h1>HOmeee</h1>
        <p>
         En Home pondremos una presentación corporativa y como todos los demas componentes , tendrá su BarNav y su Footer</p>
       <br/>
       <hr/>
       <p>Estos videos pretenden: 

1. Construir una base de código de una tiendita fullstack que usaremos para explicar los conceptos del último módulo (DEVOPS)
2. Repasar y dejar una guía de cara a los proyectos finales aspectos fundamentales sobre:
  a) Organización de proyectos usando GitHub
  b) Proceso UI/UX 
  c) Desarrollo de una aplicación fullstack
  d) Despliegue de una aplicación fullstack

Parte 0. Organización creada en github y configuración
Parte 1. Se explican los primeros pasos de un proyecto en cualquier proceso de UI/UX y tratamos un poco los aspectos generales de la disciplina y dónde debemos enforcarnos cuando se diseña una interface de usuario. 
parte 2. Diseño de wireframe de media fidelidad
parte 3. Decisión de cambiar wireframe de baja y alta fidelidad por el de media y exportación de assets
parte 4. Modelo de datos en MYSQL Y NOSQL para tiendazon tratando aspectos a tener en cuenta a la hora de modelar cualquier problema.
       </p>
       <hr/>
       <p>Estos videos pretenden: 

1. Construir una base de código de una tiendita fullstack que usaremos para explicar los conceptos del último módulo (DEVOPS)
2. Repasar y dejar una guía de cara a los proyectos finales aspectos fundamentales sobre:
  a) Organización de proyectos usando GitHub
  b) Proceso UI/UX 
  c) Desarrollo de una aplicación fullstack
  d) Despliegue de una aplicación fullstack

Parte 0. Organización creada en github y configuración
Parte 1. Se explican los primeros pasos de un proyecto en cualquier proceso de UI/UX y tratamos un poco los aspectos generales de la disciplina y dónde debemos enforcarnos cuando se diseña una interface de usuario. 
parte 2. Diseño de wireframe de media fidelidad
parte 3. Decisión de cambiar wireframe de baja y alta fidelidad por el de media y exportación de assets
parte 4. Modelo de datos en MYSQL Y NOSQL para tiendazon tratando aspectos a tener en cuenta a la hora de modelar cualquier problema.
       </p>
       <p>Estos videos pretenden: 

1. Construir una base de código de una tiendita fullstack que usaremos para explicar los conceptos del último módulo (DEVOPS)
2. Repasar y dejar una guía de cara a los proyectos finales aspectos fundamentales sobre:
  a) Organización de proyectos usando GitHub
  b) Proceso UI/UX 
  c) Desarrollo de una aplicación fullstack
  d) Despliegue de una aplicación fullstack

Parte 0. Organización creada en github y configuración
Parte 1. Se explican los primeros pasos de un proyecto en cualquier proceso de UI/UX y tratamos un poco los aspectos generales de la disciplina y dónde debemos enforcarnos cuando se diseña una interface de usuario. 
parte 2. Diseño de wireframe de media fidelidad
parte 3. Decisión de cambiar wireframe de baja y alta fidelidad por el de media y exportación de assets
parte 4. Modelo de datos en MYSQL Y NOSQL para tiendazon tratando aspectos a tener en cuenta a la hora de modelar cualquier problema.
       </p>
       <hr/>
       <p>Estos videos pretenden: 

1. Construir una base de código de una tiendita fullstack que usaremos para explicar los conceptos del último módulo (DEVOPS)
2. Repasar y dejar una guía de cara a los proyectos finales aspectos fundamentales sobre:
  a) Organización de proyectos usando GitHub
  b) Proceso UI/UX 
  c) Desarrollo de una aplicación fullstack
  d) Despliegue de una aplicación fullstack

Parte 0. Organización creada en github y configuración
Parte 1. Se explican los primeros pasos de un proyecto en cualquier proceso de UI/UX y tratamos un poco los aspectos generales de la disciplina y dónde debemos enforcarnos cuando se diseña una interface de usuario. 
parte 2. Diseño de wireframe de media fidelidad
parte 3. Decisión de cambiar wireframe de baja y alta fidelidad por el de media y exportación de assets
parte 4. Modelo de datos en MYSQL Y NOSQL para tiendazon tratando aspectos a tener en cuenta a la hora de modelar cualquier problema.
       </p>

       <hr/>   
    
       <p>Estos videos pretenden: 

1. Construir una base de código de una tiendita fullstack que usaremos para explicar los conceptos del último módulo (DEVOPS)
2. Repasar y dejar una guía de cara a los proyectos finales aspectos fundamentales sobre:
  a) Organización de proyectos usando GitHub
  b) Proceso UI/UX 
  c) Desarrollo de una aplicación fullstack
  d) Despliegue de una aplicación fullstack

Parte 0. Organización creada en github y configuración
Parte 1. Se explican los primeros pasos de un proyecto en cualquier proceso de UI/UX y tratamos un poco los aspectos generales de la disciplina y dónde debemos enforcarnos cuando se diseña una interface de usuario. 
parte 2. Diseño de wireframe de media fidelidad
parte 3. Decisión de cambiar wireframe de baja y alta fidelidad por el de media y exportación de assets
parte 4. Modelo de datos en MYSQL Y NOSQL para tiendazon tratando aspectos a tener en cuenta a la hora de modelar cualquier problema.
       </p>

       <hr/>
        <h4 style={{color:"pink"}}><Reloj hora={hora}/></h4>
    </div>
   
    )
}
export default Home;