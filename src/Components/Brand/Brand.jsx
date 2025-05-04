import brand1 from "../../assets/brands/brand_1.png";
import brand2 from "../../assets/brands/brand_2.png";
import brand3 from "../../assets/brands/brand_3.png";
import brand4 from "../../assets/brands/brand_4.png";
import brand5 from "../../assets/brands/brand_5.png";
import brand6 from "../../assets/brands/brand_6.png";
import brand7 from "../../assets/brands/brand_7.png";

const Brand = () => {
  const brands = [
    { id: 1, image: brand1, name: "Brand 1" },
    { id: 2, image: brand2, name: "Brand 2" },
    { id: 3, image: brand3, name: "Brand 3" },
    { id: 4, image: brand4, name: "Brand 4" },
    { id: 5, image: brand5, name: "Brand 5" },
    { id: 6, image: brand6, name: "Brand 6" },
    { id: 7, image: brand7, name: "Brand 7" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 items-center gap-6">
        {brands.map((brand) => (
          <div key={brand.id} className="flex items-center justify-center p-2">
            <img
              src={brand.image}
              alt={`Logo of ${brand.name}`}
              className="h-12 w-auto transition-transform duration-300 hover:scale-110 hover:opacity-90"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
