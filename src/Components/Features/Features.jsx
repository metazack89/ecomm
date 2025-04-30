import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "sport pants women",
      status: "New",
      price: "$80",
      image: "/src/assets/features/product_1.png",
      currentPrice: "$130",
    },
    {
      title: "T-shirt women",
      status: "Sales",
      price: "$70",
      image: "/src/assets/features/product_2.png",
      currentPrice: "$120",
    },
    {
      title: "Footwear sport men",
      price: "$250",
      image: "/src/assets/features/product_3.png",
      currentPrice: "$320",
    },
    {
      title: "T-shirt sport men",
      status: "New",
      price: "$140",
      image: "/src/assets/features/product_4.png",
      currentPrice: "$200",
    },
    {
      title: "Sunglasses men",
      status: "New",
      price: "$100",
      image: "/src/assets/features/product_5.png",
      currentPrice: "$150",
    },
    {
      title: "Footwear sport woman",
      status: "Sales",
      price: "$280",
      image: "/src/assets/features/product_6.png",
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
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="lg:container mx-auto">
        <SectionTitle title="Featured Products" mb="mb-11" />

        <div className="slider-container features_slider w-full overflow-hidden">
          <Slider {...settings}>
            {features.map((feature, index) => (
              <div key={index} className="p-4 group">
                <div className="feature_image mb-4 relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
                  <img
                    className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                    src={feature.image}
                    alt={feature.title}
                  />
                  {feature.status && (
                    <div className="absolute top-4 left-4 bg-[#2ce9fa] text-white px-2 py-1 rounded-lg">
                      <button className="text-sm font-inter font-normal">
                        {feature.status}
                      </button>
                    </div>
                  )}
                </div>
                <div className="feature_content">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base text-[#0bb4c3] capitalize font-inter font-normal mb-4 transition duration-300 group-hover:text-[#007580]">
                      {feature.title}
                    </h4>
                    <span className="bg-[#29a5b0] h-[44px] w-[44px] rounded-lg flex items-center justify-center transition duration-300 hover:bg-[#005f6a] hover:scale-110">
                      <ShoppingCart size="1.5rem" color="#fff" />
                    </span>
                  </div>
                  <p className="text-xl flex items-center gap-2 text-[#4b3abf] font-semibold font-inter">
                    {feature.price}
                    {feature.currentPrice && (
                      <span className="text-sm text-[#9a9caa] font-inter font-normal line-through">
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
    </div>
  );
};

export default Features;
