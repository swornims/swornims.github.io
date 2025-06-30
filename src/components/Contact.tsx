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
    <div id="connect" className="space-y-6 bg-gray-50 px-30 py-20">
      <h1 className="text-5xl font-medium mb-10">Connect with Me</h1>
      <div className="flex w-full gap-20">
        <section className="w-1/2 space-y-8">
          <p>
            I'm always open to new opportunities, collaborations, or just a good
            conversation about tech and web development. Whether you have a
            project in mind, want to work together, or simply want to say hi —
            feel free to reach out!
          </p>
          <section className="flex items-center gap-5 pl-2">
            <a href="https://www.linkedin.com/in/swarnim-ratna-shakya/">
              <img src={linkedinIcon} alt="Linkedin icon" className="h-7 w-8" />
            </a>
            <a href="https://github.com/swornims">
              <img src={githubIcon} alt="Github icon" className="size-7" />
            </a>
          </section>
        </section>
        <section className="w-1/2">
          <form className="space-y-5" ref={form} onSubmit={sendEmail}>
            <div className="flex gap-5">
              <div className="space-y-2 w-1/2">
                <label className="block text-lg">First Name</label>
                <input
                  type="text"
                  name="first_name" // <-- add name attribute
                  className="border w-full rounded-md py-1 px-4"
                  required
                />
              </div>
              <div className="space-y-2 w-1/2">
                <label className="block text-lg">Last Name</label>
                <input
                  type="text"
                  name="last_name" // <-- add name attribute
                  className="border w-full rounded-md py-1 px-4"
                  required
                />
              </div>
            </div>
            <div className="space-y-2 w-full">
              <label className="block text-lg">Email Address</label>
              <input
                type="email"
                name="user_email" // <-- add name attribute
                className="border w-full rounded-md py-1 px-4"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block">Description</label>
              <textarea
                name="message" // <-- add name attribute
                className="border rounded-md w-full h-28 py-1 px-4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gray-800 text-white px-8 py-2 rounded-md cursor-pointer "
            >
              Get in touch
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
