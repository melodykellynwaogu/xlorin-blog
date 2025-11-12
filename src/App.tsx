import './App.css'
import './blog.css'
import Hero from './components/Hero'
import AboutXlorin from './components/AboutXlorin'

function App() {
  

  return (
    <>
      <Hero />
      <div className="container">
        <article className="post">
          <header className="post-header">
            <h1 className="post-title">Introducing IVON: a cybersecurity chatbot</h1>
            <div className="post-meta">By IVON Team • Oct 30, 2025 • Security</div>
          </header>

          <section className="post-body">
            <p className="lead">IVON is a compact cybersecurity assistant built to help engineers triage vulnerabilities, summarize findings, and provide concise guidance.</p>
            <p>Below is a short overview and dynamic snapshot of IVON's capabilities. Use the buttons and interactions to explore more.</p>

            <AboutXlorin />

            <h2>Why IVON?</h2>
            <p>In today's fast-paced security landscape, engineers need quick, actionable insights. IVON is designed to streamline the process from detection to remediation with concise summaries and prioritized next steps.</p>
          </section>
        </article>
        <footer className="site-footer">
          <div className="footer-links"><a href="/privacy">Privacy Policy</a>
            <span> | </span><a href="/terms">Terms of Service</a><span> | </span>
            <a href="https://xlorin.vercel.app">IVON</a>
          </div>
          <p className="footer-meta">
            Powered by IVON AI | © {new Date().getFullYear()} IVON. All Rights Reserved.
          </p>
        </footer>
      </div>
    </>
  )
}

export default App
