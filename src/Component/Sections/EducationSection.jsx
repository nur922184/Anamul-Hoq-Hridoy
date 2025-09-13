import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, Star } from 'lucide-react';

const EducationSection = () => {
    return (
        <section className="bg-gradient-to-r from-[#BBD2C5] via-[#536976] to-[#536976] py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <div className="mb-2 mt-2">
                        <hr className="h-1 border-0 bg-gradient-to-r from-teal-300 from-50% to-transparent to-50%" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4 flex items-center justify-center gap-3">
                        <GraduationCap className="text-teal-50" size={36} />
                        Education<span ></span>
                    </h2>
                    <div className="mb-2 mt-2">
                        <hr className="h-1 border-0 bg-gradient-to-l from-teal-50 from-50% to-transparent to-50%" />
                    </div>
                    <p className="text-gray-200 max-w-2xl mx-auto">
                        My academic journey and achievements
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Master's Degree Card */}
                    <div className="bg-gray-800/70 rounded-xl p-6 border border-teal-500/20 ">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-teal-400">M.S.S (Economics)</h3>
                                <p className="text-gray-300">Master's Degree</p>
                            </div>
                            <div className="bg-teal-600 p-2 rounded-full">
                                <Award className="text-white w-5 h-5" />
                            </div>
                        </div>

                        <div className="mb-4">
                            <p className="text-white font-medium">MC College, Sylhet</p>
                        </div>

                        <div className="flex items-center gap-3 text-gray-300 mb-4">
                            <Calendar className="w-4 h-4 text-teal-400" />
                            <span>2023 - Present</span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-300 mb-4">
                            <MapPin className="w-4 h-4 text-teal-400" />
                            <span>Sylhet, Bangladesh</span>
                        </div>

                        <div className="pt-4 border-t border-gray-700">
                            <div className="flex items-center gap-2">
                                <span className="text-amber-400">CGPA:</span>
                                <span className="text-white">3.85/4.00</span>
                                <div className="flex ml-2">
                                    {[1, 2, 3, 4].map((star) => (
                                        <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bachelor's Degree Card */}
                    <div className="bg-gray-800/70  rounded-xl p-6 border border-teal-500/20 ">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-teal-400">B.S.S (Honors)</h3>
                                <p className="text-gray-300">Bachelor's Degree</p>
                            </div>
                            <div className="bg-teal-600 p-2 rounded-full">
                                <BookOpen className="text-white w-5 h-5" />
                            </div>
                        </div>

                        <div className="mb-4">
                            <p className="text-white font-medium">MC College, Sylhet</p>
                        </div>

                        <div className="flex items-center gap-3 text-gray-300 mb-4">
                            <Calendar className="w-4 h-4 text-teal-400" />
                            <span>2017 - 2023</span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-300 mb-4">
                            <MapPin className="w-4 h-4 text-teal-400" />
                            <span>Sylhet, Bangladesh</span>
                        </div>

                        <div className="pt-4 border-t border-gray-700">
                            <div className="flex items-center gap-2">
                                <span className="text-amber-400">CGPA:</span>
                                <span className="text-white">3.75/4.00</span>
                                <div className="flex ml-2">
                                    {[1, 2, 3, 4].map((star) => (
                                        <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Achievements */}
                <div className="max-w-3xl mx-auto mt-16 bg-gray-800/50 rounded-xl p-6 border border-teal-500/30">
                    <h3 className="text-xl font-bold text-teal-400 mb-4 text-center">Additional Achievements</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-700/50 p-4 rounded-lg text-center">
                            <div className="text-amber-400 text-2xl font-bold mb-1">5+</div>
                            <div className="text-gray-300">Research Papers</div>
                        </div>

                        <div className="bg-gray-700/50 p-4 rounded-lg text-center">
                            <div className="text-amber-400 text-2xl font-bold mb-1">3</div>
                            <div className="text-gray-300">Scholarships</div>
                        </div>

                        <div className="bg-gray-700/50 p-4 rounded-lg text-center">
                            <div className="text-amber-400 text-2xl font-bold mb-1">8+</div>
                            <div className="text-gray-300">Seminars/Conferences</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;