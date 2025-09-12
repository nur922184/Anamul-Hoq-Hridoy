import React from 'react';
// import AboutSection from '../Component/Sections/AboutSection';
import ContactSection from '../Component/Sections/ContactSection';
import Hero from '../Component/Sections/Hero';
import AboutMe from '../Component/Sections/AboutMe';
import EducationSection from '../Component/Sections/EducationSection';
import ContactMe from '../Component/Sections/ContactMe';
import ResumeSection from '../Component/Sections/ResumeSection';
import BlogSection from '../Component/Sections/BlogSection';
import Footer from '../Component/Sections/Footer';
import DeveloperContactSection from '../Component/Sections/DeveloperContactSection';

const HomePage = () => {
    return (
        <div>

            <section id="home" name="home" ><Hero></Hero></section>
            <section id="home" name="home" ><AboutMe></AboutMe></section>
            <ContactMe></ContactMe>
            <section id="education" name="education" ><EducationSection></EducationSection></section>
            <section id="about" name="about" ><ContactSection></ContactSection></section>
            <section id="blog" name="blog" ><BlogSection></BlogSection></section>
            <section id="resume" name="resume" ><ResumeSection></ResumeSection></section>
            <section id="dev" name="dev" >  <DeveloperContactSection></DeveloperContactSection></section>
          
            <Footer></Footer>
        </div>
    );
};

export default HomePage;