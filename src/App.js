import React from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos </h1> 
        <Testimonio
          nombre='Shawn Wang'
          país='Singapur'
          imagen='shawn'
          cargo='Ingeniería de Software'
          empresa='Amazon'
          testimonio='Da miedo cambiar de carrera, solo obtuve la confianza de que podía codificar trabajando en los cientos de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software, freeCodeCamp cambió mi vida.' />
        <Testimonio
          nombre='Sarah Chima'
          país='Nigeria'
          imagen='sarah'
          cargo='Ingeniería de Software' 
          empresa='ChatDesk'
          testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de codificación de un nivel principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollo en una empresa increíble' />
        <Testimonio
          nombre='Emma Bostian'
          país='Suecia'
          imagen='emma'
          cargo='Ingeniería de Software' 
          empresa='Spotify'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />
      </div>
    </div>
  );
}

export default App;