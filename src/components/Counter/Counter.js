import { useState } from 'react'
import Button from '../Button/Button'
import "./Counter.css"

const Counter = (props) => {
    const [count, setCount] = useState(props.initial)
    const [message, setMessage] = useState('')

    const decrement = () => {
        setMessage('')
        if(count > 0) {
            setCount(count - 1)
        } else {
            setMessage('No puedes agregar menos de 0')
        }
    }

    const increment = () => {
        setMessage('')
        if(count < props.stock) {
            setCount(count + 1)
        } else {
            setMessage('No puede agregar mas productos')
        }
    }

    const delet = () => {
        setCount(props.initial)
        setMessage('')
    }

    return (
        <div className='counter'>
                <h1>{props.title}</h1>
                <h5>Cantidad disponible: {props.stock}</h5>
                <h4>{count}</h4>
                <h2>{message}</h2>
                <Button label="Eliminar" handleClick={delet}/>
                <Button label=" - " handleClick={decrement}/>
                <Button label=" + " handleClick={increment}/>
                <Button label="Agregar" />
                {/* <button onClick={decrement}>restar</button>
                <button onClick={increment}>sumar</button>
                <button onClick={reset}>reiniciar</button> */}
        </div>
    )
}

export default Counter