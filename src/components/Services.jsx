import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Button from "./Button";
import { GradientLight } from "./design/Benefits";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section crosses id="how-to-use">
      <div className="container">
        <Heading tag="Beyond Work" title="Me Outside of Work" />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"> 
          {/* border-gradient-to-r from-transparent via-emerald-400 to-transparent */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Community</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Building inclusive tech communities through knowledge sharing.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 pb-20 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15 lg:pb-20">
                <h4 className="h4 mb-4">Tech Blogger</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Stay updated with the latest trends in technology, insightful
                  articles, and in-depth reviews. Join me on my journey through
                  the tech world!
                </p>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:bottom-10 lg:right-5 lg:left-auto lg:transform-none">
                <Button
                  href="https://aftabs.hashnode.dev/"
                  className="text-white bg-n-8 px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:from-blue-600 focus:to-purple-600"
                >
                  Explore Blogs
                </Button>
              </div>
              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Public Speaker</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  I love speaking at tech events and workshops, bringing a
                  unique blend of humor and real-world insights to cloud-native
                  and observability topics. My goal? To make every talk an
                  engaging experience that leaves people informed, entertained,
                  and excited to try something new.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 50%" }} // Adjust this value as needed
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
