import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stocks, onAdd})=> {
   const [quantity, setQuantity] = useState(1)

   const increment = () => {
       if(quantity < stocks) {
           setQuantity(quantity+1)
       }
   }

   const decrement = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       }
   }

   return(
        <div className='container-count'>
            <div className='counter'>
                <div className='controls'>
                    <button className="button" onClick={decrement}>-</button>
                    <h4 className='number'>{quantity}</h4>
                    <button className="button" onClick={increment}>+</button>
                </div>
                <div>
                    <button className="button" onClick={() => onAdd(quantity)}>Agregar</button>
                </div>
            </div>
        </div>
   )
}
export default ItemCount