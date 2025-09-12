import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook } from "lucide-react";
import Aboutme from "../../assets/_20240510_085948.jpg";

const DeveloperContactSection = () => {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] py-20 px-6 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto max-w-5xl z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
            Contact The Developer
          </h2>
          <p className="text-gray-300 mt-2">
            Let’s connect and collaborate on exciting opportunities 🚀
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 blur opacity-50 group-hover:opacity-80 transition"></div>
              <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
                <img
                  src={Aboutme}
                  alt="Md Moniruzzaman Tonoy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white">
                Md Moniruzzaman Tonoy
              </h3>
              <p className="text-teal-300 font-medium mb-6">
                Full Stack Web Developer
              </p>

              <div className="grid gap-5">
                {/* Phone */}
                <div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition">
                  <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-3 rounded-full">
                    <Phone className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-left text-teal-300 font-bold">Phone</p>
                    <p className="text-white font-medium">
                     <a href="tel:+8801618-160869"> +8801618-160869</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition">
                  <div className="bg-gradient-to-r from-pink-500 to-red-500 p-3 rounded-full">
                    <Mail className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className=" text-sm text-left text-teal-300 font-bold">Email</p>
                    <p className="text-white font-medium">
                      <a href="mailto:moniruzzamam2428@gmail.com">moniruzzamam2428@gmail.com</a>
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-full">
                    <MapPin className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-left text-teal-300 font-bold">Address</p>
                    <p className="text-white font-medium">
                      Kendua, Netrokona, Mymensingh
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex justify-center md:justify-start gap-4">
                <a
                  href="https://github.com/nur922184"
                  target="_blank"
                  className="p-3 rounded-full bg-white/10 hover:bg-teal-500 transition"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/md-moniruzzaman-tonoy-7bb52b285/"
                   target="_blank"
                  className="p-3 rounded-full bg-white/10 hover:bg-blue-600 transition"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.facebook.com/anamul.hoq.hridoy.2025"
                   target="_blank"
                  className="p-3 rounded-full bg-white/10 hover:bg-blue-600 transition"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://x.com/moniruzzaman_24"
                  target="_blank"
                  className="p-3 rounded-full bg-white/10 hover:bg-sky-500 transition"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperContactSection;
