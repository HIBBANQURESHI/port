"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+92) 330 319 3377"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "qureshihibban@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Bufferzone Sector15A/1 KDA CVA "
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://port-backend-lovat.vercel.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ firstname: '', lastname: '', email: '', phone: '', message: '' });
        setStatus('Sent');
      } else {
        toast.error('Failed to send message. Please try again.');
        setStatus('Failed to send');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
      setStatus('Error occurred');
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-accent"> Let&apos;s work together </h3>
              <p className="text-white/60"> Let’s Build Success Together! </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" name="firstname" value={formData.firstname} onChange={handleChange} />
                <Input type="lastname" placeholder="Lastname" name="lastname" value={formData.lastname} onChange={handleChange} />
                <Input type="email" placeholder="Email address" name="email" value={formData.email} onChange={handleChange} />
                <Input type="phone" placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              <Button size="md" className="max-w-40"> Send Message </Button>
              <p className="text-white/60">{status}</p>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </motion.section>
  );
};

export default Contact;
