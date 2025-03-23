import React from "react";
import { Icon } from "../Element/Icon";
import Image from "next/image";

const SectionsC3 = () => {
  const backgroundGradient = {
    background:
      "var(--L01, linear-gradient(239deg, #FFDAA9 31.09%, #FDB478 83.44%))",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <>
      <div className="items-center flex flex-col justify-center h-auto px-5 max-md:px-5 ">
        <div className="w-full max-w-[1128px]  max-md:max-w-full max-md:my-10 ">
          <div className="md:py-40 py-20">
            <div className="md:flex gap-9">
              <div className="w-full  ">
                <div
                  className=" md:text-5xl font-medium font-ClashGrotesk-Medium md:leading-[67.20px] text-[25px] leading-[140%] "
                  style={{
                    background:
                      "var(--l02, linear-gradient(239deg, #FF6572 31.09%, #A7426F 83.44%))",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  About Company
                </div>
                <div className="flex gap-7 md:hidden mt-9">
                  <div className="flex flex-col justify-center items-start gap-4">
                    <div className="w-auto h-auto">
                      <img src="Image/Camera.svg" alt="" className="" />
                    </div>
                    <div className="text-orange-200 text-[18px] font-normal font-ClashGrotesk-Medium leading-[30.80px]">
                      10 Years
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-start gap-4">
                    <div className="w-auto h-auto">
                      <img src="Image/Camera.svg" alt="" className="" />
                    </div>
                    <div className="text-orange-200 text-[18px] font-normal font-ClashGrotesk-Medium leading-[30.80px]">
                      10 Years
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-start gap-4">
                    <div className="w-auto h-auto">
                      <img src="Image/Camera.svg" alt="" className="" />
                    </div>
                    <div className="text-orange-200 text-[18px] font-normal font-ClashGrotesk-Medium leading-[30.80px]">
                      10 Years
                    </div>
                  </div>
                  
                </div>
                <div className="w-full text-[#A1A0A0] font-archive text-base font-normal tracking-normal leading-relaxed mt-9">
                  Welcome to OPM Cinemas, a cinematic journey led by the
                  visionary filmmaker Aashiq Abu since its inception in October
                  2012. Renowned for his versatile contributions to Malayalam
                  cinema, Abu spearheads OPM Cinemas, a dynamic production house
                  excelling in film, television, and advertising. With a
                  commitment to originality and innovation, we weave captivating
                  narratives that transcend genres, creating a profound impact
                  on audiences. Under the banner of OPM, Aashiq Abu's leadership
                  extends to OPM Dream Mill Cinemas, nurturing emerging talent.
                  Join us as we continue to redefine storytelling, where every
                  frame is a testament to our dedication to the art of original
                  pixels in motion
                </div>
                <div className="md:flex gap-6 hidden ">
                  <div className="w-[140px] h-[132px] p-5 rounded-3xl justify-center items-center  mt-9">
                    <div className="flex-col justify-center items-center gap-[17px] inline-flex">
                      <div className="w-[44.52px] h-11 relative">
                        <div className="w-[43.48px] h-[42.96px] left-[0.52px] top-[0.52px] absolute">
                          <img src="Image/Camera.svg" alt="" className="" />
                        </div>
                      </div>
                      <div className="text-orange-200 text-[22px] font-medium font-['Clash Grotesk'] leading-[30.80px]">
                        10 Years
                      </div>
                    </div>
                  </div>
                  <div className="w-[140px] h-[132px] p-5 rounded-3xl justify-center items-center  mt-9">
                    <div className="flex-col justify-center items-center gap-[17px] inline-flex">
                      <div className="w-[44.52px] h-11 relative">
                        <div className="w-[43.48px] h-[42.96px] left-[0.52px] top-[0.52px] absolute">
                          <img src="Image/Camera.svg" alt="" className="" />
                        </div>
                      </div>
                      <div className="text-orange-200 text-[22px] font-medium font-['Clash Grotesk'] leading-[30.80px]">
                        10 Years
                      </div>
                    </div>
                  </div>
                  <div className="w-[140px] h-[132px] p-5 rounded-3xl justify-center items-center  mt-9">
                    <div className="flex-col justify-center items-center gap-[17px] inline-flex">
                      <div className="w-[44.52px] h-11 relative">
                        <div className="w-[43.48px] h-[42.96px] left-[0.52px] top-[0.52px] absolute">
                          <img src="Image/Camera.svg" alt="" className="" />
                        </div>
                      </div>
                      <div className="text-orange-200 text-[22px] font-medium font-['Clash Grotesk'] leading-[30.80px]">
                        10 Years
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:min-w-[472px] h-full md:order-first md:mt-0 mt-9">
                <Image
                  src="/Image/banner-2.jpg"
                  alt=""
                  className="md:w-[472px] md:h-[542px] h-auto w-auto rounded-3xl object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center m-auto md:px-[121px]   ">
            <img src="/Image/Line.png" alt="line" className="w-full h-[1px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionsC3;
