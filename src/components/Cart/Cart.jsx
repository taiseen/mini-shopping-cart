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
                <span>net price : <strong>{price}</strong> | {0}</span>
                <span onClick={() => handleRemove(id)}>remove</span>
            </div>
        </div>
    );
}




const Cart = ({ cart, setCart, handleChange }) => {
    // console.log(cart);

    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter(item => item.id !== id);
        setCart(arr);
        handlePrice();
    }

    const handlePrice = () => {
        let ans = 0;
        cart.map(item => (ans += item.quantity * item.price));
        console.log(ans);
        
        let single = 0;
        cart.map(pro => ( single = pro.quantity * pro.price))
        console.log('single price ' , single);
        

        setPrice(ans);
    }

    useEffect(() => {
        handlePrice();
    }, [])

    const checkOut = () => {
        alert('Thank You')
        setCart([]);
        setPrice(0);
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