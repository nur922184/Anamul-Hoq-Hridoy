import React from 'react';
import { Download, FileText, Award, Briefcase, Clock, UserCheck } from 'lucide-react';
import resume from '../../assets/resume.jpeg'
const ResumeSection = () => {
    // Function to handle download
    const handleDownload = () => {
        // In a real application, this would point to your actual resume file
        const link = document.createElement('a');
        link.href = '/src/assets/resume.jpeg/'; // Update with your actual resume path
        link.download = 'Anamul_Hoq_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="resume" className="bg-gradient-to-r from-[#BBD2C5] via-[#536976] to-[#536976] py-20 px-4">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4 flex items-center justify-center gap-3">
                        <FileText size={36} />
                        My Resume
                    </h2>
                    <p className="text-gray-200 max-w-2xl mx-auto">
                        Download my resume to learn more about my qualifications, experience, and skills
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Resume Preview Card */}
                    <div className="bg-gray-800/70 rounded-xl p-6 border border-teal-500/20 ">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-teal-400">Resume Preview</h3>
                            <div className="bg-teal-600 p-2 rounded-full">
                                <FileText className="text-white w-5 h-5" />
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-lg p-4 mb-6">
                            <div className="flex items-center gap-3 mb-4 p-3 bg-gray-800/50 rounded-lg">
                                <UserCheck className="text-teal-400 w-5 h-5" />
                                <div>
                                    <h4 className="text-white font-medium">Anamul Hoq Hridoy</h4>
                                    <p className="text-gray-400 text-sm">Economics Graduate</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm">
                                    <Award className="text-amber-400 w-4 h-4" />
                                    <span className="text-gray-300">M.S.S in Economics (Ongoing)</span>
                                </div>

                                <div className="flex items-center gap-3 text-sm">
                                    <Briefcase className="text-blue-400 w-4 h-4" />
                                    <span className="text-gray-300">5+ Research Projects</span>
                                </div>

                                <div className="flex items-center gap-3 text-sm">
                                    <Clock className="text-purple-400 w-4 h-4" />
                                    <span className="text-gray-300">Available for opportunities</span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleDownload}
                            className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                        >
                            <Download size={18} />
                            Download Resume (PDF)
                        </button>
                    </div>

                    {/* Resume Details */}
                    <div className="bg-gray-800/70  rounded-xl p-6 border border-teal-500/20">
                        <h3 className="text-xl font-bold text-teal-400 mb-6">What's Included</h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                                    <span className="bg-teal-600 p-1 rounded-full"><Award className="w-4 h-4" /></span>
                                    Education
                                </h4>
                                <p className="text-gray-300 text-sm">Detailed academic background with grades, achievements, and relevant coursework</p>
                            </div>

                            <div>
                                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                                    <span className="bg-blue-600 p-1 rounded-full"><Briefcase className="w-4 h-4" /></span>
                                    Experience
                                </h4>
                                <p className="text-gray-300 text-sm">Professional experience, internships, and research projects with descriptions</p>
                            </div>

                            <div>
                                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                                    <span className="bg-amber-600 p-1 rounded-full"><i className="fas fa-chart-bar w-4 h-4"></i></span>
                                    Skills
                                </h4>
                                <p className="text-gray-300 text-sm">Technical and soft skills with proficiency levels</p>
                            </div>

                            <div>
                                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                                    <span className="bg-purple-600 p-1 rounded-full"><i className="fas fa-trophy w-4 h-4"></i></span>
                                    Achievements
                                </h4>
                                <p className="text-gray-300 text-sm">Awards, certifications, publications, and other accomplishments</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-12 bg-gray-800/50 rounded-xl p-6 border border-teal-500/30 text-center">
                    <h3 className="text-xl font-bold text-teal-400 mb-4">Looking for Opportunities</h3>
                    <p className="text-gray-300 mb-4">
                        I'm actively seeking opportunities in economic research, data analysis, and policy development roles.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="bg-teal-700 text-teal-300 px-3 py-1 rounded-full text-sm">Research Positions</span>
                        <span className="bg-blue-700 text-blue-300 px-3 py-1 rounded-full text-sm">Data Analysis</span>
                        <span className="bg-amber-700 text-amber-300 px-3 py-1 rounded-full text-sm">Economic Consulting</span>
                        <span className="bg-purple-700 text-purple-300 px-3 py-1 rounded-full text-sm">Policy Development</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;