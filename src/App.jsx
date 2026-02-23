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
              src="/profile.jpg"
              alt="Kunja Shashank"
              className="profile-pic"
            />
          </div>

        </div>
      </section>
    </>
  );
}