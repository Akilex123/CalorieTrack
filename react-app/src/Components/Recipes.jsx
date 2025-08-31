import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Recipes() {
  const obroci = [
    {
      image: "/Breakfast2.jpg",
      title: "Breakfast",
    },
    {
      image: "Lunch2.jpg",
      title: "Lunch",
    },
    {
      image: "Dinner1.jpg",
      title: "Dinner",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <div className="bg-blue-950 w-screen flex flex-col items-center p-5">
        <h1 className="text-2xl text-white font-light mb-2">Calorie Counter</h1>
        <div className="flex gap-3 mb-3">
          <div className="flex flex-col gap-1 justify-center rounded-3xl bg-white/20 items-center w-30 h-30 text-white hover:bg-white/30 transition duration-150">
            <p className="text-2xl">🍉</p>
            <p className="font-medium">50-100 Cal</p>
          </div>
          <div className="flex flex-col gap-1 justify-center rounded-3xl bg-white/20 items-center w-30 h-30 text-white  hover:bg-white/30 transition duration-150">
            <p className="text-2xl">🍌</p>
            <p className="font-medium">100-200 Cal</p>
          </div>
          <div className="flex flex-col gap-1 justify-center rounded-3xl bg-white/20 items-center w-30 h-30 text-white  hover:bg-white/30 transition duration-150">
            <p className="text-2xl">🐟</p>
            <p className="font-medium">200-300 Cal</p>
          </div>
          <div className="flex flex-col gap-1 justify-center rounded-3xl bg-white/20 items-center w-30 h-30 text-white  hover:bg-white/30 transition duration-150">
            <p className="text-2xl">🥪</p>
            <p className="font-medium">300-400 Cal</p>
          </div>
        </div>
        <div className="flex gap-3 mb-10">
          <div className="flex flex-col gap-1 justify-center rounded-3xl bg-white/20 items-center w-30 h-30 text-white hover:bg-white/30 transition duration-150">
            <p className="text-2xl">🌭</p>
            <p className="font-medium">400-500 Cal</p>
          </div>
          <div className="flex flex-col gap-1 justify-center rounded-3xl bg-white/20 items-center w-30 h-30 text-white  hover:bg-white/30 transition duration-150">
            <p className="text-2xl">🍱</p>
            <p className="font-medium">500-600 Cal</p>
          </div>
          <div className="flex flex-col gap-1 justify-center rounded-3xl bg-white/20 items-center w-30 h-30 text-white  hover:bg-white/30 transition duration-150">
            <p className="text-2xl">🍔</p>
            <p className="font-medium">600-700 Cal</p>
          </div>
          <div className="flex flex-col gap-1 justify-center rounded-3xl bg-white/20 items-center w-30 h-30 text-white  hover:bg-white/30 transition duration-150">
            <p className="text-2xl">🥞</p>
            <p className="font-medium">700+ Cal</p>
          </div>
        </div>
        <div>
          <h1 className="text-white font-light">Or Pick a Meal</h1>
        </div>
        <div className="h-100 flex items-center justify-center p-10 ">
          <div className="max-w-md mx-auto">
            <Slider {...settings}>
              {obroci.map((item, index) => (
                <div key={index} className="rounded-3xl overflow-hidden shadow">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64  object-cover "
                  />
                  <div className="p-4 text-center bg-white">
                    <h3
                      className="text-lg font-light
                    "
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipes;
