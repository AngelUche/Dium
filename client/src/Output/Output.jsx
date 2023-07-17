import { useState, useEffect } from "react";

import Navigation from "../components/Navigation/Nav";
import Products from "../components/Products/Products";
// import products from "../db/data";
import Recommended from "../components/Recommended/Recommended";
import Sidebar from "../components/Sidebar/Sidebar";
import Card from "../components/Shared/Card";
import "./Output.css";

export const Output = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  // // ----------- API -----------
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    try {
      const response = await fetch("http://localhost:6500/products");
      const data = await response.json();
      console.log(data);
      setApiData(data);
    } catch (error) {
      console.error("Error fetching data from the API:", error);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = apiData.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    // let filteredProducts = products;
    // Use apiData instead of products
    let filteredProducts = apiData;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(apiData, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};
