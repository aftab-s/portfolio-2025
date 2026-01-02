import React, { useEffect } from "react";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { smallSphere, stars } from "../assets";
import { ToastContainer, toast } from "react-toastify";
import { useForm, ValidationError } from "@formspree/react";
import "react-toastify/dist/ReactToastify.css";
import "../toast.css";

const Pricing = () => {
  const [state, handleSubmit] = useForm("xbdlojrg");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thank you. I will get back to you as soon as possible.", {
        className: "toast-success",
      });
    }
  }, [state.succeeded]);

  return (
    <Section crosses className="overflow-hidden" id="contact">
      <div className="container mx-auto px-4 py-16 relative z-2">
      <div className="hidden relative justify-center mb-[10rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>
        <div className="lg:text-center mb-12">
          <Heading tag="Contact Me" title="Get in Touch" />
        </div>
        <div className="max-w-lg mx-auto p-0.5 bg-gradient-to-r from-yellow-200 via-red-200 via-blue-400 via-teal-400 to-purple-500 rounded-lg">
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-no-repeat p-8 rounded-lg shadow-lg bg-n-7"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-200 text-sm font-thin mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full px-3 py-2 border border-n-6 rounded-lg text-gray-400 focus:outline-none focus:border-blue-500 bg-n-7 placeholder:text-sm"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-200 text-sm font-thin mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                className="w-full px-3 py-2 border border-n-6 rounded-lg text-gray-400 focus:outline-none focus:border-blue-500 bg-n-7 placeholder:text-sm"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-gray-200 text-sm font-thin mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="The subject line"
                className="w-full px-3 py-2 border border-n-6 rounded-lg text-gray-400 focus:outline-none focus:border-blue-500 bg-n-7 placeholder:text-sm"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-200 text-sm font-thin mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Type your message here"
                className="w-full px-3 py-2 border border-n-6 rounded-lg text-gray-400 focus:outline-none focus:border-blue-500 bg-n-7 placeholder:text-sm"
                required
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                disabled={state.submitting}
                className="text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:from-blue-600 focus:to-purple-600"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </Section>
  );
};

export default Pricing;
