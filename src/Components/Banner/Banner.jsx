import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";

// ✅ Importar las imágenes correctamente desde src/assets
import bannerImage1 from "../../assets/Banner/banner-image1.png";
import bannerImage2 from "../../assets/Banner/banner-image2.png";
import bannerImage3 from "../../assets/Banner/banner-image3.png";
import bannerImage4 from "../../assets/Banner/banner-image4.png";
import bannerImage5 from "../../assets/Banner/banner-image5.png";

const Banner = () => {
  const products = [
    {
      id: 1,
      title: "Fashion-forward sunglasses with full UV protection",
      subTitle: "welcome to sunglass",
      image: bannerImage1,
    },
    {
      id: 2,
      title: "Sleek, modern-fit pants for effortless style",
      subTitle: "welcome to pants",
      image: bannerImage2,
    },
    {
      id: 3,
      title: "Timeless tailored shirts crafted for comfort and class",
      subTitle: "welcome to shirts",
      image: bannerImage3,
    },
    {
      id: 4,
      title: "Versatile T-shirts that blend comfort with contemporary style",
      subTitle: "welcome to t-shirts",
      image: bannerImage4,
    },
    {
      id: 5,
      title: "Engineered athletic footwear for peak performance",
      subTitle: "welcome to footwear",
      image: bannerImage5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="lg:container">
      <div className="slider-container slider_container w-full h-full">
        <Slider {...settings}>
          {products?.map((product, index) => {
            const backgroundColors = [
              "#f0f9ff",
              "#e0f7fa",
              "#f3e5f5",
              "#fff3e0",
              "#fce4ec",
            ];
            const bgColor = backgroundColors[index % backgroundColors.length];

            return (
              <div
                key={product?.id}
                className="banner_slide_item flex flex-col lg:flex-row items-center justify-between gap-6"
              >
                {/* banner text */}
                <div className="banner_text">
                  <p className="text-sm font-inter text-[#272343] uppercase font-normal">
                    {product?.subTitle}
                  </p>
                  <h3 className="text-4xl lg:text-6xl text-[#272343] font-inter capitalize leading-16 max-w-[631px] w-full font-bold mb-5">
                    {product?.title}
                  </h3>
                  <button
                    className="max-w-[171px] w-full flex items-center justify-center gap-2 h-[52px] bg-[#029fae] rounded-lg capitalize text-white cursor-pointer 
                    transition-all duration-300 ease-in-out hover:bg-[#027b88] hover:scale-95 hover:shadow-lg"
                  >
                    shop now <MoveRight />
                  </button>
                </div>

                {/* banner image */}
                <div
                  className="banner_image w-full max-w-md h-full flex items-center justify-center p-6 rounded-full transition-colors duration-500"
                  style={{ backgroundColor: bgColor }}
                >
                  <img
                    src={product?.image}
                    alt={product?.title}
                    className="transition-transform duration-500 hover:scale-105 hover:rotate-1"
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
