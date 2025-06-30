import ReactIcon from "../assets/react.svg";
import TypeScriptIcon from "../assets/typescript.svg";
import NextJsIcon from "../assets/nextjs.svg";
import postgresIcon from "../assets/postgres.svg";
import awsIcon from "../assets/aws.svg";
import cloudflareIcon from "../assets/cloudflare.png";
import laravelIcon from "../assets/laravel.webp";

export default function Skills() {
  return (
    <div className="bg-gray-50 py-8 overflow-hidden">
      <div className="w-full">
        <div className="flex gap-30 animate-scroll whitespace-nowrap">
          <img src={ReactIcon} alt="React" className="size-20 shrink-0" />
          <img
            src={TypeScriptIcon}
            alt="TypeScript"
            className="size-20 shrink-0"
          />
          <img src={NextJsIcon} alt="Next.js" className="size-20 shrink-0" />
          <img src={laravelIcon} alt="Laravel" className="size-20 shrink-0" />
          <img src={awsIcon} alt="AWS" className="size-20 shrink-0" />
          <img
            src={cloudflareIcon}
            alt="Cloudflare"
            className="h-16 w-28 shrink-0"
          />
          <img src={postgresIcon} alt="Postgres" className="size-20 shrink-0" />
          {/* Duplicate for seamless loop */}
          <img src={ReactIcon} alt="React" className="size-20 shrink-0" />
          <img
            src={TypeScriptIcon}
            alt="TypeScript"
            className="size-20 shrink-0"
          />
          <img src={NextJsIcon} alt="Next.js" className="size-20 shrink-0" />
          <img src={laravelIcon} alt="Laravel" className="size-20 shrink-0" />
          <img src={awsIcon} alt="AWS" className="size-20 shrink-0" />
          <img
            src={cloudflareIcon}
            alt="Cloudflare"
            className="h-16 w-28 shrink-0"
          />
          <img src={postgresIcon} alt="Postgres" className="size-20 shrink-0" />
        </div>
      </div>
    </div>
  );
}
