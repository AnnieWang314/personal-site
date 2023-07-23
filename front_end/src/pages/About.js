import React from "react";
import "./About.css";
import meItaly from "../reactMeItaly.png";
import beaver from "../reactBeaver.png";
import taylor from "../reactTaylor.png";

export default function About() {
    return (
      <div className="about-page">
        <div className = "intro-first">
          <div id = "about-mepic">
              <img src={meItaly} alt="Me in Italy!" />
          </div>
          <div className = "about-text">Hey! I'm Annie Wang, a rising freshman at MIT interested in math and CS.</div>
        </div>
        <div className = "intro-second">
            <div className = "second-writing">
                <div className = "about-text">This summer, I'm mainly just chilling and studying on my own. I also taught a couple of lil kids Java basics, and I'm in the process of creating this website!</div>
                <div className = "about-text">I just graduated high school from <a href="https://abrhs.abschools.org/" target="_blank">AB</a>, where I participated in <a href="https://sites.google.com/abschools.org/abscioly/home?authuser=0" target="_blank">Science Olympiad</a> and helped organize <a href="https://abmathcompetition.wordpress.com" target="_blank">ABMC</a>.</div>
            </div>
            <div className = "pic-wrapper">
                <div>
                    <img className = "about-pic" src={beaver} alt="Me @ MIT" />
                </div>
                <div className = "about-caption">CPW with Tim</div>
            </div>
        </div>
        <div className = "intro-third">
            <div className = "pic-wrapper">
                <div>
                    <img className = "about-pic" src={taylor} alt="Me @ Tswiz Concert" />
                </div>
                <div className = "about-caption">Taylor Swift Eras Tour</div>
            </div>
            <div class = "about-text">If you can't find me buried deep within the library, I'll probably be hanging out at a cafe, grubbing at my favorite local restaurants, attempting a YouTube abs workout, jamming to T. Swizzle, making Trader Joes pizza with friends, or flying to another hemisphere.</div>
        </div>
      </div>
    );
}