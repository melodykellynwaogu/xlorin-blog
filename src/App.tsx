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
            <h1 className="post-title">Introducing Xlorin: a cybersecurity chatbot</h1>
            <div className="post-meta">By MelodyC • Oct 30, 2025 • Security</div>
          </header>

          <section className="post-body">
            <p className="lead">Xlorin is a compact cybersecurity assistant built to help engineers triage vulnerabilities, summarize findings, and provide concise guidance.</p>
            <p>Below is a short overview and dynamic snapshot of Xlorin's capabilities. Use the buttons and interactions to explore more.</p>

            <AboutXlorin />

            <h2>Why Xlorin?</h2>
            <p>In today's fast-paced security landscape, engineers need quick, actionable insights. Xlorin is designed to streamline the process from detection to remediation with concise summaries and prioritized next steps.</p>
          </section>
        </article>
      </div>
    </>
  )
}

export default App
