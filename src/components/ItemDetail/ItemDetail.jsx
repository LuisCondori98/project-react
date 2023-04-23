import './ItemDetail.css'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, name, img, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)
    const [loading, setLoading] = useState(true)
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity, img
        }
        setQuantity(quantity)
        addItem(productToAdd)
    }

    setTimeout(() => {
        setLoading(false)
    }, 2600)

    if(loading)
    {
        return <div className='container-loading-detail'></div>
    }
    
    return (
        <div className='container-detail-info'>
            <h2>{name}</h2>
            <div className='detail-info'>
                <img src={img}/>
                <div className='detail-info-items'>
                    <h3 className='desc'>Descripcion: {description}</h3>
                    <h3>Precio: S/.{price}</h3>
                    <h3>Stock: {stock}</h3>
                    {
                    quantity > 0 ?
                    <div className='link'>
                        <Link to="/productos" className='link-button'>Seguir Comprando</Link>
                        <Link to="/cart" className='link-button'>Ir al carrito</Link>                        
                    </div>
                    :
                    <ItemCount onAdd={handleOnAdd} stocks={stock}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail