import "./ItemList.css"
import Item from "../Item/Item"
import { Link } from "react-router-dom"

const ItemList = ({ products }) =>{

    return (
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <aside class="sidebar">
                <h2>Marca</h2>
                <ul className="categories">
                    <Link>Nike</Link>
                    <Link>Sony</Link>
                    <Link>Specialized</Link>
                    <Link>Xiaomi</Link>
                    <Link>Retro</Link>
                </ul>

                <div className="offers">
                    <h3>Ofertas Especiales</h3>
                    <p>¡Hasta un 50% de descuento en electrónicos!</p>
                    <a href="#" className="btn">Ver Ofertas</a>
                </div>

                <div className="filters">
                    <h3>Filtrar por Precio</h3>
                    <form>
                    <label for="min-price">Mínimo:</label>
                    <input type="number" id="min-price" placeholder="S/0" />
                    <label for="max-price">Máximo:</label>
                    <input type="number" id="max-price" placeholder="S/500" />
                    <button type="submit" className="btn">Aplicar Filtros</button>
                    </form>
                </div>
                </aside>
            <div className="container-item-lists">
                {
                    products.map(product => {
                        return (
                            <Item key={product.id} {...product}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemList