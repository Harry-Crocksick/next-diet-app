import { homeFoods } from "@/lib/home-food-data";
import { dancingScript } from "@/utils/fonts";
import Card from "@/components/card";
import Button from "@/components/Button";
import Dots from "@/components/dots";

export default function Home() {
  return (
    <>
      {/* Hero background image section starts */}
      <section className="w-full h-[650px] lg:h-[960px] bg-hero-img-1 bg-no-repeat bg-center bg-cover">
        <div className="fluid-layout h-full grid grid-cols-12">
          <div className="col-span-full lg:col-span-5 mt-12">
            <h1 className="main-header">
              Healthy Food <br className="hidden lg:inline" />
              and Salad
            </h1>
            <p className="description">
              We provide essential nutrients, vitamins, and minerals that
              nourish the body and support overall well-being.
            </p>
            <div className="w-full flex space-x-8">
              <div>
                <h4>100%</h4>
                <h5 className="font-semibold text-lg">Organic</h5>
              </div>
              <div>
                <h4>0%</h4>
                <h5 className="font-semibold text-lg">Fat</h5>
              </div>
              <div>
                <h4>+90%</h4>
                <h5 className="font-semibold text-lg">Protein</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- products and services starts --> */}
      <section className="fluid-layout">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="flex space-x-2 basis-full lg:basis-1/2">
            <div className="w-1 h-[2.25rem] bg-black"></div>
            <div>
              <h2 className="text-2xl lg:text-4xl font-medium">
                Products and Services
              </h2>
              <p className="text-[#493b4e] tracking-wide my-6">
                We offers a wide range of high-quality products and services
                tailored to meet the diverse needs and preferences of our
                customers.
              </p>
            </div>
          </div>
          <Button styles="primary-btn">SEE MORE</Button>
        </div>
        {/* <!-- Food item cards starts --> */}
        <div className="w-full responsive-grid gap-6" id="homeCardsContainer">
          {homeFoods.map((food, index) => (
            <Card key={index} {...food} />
          ))}
        </div>
        {/* <!-- Food item cards ends --> */}
        {/* <!-- dots starts --> */}
        <Dots />
        {/* <!-- dots ends --> */}
        {/* <!-- Food item cards ends --> */}
      </section>
      {/* <!-- products and services ends --> */}
      {/* <!-- why choose us starts --> */}
      <section className="w-full h-[650px] lg:min-h-[909px] mt-14 bg-hero-img-2 bg-no-repeat bg-center bg-cover">
        <div className="fluid-layout h-full grid items-start md:items-center grid-cols-12">
          <div className="col-span-full md:col-start-9 md:col-span-4 mt-20 md:mt-0">
            <div className="flex items-center space-x-4">
              <h2 className={`${dancingScript.className} text-2xl`}>
                Why Choose Us?
              </h2>
              <div className="w-10 h-0.5 bg-black"></div>
            </div>
            <h1 className="main-header">
              Refreshing <br className="hidden md:inline" />
              Fruit Juice
            </h1>
            <p className="description">
              Start your day with a burst of freshness, indulge in our
              invigorating range of fresh juices from finest fruits
            </p>
            <Button styles="primary-btn">SHOW ALL</Button>
          </div>
        </div>
      </section>
      {/* <!-- why choose us ends --> */}
      {/* <!-- start using today starts --> */}
      <section className="fluid-layout">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="flex space-x-2 basis-full lg:basis-1/2">
            <div className="w-1 h-[2.25rem] bg-black"></div>
            <div>
              <h2 className="text-2xl lg:text-4xl font-medium">
                Start using Today
              </h2>
              <p className="text-[#493b4e] tracking-wide my-6">
                We offers a wide range of high-quality products and services
                tailored to meet the diverse needs and preferences of our
                customers.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button styles="primary-btn">SIGNUP NOW</Button>
            <Button styles="secondary-btn">REGISTER</Button>
          </div>
        </div>
      </section>
      {/* <!-- start using today ends --> */}
      {/* Hero background image ends */}
    </>
  );
}
