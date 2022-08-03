import './App.css';
import Testimonio from './componentes/Testimonio'

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'></div>
        <h1>Esto es lo que dicen  nuestros alumnos sobre FreeCodeCamp:</h1>
        <Testimonio 
          nombre="Shawn Wang"
          pais="Singapur"
          cargo="Ingeniera de Software"
          imagen="emma"
          empresa="Amazon"
          testimonio="Siempre tuve miedo de cambiar de carrera"
        />
        <Testimonio 
        nombre="Shawn Wang"
        pais="Singapur"
        cargo="Ingeniera de Software"
        imagen="shawn"
        empresa="Amazon"
        testimonio="Siempre tuve miedo de cambiar de carrera"
        />
       <Testimonio 
        nombre="Sarah Chima"
        pais="Nigeria"
        cargo="Ingeniera de Software"
        imagen="sarah"
        empresa="Chat Desk"
        negrita= "FreeCodeCamp fue el inicio de mi carrera como programadora"
        testimonio= ", tiene un buen plan de estudios"
        />

    </div>
  );
}

export default App;
