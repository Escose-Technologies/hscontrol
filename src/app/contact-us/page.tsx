import ContactUsForm from "@/components/contact-us-form";

const ContactUsPage = () => {
    return (<>
        <div className="w-full h-[50vh] bg-slate-900 rounded-bl-3xl absolute"></div>
        <div className="absolute flex justify-between w-full top-20 px-20">
         <div className="text-white"> 
            <label className=" text-xl font-sans">Contact Us</label>
            <div className="text-3xl mt-5 font-kalam">
                <div className="text-3xl" >Work Wanna Discuss for our Products ???</div>
                <div className="mt-5">Send Us Your Queries....</div>
            </div>
            <div className="text-white font-xl mt-5 flex"> 
              <a href="+91-9772766137" className="mr-1">+91-9772766137</a> / <a className="ml-1" href="+91-9772766137">8005623209</a> </div>
         </div> 
         <div className="right-20 top-20"> 
           <ContactUsForm />
         </div> 
        </div>
    </>)
}

export default ContactUsPage;