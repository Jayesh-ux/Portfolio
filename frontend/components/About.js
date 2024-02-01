import React from 'react'

const About = () => {
  return (
    <section id="about" className="absolute h-1/4 w-full top-[25%] right-[0%] bottom-[50%] left-[0%] bg-color-1 overflow-hidden text-center text-[64px] text-color-31 font-poppins">
      <img
        className="absolute h-full w-[100.98%] top-[0%] right-[-0.98%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover mix-blend-normal"
        alt=""
        src="/nishithparikh-apojgceggunsplash-1@2x.png"
      />
      <div
        className="absolute top-[calc(50%_-_0.25px)] left-[calc(50%_-_176.5px)] flex flex-col items-center justify-center gap-[28px] cursor-pointer [&.animate]:animate-[2s_ease_0s_1_normal_none_slit-in-vertical] opacity-[1]"
        data-animate-on-scroll
      >
        <h1
          className="m-0 relative text-inherit font-bold font-inherit flex items-center w-[363px] h-24 shrink-0 [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
          data-animate-on-scroll
        >
          <span className="w-full">
            <span>About</span>
            <span className="text-dominant">{` `}</span>
            <span className="text-color-3">me</span>
          </span>
        </h1>
        <p
          className="m-0 relative text-[18px] text-whitesmoke-100 flex items-end w-[363px] h-[216px] shrink-0 [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
          data-animate-on-scroll
        >
          <span className="w-full">
            <span className="block">
              Recent graduate with Bachelor's in Information Technology, actively seeking a 
              FullStack development.
              Excited to learn advanced technologies and contribute to a larger codebase under the guidance of experienced developers.
              Motivated to take on challenging tasks and continuously improve my skills.
            </span>
          </span>
        </p>
      </div>
    </section>

  )
}

export default About
