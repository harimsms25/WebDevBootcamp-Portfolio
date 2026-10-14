import { useEffect, useState } from 'react'
import './App.css'
import profilePhoto from './assets/profile.jpg'

const projects = [
  { number: '01', name: 'Orbit', category: 'PRODUCTIVITY', languages: ['JavaScript', 'CSS'], tools: 'React · Local storage', description: 'A calmer place to plan your day. Tasks, priorities, and progress, thoughtfully brought together.', detail: 'Sample concept: a personal productivity dashboard with daily planning, task organization, and progress views.', color: 'green', icon: '◉' },
  { number: '02', name: 'Fieldnotes', category: 'WEB EXPERIENCE', languages: ['JavaScript', 'HTML'], tools: 'React · Markdown', description: 'A digital notebook for the things worth remembering. Built for curiosity and everyday discovery.', detail: 'Sample concept: a searchable journal with markdown writing, topic tags, and a reading-friendly layout.', color: 'orange', icon: '✳' },
  { number: '03', name: 'Forma', category: 'DESIGN & CODE', languages: ['JavaScript', 'CSS'], tools: 'React · CSS animations', description: 'An exploration of type, shape, and motion. Small interactions that make the web feel more human.', detail: 'Sample concept: an interactive collection of reusable interface components, motion studies, and typography experiments.', color: 'purple', icon: '◈' },
  { number: '04', name: 'Waypoint', category: 'EXPLORATION', languages: ['JavaScript', 'HTML'], tools: 'React · Browser APIs', description: 'A little inspiration for your next adventure. Save places and turn someday into a plan.', detail: 'Sample concept: a travel wishlist with saved destinations, personal notes, and itinerary planning.', color: 'blue', icon: '↗' },
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
      <header className="navigation"><a className="wordmark" href="#home">adc<span>®</span></a><nav aria-label="Main navigation"><a href="#work">Selected work</a><a className="nav-name" href="#home">Meenakshi Sundaram Meenakshi Sundaram</a></nav></header>
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
          <div className="project-grid">{projects.map((project) => <article className={`project-card ${project.color}`} key={project.name}><div className="card-top"><span>{project.number} / {project.category}</span><button aria-label={`View ${project.name} project details`} onClick={() => setSelected(project)}>↗</button></div><div className="project-art" aria-hidden="true"><span>{project.icon}</span><div className="art-line" /></div><div className="project-heading"><h3>{project.name}</h3></div><div className="tags">{project.languages.map((language) => <span key={language}>{language}</span>)}</div><p className="frameworks">{project.tools}</p><p className="project-description">{project.description}</p><button className="project-link" onClick={() => setSelected(project)}>Explore project <span>↗</span></button></article>)}</div>
        </section>
      </main>
      <footer id="contact"><div className="footer-main"><div><p className="eyebrow">CONTACTS & LINKS</p><h2>Good things start<br />with a conversation<span>↗</span></h2></div><div className="contact-links"><a href="mailto:mmeenaks@terpmail.umd.edu">Email me <span>↗</span></a><a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`} target="_blank" rel="noreferrer">Open in Gmail <span>↗</span></a><button className="copy-email" onClick={copyEmail}>Copy email address <span aria-hidden="true">⧉</span></button><p className="email-address">{email}</p><p className="copy-status" role="status">{copyStatus}</p><a href="https://github.com/harimsms25" target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href="https://www.linkedin.com/in/meenakshi-sundaram-meenakshi-sundaram-1a9564435/?isSelfProfile=true" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Meenakshi Sundaram Meenakshi Sundaram</span><span>Made with curiosity & React.</span><a href="#home">Back to top ↑</a></div><p className="sample-note">Sample portfolio · Replace the name, profile, projects, and contact links with your own.</p></footer>
      {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><dialog open aria-labelledby="dialog-title" ref={(element) => { if (element) element.querySelector('button')?.focus() }} onClick={(event) => event.stopPropagation()}><button className="close-modal" onClick={() => setSelected(null)} aria-label="Close project details">×</button><p className="eyebrow">{selected.category} / SAMPLE PROJECT</p><h2 id="dialog-title">{selected.name}</h2><p>{selected.detail}</p><div className="tags">{selected.languages.map((language) => <span key={language}>{language}</span>)}</div><p className="frameworks">{selected.tools}</p><p className="dialog-note">Replace this sample with your project story, screenshots, and live demo link.</p></dialog></div>}
    </div>
  )
}
