import { useEffect, useRef, useState } from 'react'
import './AboutXlorin.css'

const statsSeed = [
  { id: 'answers', label: 'Questions answered', value: 1243 },
  { id: 'topics', label: 'Topics trained', value: 87 },
  { id: 'uptime', label: 'Uptime (hrs)', value: 432 }
]

function useCountUp(target: number, start = 0, duration = 900) {
  const [value, setValue] = useState(start)
  useEffect(() => {
    let raf = 0
    const startTs = performance.now()
    function tick(now: number) {
      const t = Math.min(1, (now - startTs) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.floor(start + (target - start) * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, start, duration])
  return value
}

export default function AboutXlorin() {
  const [expanded, setExpanded] = useState(false)
  const [visible, setVisible] = useState(false)
  const nodeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = nodeRef.current
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setVisible(true) })
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={nodeRef} className="about-card">
      <header>
        <h2>About Xlorin</h2>
        <p className="lead">A nimble assistant trained to help with code, docs, and quick research.</p>
      </header>

      <div className={`about-text ${expanded ? 'expanded' : ''}`}>
        <p>
          Xlorin is designed to be compact, helpful, and developer-friendly. It blends
          search, summarization and concise answers to help you move faster.
        </p>
        {expanded && (
          <div>
            <p>
              Under the hood it gathers context from local sessions and can surface
              short summaries, links, and code examples. It prefers short, actionable
              replies when the "brief" mode is enabled.
            </p>
          </div>
        )}
      </div>

      <div className="about-actions">
        <button className="toggle-btn" onClick={() => setExpanded(v => !v)}>
          {expanded ? 'Show less' : 'Read more'}
        </button>
      </div>

      <div className="stats">
        {statsSeed.map(s => (
          <Stat key={s.id} label={s.label} value={visible ? s.value : 0} />
        ))}
      </div>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  const v = useCountUp(value, 0, 900)
  return (
    <div className="stat">
      <div className="stat-value">{v}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}
