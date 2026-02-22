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
        <div className="box">
          <h1>KUNJA SHASHANK</h1>

          <h2 className="typing">
            {text}
            <span className="cursor">|</span>
          </h2>

          <p>I don’t just analyze data, I dominate the market.</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="glass">
          <h2>About Me</h2>
          <p>
            I am Kunja Shashank — a system thinker operating at the intersection
            of Data, Logic, and Engineered Intelligence.
            <br /><br />
            Currently pursuing B.Tech in Computer Science at Lovely Professional
            University, I architect predictive systems, analytical pipelines,
            and structured decision engines.
            <br /><br />
            Python is my weapon.  
            Data is my raw material.  
            Systems are my battlefield.
            <br /><br />
            I don’t chase trends — I build foundations.
          </p>
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
<section className="section">
  <div className="glass">
    <h2>Technical Arsenal</h2>

    <div className="skills-grid">

      {/* Programming */}
      <div className="skill-category">
        <h3>Programming Languages</h3>
        <div className="skill-items">
          <span>C++</span>
          <span>Python</span>
          <span>C</span>
          <span>Java</span>
          <span>DBMS</span>
        </div>
      </div>

      {/* Data Science */}
      <div className="skill-category">
        <h3>Data Science Stack</h3>
        <div className="skill-items">
          <span>Pandas</span>
          <span>NumPy</span>
          <span>Scikit-Learn</span>
          <span>Matplotlib</span>
          <span>Seaborn</span>
        </div>
      </div>

      {/* Tools */}
      <div className="skill-category">
        <h3>Tools & Platforms</h3>
        <div className="skill-items">
          <span>MySQL</span>
          <span>MongoDB</span>
          <span>Power BI</span>
          <span>MS Excel</span>
          <span>Git</span>
          <span>GitHub</span>
        </div>
      </div>

      {/* Systems */}
      <div className="skill-category">
        <h3>Operating Systems</h3>
        <div className="skill-items">
          <span>Linux</span>
          <span>Windows</span>
        </div>
      </div>

      {/* Soft Skills */}
      <div className="skill-category">
        <h3>Transferable Skills</h3>
        <div className="skill-items">
          <span>Problem-Solving</span>
          <span>Project Management</span>
          <span>Adaptability</span>
          <span>Time Management</span>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* EDUCATION */}
<section className="section">
  <div className="glass">
    <h2>Education</h2>

    <div className="edu-grid">

      {/* LPU */}
      <div className="edu-card primary">
        <div className="edu-top">
          <span className="edu-badge">2023 – 2026</span>
          <h3>B.Tech – Computer Science & Engineering</h3>
          <h4>Lovely Professional University • Punjab</h4>
        </div>

        <p>
          Focused on Data Structures, Algorithms, Operating Systems,
          Database Systems, Artificial Intelligence and System Design.
        </p>

        <div className="edu-tags">
          <span>Data Structures</span>
          <span>AI</span>
          <span>DBMS</span>
          <span>System Design</span>
          <span>CGPA: 7.8</span>
        </div>
      </div>

      {/* INTERMEDIATE */}
      <div className="edu-card">
        <div className="edu-top">
          <span className="edu-badge">2020 – 2022</span>
          <h3>Intermediate (12th Grade)</h3>
          <h4>Delhi Public School • Warangal</h4>
        </div>

        <p>
          Strong academic foundation in Physics, Chemistry and Mathematics
          with analytical and quantitative focus.
        </p>

        <div className="edu-tags">
          <span>Mathematics</span>
          <span>Physics</span>
          <span>Chemistry</span>
          <span>Percentage: 80%</span>
        </div>
      </div>

      {/* 10th */}
      <div className="edu-card">
        <div className="edu-top">
          <span className="edu-badge">2019 – 2020</span>
          <h3>Secondary School (10th Grade)</h3>
          <h4>Delhi Public School • Warangal</h4>
        </div>

        <p>
          Built foundational academic discipline and analytical reasoning.
        </p>

        <div className="edu-tags">
          <span>Percentage: 78%</span>
          <span>Core Academics</span>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ENGINEERED SYSTEMS */}
<section className="section">
  <div className="glass">
    <h2>Engineered Systems</h2>

    {/* PROJECT 1 */}
    <div
      className="project-card"
      onClick={() =>
        window.open(
          "https://github.com/2004kunjashashank-arch/Mental-health-Simulator",
          "_blank"
        )
      }
    >
      <div className="project-header">
        <h3>Behavioral Simulation Engine</h3>
        <span className="date-badge">Jun 2025 — Jul 2025</span>
      </div>

      <ul>
        <li>
          Designed a rule-based emotional modeling system simulating
          stress-level transitions and behavioral outcomes.
        </li>
        <li>
          Implemented dynamic decision pathways adapting to user inputs
          using structured logic architecture.
        </li>
        <li>
          Integrated MySQL-backed persistence for state tracking and
          simulation continuity.
        </li>
        <li>
          Focused on modular system design enabling scalable behavioral
          modeling frameworks.
        </li>
      </ul>

      <div className="tech-stack">
        <span>Java</span>
        <span>OOP</span>
        <span>MySQL</span>
        <span>System Design</span>
        <span>Simulation Logic</span>
      </div>
    </div>

    {/* PROJECT 2 */}
    <div
      className="project-card"
      onClick={() =>
        window.open(
          "https://github.com/2004kunjashashank-arch/Chat-Bot-Cricket-Score-Predictor",
          "_blank"
        )
      }
    >
      <div className="project-header">
        <h3>Probabilistic Match Forecast Engine</h3>
        <span className="date-badge">Jan 2025 — May 2025</span>
      </div>

      <ul>
        <li>
          Built an end-to-end machine learning pipeline predicting
          match outcomes using historical performance data.
        </li>
        <li>
          Implemented preprocessing, feature engineering, and model
          tuning for probability-based forecasts.
        </li>
        <li>
          Engineered conversational chatbot interface to query live
          win probabilities and run-rate trends.
        </li>
        <li>
          Focused on transforming raw sports data into structured
          decision intelligence.
        </li>
      </ul>

      <div className="tech-stack">
        <span>Python</span>
        <span>Pandas</span>
        <span>NumPy</span>
        <span>Scikit-Learn</span>
        <span>Machine Learning</span>
      </div>
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
      style={{ cursor: "pointer" }}
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

    {/* Prompt Engineering */}
    <div
      className="card"
      onClick={() =>
        window.open("/ChatGPT-4 Prompt Engineering ChatGPT, Generative AI & LLM.pdf", "_blank")
      }
      style={{ cursor: "pointer" }}
    >
      <h3>ChatGPT-4 Prompt Engineering</h3>
      <p>
        In-depth exploration of prompt design principles, specialized
        techniques for eliciting precise responses from large language
        models, and strategies for tuning prompts to create reliable
        outputs for AI-driven apps.
      </p>

      <ul>
        <li>Understanding LLM behavior and token dynamics.</li>
        <li>Optimizing prompts for accuracy and relevance.</li>
        <li>Context structuring and conditional logic prompting.</li>
        <li>Hands-on exercises with ChatGPT-4 and generative AI.</li>
      </ul>

      <div className="tech-stack">
        <span>Prompt Engineering</span>
        <span>LLMs</span>
        <span>Generative AI</span>
        <span>ChatGPT-4</span>
        <span>AI Strategy</span>
      </div>
    </div>

    {/* Computational Theory */}
    <div
      className="card"
      onClick={() =>
        window.open("/Computational Theory Language Principle & Finite Automata Theory.pdf", "_blank")
      }
      style={{ cursor: "pointer" }}
    >
      <h3>Computational Theory & Finite Automata</h3>
      <p>
        Comprehensive certification covering core foundations of computer
        science theory — formal languages, grammar structures, state machines,
        and automata — equipping with analytical frameworks behind computing
        systems.
      </p>

      <ul>
        <li>Formal Language definitions and classification.</li>
        <li>Deterministic and non-deterministic finite automata.</li>
        <li>Regular expressions and grammar equivalence.</li>
        <li>Pumping lemma and decidability principles.</li>
      </ul>

      <div className="tech-stack">
        <span>Theoretical CS</span>
        <span>Automata Theory</span>
        <span>Formal Languages</span>
        <span>Computation Models</span>
        <span>Problem Solving</span>
      </div>
    </div>

    {/* Master Generative AI */}
    <div
      className="card"
      onClick={() =>
        window.open("/Master Generative AI & Generative AI tools (ChatGPT & more).pdf", "_blank")
      }
      style={{ cursor: "pointer" }}
    >
      <h3>Master Generative AI & AI Tools</h3>
      <p>
        Applied certification focusing on end-to-end generative AI workflows,
        using ChatGPT and other advanced tools to build intelligent systems,
        automation pipelines, and generative solutions in real contexts.
      </p>

      <ul>
        <li>Practical LLM application development.</li>
        <li>AI-assisted productivity and automation strategies.</li>
        <li>Integration of AI tools with real-world datasets.</li>
        <li>Model evaluation, bias awareness, and optimization.</li>
      </ul>

      <div className="tech-stack">
        <span>Generative AI</span>
        <span>ChatGPT</span>
        <span>AI Toolchains</span>
        <span>Model Evaluation</span>
        <span>Applied Workflows</span>
      </div>
    </div>

    {/* Code-A-Hunt */}
    <div
      className="card"
      onClick={() =>
        window.open("/Code-A-Hunt Certificate.pdf", "_blank")
      }
      style={{ cursor: "pointer" }}
    >
      <h3>Code-A-Hunt Certificate</h3>
      <p>
        Achievement from a competitive coding challenge emphasizing algorithmic
        precision, logical thinking, and real-time problem solving under
        constraints — strengthening core programming and analytical skills.
      </p>

      <ul>
        <li>Data structures and algorithmic design.</li>
        <li>Real-time competitive coding challenges.</li>
        <li>Optimizing solution performance.</li>
        <li>Team collaboration and result analysis.</li>
      </ul>

      <div className="tech-stack">
        <span>Programming</span>
        <span>Algorithms</span>
        <span>Competitive Coding</span>
        <span>Performance Tuning</span>
        <span>LPU Achievement</span>
      </div>
    </div>

  </div>
</section>

      {/* RESEARCH */}
      <section className="section">
        <div className="glass">
          <h2>Research Layer</h2>
          <p>
            Exploring predictive modeling systems, probabilistic forecasting,
            reinforcement learning foundations, and AI governance frameworks
            to design resilient intelligent architectures.
          </p>
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
        <span>🔗</span>
        <p>LinkedIn</p>
      </a>

      <a
        href="https://github.com/2004kunjashashank-arch"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        <span>💻</span>
        <p>GitHub</p>
      </a>

      <a
        href="mailto:2004kunjashashank@gmail.com"
        className="contact-item"
      >
        <span>✉️</span>
        <p>Email</p>
      </a>

      <a
        href="tel:+918639451060"
        className="contact-item"
      >
        <span>📞</span>
        <p>Call</p>
      </a>

    </div>
  </div>
</section>
    </>
  );
}