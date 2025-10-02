"use client"
import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Heading from "./Heading";

const ProductPage = () => {
  return (
    <>
    <Heading/>
      <LeftSection
        imgUrl="/media/kite.png"
        prod_name="Kite"
        prod_des="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        trydemo=""
        learnmore=""
        glgplay=""
      />
      <RightSection
        imgUrl="/media/console.png"
        prod_name="Console"
        prod_des="The central dashboard for your Stockify account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnmore=""
      />
      <LeftSection
        imgUrl="/media/coin.png"
        prod_name="Coin"
        prod_des="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        trydemo=""
        learnmore=""
        glgplay=""
      />
      <RightSection
        imgUrl="/media/kiteapi.png"
        prod_name="Kite Connect API"
        prod_des="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnmore=""
      />
      <LeftSection
        imgUrl="/media/varsity.png"
        prod_name="Varsity"
        prod_des="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        trydemo=""
        learnmore=""
        glgplay=""
      />
    </>
  );
};

export default ProductPage;
