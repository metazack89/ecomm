import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ShoppingCart } from "lucide-react";

// ✅ Importa las imágenes correctamente
import product_1 from "../../assets/products/product_1.png";
import product_2 from "../../assets/products/product_2.png";
import product_3 from "../../assets/products/product_3.png";
import product_4 from "../../assets/products/product_4.png";
import product_5 from "../../assets/products/product_5.png";
import product_6 from "../../assets/products/product_6.png";
import product_7 from "../../assets/products/product_7.png";
import product_8 from "../../assets/products/product_8.png";
import product_9 from "../../assets/products/product_9.png";
import product_10 from "../../assets/products/product_10.png";
import product_11 from "../../assets/products/product_11.png";
import product_12 from "../../assets/products/product_12.png";
import product_13 from "../../assets/products/product_13.png";
import product_14 from "../../assets/products/product_14.png";
import product_15 from "../../assets/products/product_15.png";
import product_16 from "../../assets/products/product_16.png";
import product_17 from "../../assets/products/product_17.png";
import product_18 from "../../assets/products/product_18.png";
import product_19 from "../../assets/products/product_19.png";
import product_20 from "../../assets/products/product_20.png";
import product_21 from "../../assets/products/product_21.png";
import product_22 from "../../assets/products/product_22.png";
import product_23 from "../../assets/products/product_23.png";
import product_24 from "../../assets/products/product_24.png";
import product_25 from "../../assets/products/product_25.png";
import product_26 from "../../assets/products/product_26.png";

const Product = () => {
  const [active, setActive] = useState({ id: 0, product: "all" });

  const productTitle = [
    { id: 0, title: "all", product: "all" },
    { id: 1, title: "newest", product: "newest" },
    { id: 2, title: "trending", product: "trending" },
    { id: 3, title: "best seller", product: "best_seller" },
  ];

  const products = [
    {
      title: "Sunglasses men",
      status: "New",
      price: "$140",
      image: product_1,
      currentPrice: "$200",
      product: "newest",
    },
    {
      title: "T-shirt retro men",
      status: "Sales",
      price: "$125",
      image: product_2,
      currentPrice: "$180",
      product: "newest",
    },
    {
      title: "Pants classic men",
      status: "New",
      price: "$180",
      image: product_3,
      currentPrice: "$240",
      product: "newest",
    },
    {
      title: "Pants classic women",
      status: "Sales",
      price: "$150",
      image: product_4,
      currentPrice: "$220",
      product: "newest",
    },
    {
      title: "Pants sport women",
      status: "Sales",
      price: "$140",
      image: product_5,
      currentPrice: "$190",
      product: "trending",
    },
    {
      title: "Pants sport men",
      status: "New",
      price: "$160",
      image: product_6,
      currentPrice: "$210",
      product: "trending",
    },
    {
      title: "Pants sport women",
      status: "Sales",
      price: "$130",
      image: product_7,
      currentPrice: "$180",
      product: "trending",
    },
    {
      title: "Pants sport men",
      status: "Sales",
      price: "$160",
      image: product_8,
      currentPrice: "$200",
      product: "trending",
    },
    {
      title: "sport footwear women",
      status: "New",
      price: "$250",
      image: product_9,
      currentPrice: "$300",
      product: "best_seller",
    },
    {
      title: "sport footwear women",
      status: "Sales",
      price: "$250",
      image: product_10,
      currentPrice: "$300",
      product: "best_seller",
    },
    {
      title: "sport footwear men",
      status: "Sales",
      price: "$230",
      image: product_11,
      currentPrice: "$280",
      product: "best_seller",
    },
    {
      title: "sport footwear men",
      status: "Sales",
      price: "$280",
      image: product_12,
      currentPrice: "$340",
      product: "best_seller",
    },
    {
      title: "Sunglasses women",
      status: "Sales",
      price: "$100",
      image: product_13,
      currentPrice: "$150",
      product: "featured",
    },
    {
      title: "Sunglasses men",
      status: "Sales",
      price: "$130",
      image: product_14,
      currentPrice: "$180",
      product: "featured",
    },
    {
      title: "sport footwear women",
      status: "Sales",
      price: "$270",
      image: product_15,
      currentPrice: "$330",
      product: "featured",
    },
    {
      title: "sport footwear men",
      status: "Sales",
      price: "$290",
      image: product_16,
      currentPrice: "$350",
      product: "featured",
    },
    {
      title: "Shirt women",
      status: "Sales",
      price: "$80",
      image: product_17,
      currentPrice: "$120",
      product: "all",
    },
    {
      title: "T-shirt classic women",
      status: "Sales",
      price: "$90",
      image: product_18,
      currentPrice: "$130",
      product: "all",
    },
    {
      title: "Shirt classic men",
      status: "Sales",
      price: "$110",
      image: product_19,
      currentPrice: "$150",
      product: "all",
    },
    {
      title: "Pants classic wear men",
      status: "Sales",
      price: "$135",
      image: product_20,
      currentPrice: "$175",
      product: "all",
    },
    {
      title: "Pants and T-shirt classic men",
      status: "Sales",
      price: "$180",
      image: product_21,
      currentPrice: "$220",
      product: "all",
    },
    {
      title: "Pants and T-shirt classic women",
      status: "Sales",
      price: "$160",
      image: product_22,
      currentPrice: "$200",
      product: "all",
    },
    {
      title: "Informal pants and shirt women",
      status: "Sales",
      price: "$140",
      image: product_23,
      currentPrice: "$180",
      product: "all",
    },
    {
      title: "Pants sport men",
      status: "Sales",
      price: "$120",
      image: product_24,
      currentPrice: "$160",
      product: "all",
    },
    {
      title: "Pants and shirt classic woman",
      status: "Sales",
      price: "$175",
      image: product_25,
      currentPrice: "$215",
      product: "all",
    },
    {
      title: "Sunglasses woman",
      status: "Sales",
      price: "$85",
      image: product_26,
      currentPrice: "$125",
      product: "all",
    },
  ];

  const productFilter = products.filter(
    (p) => p.product === active?.product || active?.product === "all"
  );

  return (
    <div className="lg:container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <SectionTitle
          title="our product"
          textAlign="center"
          textColor="text-[#272343]"
          mb="mb-5"
        />
        <div className="flex items-center justify-center gap-6 mb-11">
          {productTitle.map((title, indx) => (
            <button
              key={title.id}
              onClick={() =>
                setActive({ id: title.id, product: title.product })
              }
              className={`text-base font-black uppercase font-inter cursor-pointer ${
                active.id === indx
                  ? "text-[#958ec3] hover:text-purple-300"
                  : "text-[#8b99f2] hover:text-purple-500"
              }`}
            >
              {title.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 items-center gap-6">
        {productFilter.map((product, index) => (
          <div key={index} className="p-4">
            <div className="feature_image mb-4 relative">
              <img
                className="w-full max-h-[312px] rounded-lg object-cover"
                src={product.image}
                alt={product.title}
              />
              {product.status && (
                <div className="absolute top-4 left-4 bg-[#27a5b1] text-white px-2 py-1 rounded-lg">
                  <button className="text-sm font-inter font-normal">
                    {product.status}
                  </button>
                </div>
              )}
            </div>
            <div className="feature_content">
              <div className="flex items-center justify-between">
                <h4 className="text-base text-[#11b9c9] capitalize font-inter font-normal mb-4">
                  {product.title}
                </h4>
                <span className="bg-[#2b919a] h-[44px] w-[44px] rounded-lg flex items-center justify-center">
                  <ShoppingCart size="1.5rem" color="#fff" />
                </span>
              </div>
              <p className="text-xl flex items-center gap-2 text-[#3624af] font-semibold font-inter">
                {product.price}
                {product.currentPrice && (
                  <span className="text-sm text-[#9a9caa] font-inter font-normal">
                    {product.currentPrice}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
