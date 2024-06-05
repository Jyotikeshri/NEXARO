import React from "react";
import CategoryList from "../Components/CategoryList";
import HorizontalCardProduct from "../Components/HorizontalCardProduct";
import BannerProduct from "../Components/BannerComponent";
import VerticalCardProduct from "../Components/VerticalCardProduct";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <CategoryList />
      <BannerProduct />
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"} />
      <HorizontalCardProduct
        category={"mobiles"}
        heading={"Newly Lanuched Mobile Phones"}
      />
      <VerticalCardProduct
        category={"camera"}
        heading={"Discover Top Cameras and Accessories at Unbeatable Prices"}
      />
    </div>
  );
};

export default HomePage;
