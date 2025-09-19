import React from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import {
  UserIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    e.target.reset();
  };

  return (
    <div className="pt-32 w-full min-h-screen bg-gradient-to-br from-white to-[#f0fff7] flex flex-col items-center justify-start px-6 lg:px-20">

      <Toaster position="top-right" />

      {/* Heading */}
      <motion.h1
        className="text-themegreen text-4xl lg:text-5xl font-medium font-poppins mb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-gray-600 text-lg font-poppins text-center max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        We’d love to hear from you! Fill out the form or reach us directly through the information below.
      </motion.p>

      {/* Main Content Layout */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl p-8 flex flex-col gap-6 border border-gray-100"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 pl-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-themegreen transition-all duration-300 shadow-sm"
              required
            />
            <UserIcon className="h-5 w-5 text-gray-400 absolute top-1/2 left-4 -translate-y-1/2" />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 pl-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-themegreen transition-all duration-300 shadow-sm"
              required
            />
            <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute top-1/2 left-4 -translate-y-1/2" />
          </div>

          <div className="relative">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="w-full p-4 pl-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-themegreen transition-all duration-300 shadow-sm resize-none"
              required
            ></textarea>
            <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-400 absolute top-4 left-4" />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-themegreen text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:bg-black shadow-md hover:shadow-lg"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info Box */}
        <motion.div
          className="bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-gray-100 flex flex-col gap-6 justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Phone */}
          <div className="flex items-start gap-4">
            <PhoneIcon className="h-6 w-6 text-themegreen mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-600">+923392020232</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <EnvelopeIcon className="h-6 w-6 text-themegreen mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-600">redianoffical@gmail.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <MapPinIcon className="h-6 w-6 text-themegreen mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-gray-600">
                Plot 93 Block K, Gulberg 3 <br />
                Lahore, Pakistan
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4 text-themegreen text-xl">
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Optional Map Embed */}
      <div className="mt-16 mb-20 w-full max-w-6xl h-72 rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.8617504878443!2d74.3508815020323!3d31.500483662674807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919044bacb3c5db%3A0xc616202fee35e37e!2sPlot%2093%2C%20Block%20K%20Gulberg%20III%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1757684584935!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
       
       
    </div>
  );
};

export default ContactPage;
