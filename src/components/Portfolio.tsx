import gautamgift from "../assets/gautamgift.png";
import hudderfax from "../assets/hudderfax.png";

export default function Portfolio() {
  return (
    <div
      id="portfolio"
      className="mx-auto max-w-screen-xl space-y-8 my-10 scroll-mt-46"
    >
      <h1 className="text-5xl font-medium">What I have built so far...</h1>
      <section className="flex gap-10 flex-nowrap">
        <article className="relative w-1/2 h-96 cursor-pointer overflow-hidden group rounded-md shadow-md">
          <img
            src={gautamgift}
            alt="Gautam Gift Emporium"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Text on hover */}
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
            <h1 className="text-2xl font-semibold">Gautam Gift Emporium</h1>
            <p className="text-base font-normal">
              A digital catalogue for premium handicraft sculptures made in
              Nepal.
            </p>
          </div>
        </article>
        <article className="relative w-1/2 h-96 cursor-pointer overflow-hidden group rounded-md shadow-md">
          <img
            src={hudderfax}
            alt="Hudderfax Organics"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Text on hover */}
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
            <h1 className="text-2xl font-semibold">Hudderfax Organics</h1>
            <p className="text-base font-normal">
              An e-commerce website built for local traders.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
