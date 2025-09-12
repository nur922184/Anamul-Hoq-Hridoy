import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import { FaDev } from "react-icons/fa";
import Aboutme from "../../assets/_20240510_085948.jpg";

const DeveloperContactSection = () => {
  return (
    <section
      id="contact"
      className=" bg-gradient-to-r from-[#BBD2C5] via-[#536976] to-[#536976] py-20 px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className=" mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-300">
            Contact The Developer
          </h2>
          <p className="text-gray-200 mt-3">
            Let’s connect and collaborate on exciting opportunities 🚀
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/10 rounded-2xl border border-white/20 p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 blur opacity-50 group-hover:opacity-80 transition"></div>
              <div className="relative w-44 h-44 rounded-full border-4 border-white/20 shadow-lg overflow-hidden">
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
                  <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-3 rounded-full shadow-md">
                    <Phone className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-left text-teal-300 font-bold">
                      Phone
                    </p>
                    <p className="text-white font-medium">
                      <a href="tel:+8801618-160869">+8801618-160869</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition">
                  <div className="bg-gradient-to-r from-pink-500 to-red-500 p-3 rounded-full shadow-md">
                    <Mail className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-left text-teal-300 font-bold">
                      Email
                    </p>
                    <p className="text-white font-medium">
                      <a href="mailto:moniruzzamam2428@gmail.com">
                        moniruzzamam2428@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-full shadow-md">
                    <MapPin className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-left text-teal-300 font-bold">
                      Address
                    </p>
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
                  className="p-3 rounded-full bg-white/10 hover:bg-blue-500 transition"
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
                <a
                  href="https://dev.to/moniruzzaman2428"
                  target="_blank"
                  className="p-3 rounded-full bg-white/10 hover:bg-gray-900 transition"
                >
                  <FaDev className="w-5 h-5 text-white" />
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
