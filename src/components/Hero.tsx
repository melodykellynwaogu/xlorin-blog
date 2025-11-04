// import { useEffect, useState } from 'react'
// import './Hero.css'

// const lines = [
//   'Xlorin: Your Next-Gen Cybersecurity Assistant',
//   'Precision Guidance • Automated Triage • Actionable Patches',
//   'Accelerate Security Response for Developers and Analysts'
// ]

// export default function Hero() {
//   const [index, setIndex] = useState(0)
//   const [display, setDisplay] = useState('')

//   useEffect(() => {
//     let charIndex = 0
//     let direction = 1
//     let hold = false
//     const tick = () => {
//       const line = lines[index]
//       if (!hold) {
//         charIndex += direction
//         setDisplay(line.slice(0, charIndex))
//       }
//       if (charIndex === line.length && direction === 1 && !hold) {
//         hold = true
//         setTimeout(() => { direction = -1; hold = false }, 900)
//       }
//       if (charIndex === 0 && direction === -1) {
//         setIndex((i) => (i + 1) % lines.length)
//         direction = 1
//       }
//     }
//     const id = setInterval(tick, 60)
//     return () => clearInterval(id)
//   }, [index])

//   return (
//     <section className="hero">
//       <div className="hero-inner">
//         <h1 className="hero-title">Meet Xlorin</h1>
//         <p className="hero-sub">{display}<span className="caret" aria-hidden>▌</span></p>
//         <p className="hero-meta">A compact cybersecurity assistant trained to help engineers triage, summarize, and respond to security issues.</p>
//       </div>
//     </section>
//   )
// }


import { useEffect, useState } from 'react'
import './Hero.css'

const lines = [
  'Xlorin: Your Next-Gen Cybersecurity Assistant',
  'Precision Guidance • Automated Triage • Actionable Patches',
  'Accelerate Security Response for Developers and Analysts'
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')

  useEffect(() => {
    let charIndex = 0
    let direction = 1
    let hold = false
    const tick = () => {
      const line = lines[index]
      if (!hold) {
        charIndex += direction
        setDisplay(line.slice(0, charIndex))
      }
      if (charIndex === line.length && direction === 1 && !hold) {
        hold = true
        setTimeout(() => { direction = -1; hold = false }, 900)
      }
      if (charIndex === 0 && direction === -1) {
        setIndex((i) => (i + 1) % lines.length)
        direction = 1
      }
    }
    const id = setInterval(tick, 60)
    return () => clearInterval(id)
  }, [index])

  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">Meet Xlorin</h1>
        <p className="hero-sub">{display}<span className="caret" aria-hidden>▌</span></p>
        <p className="hero-meta">Elevate your security workflow with **precision** guidance for engineers and analysts.</p>
      </div>
    </section>
  )
}