import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaMailBulk, FaMapPin, FaPhone, FaWhatsapp } from 'react-icons/fa';
import Me from "../../assets/profile1.jpg";
import { GiFallingOvoid } from 'react-icons/gi';
const ContactSection = () => {
    return (

        <section id='contact' className="bg-gradient-to-r from-[#E8CBC0] via-[#536976] to-[#636FA4] py-16">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">

                {/* Header */}
                <div className="text-center mb-12 text-white">
                    <div className="mb-2 mt-2">
                        <hr className="h-1 border-0 bg-gradient-to-r from-teal-400 from-50% to-transparent to-50%" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Get in <span className="text-teal-300">Touch</span>
                    </h2>
                    <div className="mb-2 mt-2">
                        <hr className="h-1 border-0 bg-gradient-to-l from-teal-50 from-50% to-transparent to-50%" />
                    </div>
                    <p className="mt-3 text-gray-200 max-w-2xl mx-auto">
                        Feel free to reach out for collaborations, project discussions, or just to say hi.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start">

                    {/* Contact Info */}
                    <div className="bg-white/10 rounded-2xl shadow-lg hover:shadow-2xl p-8 text-white">
                        <h3 className="text-2xl font-semibold text-teal-300 mb-6 text-center">
                            Contact Information
                        </h3>
                        <div className="flex items-center gap-4 mb-4 justify-center">
                            <GiFallingOvoid className="w-6 h-6 text-teal-950" />
                            <h3 className='text-teal-900 font-bold'>ANAMUL HOQ HRIDOY</h3>
                            <GiFallingOvoid className="w-6 h-6 text-teal-950" />
                            {/* <p>nuruzzaman.engbd@gmail.com</p> */}
                        </div>
                        <div className='text-black flex items-center mb-4 justify-center'>
                            <span className="loading loading-infinity loading-xs"></span><span className="loading loading-infinity loading-xs"></span><span className="loading loading-infinity loading-xs"></span><span className="loading loading-infinity loading-xs"></span><span className="loading loading-infinity loading-xs"></span><span className="loading loading-infinity loading-xs"></span><span className="loading loading-infinity loading-xs"></span><span className="loading loading-infinity loading-xs"></span><span className="loading loading-infinity loading-xs"></span>
                            <span className="loading loading-infinity loading-xs"></span><span className="loading loading-infinity loading-xs"></span><span className="loading loading-infinity loading-xs"></span><span className="loading loading-infinity loading-xs"></span><span className="loading loading-infinity loading-xs"></span><span className="loading loading-infinity loading-xs"></span><span className="loading loading-infinity loading-xs"></span>
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                            <FaMailBulk className="w-6 h-6 text-teal-950" />
                            <a href="mailto:ahoq3906@gmail.com">ahoq3906@gmail.com</a>
                            {/* <p>nuruzzaman.engbd@gmail.com</p> */}
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                            <FaWhatsapp className="w-6 h-6 text-teal-950" />
                            <a href="https://wa.me/8801734006926?text=Hello%20ANAMUL_HOQ_HRIDOY,%20I%20want%20to%20connect%20with%20you.">WhatsApp: +880 1734006926</a>
                            {/* <p>+880 1707-530810</p> */}
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                            <FaPhone className="w-6 h-6 text-teal-950" />
                            <a href="tel:+880 1707-530810">Phone: +880 1734006926</a>
                            {/* <p>+880 1707-530810</p> */}
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <FaMapPin className="w-6 h-6 text-teal-950" />
                            <p>Kendua, Netrokona, Bangladesh</p>
                        </div>

                        {/* Social Links */}
                        <div className='align-top'>
                            <div className="flex justify-center mt-6">
                                <img
                                    src={Me} // Replace with actual image URL
                                    alt="Contact us"
                                    className="w-24 h-24 bg-cover rounded-full border-4 border-teal-900"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-4 text-center">Follow Me</h4>
                            <div className="flex gap-6 justify-center mt-4">
                                <a
                                    href="https://www.facebook.com/anamul.hoq.hridoy.2025"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-950 hover:text-white transition"
                                >
                                    <FaFacebook className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-950 hover:text-white transition"
                                >
                                    <FaLinkedin className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-950 hover:text-white transition"
                                >
                                    <FaGithub className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="bg-gradient-to-r from-[#BBD2C5] via-[#536976] to-[#536976] rounded-2xl shadow-lg text-white p-8 space-y-6">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                            <input
                                type="text"
                                required
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 bg-gray-600 bg-opacity-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="w-full px-4 py-3  bg-gray-600 bg-opacity-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Message</label>
                            <textarea
                                required
                                rows="5"
                                placeholder="Write your message here..."
                                className="w-full px-4 py-3  bg-gray-600 bg-opacity-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-md"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>

    );
};

export default ContactSection;