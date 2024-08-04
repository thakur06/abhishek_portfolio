"use client";
import React,{useRef,useState} from "react";
import { Util } from "../Utils/Util";
import { ContactLabel } from "../Lib/ContactLabel";
import ContactInput from "../Lib/ContactInput";
import emailjs from "@emailjs/browser"
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
export function ContactForm() {


  
  const serviceId="";
  const publicId="";
  const templateId="";



  const form = useRef();
const [formdata, setformdata] = useState({
  message:""
})

const [lname, setlname] = useState("");
const [name, setname] = useState("");
const [emailAddress, setemailAddress] = useState("")
const [emailSuccess, setemailSuccess] = useState("")

  const sendEmail = (e) => {
        e.preventDefault();


if ((emailAddress ===null || email ===undefined)||(name ===null || name ===undefined) || (emailAddress.trim().length === 0)||(name.trim().length === 0)){
  setemailSuccess("");
  return;
}
setemailSuccess("Sending email...")
    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          setformdata({})
          setemailSuccess("Sent Successfully");
        },
        (error) => {
          setformdata({});
          setemailSuccess("Failed...");
        },
      );
    setformdata({message:""});
    setname("");
    setlname("");
    setemailAddress("");
   
    setTimeout(()=>{
setemailSuccess("");
    },4000);
  };
  return (
    <div className="max-w-md w-full text-center text-white mx-auto rounded-none md:rounded-2xl  md:p-8 shadow-input  ">
      <h2 className="font-extrabold text-xl dark:text-[#291c3a] ">
      Contact me
      </h2>
      <form className="my-8 p-5" ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <ContactLabel htmlFor="firstname">First name</ContactLabel>
            <ContactInput id="firstname" func={setname}  value={name} placeholder="Abhishek" name="user_name" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <ContactLabel htmlFor="lastname">Last name</ContactLabel>
            <ContactInput id="lastname" func={setlname}  value={lname}  placeholder="Rajput" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <ContactLabel htmlFor="email">Email Address</ContactLabel>
          <ContactInput id="email" func={setemailAddress}  value={emailAddress}  placeholder="Your email@gmail.com"name="user_email" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <ContactLabel htmlFor="Message" >Message</ContactLabel>
          <textarea className=" text-center my-auto flex h-10 w-full border-none bg-[#E1EBED] text-[#291c3a]  shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400" value={formdata.message} onChange={(e)=>{
            e.preventDefault();
setformdata({...formdata,message:e.target.value})
          }}id="Text" name="message" placeholder="Enter your message" />
        </LabelInputContainer>
  

        <button
          className=" p-2  w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] bg-[#291c3a]"
          type="submit"
        >
          Send &rarr;
          <BottomGradient />
        </button>

<div className="mx-auto font-extrabold mt-4 text-rose-800">{emailSuccess}</div>
       
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}) => {
  return (
    <div className={Util("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
