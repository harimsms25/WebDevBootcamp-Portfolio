import { useEffect, useState } from 'react'
import './App.css'
import profilePhoto from './assets/profile.jpg'

const projects = [
  {
    "number": "01",
    "name": "Demo Delivery Robot",
    "category": "ROBOTICS",
    "languages": [
      "Python",
      "C/C++",
      "HTML"
    ],
    "tools": "OpenCV · Picamera2 · pyzbar",
    "description": "A Raspberry Pi and Arduino delivery prototype that follows a track and scans QR codes to retrieve teachers’ supply requests.",
    "detail": "Built a demo robot and companion request app to explore delivering classroom materials. The camera pipeline processes grayscale frames, finds the line’s centroid, and sends steering commands to an Arduino. QR codes connect the robot to a website containing room numbers, teachers, and requested quantities.",
    "highlights": [
      "Reduced QR scanning time from 1.5 seconds to 0.2 seconds in testing, as documented in my résumé.",
      "Combined Raspberry Pi camera input, OpenCV line tracking, and serial motor commands.",
      "Parsed classroom supply requests from QR-linked web pages."
    ],
    "date": "April–May 2026",
    "color": "green",
    "icon": "⌘",
    "url": "https://github.com/harimsms25/CapstoneFinalProject"
  },
  {
    "number": "02",
    "name": "Autonomous Agent Simulation",
    "category": "SIMULATION",
    "languages": [
      "C++"
    ],
    "tools": "raylib · raymath",
    "description": "Autonomous agents seek food and compete in a 2D simulation, using vector-based steering for smooth movement.",
    "detail": "Created a real-time simulation of competing agents with velocity, acceleration, and steering behavior. Agents seek nearby food or wander when none is in range. The published game loop adds timed rounds, score tracking, and changes to surviving agents’ speed, sensing radius, or projectile speed.",
    "highlights": [
      "Used vector math to control movement and turning.",
      "Implemented food seeking, wandering, and per-agent scoring.",
      "Added timed elimination rounds and randomized upgrades for surviving agents."
    ],
    "date": "October 2026",
    "color": "blue",
    "icon": "◉",
    "url": "https://github.com/harimsms25/RayLib"
  },
  {
    "number": "03",
    "name": "Voice-to-Notes Recorder",
    "category": "ANDROID APP",
    "languages": [
      "Java"
    ],
    "tools": "Android SDK · Firebase Auth",
    "description": "An Android app that turns spoken input into written notes, with tabbed views and Firebase sign-up and login.",
    "detail": "Built an Android Studio application using RecognizerIntent for speech-to-text input. Separate fragments organize the app’s tabs, while recording sessions hold note content. The repository also includes local session-file storage and Firebase Authentication integration.",
    "highlights": [
      "Converted spoken input into written text using Android’s RecognizerIntent.",
      "Organized recording and note views with fragments.",
      "Implemented local session storage and a Firebase-based registration and login flow."
    ],
    "date": "May–June 2025",
    "color": "purple",
    "icon": "≋",
    "url": "https://github.com/harimsms25/Voice-To-Notes-Recroder"
  },
  {
    "number": "04",
    "name": "Unity Cooking 3D",
    "category": "GAME DEVELOPMENT",
    "languages": [
      "C#"
    ],
    "tools": "Unity · TextMeshPro",
    "description": "A 3D cooking and serving game with interactive ingredients, assembled food combinations, and score and lives tracking.",
    "detail": "Created a cooking game for my VR & Gaming Development final project. Raycasting lets the player pick up plates and ingredients, build food combinations, and discard items. Prefab selection and scaling update the assembled dish as ingredients change, while UI elements show lives and the final score.",
    "highlights": [
      "Used Unity raycasting for object interaction and ingredient selection.",
      "Selected and scaled prefabs to render different food combinations.",
      "Built score and lives systems, a game-over panel, and time-scale pausing."
    ],
    "date": "May–June 2025",
    "color": "orange",
    "icon": "✳",
    "url": "https://github.com/harimsms25/Unity-Cooking-3D-"
  }
]

export default function App() {
  const [selected, setSelected] = useState(null)
  const [copyStatus, setCopyStatus] = useState('')
  const email = 'mmeenaks@terpmail.umd.edu'
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopyStatus('Email address copied!')
    } catch {
      setCopyStatus('Copy unavailable. Select the email address below to copy it manually.')
    }
  }
  useEffect(() => {
    if (!selected) return
    const onKey = (event) => { if (event.key === 'Escape') setSelected(null) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [selected])
  return (
    <div className="site-shell">
      <header className="navigation"><a className="wordmark" href="#home">Meenakshi Sundaram Meenakshi Sundaram</a><nav aria-label="Main navigation"><a href="#work">Selected work</a></nav></header>
      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-topline"><span>PERSONAL PORTFOLIO</span><span className="availability"><i /> Meenakshi Sundaram Meenakshi Sundaram</span></div>
          <div className="hero-content">
            <div className="profile"><div className="profile-photo-frame"><img className="profile-photo" src={profilePhoto} alt="Meenakshi Sundaram Meenakshi Sundaram" /></div><div className="profile-badge" aria-hidden="true">✦</div></div>
            <div className="introduction"><p className="eyebrow">HELLO, I’M</p><h1 id="hero-title">Meenakshi Sundaram Meenakshi Sundaram<span>.</span></h1><p className="intro-copy">I turn curious ideas into thoughtful digital experiences.</p><a className="hero-link" href="#work">Explore my work <span>↓</span></a></div>
          </div>
          <div className="hero-bottom"><span>DEVELOPER. MAKER. CURIOUS HUMAN.</span><span>SCROLL TO DISCOVER ↓</span></div>
        </section>
        <section className="work" id="work" aria-labelledby="work-title"><div className="section-heading"><div><p className="eyebrow">A FEW THINGS I’VE BUILT</p><h2 id="work-title">Selected work<span> (04)</span></h2></div><p>Ideas made tangible.<br />One project at a time.</p></div>
          <div className="project-grid">{projects.map((project) => <article className={`project-card ${project.color}`} key={project.name}><div className="card-top"><span>{project.number} / {project.category}</span><button aria-label={`View ${project.name} project details`} onClick={() => setSelected(project)}>↗</button></div><div className="project-art" aria-hidden="true"><span>{project.icon}</span><div className="art-line" /></div><div className="project-heading"><h3>{project.name}</h3></div><div className="tags">{project.languages.map((language) => <span key={language}>{language}</span>)}</div><p className="frameworks">{project.tools}</p><p className="project-date">{project.date}</p><p className="project-description">{project.description}</p><button className="project-link" onClick={() => setSelected(project)}>Explore project <span>↗</span></button><a className="repository-link" href={project.url} target="_blank" rel="noreferrer">View on GitHub <span>↗</span></a></article>)}</div>
        </section>
      </main>
      <footer id="contact"><div className="footer-main"><div><p className="eyebrow">CONTACTS & LINKS</p><h2>Good things start<br />with a conversation<span>↗</span></h2></div><div className="contact-links"><a href="mailto:mmeenaks@terpmail.umd.edu">Email me <span>↗</span></a><a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`} target="_blank" rel="noreferrer">Open in Gmail <span>↗</span></a><button className="copy-email" onClick={copyEmail}>Copy email address <span aria-hidden="true">⧉</span></button><p className="email-address">{email}</p><p className="copy-status" role="status">{copyStatus}</p><a href="https://github.com/harimsms25" target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href="https://www.linkedin.com/in/meenakshi-sundaram-meenakshi-sundaram-1a9564435/?isSelfProfile=true" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Meenakshi Sundaram Meenakshi Sundaram</span><span>Made with curiosity & React.</span><a href="#home">Back to top ↑</a></div></footer>
      {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><dialog open aria-labelledby="dialog-title" ref={(element) => { if (element) element.querySelector('button')?.focus() }} onClick={(event) => event.stopPropagation()}><button className="close-modal" onClick={() => setSelected(null)} aria-label="Close project details">×</button><p className="eyebrow">{selected.category} / {selected.date}</p><h2 id="dialog-title">{selected.name}</h2><p>{selected.detail}</p><div className="tags">{selected.languages.map((language) => <span key={language}>{language}</span>)}</div><p className="frameworks">{selected.tools}</p><ul className="project-highlights">{selected.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><a className="dialog-repository" href={selected.url} target="_blank" rel="noreferrer">View repository on GitHub ↗</a></dialog></div>}
    </div>
  )
}
