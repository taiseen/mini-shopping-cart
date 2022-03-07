import { data } from '../../constants';
import "./Home.scss"

const Products = ({ product, addToCart }) => {

  const { pName, price, img } = product;
  return (
    <div className="product">
      <img src={img} alt={pName} />
      <h3>{pName}</h3>
      <p>$<span>{price}</span>/=</p>
      <i className="fas fa-shopping-cart" onClick={() => addToCart(product)}></i>
    </div>
  );
}

const Home = ({ addToCart }) => {
  
  return (
    <section className="container">
      {
        data.productInfo.map(product => (
          <Products
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      }
    </section>
  )
}

export default Home