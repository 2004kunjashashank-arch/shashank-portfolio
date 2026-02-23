import { useEffect, useState } from "react";
import "./App.css";
import LiveBackground from "./components/LiveBackground";

export default function App() {
  const roles = [
    "Data Analyst",
    "Data Scientist",
    "Machine Learning Engineer",
    "Data Engineer",
    "AI Systems Architect"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[index];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setIndex((index + 1) % roles.length);
        setText("");
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  return (
    <>
      <LiveBackground />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          
          <div className="box">
            <h1>KUNJA SHASHANK</h1>

            <h2 className="typing">
              {text}
              <span className="cursor">|</span>
            </h2>

            <p>I don’t just analyze data, I dominate the market.</p>
          </div>

          <div className="profile-container">
            <img
              src="/WhatsApp Image 2026-02-22 at 15.33.11.jpg"
              alt="Kunja Shashank"
              className="profile-pic"
            />
          </div>

        </div>
      </section>

      {/* TRAINING */}
      <section className="section">
        <div className="glass">
          <h2>Training & Applied Research</h2>

          <div
            className="card"
            onClick={() =>
              window.open("/12320536_846_20_08_2025.pdf", "_blank")
            }
          >
            <h3>Data Science — From Data to Decisions (Intern)</h3>
            <p>
              Intensive applied training focused on real-world data workflows,
              exploratory analysis, decision modeling, and analytical reporting.
            </p>

            <ul>
              <li>Built end-to-end preprocessing pipelines</li>
              <li>Performed EDA and statistical interpretation</li>
              <li>Translated raw datasets into structured insights</li>
              <li>Applied Python, Pandas & Visualization frameworks</li>
            </ul>

            <div className="tech-stack">
              <span>Python</span>
              <span>Pandas</span>
              <span>EDA</span>
              <span>Data Visualization</span>
              <span>Decision Frameworks</span>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section">
        <div className="glass">
          <h2>Certifications & Achievements</h2>

          <div
            className="card"
            onClick={() =>
              window.open("/ChatGPT-4 Prompt Engineering ChatGPT, Generative AI & LLM.pdf", "_blank")
            }
          >
            <h3>ChatGPT-4 Prompt Engineering</h3>
            <p>
              Advanced prompt design strategies for optimizing LLM outputs,
              contextual structuring, and AI-driven application building.
            </p>
          </div>

          <div
            className="card"
            onClick={() =>
              window.open("/Computational Theory Language Principle & Finite Automata Theory.pdf", "_blank")
            }
          >
            <h3>Computational Theory & Finite Automata</h3>
            <p>
              Deep understanding of formal languages, automata models,
              and theoretical foundations of computing systems.
            </p>
          </div>

          <div
            className="card"
            onClick={() =>
              window.open("/Master Generative AI & Generative AI tools (ChatGPT & more).pdf", "_blank")
            }
          >
            <h3>Master Generative AI & AI Tools</h3>
            <p>
              Practical implementation of generative AI systems using
              ChatGPT and modern AI toolchains.
            </p>
          </div>

          <div
            className="card"
            onClick={() =>
              window.open("/Code-A-Hunt Certificate.pdf", "_blank")
            }
          >
            <h3>Code-A-Hunt Achievement</h3>
            <p>
              Competitive coding recognition emphasizing algorithmic
              precision and performance optimization.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}