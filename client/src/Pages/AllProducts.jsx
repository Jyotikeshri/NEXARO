import React, { useEffect, useState } from "react";

// import AdminProductCard from '../components/AdminProductCard'
import UploadProduct from "../Components/UploadProduct";
import allApi from "../Api/Api";
import AdminProductCard from "../Components/AdminProductCard";
import AdminPanel from "../Components/AminPanel";

const AllProducts = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);

  const fetchAllProduct = async () => {
    const response = await fetch(allApi.allProduct.url);
    const dataResponse = await response.json();

    console.log("product data", dataResponse);

    setAllProduct(dataResponse?.data || []);
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="bg-white py-2 w-full h-[70px] px-4 flex justify-between items-center">
          <h2 className="font-bold text-lg">All Product</h2>
          <button
            className="border-2 bg-[#00e6d4] text-black   transition-all py-1 px-3 rounded-full "
            onClick={() => setOpenUploadProduct(true)}
          >
            Upload Product
          </button>
        </div>
      </div>

      {/**all product */}
      <div className="flex items-start px-2 ms-4 flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll">
        {allProduct.map((product, index) => {
          return (
            <AdminProductCard
              data={product}
              key={index + "allProduct"}
              fetchdata={fetchAllProduct}
            />
          );
        })}
      </div>

      {/**upload prouct component */}
      {openUploadProduct && (
        <UploadProduct
          onClose={() => setOpenUploadProduct(false)}
          fetchData={fetchAllProduct}
        />
      )}
    </div>
  );
};

export default AllProducts;
