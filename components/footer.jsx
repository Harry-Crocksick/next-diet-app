import Link from "next/link";
import { aboutLinks, productLinks } from "@/lib/footer-data";

export default function Footer() {
  return (
    <footer className="mt-12 lg:mt-24">
      <section className="py-10 bg-[#231f20]">
        <div className="secondary-fluid-layout grid grid-cols-12 gap-6 text-white">
          <div className="col-span-full md:col-span-6">
            <h2 className="mb-4 font-medium text-xl">DIET PLAN</h2>
            <p className="max-w-[450px] text-[#d9d9d9]">
              Our comprehensive diet plan is designed to optimize your nutrition
              and support your health goals, ensuring a balanced and sustainable
              approach to eating.
            </p>
          </div>
          <div className="col-span-full md:col-span-6 lg:col-span-2">
            <h4 className="mb-4">PRODUCT</h4>
            <ul className="text-[#d9d9d9] flex flex-col space-y-2">
              {productLinks.map((link) => (
                <li key={link}>
                  <Link
                    href={link.split(" ")[0].toLowerCase()}
                    className="hover:text-cyan-500 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-full md:col-span-6 lg:col-span-2">
            <h4 className="mb-4">ABOUT</h4>
            <ul className="text-[#d9d9d9] flex flex-col space-y-2">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <Link
                    href={link.split(" ")[0].toLowerCase()}
                    className="hover:text-cyan-500 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <address className="flex flex-col space-y-2 not-italic col-span-full md:col-span-6 lg:col-span-2 text-[#d9d9d9]">
            <h4 className="mb-2">CONTACT</h4>
            <p>MMSIT</p>
            <p>09-445539703</p>
            <p>Shan Kone Street</p>
          </address>
        </div>
      </section>
      <section className="py-4 bg-black text-white">
        <div className="secondary-fluid-layout flex flex-wrap gap-4 justify-between items-center">
          <div className="left">
            &copy;<span id="year"></span>MMSIT | All rights reserved
            <br />
            Developed by{" "}
            <Link
              href="https://www.facebook.com/james.christian.3914207"
              target="_blank"
              className="text-cyan-500 font-medium underline decoration-dashed"
            >
              Marn Tet Zan
            </Link>
          </div>
          <div className="right">MMSIT BUD</div>
        </div>
      </section>
    </footer>
  );
}
