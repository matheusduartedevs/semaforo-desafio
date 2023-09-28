const Luz = ({ colour, isOn, name, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`sinalizacao_luz ${isOn ? 'sinalizacao_luz-ligado' : ''}`}
            style={{ backgroundColor: colour }}
        />
    )
}

export default Luz