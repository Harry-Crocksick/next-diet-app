import Button from "@/components/Button";
import Card from "@/components/card";
import { dailySets } from "@/lib/daily-set";
import { deliveryData } from "@/lib/delivery";
import { freshJuiceSets } from "@/lib/fresh-juice";
import Image from "next/image";
import FilterProducts from "@/components/FilterProducts";

export const metadata = {
  title: "Products",
};

export default function Page() {
  return (
    <>
      {/* <!-- product hero starts --> */}
      <section className="relative flex justify-center items-center w-full h-[597px]">
        <Image
          src="/assets/product-hero-img-1.png"
          alt="Product page hero background image"
          fill
          priority
          size="100vw"
          className="object-center object-cover -z-10"
        />
        <div className="text-center">
          <h1 className="main-header">Welcome to Diet Plan</h1>
          <p>Home / Products</p>
        </div>
      </section>
      {/* <!-- product hero ends --> */}
      {/* <!-- product set starts --> */}
      <section className="fluid-layout my-24">
        <div className="responsive-grid gap-8">
          <div className="relative px-6 py-10 col-span-full lg:col-span-4 bg-teal-100/80 rounded-lg overflow-hidden">
            <h2 className="font-bold text-black text-xl">Special Set</h2>
            <p className="my-3 text-sm max-w-[10rem] xl:max-w-[15rem] z-10">
              A healthy balanced diet plan to individual health goals.
            </p>
            <button className="px-4 py-2 text-xs font-semibold bg-black text-white rounded-full">
              START NOW
            </button>
            <Image
              src="/assets/image 9.png"
              alt="Set 1"
              width={209}
              height={209}
              className="absolute -right-24 md:-right-16 lg:-right-24 -bottom-10 z-0"
            />
          </div>
          <div className="relative px-6 py-10 col-span-full lg:col-span-4 bg-pink-100/80 rounded-lg overflow-hidden">
            <h2 className="font-bold text-black text-xl">Fresh Juices</h2>
            <p className="my-3 text-sm max-w-[10rem] xl:max-w-[15rem] z-10">
              Tailored fresh juice blends for a quick and nutritious boost.
            </p>
            <button className="px-4 py-2 text-xs font-semibold bg-black text-white rounded-full">
              START NOW
            </button>
            <Image
              src="/assets/fresh-juice.png"
              alt="Set 2"
              width={190}
              height={211}
              className="absolute right-0 bottom-0 z-0"
            />
          </div>
          <div className="relative px-6 py-10 col-span-full lg:col-span-4 bg-teal-100/80 rounded-lg overflow-hidden">
            <h2 className="font-bold text-black text-xl">Customer Set</h2>
            <p className="my-3 text-sm max-w-[10rem] xl:max-w-[15rem] z-10">
              We offer uniquely to meet your beauty and health needs.
            </p>
            <button className="px-4 py-2 text-xs font-semibold bg-black text-white rounded-full">
              START NOW
            </button>
            <Image
              src="/assets/customer-set.png"
              alt="Set 3"
              width={591}
              height={377}
              className="w-72 h-72 object-contain absolute -right-40 md:-right-28 xl:-right-40 -bottom-14 z-0"
            />
          </div>
        </div>
      </section>
      {/* <!-- product set ends --> */}
      {/* <!-- search starts --> */}
      <section className="fluid-layout">
        <FilterProducts />
        {/* <!-- special set cards ends --> */}
        <div className="flex flex-wrap justify-between items-center my-12">
          <div className="flex space-x-2 basis-full lg:basis-1/2">
            <div className="w-1 h-[2.25rem] bg-black"></div>
            <div>
              <h2 className="text-2xl lg:text-4xl font-semibold">
                Fresh Juices
              </h2>
              <p className="text-[#493b4e] tracking-wide my-6">
                Savor the goodness of a custom blend designed just for you,
                packed with nutrients and freshness to invigorate your health.
              </p>
            </div>
          </div>
          <DoubleBtn />
        </div>
        {/* <!-- fresh juice cards starts --> */}
        <div className="w-full responsive-grid gap-6">
          {freshJuiceSets.map((freshJuice) => (
            <Card key={freshJuice.id} {...freshJuice} />
          ))}
        </div>
        {/* <!-- fresh juice cards ends --> */}
        <section className="responsive-grid gap-8 px-4 py-2 lg:py-0 justify-center items-center mt-12 lg:mt-24 bg-yellow-100/50 rounded-lg overflow-hidden">
          <div className="col-span-full lg:col-span-6 shrink-0">
            <Image
              src="/assets/customer-set.png"
              alt="Customer Set"
              width={591}
              height={377}
              className="responsive-image mx-auto"
            />
          </div>
          <div className="relative col-span-full lg:col-span-6">
            <div className="flex items-center space-x-3">
              <h2 className="font-dancing-script text-2xl mb-2">
                Create Special
              </h2>
              <div className="w-10 h-0.5 bg-black"></div>
            </div>
            <h1 className="text-2xl xl:text-4xl font-semibold my-2">
              Make Your Own <br className="hidden md:inline" />
              Creation Special Set
            </h1>
            <p className="text-[#493b4e] tracking-wide max-w-[450px]">
              Energize with our nutritious healthy salad, bursting with fresh
              greens and vibrant superfoods.
            </p>
            <Button styles="primary-btn mt-4">CREATE SET</Button>
            <Image
              src="/assets/scatter.png"
              alt="Scatter Fruits"
              width={368}
              height={281}
              className="hidden lg:block absolute -bottom-36 -right-32"
            />
          </div>
        </section>
        <div className="flex flex-wrap justify-between items-center mt-24 mb-12">
          <div className="flex space-x-2 basis-full lg:basis-1/2">
            <div className="w-1 h-[2.25rem] bg-black"></div>
            <div>
              <h2 className="text-2xl lg:text-4xl font-semibold">
                Daily Best Sale
              </h2>
              <p className="text-[#493b4e] tracking-wide my-6">
                We offers a wide range of high-quality products and services
                tailored to meet the diverse needs and preferences of our
                customers.
              </p>
            </div>
          </div>
          <DoubleBtn />
        </div>
        {/* <!-- daily set card starts --> */}
        <div className="w-full responsive-grid gap-6">
          {dailySets.map((dailySet) => (
            <Card key={dailySet.id} {...dailySet} />
          ))}
        </div>
        {/* <!-- daily set card ends --> */}
        {/* <!-- product food item cards ends --> */}
      </section>
      {/* <!-- search ends --> */}
      {/* <!-- delivery starts --> */}
      <section className="fluid-layout my-12 lg:my-24">
        <div className="responsive-grid gap-8">
          {deliveryData.map((delivery) => (
            <div
              key={delivery.title}
              className="col-span-4 px-4 py-8 flex gap-6 justify-center items-center bg-slate-100 rounded-md"
            >
              <div className="shrink-0">
                <img src={delivery.image} alt={delivery.title} />
              </div>
              <div>
                <h2 className="font-semibold text-xl">{delivery.title}</h2>
                <p className="text-slate-500">{delivery.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <!-- delivery ends --> */}
    </>
  );
}

function DoubleBtn() {
  return (
    <div className="flex items-center space-x-4">
      <Button styles="primary-btn w-20">
        <span className="material-symbols-outlined align-middle">
          arrow_back_ios
        </span>
      </Button>
      <Button styles="primary-btn w-20">
        <span className="material-symbols-outlined align-middle">
          arrow_forward_ios
        </span>
      </Button>
    </div>
  );
}
