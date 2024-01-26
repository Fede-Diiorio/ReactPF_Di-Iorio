import DollarToPesoPrice from '../../helpers/DollarToPesoPrice'
import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemDetail.module.scss'
import { useState } from 'react'
import Button from '../Button/Button'
import { useCart } from '../../context/CartContext'
import { useLocalStorage } from '../../LocalStorageContext/LocalStorageContext'

const ItemDetail = ({ id, name, img, description, stock, price }) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem } = useCart()
    const { saveCartToLocalStorage } = useLocalStorage()

    const handleOnAdd = (quantity) => {
        const objProduct = {
            id,
            name,
            price,
            quantity,
            img
        }

        addItem(objProduct)
        saveCartToLocalStorage(objProduct)
        setQuantity(quantity)
    }

    return (

        <div className={classes.card}>
            <img src={img} alt={`Imagen de ${name}`} className={classes.img} />
            <div className={classes.cardBody}>
                <h4 className={classes.cardTitle}>{name}</h4>
                <p className={classes.cardText}>{description}</p>
                <div className={classes.cardInfo}>
                    <p><strong>Precio: </strong><DollarToPesoPrice price={price} /></p>
                    <p><strong>Stock: </strong>{stock}</p>
                </div>
                <div className={classes.itemCount}>
                    {
                        quantity === 0 ? (<ItemCount stock={stock} onAdd={handleOnAdd} />) : (<div className={classes.buyNav}> <Button to={'/'}>Seguir Comprando</Button> <Button to={'/cart'}>Finalizar Compra</Button></div>)

                    }
                </div>
            </div>
        </div>

    )
}

export default ItemDetail