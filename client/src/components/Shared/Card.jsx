import { BsFillBagFill } from "react-icons/bs";

const Card = ({ name, price, image, stock, favorite }) => {
  return (
    <>
      <section className="card">
        <img src={image} alt={name} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{name}</h3>

          <section className="card-reviews">
            {stock} in Stock
            <span className="total-reviews">fav: {favorite}</span>
          </section>

          <section className="card-price">
            <div className="price">Price: ${price}</div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
