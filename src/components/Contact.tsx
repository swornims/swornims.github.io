import emailjs from "@emailjs/browser";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import { useRef } from "react";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            alert("Thank you! Your message has been sent.");
            form.current?.reset(); // ✅ Clear form
          },
          (error) => {
            console.error("FAILED...", error.text);
            alert("Oops! Something went wrong. Please try again.");
          }
        );
    } else {
      console.log("Form reference is null.");
    }
  };

  return (
    <div
      id="connect"
      className="space-y-6 bg-gray-50 px-4 sm:px-6 lg:px-30 py-12 md:py-20"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 md:mb-10">
        Connect with Me
      </h1>
      <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-20">
        <section className="w-full lg:w-1/2 space-y-6 md:space-y-8">
          <p className="text-sm sm:text-base leading-relaxed">
            I'm always open to new opportunities, collaborations, or just a good
            conversation about tech and web development. Whether you have a
            project in mind, want to work together, or simply want to say hi —
            feel free to reach out!
          </p>
          <section className="flex items-center gap-4 md:gap-5 pl-1 md:pl-2">
            <a href="https://www.linkedin.com/in/swarnim-ratna-shakya/">
              <img
                src={linkedinIcon}
                alt="Linkedin icon"
                className="h-6 w-7 md:h-7 md:w-8"
              />
            </a>
            <a href="https://github.com/swornims">
              <img
                src={githubIcon}
                alt="Github icon"
                className="size-6 md:size-7"
              />
            </a>
          </section>
        </section>
        <section className="w-full lg:w-1/2">
          <form
            className="space-y-4 md:space-y-5"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
              <div className="space-y-2 w-full sm:w-1/2">
                <label className="block text-base md:text-lg">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  className="border w-full rounded-md py-2 md:py-1 px-3 md:px-4 text-sm md:text-base"
                  required
                />
              </div>
              <div className="space-y-2 w-full sm:w-1/2">
                <label className="block text-base md:text-lg">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  className="border w-full rounded-md py-2 md:py-1 px-3 md:px-4 text-sm md:text-base"
                  required
                />
              </div>
            </div>
            <div className="space-y-2 w-full">
              <label className="block text-base md:text-lg">
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                className="border w-full rounded-md py-2 md:py-1 px-3 md:px-4 text-sm md:text-base"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-base md:text-lg">Description</label>
              <textarea
                name="message"
                className="border rounded-md w-full h-24 sm:h-28 py-2 md:py-1 px-3 md:px-4 text-sm md:text-base resize-vertical"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gray-800 text-white px-6 md:px-8 py-2 rounded-md cursor-pointer hover:bg-gray-700 transition-colors duration-300 text-sm md:text-base w-full sm:w-auto"
            >
              Get in touch
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
