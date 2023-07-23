const ProductModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg h-2/4 w-50 flex">
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>
          <p className="text-gray-500">{product.stock} items in stock</p>

          <div className="flex justify-center mt-20">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>

        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-40 h-fit object-cover ml-20"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
