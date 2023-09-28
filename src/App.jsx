import { useState } from 'react'
import './App.css'

const App = () => {
  const [colour, setColour] = useState('')

  return (
    <div>
      <div className="sinalizacao">
        <div onClick={() => setColour('red')} className={`sinalizacao_luz ${colour === 'red' ? 'sinalizacao_luz-ligado' : ''}`} style={{ backgroundColor: 'red' }} />
      </div>
      <div onClick={() => setColour('yellow')} className={`sinalizacao_luz ${colour === 'yellow' ? 'sinalizacao_luz-ligado' : ''}`} style={{ backgroundColor: 'yellow' }} />
      <div onClick={() => setColour('green')} className={`sinalizacao_luz ${colour === 'green' ? 'sinalizacao_luz-ligado' : ''}`} style={{ backgroundColor: 'green' }} />
    </div>
  )
}

export default App