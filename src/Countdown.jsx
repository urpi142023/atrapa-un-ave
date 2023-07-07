import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';


const Countdown = ({totalScore }) => {
  const [seconds, setSeconds] = useState(60); 
  const [isRedColor, setIsRedColor] = useState(false);

  useEffect(() => {
    
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          // Detener el intervalo cuando llegue a cero
          clearInterval(interval);
          
          //Se muestra una alerta de pregunta cuando se finaliza el juego
          Swal.fire({
            title: 'El juego ha finalizado,¿Desea jugar nuevamente?',
            icon: 'question', showCancelButton:true,
            text:`Total de aves atrapadas: ${totalScore }`,
            confirmButtonText:'Si',
            cancelButtonText:'No'
          }).then((result) =>{
            if(result.isConfirmed){
              window.location.reload();
            }
        });

          return prevSeconds;
        } else {
          return prevSeconds - 1;
        }
      });
      
    }, 1000);

    // Limpiar el intervalo
    return () => clearInterval(interval);
  }, [totalScore]);

  //Se obtiene el color rojo del timer cuando este llegue a 0
  useEffect(() => {
    if (seconds === 10) {
        setIsRedColor(true);
      }
  }, [seconds]);

  //Estilos del timer en rojo en caso falten 10 segundos
  const timerColor = {
    color: isRedColor ? 'red' : 'black',
  };

  

  return (
    <div style={timerColor}>
      {seconds}
    </div>
  );
};

export default Countdown;