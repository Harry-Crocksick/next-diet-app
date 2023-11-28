import { faqs } from "@/lib/FAQs";
import { contacts } from "@/lib/contact-card-data";
import Image from "next/image";
import { dancingScript } from "@/utils/fonts";
import Button from "@/components/Button";

export const metadata = {
  title: "Contact Us",
};

export default function Page() {
  return (
    <>
      {/* <!-- contact hero starts --> */}
      <section className="relative flex justify-center items-center w-full h-[597px]">
        <Image
          src="/assets/contact-hero-1.png"
          alt="Contact page hero background image"
          fill
          priority
          size="100vw"
          className="object-center object-cover -z-10"
        />
        <div className="text-center">
          <h1 className="main-header">Contact Us</h1>
          <p>Home / Contact Us</p>
        </div>
      </section>
      {/* <!-- contact hero ends --> */}
      {/* <!-- get in touch starts --> */}
      <section className="fluid-layout">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-3">
            <div className="w-10 h-0.5 bg-black"></div>
            <h2 className={`${dancingScript.className} text-2xl mb-2`}>
              Contact Us
            </h2>
            <div className="w-10 h-0.5 bg-black"></div>
          </div>
          <h1 className="main-header lg:text-5xl">Get in touch with us</h1>
          <p className="text-[#493b4e] tracking-wide">
            Contact for assistance and personalized dietary guidance.
          </p>
        </div>
        <div className="responsive-grid gap-4 mt-10">
          {contacts.map((contact) => (
            <div className="flex justify-center items-center col-span-4 bg-[#e3e29060] py-8 px-3 rounded-lg">
              <div className="flex items-center space-x-8">
                <div className="">
                  <h2 className="text-xl font-semibold">{contact.title}</h2>
                  <p>{contact.address}</p>
                </div>
                <div className="bg-white rounded-full p-4 shrink-0">
                  <Image
                    src={contact.image}
                    alt={contact.title}
                    width={70}
                    height={70}
                    className="w-14 h-14 object-contain object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <!-- get in touch ends --> */}
      {/* <!-- FAQ starts --> */}
      <section className="fluid-layout">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-3">
            <div className="w-10 h-0.5 bg-black"></div>
            <h2 className={`${dancingScript.className} text-2xl mb-2`}>
              Helpful Information
            </h2>
            <div className="w-10 h-0.5 bg-black"></div>
          </div>
          <h1 className="main-header lg:text-5xl">Frequently Ask Questions</h1>
          <p className="text-[#493b4e] tracking-wide mt-4">
            Explore our comprehensive for dieting and nutrition
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {faqs.map((faq) => (
            <div key={faq.question} className="col-span-2">
              <h2 className="text-xl font-semibold mb-4">{faq.question}</h2>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      {/* <!-- FAQ ends --> */}
      {/* <!-- reach out starts --> */}
      <section className="fluid-layout">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-3">
            <div className="w-10 h-0.5 bg-black"></div>
            <h2 className={`${dancingScript.className} text-2xl mb-2`}>
              Connect with us
            </h2>
            <div className="w-10 h-0.5 bg-black"></div>
          </div>
          <h1 className="main-header lg:text-5xl">Feel free to reach out</h1>
          <p className="text-[#493b4e] tracking-wide mt-4">
            Feel free to contact us for any assistance you may need.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 items-center mt-12 mb-16">
          <div className="basis-full md:basis-1/2 mx-auto rounded-lg overflow-scroll">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.76680603175!2d96.1312435748582!3d16.837920818402257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c195111f0461f5%3A0x224087b3abdc6b2a!2sInya%20View%20Motel%20Yangon!5e0!3m2!1sen!2smm!4v1700570326171!5m2!1sen!2smm"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-[380px] h-[270px] sm:w-[350px] sm:h-[300px] mx-auto lg:w-full lg:h-[450px] object-contain object-center"
            ></iframe>
          </div>
          <form
            action="/"
            method="post"
            className="basis-full md:flex-1 flex flex-col space-y-4"
          >
            <div>
              <label htmlFor="fullName" className="block">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="w-full rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="w-full rounded-md"
              />
            </div>
            <div>
              <label htmlFor="message" className="block">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                className="w-full rounded-md"
              ></textarea>
            </div>
            <Button type="submit" styles="primary-btn mt-10 ml-auto">
              SUBMIT REQUEST
            </Button>
          </form>
        </div>
      </section>
      {/* <!-- reach out ends --> */}
    </>
  );
}
