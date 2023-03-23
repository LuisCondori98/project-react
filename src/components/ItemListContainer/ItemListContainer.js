import "./ItemListContainer.css"
import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList"
import Filter from "../Filter/Filter";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    // const { greeting } = props
    const [productsState, setProductsState] = useState([])

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(products => {
                setProductsState(products)
            })
    }, [categoryId])

    return (
        <div className="itemListContainer">
            <h2>{greeting}</h2>
            <Filter />
            <ItemList products={productsState}/>
        </div>
    )
}

export default ItemListContainer