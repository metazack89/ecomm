// ✅ Importar imágenes
import brand1 from "../../assets/brands/brand_1.png";
import brand2 from "../../assets/brands/brand_2.png";
import brand3 from "../../assets/brands/brand_3.png";
import brand4 from "../../assets/brands/brand_4.png";
import brand5 from "../../assets/brands/brand_5.png";
import brand6 from "../../assets/brands/brand_6.png";
import brand7 from "../../assets/brands/brand_7.png";

const Brand = () => {
  const brands = [
    { id: 1, image: brand1 },
    { id: 2, image: brand2 },
    { id: 3, image: brand3 },
    { id: 4, image: brand4 },
    { id: 5, image: brand5 },
    { id: 6, image: brand6 },
    { id: 7, image: brand7 },
  ];

  return (
    <div className="lg:container mx-auto py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 items-center justify-center gap-5">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="brand_item flex items-center justify-center"
          >
            <img
              src={brand.image}
              alt={`brand ${brand.id}`}
              className="w-auto h-auto transition-transform duration-300 hover:scale-110 hover:opacity-90"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
