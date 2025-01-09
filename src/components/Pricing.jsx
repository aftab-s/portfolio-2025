import React, { useRef, useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import emailjs from "emailjs-com";

const Pricing = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_c335ng2",
        "template_8cioajo",
        {
          from_name: form.name,
          to_name: "Aftab S",
          from_email: form.email,
          to_email: "aftab.s@zohomail.in",
          subject: form.subject,
          message: form.message,
        },
        "qulS7IuH7aDgHGnQT"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Uh oh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <Section crosses className="overflow-hidden" id="contact">
      <div className="container mx-auto px-4 py-16 relative z-2">
        <div className="lg:text-center mb-12">
          <Heading tag="Contact Me" title="Get in Touch" />
        </div>
        <div className="max-w-lg mx-auto p-0.5 bg-gradient-to-r from-yellow-200 via-red-200 via-blue-400 via-teal-400 to-purple-500 rounded-lg">
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-no-repeat p-8 rounded-lg shadow-lg bg-n-7"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-200 text-sm font-thin mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-3 py-2 border border-n-6 rounded-lg text-gray-400 focus:outline-none focus:border-blue-500 bg-n-7 placeholder:text-sm"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-200 text-sm font-thin mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full px-3 py-2 border border-n-6 rounded-lg text-gray-400 focus:outline-none focus:border-blue-500 bg-n-7 placeholder:text-sm"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-200 text-sm font-thin mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="The subject line"
                className="w-full px-3 py-2 border border-n-6 rounded-lg text-gray-400 focus:outline-none focus:border-blue-500 bg-n-7 placeholder:text-sm"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-200 text-sm font-thin mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Type your message here"
                className="w-full px-3 py-2 border border-n-6 rounded-lg text-gray-400 focus:outline-none focus:border-blue-500 bg-n-7 placeholder:text-sm"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <Button
                type="submit"
                className="text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:from-blue-600 focus:to-purple-600"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;