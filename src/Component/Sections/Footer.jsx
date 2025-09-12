import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* About */}
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-4">About Me</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            I am ANAMUL HOQ HRIDOY, an dedicated Economics Professional with a strong academic background and a passion for data-driven analysis. Currently pursuing my Master's in Economics, I specialize in transforming complex data into actionable insights..
                        </p>
                    </div>
                    <div className="flex justify-between">
                        {/* Quick Links */}
                        <div>
                            <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#about" className="hover:text-teal-400">About</a></li>
                                <li><a href="#courses" className="hover:text-teal-400">Courses</a></li>
                                <li><a href="#portfolio" className="hover:text-teal-400">Portfolio</a></li>
                                <li id="contact"><a href="#contact" className="hover:text-teal-400">Contact</a></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h2 className="text-xl font-semibold text-white mb-4">Contact Info</h2>
                            <p className="text-gray-400 text-sm mb-3">
                                Phone: <span className="text-teal-400"> <a href="tel:01707530810">**********</a></span>
                            </p>
                            <p className="text-gray-400 text-sm mb-3">
                                Email: <span className="text-teal-400"> <a href="mailto:nuruzzaman.engbd@gamil.com">*******@gamil.com</a></span>
                            </p>
                            <div className="flex gap-4 mt-4">
                                <a href="https://facebook.com" className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition">
                                    <FaFacebookF />
                                </a>
                                <a href="https://linkedin.com" className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition">
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://github.com" className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition">
                                    <FaGithub />
                                </a>
                                <a href="mailto:nuruzzaman.engbd@gamil.com" className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition">
                                    <FaEnvelope />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-10 pt-6 mb-8 md:mb-0 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} ANAMUL HOQ HRIDOY. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
