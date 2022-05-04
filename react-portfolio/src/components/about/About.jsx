import React from "react";
import "./about.css";
import fotomezelf from "../../assets/fotomezelf.jpg";
import { FaAward } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={fotomezelf} alt="About Me" />
                    </div>
                </div>
                <div className="about__content">
                    {/* <div className="about__cards">
          <article className="about__card">
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>+ lorem</small>
          </article>
          <article className="about__card">
            <HiOutlineOfficeBuilding className='about__icon' />
            <h5>Employers</h5>
            <small>UZ Gent</small><br/>
            <small>VandenBorre</small><br/>
            <small>Uitvaartzorg Verheyden</small>
          </article>
          <article className="about__card">
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>+ lorem</small>
          </article>
          </div> */}
          {/* TODO:Text highlighters on keywords */}
                    <p>
                        I was born in Wetteren on 10/01/1992 and grew up in
                        Lede. I graduated in 2010 in Accounting-Informatics.
                        This was my first contact with programming. I have been
                        working as a funeral advisor for 4 years now. I describe
                        myself as a calm, flexible and responsible person who
                        attaches great importance to supporting and helping
                        people. Someone who is happy when the people around me
                        are happy. This may explain why I have been working in
                        healthcare for 11 years. <br /><br /> During the Covid pandemic, I
                        consulted the Dela webdeveloper several times because of
                        a problem that arose at the time. We went to search the
                        most suitable solution together. Because of this I
                        rediscovered the passion of problem solving. This in
                        turn brought me to programming. What started with a
                        search on Google became an activity in the little free
                        time I have. Watching Youtube tutorials, following
                        various developers on Instagram , buying and reading
                        books, a Udemy course and the sololearn app. What also
                        appeals to me is that I can once again help people build
                        their future. The challenge is to find out the wishes of
                        the customer and then translate them alone or together
                        with a team into the design of their website. The
                        constant innovation and always being kept on my toes is
                        something that really speaks to me. This is the reason
                        why I have stopped my job as a funeral advisor and want
                        to fully focus on becoming a web developer.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
