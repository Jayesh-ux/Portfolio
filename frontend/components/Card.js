import React from 'react'


const Card = ({item}) => {

  
  return (
    <>

        <div className="w-[390px] h-[184.8px] flex flex-row items-start justify-between">
          <img
            className="self-stretch relative rounded-tl-11xl-3 rounded-tr-none rounded-br-none rounded-bl-11xl-3 max-h-full w-[202px] object-cover"
            alt="Image not found"
            //{origin} {data.url}
            src={item.img}

          />
          <div className="self-stretch rounded-tl-none rounded-tr-11xl-3 rounded-br-11xl-3 rounded-bl-none bg-gray1-200 [backdrop-filter:blur(2.21px)] w-[202px] flex flex-col items-center justify-between">
            <div className="self-stretch rounded-[28.77px] h-[123.4px] flex flex-col items-center justify-between">
              <div className="self-stretch flex flex-col items-start justify-start">
                <h6 className="m-0 relative text-inherit leading-[15.32px] font-normal font-inherit">
                  Project
                </h6>
                <h3 className="m-0 self-stretch relative text-smi-3 leading-[18.38px] font-semibold font-inherit text-color-3 overflow-hidden text-ellipsis whitespace-nowrap">
                  {item.title}
                </h3>
              </div>
              <h3 className="m-0 self-stretch relative text-inherit leading-[15.32px] font-normal font-inherit">
                {item.desc}
              </h3>
            </div>
            <button
              className="cursor-pointer [border:none] py-[4.5948357582092285px] px-[12.25289535522461px] bg-color-1 rounded-[32.63px] overflow-hidden flex flex-row items-center justify-center gap-[4.59px] hover:bg-royalblue">
              <div className="relative text-xs leading-[20px] font-text-small text-color-3 text-center">
              <a role="button" href={item.url}>
                Read more
              </a>
              </div>
              <img
                className="relative w-[12.3px] h-[12.3px] overflow-hidden shrink-0"
                alt=""
                src="/icon.svg"
              />
            </button>
          </div>
        </div>

    
    </>
  )
}

export default Card
