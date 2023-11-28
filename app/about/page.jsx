import Image from "next/image";
import { chefs } from "@/lib/chef-data";
import { logos } from "@/lib/logo";
import { dancingScript } from "@/utils/fonts";
import Button from "@/components/Button";

export const metadata = {
  title: "About Us",
};

export default function Page() {
  return (
    <>
      {/* <!-- about hero starts --> */}
      <section className="relative w-full h-[590px] bg-about-hero-img-1 bg-no-repeat bg-center bg-cover">
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
            <li className="col-span-2 inline-flex items-center space-x-4">
              <span className="material-symbols-outlined text-[14px] text-emerald-500 p-1 bg-[#e3d9ea] rounded-full">
                check
              </span>
              <p>Nature's bounty with fresh</p>
            </li>
            <li className="col-span-2 inline-flex items-center space-x-4">
              <span className="material-symbols-outlined text-[14px] text-emerald-500 p-1 bg-[#e3d9ea] rounded-full">
                check
              </span>
              <p>Fresh Juice with Selections</p>
            </li>
            <li className="col-span-2 inline-flex items-center space-x-4">
              <span className="material-symbols-outlined text-[14px] text-emerald-500 p-1 bg-[#e3d9ea] rounded-full">
                check
              </span>
              <p>Flavorful selection</p>
            </li>
            <li className="col-span-2 inline-flex items-center space-x-4">
              <span className="material-symbols-outlined text-[14px] text-emerald-500 p-1 bg-[#e3d9ea] rounded-full">
                check
              </span>
              <p>Elevate Your Health!</p>
            </li>
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
                <span className="p-1 text-xs bg-[#d9d9d975] rounded-full">
                  <i className="fa-brands fa-google fa-fw"></i>
                </span>
                <span className="p-1 text-xs bg-[#d9d9d975] rounded-full">
                  <i className="fa-brands fa-facebook-f fa-fw"></i>
                </span>
                <span className="p-1 text-xs bg-[#d9d9d975] rounded-full">
                  <i className="fa-brands fa-twitter fa-fw"></i>
                </span>
                <span className="p-1 text-xs bg-[#d9d9d975] rounded-full">
                  <i className="fa-brands fa-linkedin-in fa-fw"></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <!-- meet with us ends --> */}
      {/* <!-- nutrient starts --> */}
      <section className="w-full h-[703px] bg-no-repeat bg-cover bg-center bg-about-hero-img-2">
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
