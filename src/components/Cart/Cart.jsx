import { useEffect, useState } from 'react';
import './Cart.scss';


const ProductBox = ({ item, handleRemove, handleChange }) => {

    const { id, pName, price, img, quantity } = item;

    return (
        <div className="productBox">
            <div className="info">
                <img src={img} alt={pName} />
                <h2>{pName}</h2>
            </div>

            <div className="controller">
                <span onClick={() => handleChange(item, -1)}>-</span>
                <span>{quantity}</span>
                <span onClick={() => handleChange(item, 1)}>+</span>
            </div>

            <div className="price">
                <p>net price : {price} | <strong>{quantity * price}</strong></p>
                <p onClick={() => handleRemove(id)}>remove</p>
            </div>
        </div>
    );
}




const Cart = ({ cart, setCart, handleChange }) => {

    const [price, setPrice] = useState(0);

    // Remove From Cart 
    const handleRemove = (id) => {
        const arr = cart.filter(item => item.id !== id);
        cart.filter(item => item.id === id ? item.quantity = 1 : item);
        setCart(arr);
        handlePrice();
    }

    // Calculate Total Cart Items
    const handlePrice = () => {
        let totalPrice = 0;
        cart.map(item => (totalPrice += item.quantity * item.price));
        setPrice(totalPrice);
    }

    // Here have NO dependency array...
    useEffect(() => {
        handlePrice();
    });

    const checkOut = () => {
        alert('❤ Thank You For Shopping... 🛒 \n🚩 Hope You Come Back Again... 🤗')
        cart.filter(item => item.quantity = 1 );
        setCart([]);
    }

    return (
        <section className="cartItems">
            <h2>
                {
                    cart.length > 0
                        ? 'Your selected product...'
                        : 'Cart is empty...'
                }
            </h2>

            <div className="cartContainer">
                {
                    cart.map(item =>
                        <ProductBox
                            key={item.id}
                            item={item}
                            handleChange={handleChange}
                            handleRemove={handleRemove}
                        />
                    )
                }
            </div>

            <div className="totalPrice">
                <h3>total item : {cart.length}</h3>
                <h3>Total price : {price}/=</h3>
            </div>

            <div className="btn">
                {
                    cart.length > 0
                        ? <button onClick={checkOut}>check out</button>
                        : <p>cart empty...</p>
                }
            </div>
        </section>
    )
}

export default Cart