import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiExpress, SiFirebase, SiRedux } from 'react-icons/si';

const SkillsSection = () => {
    const skills = [
        { name: 'HTML5', percentage: 95, icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS3', percentage: 90, icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'JavaScript (ES6+)', percentage: 88, icon: <FaJs className="text-yellow-400" /> },
        { name: 'React.js', percentage: 85, icon: <FaReact className="text-blue-400" /> },
        { name: 'Redux Toolkit', percentage: 80, icon: <SiRedux className="text-purple-500" /> },
        { name: 'Next.js', percentage: 75, icon: <SiNextdotjs className="text-black" /> },
        { name: 'Node.js', percentage: 70, icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Express.js', percentage: 70, icon: <SiExpress className="text-gray-800" /> },
        { name: 'MongoDB', percentage: 65, icon: <SiMongodb className="text-green-600" /> },
        { name: 'REST API Development', percentage: 75, icon: <i className="fas fa-server text-indigo-500"></i> },
        { name: 'Responsive Web Design', percentage: 90, icon: <i className="fas fa-mobile-alt text-pink-500"></i> },
        { name: 'Firebase ', percentage: 70, icon: <SiFirebase className="text-yellow-500" /> },
        { name: 'Tailwind CSS', percentage: 90, icon: <i className="fab fa-css3-alt text-cyan-400"></i> },
    ];

    return (
        <section className="py-16 px-4 bg-gradient-to-r from-[#BBD2C5] via-[#536976] to-[#536976] text-white">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4 text-center">
                    <span className="text-teal-50">MY</span> Skill
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-5 shadow-lg">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center">
                                    <span className="text-2xl mr-3">{skill.icon}</span>
                                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                                </div>
                                <span className="text-sm font-bold">{skill.percentage}%</span>
                            </div>

                            <div className="w-full bg-gray-700 bg-opacity-50 rounded-full h-2.5">
                                <div
                                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full"
                                    style={{ width: `${skill.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;