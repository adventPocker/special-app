"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from 'next/navigation'

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import Image from "next/image";
import { getMovieCardData } from "@/app/utils/getData";

SwiperCore.use([Autoplay]);
const Sections2 = () => {
  const [movieData, setMovieData] = useState<ApiFilmCard>();
  const router = useRouter()

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const data = await getMovieCardData();
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    }

    fetchMovieData();
  }, []);
  return (
    <>
      <div className="items-center  w-full flex flex-col  justify-center px-4 h-auto  max-md:px-5 ">
        <div className="w-full max-w-[1204px]  max-md:max-w-full max-md:my-10 ">
          <div className="lg:max-w-[1198px] w-auto h-auto  md:py-40 py-16 ">
            <div className="w-full h-full ">
              <div className="bg-opacity-40 w-auto ">
                <div
                  className="font-ClashGrotesk-Medium t md:text-[40px] md:w-auto w-[350px]  font-medium md:leading-[56px] md:tracking-normal  text-center text-[25px]  leading-[35px]"
                  style={{
                    background:
                      "linear-gradient(238.7deg, #FF6572 31.09%, #A7426F 83.44%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  We are makers of unforgettable stories
                </div>
                <div className="mt-20 ">
                  <Swiper
                    spaceBetween={10}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                      360: {
                        // width: 576,
                        slidesPerView: 1,
                      },
                      576: {
                        // width: 576,
                        slidesPerView: 4,
                      },
                      768: {
                        // width: 768,
                        slidesPerView: 6,
                      },
                    }}
                    className="mySwiper"
                  >
                    {" "}
                    {movieData?.data.map((data: CardFilm, index: number) => (
                      <SwiperSlide key={index}>
                        <button onClick={() => router.push(`/projects/${data.attributes.slug}`)} type="button">
                        <Image
                          className="w-auto h-[95px] hover:cursor-pointer  hover:scale-125 px-5 py-3 object-contain transition-transform duration-500 ease-in-out delay-100"
                          src={`${data?.attributes.TitleImage.data.attributes.url}`}
                          alt=""
                          width={120}
                          height={95}
                        />
                        </button>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-between items-center m-auto px-[121px]  ">
            <img src="/Image/Line.png" alt="line" className="w-full h-[1px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sections2;
