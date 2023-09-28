import { useState } from 'react'
import './App.css'
import Sinalizacao from './Sinalizacao'

const App = () => {
  return (
    <div className="sinalizacao">
      <Sinalizacao colours={[
        { colour: 'red', name: 'Vermelho' },
        { colour: 'yellow', name: 'Amarelo' },
        { colour: 'lime', name: 'Verde' }
      ]} />
    </div>
  )
}

export default App