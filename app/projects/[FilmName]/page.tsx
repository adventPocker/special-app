"use client";
import Footer from "@/app/components/GlobalELements/Footer";
import SectionF1 from "./Sections/SectionF1";
import { SectionF2 } from "./Sections/SectionF2";
import SectionF3 from "./Sections/SectionF3";
import SectionsF10 from "./Sections/SectionsF10";
import { SectionsF4 } from "./Sections/SectionsF4";
import SectionF5 from "./Sections/SectionsF5";
import SectionsF6 from "./Sections/SectionsF6";
import SectionsF7 from "./Sections/SectionsF7";
import SectionsF8 from "./Sections/SectionsF8";
import SectionsF9 from "./Sections/SectionsF9";
import { useEffect, useState } from "react";
import { getFilmData } from "@/app/utils/getData";
import Loading from "@/app/utils/LoadingUi";
import PageNotFound from '@/app/components/GlobalELements/PageNotFound'
export default function Home({ params }: { params: { FilmName: string } }) {
  const [FilmData, setFilmData] = useState<FilmData[] >();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFilmData({
          slugs: params.FilmName,
        });
        console.log("its here");
        console.log(data);
        setFilmData(data.data);
        setLoading(false)
      } catch (error) {
         setLoading(false)

        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    {loading ? (
      <Loading />
    ) : (
      <>
        {FilmData && FilmData.length > 0 ? (
          <>
<SectionF1 data={FilmData} />
            <SectionF2 data={FilmData} />
            <SectionF3 data={FilmData[0].attributes.LeadCast}/>
           {FilmData[0].attributes.Review.length > 0 && <SectionsF4  reviewData={FilmData[0].attributes.Review}/>}
            <SectionF5 data={FilmData[0].attributes.LeadCrew}/>
           { FilmData[0].attributes.Awards.length > 0 &&<SectionsF6 awardData={FilmData[0].attributes.Awards}/>}
            <SectionsF7 GalleryData={FilmData[0].attributes.Gallery}/>
            <SectionsF8 data={FilmData}/>
            <SectionsF9  VideosData={FilmData[0].attributes.Videos} AudioData={FilmData[0].attributes.Music}/>
            <SectionsF10 />
            <Footer />
          </>
        ) : (
       <PageNotFound/>  
        )}
      </>
    )}
  </>
  );
}
