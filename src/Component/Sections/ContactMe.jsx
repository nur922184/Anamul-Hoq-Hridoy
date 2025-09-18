import React from 'react';
import animation1 from '../../assets/T5k5.gif'
import Me from '../../assets/4.jpg'
import { FaEnvelope, FaFacebook, FaGitAlt, FaGithub, FaLaravel, FaLinkedin, FaNodeJs, FaPhone, FaReact, FaTimes, FaWhatsapp, FaYoutube, } from 'react-icons/fa';
const ContactMe = () => {
    return (
        <div className="bg-gradient-to-r from-[#BBD2C5] via-[#536976] to-[#536976]  px-5 flex flex-col items-center text-center">
            {/* Profile Picture */}
            <div style={{
                backgroundImage: `url(${animation1})`,
            }}
                className="w-36 h-36 bg-cover rounded-full  bg-slate-200 mb-5 justify-center  items-center ">
                <div className='w-32 h-32 rounded-full overflow-hidden mx-auto mt-2' >
                    <img
                        src={Me} // Replace with your profile image link
                        alt="Md Moniruzzaman Tonoy"
                        className="w-full h-full object-cover transition-transform duration-400  hover:scale-150 "
                    />
                </div>
            </div>

            {/* Name and Title */}
            <h1 className="text-4xl font-bold mb-2 text-green-50">ANAMUL HOQ HRIDOY</h1>
            <p className="text-lg font-medium text-teal-200 mb-4">
               Economics Graduate | Data Analyst | Researcher & Teaching
            </p>

            {/* Contact Links */}
            <div className="flex space-x-4 mb-6">
                <a
                    href="https://github.com/nur922184"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
                >
                    <FaGithub size={20} />
                </a>
                <a
                    href="https://www.linkedin.com/in/md-moniruzzama-7bb52b285/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
                >
                    <FaLinkedin size={20} />
                </a>
                <a
                    href="https://x.com/_24"
                    target="_blank"
                    className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
                >
                    <FaTimes size={20} />
                </a>
                <a
                    href="https://www.facebook.com/anamul.hoq.hridoy.2025"
                    target="_blank"
                    className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
                >
                    <FaFacebook size={20} />
                </a>
                <a
                    href="https://wa.me/8801734006926?text=Hello%20ANAMUL_HOQ_HRIDOY,%20I%20want%20to%20connect%20with%20you."
                    target="_blank"
                    className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
                >
                    <FaWhatsapp size={20} />
                </a>
                <a
                    href="mailto:ahoq3906@gmail.com"
                    target="_blank"
                    className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
                >
                    <FaEnvelope size={20} />
                </a>
                <a
                    href="https://www.youtube.com/@moniruzzam2428"
                    target="_blank"
                    className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
                >
                    <FaYoutube size={20} />
                </a>
                <a
                    href="tel:+8801734006926"
                    className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
                >
                    <FaPhone size={20} />
                </a>
            </div>

            {/* Call to Action Button */}
            <a
                href="tel:+8801734006926"
                className="bg-teal-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition-all"
            >
                Schedule a Call
            </a>
        </div>
    );
};

export default ContactMe;