import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "./../SectionTitle/SectionTitle";

const Categories = () => {
  const categories = [
    {
      title: "Sunglasses woman",
      products: "3,584 Products",
      image: "/src/assets/categories/categories_1.png",
    },
    {
      title: "Sunglasses man",
      products: "157 Products",
      image: "/src/assets/categories/categories_2.png",
    },
    {
      title: "Sport footwear woman",
      products: "154 Products",
      image: "/src/assets/categories/categories_3.png",
    },
    {
      title: "Sport footwear man",
      products: "154 Products",
      image: "/src/assets/categories/categories_4.png",
    },
    {
      title: "T-shirt woman",
      products: "154 Products",
      image: "/src/assets/categories/categories_5.png",
    },
    {
      title: "T-shirt man",
      products: "154 Products",
      image: "/src/assets/categories/categories_6.png",
    },
    {
      title: "Shirt woman",
      products: "154 Products",
      image: "/src/assets/categories/categories_7.png",
    },
    {
      title: "Shirt men",
      products: "154 Products",
      image: "/src/assets/categories/categories_8.png",
    },
    {
      title: "Pants woman",
      products: "154 Products",
      image: "/src/assets/categories/categories_9.png",
    },
    {
      title: "Pants men",
      products: "154 Products",
      image: "/src/assets/categories/categories_10.png",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "160px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div>
      <div className="lg:container mx-auto">
        <SectionTitle title="Top Categories" mb="mb-11" />

        <div className="slider-container features_slider w-full h-full">
          <Slider {...settings}>
            {categories?.map((category, index) => (
              <div key={index} className="p-4 h-[424px]">
                <div className="feature_image mb-4 relative group overflow-hidden rounded-lg">
                  <img
                    className="w-full h-[424px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-2xl"
                    src={category?.image}
                    alt={category?.title}
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[85px] bg-[#000000] bg-opacity-50 flex flex-col justify-center p-4 transition-colors duration-300">
                    <h4 className="text-xl text-white font-semibold font-inter mb-2 capitalize transition-colors duration-300 group-hover:text-[#2ce9fa]">
                      {category?.title}
                    </h4>
                    <p className="text-sm text-white capitalize font-normal font-inter transition-colors duration-300 group-hover:text-[#9a9caa]">
                      {category?.products}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Categories;
