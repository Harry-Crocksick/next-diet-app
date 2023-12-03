import Image from "next/image";
import { chefs } from "@/lib/chef-data";
import { logos } from "@/lib/logo";
import { dancingScript } from "@/utils/fonts";
import Button from "@/components/Button";

export const metadata = {
  title: "About Us",
};

const lists = [
  "Nature's bounty with fresh",
  "Fresh Juice with Selections",
  "Flavorful selection",
  "Elevate Your Health!",
];

export default function Page() {
  return (
    <>
      {/* <!-- about hero starts --> */}
      <section className="relative w-full h-[590px]">
        <Image
          src="/assets/hero-image-2.png"
          alt="About page hero background image"
          fill
          size="100vw"
          className="object-center object-cover -z-10"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="main-header">About Us</h1>
          <p>Home / About Us</p>
        </div>
      </section>
      {/* <!-- about hero ends --> */}
      {/* <!-- choose us starts --> */}
      <section className="fluid-layout flex flex-wrap items-center gap-8">
        <div className="basis-full md:flex-1 shrink-0">
          <Image
            src="/assets/choose-1.png"
            alt="Choose us"
            width={581}
            height={552}
            className="object-contain object-center"
          />
        </div>
        <div className="basis-full md:basis-[55%]">
          <div className="flex items-center space-x-4">
            <h2 className={`${dancingScript.className} text-2xl mb-2`}>
              Choose Us Today
            </h2>
            <div className="w-10 h-0.5 bg-black"></div>
          </div>
          <h1 className="main-header mb-4">
            Revitalizing <br className="hidden md:inline" />
            Nutrient Fruits
          </h1>
          <p className="text-[#493b4e] tracking-wide my-6">
            Experience the burst of flavors and nourishment with our selection
            of refreshing, seasonal fruits and fresh food.
          </p>
          <ul className="grid gap-4 grid-cols-2 md:grid-cols-4 mb-6">
            {lists.map((list) => (
              <li
                key={list}
                className="col-span-2 inline-flex items-center space-x-4"
              >
                <span className="text-[14px] p-1 bg-[#e3d9eac8] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 -960 960 960"
                    width="16"
                    className="fill-green-500"
                  >
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </svg>
                </span>
                <p>{list}</p>
              </li>
            ))}
          </ul>
          <Button styles="primary-btn">CONNECT NOW</Button>
        </div>
      </section>
      {/* <!-- choose us ends --> */}
      {/* <!-- meet with us starts --> */}
      <section className="fluid-layout">
        <div className="upper-section text-center">
          <div className="flex justify-center items-center space-x-3">
            <div className="w-10 h-0.5 bg-black"></div>
            <h2 className={`${dancingScript.className} text-2xl mb-2`}>
              Our Team
            </h2>
            <div className="w-10 h-0.5 bg-black"></div>
          </div>
          <h1 className="main-header lg:text-5xl">Meet With Us</h1>
          <p className="text-[#493b4e] tracking-wide">
            We offers a wide range of high-quality products
          </p>
        </div>
        <div className="responsive-grid gap-8 mt-10 mb-16">
          {chefs.map((chef) => (
            <div
              key={chef.id}
              className="col-span-4 text-center flex flex-col p-6 bg-[#f2f2f2c7] rounded-lg"
            >
              <div className="shrink-0 mb-4">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  width={160}
                  height={160}
                  className="mx-auto object-contain object-center"
                />
              </div>
              <h2 className="chef-name text-xl font-semibold">{chef.name}</h2>
              <p className="position text-sm">{chef.title}</p>
              <div className="flex justify-center items-center space-x-4 mt-4">
                <span className="p-1 text-xs bg-[#d9d9d9ab] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="13"
                    width="13"
                    viewBox="0 0 488 512"
                  >
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                </span>
                <span className="p-1 text-xs bg-[#d9d9d9ab] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="13"
                    width="13"
                    viewBox="0 0 320 512"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </span>
                <span className="p-1 text-xs bg-[#d9d9d9ab] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="13"
                    width="13"
                    viewBox="0 0 512 512"
                  >
                    <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                  </svg>
                </span>
                <span className="p-1 text-xs bg-[#d9d9d9ab] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="13"
                    width="13"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <!-- meet with us ends --> */}
      {/* <!-- nutrient starts --> */}
      <section className="relative w-full h-[650px] lg:min-h-[909px] mt-14">
        <Image
          src="/assets/about-hero-2.png"
          alt="Home page second hero background image"
          fill
          size="100vw"
          className="[mask-image:_linear-gradient(to_top,_rgba(0,0,0,1),_transparent)] object-center object-cover -z-10"
        />
        <div className="fluid-layout h-full grid items-start md:items-center grid-cols-12">
          <div className="col-span-full md:col-start-9 md:col-span-4 mt-20 md:mt-0">
            <div className="flex items-center space-x-4">
              <h2 className={`${dancingScript.className} text-2xl`}>
                Organic Meal Plan
              </h2>
              <div className="w-10 h-0.5 bg-black"></div>
            </div>
            <h1 className="main-header">
              Nutrient <br className="hidden md:inline" />
              Rich Fruit
            </h1>
            <p className="description">
              Elevate your diet with our carefully selected organic fruits.
              Packed with essential vitamins and antioxidants.
            </p>
            <Button styles="primary-btn">SHOW ALL</Button>
          </div>
        </div>
      </section>
      {/* <!-- nutrient ends --> */}
      {/* <!-- company logo starts --> */}
      <section
        className="fluid-layout responsive-grid gap-8"
        id="logos-container"
      >
        {logos.map((logo, index) => (
          <div
            key={index + logo}
            className="col-span-full sm:col-span-4 lg:col-span-3 px-8 py-4 bg-slate-100 rounded-lg"
          >
            <Image
              src={logo}
              width={119}
              height={51}
              alt="Company Logo"
              className="mx-auto object-contain object-center"
            />
          </div>
        ))}
      </section>
      {/* <!-- company logo ends --> */}
    </>
  );
}
