import { useState } from 'react'
import Luz from './Luz'

const Sinalizacao = ({ colours = [] }) => {
    const [currentColour, setCurrentColour] = useState('')

    return (
        <div className="sinalizacao">
            {colours.map(({ colour, name }) => (
                <Luz 
                    key={colour}
                    colour={colour}
                    name={name}
                    isOn={colour === currentColour}
                    onClick={() => setCurrentColour(colour)}
                />
            ))}
        </div>
    )
}

export default Sinalizacao