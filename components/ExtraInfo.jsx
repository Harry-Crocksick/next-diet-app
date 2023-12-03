import Button from "./Button";

export default function ExtraInfo({ title, children }) {
  return (
    <div className="flex flex-wrap justify-between items-center my-12">
      <div className="flex space-x-2 basis-full lg:basis-1/2">
        <div className="w-1 h-[2.25rem] bg-black"></div>
        <div>
          <h2 className="text-2xl lg:text-4xl font-medium">{title}</h2>
          <p className="text-[#493b4e] tracking-wide my-6">{children}</p>
        </div>
      </div>
      <Button styles="primary-btn">SEE MORE</Button>
    </div>
  );
}
