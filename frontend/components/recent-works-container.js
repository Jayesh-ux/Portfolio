import Card from "./card";
import { useEffect, useState } from "react";
import axios from 'axios';



const RecentWorksContainer = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  
    return (
      <section id="recentwork" className="absolute h-[25.9%] w-full top-[50%] right-[0.09%] bottom-[24.1%] left-[-0.09%] text-center text-30xl-5 text-dominant font-princess-sofia">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/nishithparikhnsunjx3q9lgunsplash-1@2x.png"
        />
        <h1 className="m-0 absolute top-[calc(50%_-_392.2px)] left-[calc(50%_-_164.8px)] text-inherit font-normal font-inherit flex items-center w-[338.4px] h-[76.2px]">
          <span className="w-full">
            <span>{`My Recent `}</span>
            <span className="text-color-3">Works</span>
          </span>
        </h1>
        <div className="absolute w-[100.08%] top-[calc(50%_-_212px)] right-[-0.03%] left-[-0.04%] flex flex-row flex-wrap items-center justify-center gap-[43.54px]">
          <button className="cursor-pointer [border:none] py-[15.56469440460205px] px-[49.80702209472656px] bg-darkslategray-100 rounded-[37.36px] [backdrop-filter:blur(12.45px)] overflow-hidden flex flex-row items-start justify-start hover:bg-lightseagreen hover:cursor-auto hover:animate-[2s_ease_0s_infinite_normal_none_shadow-pop-tr] hover:opacity-[1]">
            <div className="relative text-11xl font-kavoon text-dominant text-center flex items-center justify-center w-[157px] h-[23px] shrink-0">
              Django
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-[15.56469440460205px] px-[49.80702209472656px] bg-darkslategray-100 rounded-[37.36px] [backdrop-filter:blur(12.45px)] overflow-hidden flex flex-row items-start justify-start hover:bg-lightseagreen hover:animate-[2s_ease_0s_1_normal_none_shadow-pop-tr] hover:opacity-[1]">
            <div className="relative text-11xl font-kavoon text-dominant text-center flex items-center justify-center w-[157px] h-[23px] shrink-0">
              React
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-[15.56469440460205px] px-[49.80702209472656px] bg-darkslategray-100 rounded-[37.36px] flex flex-row items-start justify-start hover:bg-lightseagreen hover:animate-[2s_ease_0s_1_normal_none_shadow-pop-tr] hover:opacity-[1]">
            <div className="relative text-11xl font-kavoon text-dominant text-center flex items-center justify-center w-[157px] h-[23px] shrink-0">
              Nextjs
            </div>
          </button>
        </div>
        <div className="absolute w-[100.09%] top-[calc(50%_+_57.5px)] right-[0%] left-[-0.09%] h-[410px] overflow-y-auto flex flex-row flex-wrap items-center justify-center gap-[40.39px] text-left text-3xs-2 text-color-31 font-text-small">
        {data.map(item => (
           <Card  key={item.id} item={item} />
           ))}
        </div>
      </section>
    );
  };
  
  export default RecentWorksContainer;
  // <img  src={image.image_url} alt={image.title} />