import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";
import SectionTitle from "../SectionTitle/SectionTitle";

// ✅ Importar imágenes correctamente desde src/assets
import product1 from "../../assets/features/product_1.png";
import product2 from "../../assets/features/product_2.png";
import product3 from "../../assets/features/product_3.png";
import product4 from "../../assets/features/product_4.png";
import product5 from "../../assets/features/product_5.png";
import product6 from "../../assets/features/product_6.png";

const Recent = () => {
  const features = [
    {
      title: "sport pants women",
      status: "New",
      price: "$80",
      image: product1,
      currentPrice: "$130",
    },
    {
      title: "T-shirt women",
      status: "Sales",
      price: "$70",
      image: product2,
      currentPrice: "$120",
    },
    {
      title: "Footwear sport men",
      price: "$250",
      image: product3,
      currentPrice: "$320",
    },
    {
      title: "T-shirt sport men",
      status: "New",
      price: "$140",
      image: product4,
      currentPrice: "$200",
    },
    {
      title: "Sunglasses men",
      status: "New",
      price: "$100",
      image: product5,
      currentPrice: "$150",
    },
    {
      title: "Footwear sport woman",
      status: "Sales",
      price: "$280",
      image: product6,
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
    <div className="lg:container mx-auto">
      <SectionTitle title="Recently Added" mb="mb-11" />

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
                  <h4 className="text-base text-[#0dc0d0] capitalize font-inter font-normal mb-4 transition duration-300 group-hover:text-[#007580]">
                    {feature.title}
                  </h4>
                  <span className="bg-[#29a5b0] h-[44px] w-[44px] rounded-lg flex items-center justify-center transition duration-300 hover:bg-[#005f6a] hover:scale-110">
                    <ShoppingCart size="1.5rem" color="#fff" />
                  </span>
                </div>
                <p className="text-xl flex items-center gap-2 text-[#3c28ba] font-semibold font-inter">
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
  );
};

export default Recent;
