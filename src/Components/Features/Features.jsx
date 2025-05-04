import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";

import productImage1 from "../../assets/features/product_1.png";
import productImage2 from "../../assets/features/product_2.png";
import productImage3 from "../../assets/features/product_3.png";
import productImage4 from "../../assets/features/product_4.png";
import productImage5 from "../../assets/features/product_5.png";
import productImage6 from "../../assets/features/product_6.png";

const Features = () => {
  const features = [
    {
      title: "sport pants women",
      status: "New",
      price: "$80",
      image: productImage1,
      currentPrice: "$130",
    },
    {
      title: "T-shirt women",
      status: "Sales",
      price: "$70",
      image: productImage2,
      currentPrice: "$120",
    },
    {
      title: "Footwear sport men",
      price: "$250",
      image: productImage3,
      currentPrice: "$320",
    },
    {
      title: "T-shirt sport men",
      status: "New",
      price: "$140",
      image: productImage4,
      currentPrice: "$200",
    },
    {
      title: "Sunglasses men",
      status: "New",
      price: "$100",
      image: productImage5,
      currentPrice: "$150",
    },
    {
      title: "Footwear sport woman",
      status: "Sales",
      price: "$280",
      image: productImage6,
      currentPrice: "$350",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-12 px-4 lg:px-0">
      <div className="lg:container mx-auto">
        <SectionTitle title="Featured Products" mb="mb-11" />

        <div className="slider-container features_slider w-full overflow-hidden">
          <Slider {...settings}>
            {features.map((feature, index) => (
              <div key={index} className="p-4 group">
                <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={feature.image}
                    alt={`Featured product: ${feature.title}`}
                    loading="lazy"
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {feature.status && (
                    <div className="absolute top-4 left-4 bg-[#2ce9fa] text-white px-3 py-1 rounded-full text-xs font-medium shadow">
                      {feature.status}
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base text-[#0bb4c3] font-medium capitalize group-hover:text-[#007580] transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <button
                      aria-label={`Add ${feature.title} to cart`}
                      className="bg-[#29a5b0] h-[44px] w-[44px] rounded-lg flex items-center justify-center transition duration-300 hover:bg-[#005f6a] hover:scale-110"
                    >
                      <ShoppingCart size="1.5rem" color="#fff" />
                    </button>
                  </div>
                  <p className="text-xl font-semibold text-[#4b3abf] flex items-center gap-2">
                    {feature.price}
                    {feature.currentPrice && (
                      <span className="text-sm text-[#9a9caa] line-through">
                        {feature.currentPrice}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Features;
