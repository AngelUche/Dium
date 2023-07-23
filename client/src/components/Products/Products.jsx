import "./Products.css";

const Products = ({ result }) => {
  return (
    <>
      <section className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {result}
      </section>
    </>
  );
};

export default Products;
