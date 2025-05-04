import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../SectionTitle/SectionTitle";

import categoryImage1 from "../../assets/categories/categories_1.png";
import categoryImage2 from "../../assets/categories/categories_2.png";
import categoryImage3 from "../../assets/categories/categories_3.png";
import categoryImage4 from "../../assets/categories/categories_4.png";
import categoryImage5 from "../../assets/categories/categories_5.png";
import categoryImage6 from "../../assets/categories/categories_6.png";
import categoryImage7 from "../../assets/categories/categories_7.png";
import categoryImage8 from "../../assets/categories/categories_8.png";
import categoryImage9 from "../../assets/categories/categories_9.png";
import categoryImage10 from "../../assets/categories/categories_10.png";

const Categories = () => {
  const categories = [
    {
      title: "Sunglasses woman",
      products: "3,584 Products",
      image: categoryImage1,
    },
    {
      title: "Sunglasses man",
      products: "157 Products",
      image: categoryImage2,
    },
    {
      title: "Sport footwear woman",
      products: "154 Products",
      image: categoryImage3,
    },
    {
      title: "Sport footwear man",
      products: "154 Products",
      image: categoryImage4,
    },
    { title: "T-shirt woman", products: "154 Products", image: categoryImage5 },
    { title: "T-shirt man", products: "154 Products", image: categoryImage6 },
    { title: "Shirt woman", products: "154 Products", image: categoryImage7 },
    { title: "Shirt men", products: "154 Products", image: categoryImage8 },
    { title: "Pants woman", products: "154 Products", image: categoryImage9 },
    { title: "Pants men", products: "154 Products", image: categoryImage10 },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "160px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: "80px" },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, centerPadding: "40px" },
      },
    ],
  };

  return (
    <div className="py-12 px-4 lg:px-0">
      <div className="lg:container mx-auto">
        <SectionTitle title="Top Categories" mb="mb-11" />
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index} className="p-4 h-[424px]">
              <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={category.image}
                  alt={`Category: ${category.title}`}
                  loading="lazy"
                  className="w-full h-[424px] object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full h-[85px] bg-black/60 p-4 flex flex-col justify-center">
                  <h4 className="text-xl text-white font-semibold capitalize group-hover:text-[#2ce9fa] transition-colors">
                    {category.title}
                  </h4>
                  <p className="text-sm text-white group-hover:text-[#9a9caa] transition-colors">
                    {category.products}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
