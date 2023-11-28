import Image from "next/image";
import Stars from "./stars";

export default function Card({ ...food }) {
  return (
    <section className="relative flex flex-col col-span-4 bg-[#231f20] text-white p-6 rounded-2xl mt-12">
      {food.tag && (
        <div className="absolute top-4 right-6 text-xs font-medium bg-[#c2ccce66] px-2 py-1 rounded">
          {food.tag.toUpperCase()}
        </div>
      )}
      <div className="shrink-0 -mt-20 mb-10">
        <Image
          src={food.image}
          width={155}
          height={155}
          alt={food.name}
          className="object-center object-contain"
        />
      </div>
      <div className="flex flex-col flex-1 space-y-4">
        <h2 className="text-2xl font-medium">{food.name}</h2>
        <div className="flex items-center space-x-3">
          <Stars rating={food.rating} />
          <span className="text-xs xl:text-base">
            {food.rating} | {food.review}{" "}
            {food.review > 1 ? "Reviews" : "Review"}
          </span>
        </div>
        <p className="description text-[#d9d9d9]">{food.description}</p>
      </div>
      <div className="mt-4 flex flex-col space-y-2">
        <div className="flex justify-between items-center font-medium">
          <p className="price">{food.price}</p>
          <p className="available">{food.available} Available</p>
        </div>
        <button className="w-full bg-white text-black px-10 py-2 rounded-lg">
          Add to Cart
        </button>
      </div>
    </section>
  );
}
