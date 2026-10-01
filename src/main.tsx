import { FormEvent, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

type ArrowProps = { className?: string };

function Arrow({ className }: ArrowProps) {
  return (
    <svg className={className} viewBox="0 0 18 18" aria-hidden="true">
      <path d="M3 9h11M10 4l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Spark() {
  return <span className="spark" aria-hidden="true">✦</span>;
}

const navItems = [
  { label: 'The Collection', href: '#collection' },
  { label: 'The Edit', href: '#edit' },
  { label: 'Our Story', href: '#story' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [signedUp, setSignedUp] = useState(false);

  function submitSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSignedUp(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Dorm Glow Co. home">
          <span>Dorm Glow</span><i>Co.</i>
        </a>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
        </nav>
        <a className="nav-cta" href="#join">Join the list <Arrow /></a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-rule" />
        <div className="hero-copy">
          <p className="eyebrow light-eyebrow"><span>01</span> Dorm room lighting, reimagined</p>
          <h1>Make room<br />for a <em>better</em> glow.</h1>
          <p className="hero-intro">Personal lighting for the between-classes, door-open, calls-home version of dorm life.</p>
          <a className="button button-navy" href="#collection">Meet the collection <Arrow /></a>
        </div>
        <div className="hero-art">
          <div className="hero-image-wrap">
            <img src="/manus-storage/async-images/xzibUyTZTaIwvBOGUHkF9V/image-1.webp" alt="Student relaxing in a warm, design-conscious dorm room" />
          </div>
          <div className="hero-sticker"><span>EST.</span><strong>2026</strong><span>FOR THE<br />LIVED-IN</span></div>
          <div className="hero-caption">A little light for the life<br />you’re making.</div>
          <div className="orb orb-hero" />
        </div>
        <div className="hero-bottom"><span>SCROLL TO GLOW</span><span className="scroll-line" /><span>↓</span></div>
      </section>

      <section className="intro-section" id="collection">
        <div className="intro-aside">
          <span className="aside-number">02</span>
          <p>THE NEW<br />DORM ESSENTIAL</p>
        </div>
        <div className="intro-copy">
          <p className="eyebrow"><span>Light, but make it yours</span></p>
          <h2>The room is temporary.<br /><em>The feeling doesn’t have to be.</em></h2>
          <div className="intro-bottom">
            <p>From the first late-night study session to the first floor-pizza hang, Dorm Glow is here for the corners that start to feel like home.</p>
            <a className="text-link" href="#edit">See the edit <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <div className="problem-visual">
          <div className="problem-grid" />
          <div className="problem-label"><span>THE BEFORE</span><span>fluorescent, flat, forgettable</span></div>
          <div className="ceiling-light"><span /></div>
        </div>
        <div className="solution-panel">
          <p className="eyebrow"><span>Small shift. Different room.</span></p>
          <h2>Skip the<br /><em>big-light</em><br />energy.</h2>
          <p>Every dorm starts with the same overhead situation. The way you style around it is where your room begins.</p>
          <div className="solution-foot"><Spark /> <span>YOUR SPACE,<br />ON YOUR TERMS</span></div>
        </div>
      </section>

      <section className="benefit-section" id="edit">
        <div className="benefit-heading">
          <p className="eyebrow"><span>Why a better glow?</span></p>
          <h2>For every version<br />of <em>you</em> that lives here.</h2>
        </div>
        <div className="benefit-grid">
          <article className="benefit-card coral-card">
            <span className="benefit-index">01</span>
            <div className="benefit-icon icon-corner"><span /><i /></div>
            <h3>Your corner,<br />your mood.</h3>
            <p>Create a softer visual starting point for late work, slow mornings, and calls home.</p>
          </article>
          <article className="benefit-card navy-card">
            <span className="benefit-index">02</span>
            <div className="benefit-icon icon-objects"><span /><span /><span /></div>
            <h3>Made to<br />belong.</h3>
            <p>Objects that sit easily alongside the books, photos, and tiny rituals you collect.</p>
          </article>
          <article className="benefit-card tan-card">
            <span className="benefit-index">03</span>
            <div className="benefit-icon icon-sun"><i /><i /><i /><i /></div>
            <h3>Room,<br />restyled.</h3>
            <p>A small design move that helps the room look more considered, without overdoing it.</p>
          </article>
          <article className="benefit-card olive-card">
            <span className="benefit-index">04</span>
            <div className="benefit-icon icon-book"><span /><span /></div>
            <h3>Ready for<br />real life.</h3>
            <p>For the study break, the reset, the roommate catch-up, and everything in between.</p>
          </article>
        </div>
      </section>

      <section className="lifestyle-section">
        <div className="lifestyle-gallery">
          <div className="gallery-photo photo-main"><img src="/manus-storage/async-images/xzibUyTZTaIwvBOGUHkF9V/image-3.webp" alt="Warm shared dorm desk styled with study essentials" /></div>
          <div className="gallery-accent"><p>DOING DORM<br />DIFFERENTLY.</p><span>03</span></div>
          <div className="gallery-disc">D<br />G</div>
        </div>
        <div className="lifestyle-copy">
          <p className="eyebrow"><span>The lived-in edit</span></p>
          <blockquote>“Good light is a little thing that makes a big difference.”</blockquote>
          <p>Thoughtfully styled spaces don’t need to take themselves too seriously. A book, a blanket, a lamp, a friend. That’s plenty.</p>
          <a className="text-link" href="#story">The Dorm Glow point of view <Arrow /></a>
        </div>
      </section>

      <section className="steps-section">
        <div className="steps-top">
          <p className="eyebrow"><span>How the glow goes</span></p>
          <p>Consider this your cue to make a little more room for yourself.</p>
        </div>
        <div className="step-list">
          <article><span className="step-no">01</span><h3>Pick your<br /><em>corner.</em></h3><p>Bedside, desk, window nook. Start with the spot that already pulls you in.</p></article>
          <article><span className="step-no">02</span><h3>Place the<br /><em>glow.</em></h3><p>Let a small light turn the everyday setup into a scene you want to come back to.</p></article>
          <article><span className="step-no">03</span><h3>Make the room<br /><em>yours.</em></h3><p>Layer in the rest: the textures, the colors, the proof that someone real lives here.</p></article>
        </div>
      </section>

      <section className="product-section">
        <div className="product-sun" />
        <div className="product-copy">
          <p className="eyebrow"><span>First drop / concept collection</span></p>
          <h2>Meet <em>the Glow.</em></h2>
          <p>Small-scale statement pieces imagined for very real dorm dimensions — with enough personality to move in long after move-in day.</p>
          <a className="button button-coral" href="#join">Get first look access <Arrow /></a>
        </div>
        <div className="product-image-wrap"><img src="/manus-storage/async-images/xzibUyTZTaIwvBOGUHkF9V/image-2.webp" alt="Concept render of a coral bedside lamp on a tan plinth" /></div>
        <div className="product-tag"><span>01 / THE CORE<br />LIGHT</span><span>CONCEPT<br />RENDER</span></div>
        <div className="product-radial">DORM GLOW CO. — DORM GLOW CO. —</div>
      </section>

      <section className="material-section">
        <div className="material-image"><img src="/manus-storage/async-images/xzibUyTZTaIwvBOGUHkF9V/image-4.webp" alt="Dorm Glow concept collection material palette" /></div>
        <div className="material-copy">
          <p className="eyebrow"><span>A little color theory</span></p>
          <h2>Soft edges.<br /><em>Good energy.</em></h2>
          <p>The future collection begins with a feeling: warm, a little unexpected, and easy to make your own.</p>
          <div className="palette-row"><span className="swatch coral" /><span className="swatch navy" /><span className="swatch tan" /><span className="swatch olive" /><span>THE DORM GLOW PALETTE</span></div>
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-topline"><span>04</span><span>THIS IS DORM GLOW CO.</span><span>MADE FOR RIGHT NOW.</span></div>
        <div className="story-content">
          <h2>We’re here for the rooms that are <em>just starting</em> to feel like your own.</h2>
          <div className="story-notes">
            <p>Dorm Glow Co. is an emerging lifestyle brand with a simple point of view: a small light can change the whole mood.</p>
            <p>We make space for the awkward, amazing, borrowed-square-footage years — with style that feels personal from day one.</p>
          </div>
        </div>
        <div className="story-bottom"><span>FOR THE LIVED-IN</span><Spark /><span>FOR THE NEXT CHAPTER</span></div>
      </section>

      <section className="join-section" id="join">
        <div className="join-glow join-glow-one" /><div className="join-glow join-glow-two" />
        <div className="join-content">
          <p className="eyebrow light-eyebrow"><span>Be first in line</span></p>
          <h2>Move-in season<br />starts <em>here.</em></h2>
          <p>Sign up for the first look at what’s glowing next.</p>
          <form className="signup-form" onSubmit={submitSignup}>
            <label className="sr-only" htmlFor="email">Email address</label>
            <input id="email" type="email" placeholder="Your email address" required disabled={signedUp} />
            <button type="submit" disabled={signedUp}>{signedUp ? 'You’re on the list' : <>Keep me in the glow <Arrow /></>}</button>
          </form>
          <p className="concept-note">Concept sign-up — no email is collected in this presentation.</p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><a className="wordmark footer-wordmark" href="#top"><span>Dorm Glow</span><i>Co.</i></a><p>Personal lighting for the lived-in dorm years.</p></div>
        <div className="footer-links"><div><span className="footer-label">EXPLORE</span><a href="#collection">Collection</a><a href="#edit">The Edit</a><a href="#story">Our Story</a></div><div><span className="footer-label">FOLLOW ALONG</span><a href="#join">Instagram</a><a href="#join">Pinterest</a><a href="#join">TikTok</a></div></div>
        <div className="footer-meta"><span>© 2026 DORM GLOW CO.</span><span>Homepage concept prepared for creative direction.</span></div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
