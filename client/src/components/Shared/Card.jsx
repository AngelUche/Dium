import { BsFillBagFill } from "react-icons/bs";
// import { NavLink } from "react-router-dom";

const Card = ({ name, price, image, stock, favorite, addToCart }) => {
  return (
    <>
      <section className="card">
        <img src={image} alt={name} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{name}</h3>

          <section className="card-reviews">
            {stock} items in Stock
            {/* <span className="total-reviews">Favorite: {favorite}</span> */}
          </section>

          <section className="card-price">
            <div className="price">Last Price: ${price}</div>
            <div>
              <button onClick={() => addToCart({ name, price })}>
                <BsFillBagFill className="bag-icon" />
              </button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
