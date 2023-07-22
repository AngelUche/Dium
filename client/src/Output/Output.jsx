import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// import Navigation from "../components/Navigation/Nav";
import Products from "../components/Products/Products";
// import Recommended from "../components/Recommended/Recommended";
// import Sidebar from "../components/Sidebar/Sidebar";
import Card from "../components/Shared/Card";
import "./Output.css";
// import useAuth from "../hooks/useAuth";

export const Output = () => {
  // const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  // const [query, setQuery] = useState("");

  // // ----------- API -----------
  const [products, setProducts] = useState([]);

  const storedAccessToken = localStorage.getItem("accessToken");
  // console.log("Stored AccessToken5:", storedAccessToken);

  // Get the stored token from the hook
  // const { accessToken } = useAuth();
  // console.log("AccessToken1:", accessToken);

  useEffect(() => {
    // console.log("AccessToken:", accessToken);
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
      console.log(data);

      setProducts(data);
    } catch (error) {
      console.error("Error fetching data from the API:", error);
    }
  };

  // const handleInputChange = (event) => {
  //   setQuery(event.target.value);
  // };

  const filteredItems = products.filter(
    (product) => product.name.toLowerCase() //.indexOf(query.toLowerCase()) !== -1
  );
  console.log(filteredItems);

  // // ----------- Radio Filtering -----------
  // const handleChange = (event) => {
  //   setSelectedCategory(event.target.value);
  // };

  // // ------------ Button Filtering -----------
  // const handleClick = (event) => {
  //   setSelectedCategory(event.target.value);
  // };

  function filteredData(products) {
    //, selected, query
    let filteredProducts = products;
    console.log(filteredProducts);

    // // Filtering Input Items
    // if (query) {
    //   filteredProducts = filteredItems;
    //   console.log(filteredProducts);
    // }

    // Applying selected filter
    // if (selected) {
    //   filteredProducts = filteredProducts.filter(
    //     ({ category, favorite, stock, price, name }) =>
    //       category === selected ||
    //       favorite === selected ||
    //       stock === selected ||
    //       price === selected ||
    //       name === selected
    //   );
    // }

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
      {/* <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} /> */}

      <div>
        <NavLink to="/logout" >
          <button className="bg-gray-300 hover:bg-gray-400 focus:bg-gray-500 text-gray-800">
            Logout
          </button>
        </NavLink>
      </div>
      <Products result={result} />

      {/* <div>
        {products.map((product) => {
          <Card
            key={product._id}
            name={product.name}
            price={product.price}
            image={product.image}
            stock={product.stock}
            favorite={product.favorite}
          />;
        })}
      </div> */}
    </>
  );
};
