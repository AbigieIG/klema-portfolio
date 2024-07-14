import  { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
const Form = ({ fn }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("message sent successful");
        },
        (error) => {
          console.log(error.text);
          toast.error("error occur");
        }
      );
    e.target.reset();
  };

  return (
    <motion.form
      initial={{ x: '-50vw' }}
      animate={{ x: 0 }}
      ref={form}
      onSubmit={sendEmail}
      className="flex absolute text-[--primary-color] shadow-lg  bg-[--bg-color] drop-shadow-xl p-5 flex-col justify-start items-start gap-10 w-[90%]  md:w-[70%]"
    >
   <div className="flex flex-col gap-2 w-full">
   <label>Name</label>
   <input
        name="user_name"
        type="text"
        className="w-full outline-none border-2 bg-transparent border-[--border-color] rounded-sm p-1"
        required
      />
   </div>
     <div className="flex flex-col gap-2 w-full">
     <label>Email</label>
     <input
        name="user_email"
        type="email"
      
        className="w-full bg-transparent outline-none border-2 border-[--border-color] rounded-sm p-1"
        required
      />
     </div>
     <div className="flex flex-col gap-2 w-full">
     <label>Message</label>
     <textarea
        name="message"
        placeholder=""
        required
        rows="4"
        cols="50"
        className="w-full bg-transparent outline-none border-2 border-[--border-color]  rounded-sm p-1 "
      />
     </div>
      <div className="flex gap-5">
        <input
          className="flex justify-center items-center py-2 px-4 bg-green-600 text-white rounded-sm cursor-pointer text-sm"
          type="submit"
          value="Send"
        />
        <input
          onClick={fn}
          type="button"
          className="flex justify-center items-center py-2 px-4 bg-red-500 text-white rounded-sm cursor-pointer text-sm "
          value="Close"
        />
        <ToastContainer />
      </div>
    </motion.form>
  );
};

export default Form;
