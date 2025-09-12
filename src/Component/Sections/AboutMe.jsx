import React from 'react';
import Aboutme from "../../assets/Anamul.jpg";
// import { ShieldCheck, Award, Heart } from "lucide-react";
import { ShieldCheck, Award, Heart, BookOpen, Code, Cpu } from 'lucide-react';
import { BiIntersect } from 'react-icons/bi';
const AboutMe = () => {
    return (
        <section
            id="about"
            className="bg-gradient-to-r from-[#BBD2C5] via-[#536976] to-[#536976] text-white py-20"
        >
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">

                {/* Left Side: Text */}
                <div className="flex-1 flex justify-center relative">
                    <div className="relative group">
                        {/* Glowing Border Effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-teal-500 via-blue-500 to-purple-600 blur-2xl opacity-50 group-hover:opacity-80 transition duration-500"></div>

                        {/* Image Container */}
                        <div className="relative rounded-e-full p-2 bg-gray-800 shadow-2xl transform group-hover:scale-105 transition duration-500">
                            <img
                                src={Aboutme}
                                alt="Profile"
                                className="rounded-e-full w-72 md:w-96 object-cover"
                            />
                            {/* Safety/Shield Badge */}
                            <span className="absolute top-4 right-4 bg-teal-500 text-xs px-4 py-2 rounded-full shadow-md flex items-center gap-1">
                                <ShieldCheck size={14} /> Safe & Secure
                            </span>
                        </div>
                    </div>
                </div>
                {/* //  Right Side: 3D Styled Image */}
                <div className="flex-1 space-y-6 order-1 md:order-2">
                    <div className="mb-2 border-b-2"><hr /></div>
                    <div className='flex'>
                        <BiIntersect size={20}/>
                        <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4">
                            About Me
                        </h2>
                    </div>
                    <div className="mb-2 border-b-2"><hr /></div>

                    <p className="text-gray-100 leading-relaxed text-lg">
                        I am a dedicated <span className="text-teal-300 font-semibold">Economics Professional</span> with a strong academic background and a passion for data-driven analysis. Currently pursuing my Master's in Economics, I specialize in transforming complex data into actionable insights.
                    </p>

                    <p className="text-gray-100 leading-relaxed">
                        My expertise spans <span className="text-teal-300 font-semibold">economic research, data analysis, statistical modeling</span>, and <span className="text-teal-300 font-semibold">policy evaluation</span>. I'm proficient with tools like STATA, R, SPSS, and Excel for comprehensive data interpretation.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                            <div className="bg-teal-700 p-2 rounded-full">
                                <BookOpen className="text-teal-300 w-5 h-5" />
                            </div>
                            <span className="text-gray-200">Economics Research</span>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                            <div className="bg-blue-700 p-2 rounded-full">
                                <Cpu className="text-blue-300 w-5 h-5" />
                            </div>
                            <span className="text-gray-200">Data Analysis</span>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                            <div className="bg-purple-700 p-2 rounded-full">
                                <Code className="text-purple-300 w-5 h-5" />
                            </div>
                            <span className="text-gray-200">Statistical Modeling</span>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                            <div className="bg-amber-700 p-2 rounded-full">
                                <Award className="text-amber-300 w-5 h-5" />
                            </div>
                            <span className="text-gray-200">Policy Evaluation</span>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default AboutMe;



