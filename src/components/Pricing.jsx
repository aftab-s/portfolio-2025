import React from 'react';
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="contact">
      <div className="container mx-auto px-4 py-16 relative z-2">
        <div className="text-center mb-12">
          <Heading tag="Contact Me" title="Get in Touch" />
        </div>
        <div className="max-w-lg mx-auto p-1 bg-gradient-to-r from-yellow-200 via-red-200 via-blue-400 via-teal-400 to-purple-500 rounded-lg">
          <form className="max-w-lg mx-auto bg-no-repeat p-8 rounded-lg shadow-lg bg-black">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-200 text-sm font-thin mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <Button
                type="submit"
                className="text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:from-blue-600 focus:to-purple-600"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;