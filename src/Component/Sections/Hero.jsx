import React from 'react';
import profileImg from "../../assets/profile.jpg";
import { ShieldCheck } from 'lucide-react';

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-[#cbcaa5] via-[#536976] to-[#636FA4] text-white md:py-28 py-16">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12">

                {/* Left Side: Text */}
                <div className="flex-1 text-center md:text-left mt-8 md:mt-0">
                    <h2 className="text-lg text-teal-950 font-semibold mb-2">
                        Hello, I'm
                    </h2>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        ANAMUL HOQ HRIDOY
                    </h2>
                    <h3 className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
                    Economics Graduate | Data Analyst | Researcher & Teaching
                    </h3>
                    <p className="text-gray-300 mb-8 max-w-lg">
                       A dedicated Economics graduate with a passion for transforming raw data into meaningful insights. I am currently advancing my expertise through a Master's in Economics, focusing on applied econometrics and policy analysis. My goal is to leverage analytical skills to solve complex real-world problems and drive informed decision-making.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#contact"
                            className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg shadow-lg text-white font-medium transition"
                        >
                            Contact Me
                        </a>
                        <a
                            href="#resume"
                            className="border border-teal-400 hover:bg-teal-500 hover:text-white px-6 py-3 rounded-lg shadow-lg font-medium transition"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Right Side: Image */}

                <div className="flex-1 flex justify-center relative">
                    <div className="relative group">
                        {/* Glowing Border Effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#ffffff] via-blue-500 to-purple-600 blur-2xl opacity-50 group-hover:opacity-80 transition duration-500"></div>

                        {/* Image Container */}
                        <div className="relative rounded-full p-2 bg-teal-400 shadow-2xl transform group-hover:scale-105 transition duration-500">
                            <img
                                src={profileImg}
                                alt="Profile"
                                className="rounded-full w-72 md:w-96 object-cover"
                            />
                            {/* Safety/Shield Badge */}
                            <span className="absolute bottom-2 right-2 bg-teal-500 text-xs px-3 py-1 rounded-full shadow-md">
                                Available for ICT Teaching
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
