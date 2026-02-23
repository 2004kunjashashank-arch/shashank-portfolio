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
        <div className="hero-container">

          <div className="hero-text">
            <h1>KUNJA SHASHANK</h1>

            <h2 className="typing">
              {text}
              <span className="cursor">|</span>
            </h2>

            <p>I don’t just analyze data, I dominate the market.</p>
          </div>

          <div className="hero-image">
            <img
              src="/profile.jpg"
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
            <h3>Data Science — From Data to Decisions</h3>
            <p>
              Applied training focused on real-world data workflows,
              analytical modeling, and structured decision systems.
            </p>
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
          </div>

          <div
            className="card"
            onClick={() =>
              window.open("/Computational Theory Language Principle & Finite Automata Theory.pdf", "_blank")
            }
          >
            <h3>Computational Theory & Automata</h3>
          </div>

          <div
            className="card"
            onClick={() =>
              window.open("/Master Generative AI & Generative AI tools (ChatGPT & more).pdf", "_blank")
            }
          >
            <h3>Master Generative AI</h3>
          </div>

          <div
            className="card"
            onClick={() =>
              window.open("/Code-A-Hunt Certificate.pdf", "_blank")
            }
          >
            <h3>Code-A-Hunt</h3>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="section">
        <div className="glass">
          <h2>Contact</h2>

          <div className="contact-grid">

            <a
              href="https://www.linkedin.com/in/kunja-shashank-g14/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              🔗 LinkedIn
            </a>

            <a
              href="https://github.com/2004kunjashashank-arch"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              💻 GitHub
            </a>

            <a
              href="mailto:2004kunjashashank@gmail.com"
              className="contact-item"
            >
              ✉️ Email
            </a>

            <a
              href="tel:+918639451060"
              className="contact-item"
            >
              📞 Call
            </a>

          </div>
        </div>
      </section>
    </>
  );
}