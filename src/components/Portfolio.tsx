import gautamgift from "../assets/gautamgift.png";
import hudderfax from "../assets/hudderfax.png";
import fundnepal from "../assets/fundnepal.png";

export default function Portfolio() {
  return (
    <div
      id="portfolio"
      className="mx-auto max-w-screen-xl space-y-6 md:space-y-8 my-8 md:my-10 scroll-mt-46 px-4"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium">
        What I have built so far...
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 justify-items-center">
        <article className="relative w-full h-64 sm:h-80 md:h-96 cursor-pointer overflow-hidden group rounded-md shadow-md">
          <img
            src={gautamgift}
            alt="Gautam Gift Emporium"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Text on hover */}
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4 text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Gautam Gift Emporium
            </h1>
            <p className="text-sm sm:text-base font-normal">
              A digital catalogue for premium handicraft sculptures made in
              Nepal.
            </p>
          </div>
        </article>
        <article className="relative w-full h-64 sm:h-80 md:h-96 cursor-pointer overflow-hidden group rounded-md shadow-md">
          <img
            src={hudderfax}
            alt="Hudderfax Organics"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Text on hover */}
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4 text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Hudderfax Organics
            </h1>
            <p className="text-sm sm:text-base font-normal">
              An e-commerce website built for local traders.
            </p>
          </div>
        </article>
        <article className="relative w-full h-64 sm:h-80 md:h-96 cursor-pointer overflow-hidden group rounded-md shadow-md md:col-span-2 md:max-w-xl md:mx-auto">
          <img
            src={fundnepal}
            alt="Fund Nepal"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Text on hover */}
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4 text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Fund Nepal
            </h1>
            <p className="text-sm sm:text-base font-normal">
              Nepal's first dedicated crowdfunding platform.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
