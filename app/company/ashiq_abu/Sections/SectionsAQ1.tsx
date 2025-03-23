import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/GlobalELements/Navbar";
interface SectionsAQ1props {
  data: DataAttributes;
  
}
const SectionsAQ1 = ({ data }: SectionsAQ1props) => {
  const divStyles = {
    background: `
                  linear-gradient(180deg, rgba(18, 18, 18, 0) 44.18%, #121212 100%),
                  linear-gradient(180deg, rgba(18, 18, 18, 0.6) 0%, rgba(18, 18, 18, 0) 18.41%),
                  radial-gradient(97.84% 38.52% at 17% 85.19%, rgba(18, 18, 18, 0.7) 32.81%, rgba(18, 18, 18, 0.07) 100%)
                `,
  };
  return (
    <>
      <main className=" h-[100vh]  w-full relative">
        <Image
          src={`https://app.opmcinemas.com${data.Image.data.attributes.url}`}
          alt={data.Image.data.attributes.name}
          width={1000}
          loading="eager"
          height={1000}
          className="object-cover  min-h-[100vh] w-[100vw] h-full "
        />
        <div className="items-center  w-full flex flex-col px-5 max-md:px-5 h-full absolute top-0 ">
          <div className="w-full max-w-[1204px] max-md:max-w-full max-md:my-10 min-h-screen h-full relative">
            <Navbar />
            <div className="w-full absolute bottom-0 pb-[15.625vh] md:block hidden">
              <div className="text-center text-white text-[19px] font-normal font-archive leading-relaxed">
                Film Director | Actor | Producer | Distributor
              </div>
              <div className="text-orange-200 text-[78px] font-medium font-ClashGrotesk-Medium text-center leading-[109.20px]">
                {data.Name}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SectionsAQ1;
