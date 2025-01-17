import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { styles } from "../styles";
import { RoomCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { isBrowser } from "react-device-detect"

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_p3eu11t',
      'template_tabxhte',
      {
        from_name: form.name,
        to_name: 'Ken Woon',
        from_email: form.email,
        to_email: 'xk.woon@gmail.com',
        message: form.message
      },
      'YfJYcHc92mK2O2_vO'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong.');
    });
  };

  if (isBrowser) {
    return (
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-[#1B2414] p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What is your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-[#4d4943] text-white rounded-lg outlined-none border-none font-medium"
                autoComplete="name"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What is your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-[#4d4943] text-white rounded-lg outlined-none border-none font-medium"
                autoComplete="email"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to send?"
                className="bg-tertiary py-4 px-6 placeholder:text-[#4d4943] text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>
        <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className={"flex flex-col xl:flex-1 xl:h-auto sm:h-[375px] md:h-[500px] h-[40vh]"}
        >
        <RoomCanvas className="relative"/>
        </motion.div>
      </div>
    );
  }

  else {
    return (
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-[#1B2414] p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What is your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-[#4d4943] text-white rounded-lg outlined-none border-none font-medium"
                autoComplete="name"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What is your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-[#4d4943] text-white rounded-lg outlined-none border-none font-medium"
                autoComplete="email"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to send?"
                className="bg-tertiary py-4 px-6 placeholder:text-[#4d4943] text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }
};

export default SectionWrapper(Contact, "contact");