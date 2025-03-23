"use client";
import { useEffect, useState } from "react";
import SectionsF10 from "@/app/projects/[FilmName]/Sections/SectionsF10";
import SectionsAQ1 from "./Sections/SectionsAQ1";
import SectionsAQ2 from "./Sections/SectionsAQ2";
import SectionsAQ3 from "./Sections/SectionsAQ3";
import Footer from "@/app/components/GlobalELements/Footer";
import SectionsAQ4 from "./Sections/SectionsAQ4";
import { getPersonalData } from "@/app/utils/getData";

export default function Home() {
  const [perosnalData, setPersonalData] = useState<DataAttributes>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPersonalData();
        setPersonalData(data.data.attributes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {perosnalData && (
        <>
          <SectionsAQ1 data={perosnalData}  />
          <SectionsAQ2 biography={perosnalData.Biography} imgSrc={perosnalData.ProfileImg.data.attributes.url}/>
          <SectionsAQ3 Director={perosnalData.Director} Actor={perosnalData.Actor} Producer={perosnalData.Producer} />
          <SectionsAQ4  data={perosnalData.Awards} />
          <SectionsF10 />
        </>
      )}
      <Footer />
    </>
  );
}
