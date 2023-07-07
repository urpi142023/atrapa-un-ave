// import { useState } from 'react'
import Countdown from './Countdown';
import cielo from './images/cielo.jpg'
import casa from './images/casaPajaros.png'
import aveazul from './images/aveAzul.png'
import averosa from './images/aveRosa.png'
import { useState } from 'react';
import './css/App.css'
import './css/style.css'

function App() {

  // Estado para almacenar el índice de la celda seleccionada
  const [selectedImage, setSelectedImage] = useState(null);

  //Estado para almacenar el puntaje de las aves rosas
  const [scorePar, setScorePar] = useState(0);

    //Estado para almacenar el puntaje de las aves azules
  const [scoreImpar, setScoreImpar] = useState(0);

  const [isScoreIncrease, setIsScoreIncrease] = useState(false);

  // Función que se ejecuta al hacer clic en una celda
  const handleCellClick = (imageSelected) => {

    if (imageSelected % 2 === 0) {
      setSelectedImage(imageSelected);
      setScorePar((prevScore) => {
        const newScore = prevScore + 1;
        if (newScore === 10) {
          setIsScoreIncrease(true);
        }
        return newScore;
      });
    }else{
      setSelectedImage(imageSelected);
      setScoreImpar((prevScore) => {
        const newScore = prevScore + 1;
        if (newScore === 10) {
          setIsScoreIncrease(true);
        }
        return newScore;
      });
    }
  };

  //Función para obtener la ruta de imagen por cada celda
  const getImageByCellIndex = (imageSelected) => {
    switch (imageSelected) {
      case 1:
        return aveazul;
      case 2:
        return averosa;
      case 3:
        return aveazul;
      case 4:
        return averosa;
      case 5:
        return aveazul;
      case 6:
        return averosa;
      case 7:
        return aveazul;
      case 8:
        return averosa;
      case 9:
        return aveazul;
      default:
        return null;
    }
  };

  //Estilos de fondo del juego
  const fondo = {
    backgroundImage: `url(${cielo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const scoreClass = isScoreIncrease ? 'score-large' : '';

  return (
    <div style={fondo} className='font-semibold font-mono'>

      <div className="flex justify-center items-center">
        <table className="table-auto border-collapse">
          <tbody>
            <tr>
              <td className='px-4 py-2'>Aves Rosa</td>
              <td className='px-4 py-2'>Aves Azules</td>
            </tr>
            <tr>
              <td className={`px-4 py-2 ${scoreClass}`}>{scorePar}</td>
              <td className={`px-4 py-2 ${scoreClass}`}>{scoreImpar}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1>Tiempo restante:</h1>
      
      <div className="card">
        <Countdown totalScore={scorePar + scoreImpar}/>
      </div>
      
      <div className="flex justify-center items-center">
        <table className="table-auto">
          <tbody>
            <tr>
              <td
                className={selectedImage === 1 ? 'selected-cell' : ''}
                onClick={() => handleCellClick(1)}
              >
                {selectedImage === 1 ? (
                  <img
                    src={getImageByCellIndex(1)}
                    alt="ave"
                    className="w-20 h-20 mr-2"
                  />
                ) : (
                  <img
                    src={casa}
                    alt="casa"
                    className="w-20 h-20 mr-2"
                  />
                )}
              </td>
              <td
                className={selectedImage === 2 ? 'selected-cell' : ''}
                onClick={() => handleCellClick(2)}
              >
                {selectedImage === 2 ? (
                  <img
                    src={getImageByCellIndex(2)}
                    alt="ave"
                    className="w-20 h-20 mr-2"
                  />
                ) : (
                  <img
                    src={casa}
                    alt="casa"
                    className="w-20 h-20 mr-2"
                  />
                )}
              </td>
              <td
                className={selectedImage === 3 ? 'selected-cell' : ''}
                onClick={() => handleCellClick(3)}
              >
                {selectedImage === 3 ? (
                  <img
                    src={getImageByCellIndex(3)}
                    alt="ave"
                    className="w-20 h-20 mr-2"
                  />
                ) : (
                  <img
                    src={casa}
                    alt="casa"
                    className="w-20 h-20 mr-2"
                  />
                )}
              </td>
            </tr>
            <tr>
            <td
                className={selectedImage === 4 ? 'selected-cell' : ''}
                onClick={() => handleCellClick(4)}
              >
                {selectedImage === 4 ? (
                  <img
                    src={getImageByCellIndex(4)}
                    alt="ave"
                    className="w-20 h-20 mr-2"
                  />
                ) : (
                  <img
                    src={casa}
                    alt="casa"
                    className="w-20 h-20 mr-2"
                  />
                )}
              </td>
              <td
                className={selectedImage === 5 ? 'selected-cell' : ''}
                onClick={() => handleCellClick(5)}
              >
                {selectedImage === 5 ? (
                  <img
                    src={getImageByCellIndex(5)}
                    alt="ave"
                    className="w-20 h-20 mr-2"
                  />
                ) : (
                  <img
                    src={casa}
                    alt="casa"
                    className="w-20 h-20 mr-2"
                  />
                )}
              </td>
              <td
                className={selectedImage === 6 ? 'selected-cell' : ''}
                onClick={() => handleCellClick(6)}
              >
                {selectedImage === 6 ? (
                  <img
                    src={getImageByCellIndex(6)}
                    alt="ave"
                    className="w-20 h-20 mr-2"
                  />
                ) : (
                  <img
                    src={casa}
                    alt="casa"
                    className="w-20 h-20 mr-2"
                  />
                )}
              </td>
            </tr>
            <tr>
            <td
                className={selectedImage === 7 ? 'selected-cell' : ''}
                onClick={() => handleCellClick(7)}
              >
                {selectedImage === 7 ? (
                  <img
                    src={getImageByCellIndex(7)}
                    alt="ave"
                    className="w-20 h-20 mr-2"
                  />
                ) : (
                  <img
                    src={casa}
                    alt="casa"
                    className="w-20 h-20 mr-2"
                  />
                )}
              </td>
              <td
                className={selectedImage === 8 ? 'selected-cell' : ''}
                onClick={() => handleCellClick(8)}
              >
                {selectedImage === 8 ? (
                  <img
                    src={getImageByCellIndex(8)}
                    alt="ave"
                    className="w-20 h-20 mr-2"
                  />
                ) : (
                  <img
                    src={casa}
                    alt="casa"
                    className="w-20 h-20 mr-2"
                  />
                )}
              </td>
              <td
                className={selectedImage === 9 ? 'selected-cell' : ''}
                onClick={() => handleCellClick(9)}
              >
                {selectedImage === 9 ? (
                  <img
                    src={getImageByCellIndex(9)}
                    alt="ave"
                    className="w-20 h-20 mr-2"
                  />
                ) : (
                  <img
                    src={casa}
                    alt="casa"
                    className="w-20 h-20 mr-2"
                  />
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
