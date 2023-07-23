import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Products from "../components/Products/Products";
import Card from "../components/Shared/Card";
import "./Output.css";
// import useAuth from "../hooks/useAuth";

export const Output = () => {
  const [products, setProducts] = useState([]);

  const storedAccessToken = localStorage.getItem("accessToken");
  // console.log("Stored AccessToken:", storedAccessToken);

  // Get the stored token from the hook
  // const { accessToken } = useAuth();
  // console.log("AccessToken:", accessToken);

  useEffect(() => {
    if (storedAccessToken) {
      fetchApiData();
    }
  }, [storedAccessToken]);

  const fetchApiData = async () => {
    try {
      const response = await fetch("http://localhost:6500/products", {
        headers: {
          Authorization: `Bearer ${storedAccessToken}`,
        },
      });
      const data = await response.json();
      // console.log(data);

      setProducts(data);
    } catch (error) {
      console.error("Error fetching data from the API:", error);
    }
  };

  const filteredItems = products.filter(
    (product) => product.name.toLowerCase() //.indexOf(query.toLowerCase()) !== -1
  );
  console.log(filteredItems);

  function filteredData(products) {
    //, selected, query
    let filteredProducts = products;
    console.log(filteredProducts);

    return filteredProducts.map(
      ({ _id, name, price, image, stock, favorite }) => (
        <Card
          key={_id}
          image={image}
          name={name}
          price={price}
          stock={stock}
          favorite={favorite}
        />
      )
    );
  }
  console.log(filteredData);

  const result = filteredData(products); //, selectedCategory, query
  console.log(result);

  return (
    <>
      <div>
        <NavLink to="/logout">
          <button className="bg-gray-300 hover:bg-gray-400 focus:bg-gray-500 text-gray-800 ">
            Logout
          </button>
        </NavLink>
      </div>
      <Products result={result} />
    </>
  );
};
