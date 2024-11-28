import './ItemDetail.css'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, Nombre, img, description, Precio, Stock }) => {
    const [quantity, setQuantity] = useState(0)
    const [loading, setLoading] = useState(true)
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, Nombre, Precio, quantity, img
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
        <div className='container-detail-info' style={{paddingTop: "40px"}}>
            <div className='detail-info'>
                <img src={img} alt={img} />
                <div className='detail-info-items'>
                    <h2><strong>{Nombre}</strong></h2>
                    <h4 className='desc'><strong>Descripcion:</strong> {description}</h4>
                    <h3><strong>Precio:</strong> S/.{Precio}</h3>
                    <h3><strong>Stock:</strong> {Stock}</h3>
                    {
                    quantity > 0 ?
                    <div className='link'>
                        <Link to="/productos" className='link-button'>Seguir Comprando</Link>
                        <Link to="/cart" className='link-button'>Ir al carrito</Link>                        
                    </div>
                    :
                    <ItemCount onAdd={handleOnAdd} stocks={Stock}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail