import { useEffect, useState } from "react";
import  { Button, FormControl, Input, Textarea, useToast } from "@chakra-ui/react";
import { FormErrorMessage } from "@chakra-ui/react";
import { sendContactForm } from "../lib/api";


const FormCard = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");32
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
   
     
    const initValues = {
      name: "",
      email: "",
      message: "",
    };
    const toast = useToast()
    const initState = {values: initValues};  
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({})
    const onBlur = ({target}) => setTouched((prev) => ({...prev,
      [target.name]:true
    }))
    const { values, isLoading, error} = state;
  
    const handleChange = ({target}) => setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name] : target.value,
      },
    }))
    const onSubmit = async () => {
      setState((prev) => ({
        ...prev,
        isLoading:true,
      }));
      try {
        await sendContactForm(values);
        setTouched({});
        setState(initState);
        toast({
          title: "Message Sent.",
          status: "success",
          duration: 2000,
          position: "top",
        });
      } catch (error) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: error.message,
        }));
      }
    }
   

  return (
    <section id="contact" className="absolute h-[24.1%] w-[99.91%] top-[75.9%] right-[0.09%] bottom-[0%] left-[0%] text-left text-31xl text-color-31 font-poppins">
      <img
        className="absolute h-full w-[100.03%] top-[0%] right-[-0.03%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/rohitkhilnani7etvpcdxsw4unsplash-1@2x.png"
      />
      <div className="absolute h-full w-[87.34%] top-[0px] right-[6.29%] bottom-[0px] left-[6.37%] flex flex-row flex-wrap items-center justify-start">
        <h1 className="m-0 relative text-inherit leading-[80px] font-bold font-inherit inline-block w-[367px] h-[146px] shrink-0 hover:animate-[2s_ease_0s_1_normal_none_slide-in-left] hover:opacity-[1]">
          <span>Got a project in</span>
          <span className="text-dominant">{` `}</span>
          <span className="text-color-3">mind?</span>
        </h1>
          <div
          className="maxW-[300px]flex-1 flex flex-col items-center justify-start [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] text-base-1"
          data-animate-on-scroll
          >
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-[20.452892303466797px] gap-[21.43px] opacity-[0.44]">
            <div className="h-[84px] flex flex-col items-start justify-start gap-[8.38px]">
              {error && (
                <Textarea color="red.300" my={4} fontsize="xl">
                  {error}
                </Textarea>
              )}
              <FormControl isRequired isInvalid={touched.name && !values.name}>
              <h4 className="m-0 relative text-inherit font-bold font-inherit">
                Your name
              </h4>
              <Input
                className="  flex font-poppins text-base-1 [outline:none] self-stretch rounded-sm-4 h-[52px] flex-row flex-wrap items-center justify-start font-bold "
                placeholder="Name"
                name ='name'
                errorBorderColor="red.300"
                value={values.name}
                onChange={handleChange}
                type="text"
                maxLength={20}
                required={true}
                onBlur={onBlur}
              />
              <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
            </div>
            <div className=" h-[84px] flex flex-col items-start justify-start gap-[8.38px]">
              <FormControl isRequired isInvalid={touched.email && !values.name}>
              <h4 className="m-0 relative text-inherit font-bold font-inherit">
                Your Email
              </h4>
              <Input
                className=" flex font-poppins text-base-1 [outline:none] self-stretch rounded-sm-4 h-[52px] flex-row flex-wrap items-center justify-start font-bold"
                placeholder="Email"
                name ='email'
                errorBorderColor="red.300"
                type="email"
                value={values.email}
                onChange={handleChange}
                maxLength={25}
                required={true}
                onBlur={onBlur}
              />
              <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-start justify-center py-[30.192363739013672px] px-[20.452892303466797px] gap-[19.48px] text-mini-3">
            <FormControl isRequired isInvalid={touched.message && !values.name}>
            <div className="h-[162.6px] flex flex-row items-center justify-start">              
              <h4 className="m-0 relative text-inherit font-bold font-inherit">
                Your Message
              </h4>
            </div>
            <Textarea
              className="flex font-poppins text-mini-3 [outline:none] rounded-[12.67px] w-[256.1px] h-[162.6px] flex-row flex-wrap items-center justify-center font-bold text-whitesmoke-200"
              placeholder="Message"
              maxLength={200}
              required={true}
              errorBorderColor="red.300"
              name ='message'
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
          </div>
          <div className="rounded-5xl-8 bg-color-3 flex flex-row flex-wrap items-center justify-center py-[10.331405639648438px] px-[33.06049728393555px] gap-[10.33px] text-lg-6 hover:bg-lime-200">
            <Button
              colorScheme="black"  
              isLoading={isLoading} 
              isDisabled={!values.name || !values.email || !values.message}
              onClick={onSubmit} 
              className="relative [text-shadow:0px_4.1px_4.13px_rgba(0,_0,_0,_0.5)]">
              Send Message
            </Button>
            <img
              className="relative w-[24.8px] h-[24.8px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/send@2x.png"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FormCard;

