import { useState } from 'react'
import './App.css'

const App = () => {
  const [green, setGreen] = useState('verde')
  const [yellow, setYellow] = useState('amarelo')
  const [red, setRed] = useState('vermelho')

  const handleClick = () => {
    console.log(green)

    setTimeout(() => {
      console.log(yellow)
    }, 5000)

    setTimeout(() => {
      console.log(red)
    }, 7000);
  }

  return (
    <div>
      <button onClick={handleClick}>Ativar</button>

      {handleClick() ?
        <div className="semaforo">
          <div className="red">
            <p>vermelho</p>
          </div>

          <div className="yellow">
            <p>amarelo</p>
          </div>

          <div className="green">
            <p>verde</p>
          </div>
        </div>
        : <p>Clique para ativar o semáforo!</p>}
    </div>
  )
}

export default App