import ScriptEffects from './components/ScriptEffects';

export default function Home() {
  return (
    <>
      {/* atmosphere */}
      <div className="fx fx-grid"></div>
      <div className="fx fx-glow"></div>
      <div className="fx fx-scan"></div>
      <div className="fx fx-vignette"></div>

      {/* NAV — hidden until past hero, shown by JS */}
      <nav className="nav">
        <a href="#top" className="nav-logo" aria-label="alex built it — home">
          alex&nbsp;built&nbsp;it
        </a>
        <div className="nav-links">
          <a href="#about"    data-target="about"><span className="slash">~/</span>about</a>
          <a href="#services" data-target="services"><span className="slash">~/</span>what-i-do</a>
          <a href="#work"     data-target="work"><span className="slash">~/</span>work</a>
          <a href="#ventures" data-target="ventures"><span className="slash">~/</span>ventures</a>
          <a href="#drive"    data-target="drive"><span className="slash">~/</span>drive</a>
          <a href="#now"      data-target="now"><span className="slash">~/</span>now</a>
        </div>
        <div className="nav-right">
          <button className="theme-toggle" aria-label="Toggle colour scheme">
            <svg className="ico ico-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <svg className="ico ico-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>
          <a href="#contact" className="nav-cta">hire&nbsp;me&nbsp;→</a>
          <button className="nav-burger" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero wrap" id="top">
        <div className="hero-status" data-hero="">
          <span className="dot"></span>available for freelance &amp; full-time
        </div>

        <h1 className="wordmark" data-hero="">alex built it</h1>

        <p className="hero-sub" data-hero="">
          Web apps and iOS software.<br />
          Give me an idea. I&apos;ll ship <span className="em">something real.</span>
        </p>

        <div className="hero-cta" data-hero="">
          <a href="#contact" className="btn btn-primary" data-mag="">hire me <span className="arr">→</span></a>
          <a href="#work" className="btn btn-ghost" data-mag="">see the work <span className="arr">→</span></a>
        </div>

        <div className="scroll-hint" aria-hidden="true">
          <span>SCROLL</span>
          <span className="bar"></span>
        </div>
      </header>

      {/* ABOUT */}
      <section className="section-pad" id="about">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="kick">01 / about me</span>
              <h2>One person, start to finish.</h2>
            </div>
            <p className="h-right">One developer. All the way through.</p>
          </div>

          <div className="about-grid">
            <div className="about-copy reveal">
              <p className="lead">
                I&apos;m 21, based in Newcastle, and I build the whole stack:
                database, API, interface, and the iOS app in your pocket.
              </p>
              <p>
                Most days I&apos;m in <strong>Next.js</strong> or <strong>Swift</strong>,
                with <strong>PostgreSQL</strong> underneath. Give me a problem and I&apos;ll
                make it real. That&apos;s the part I&apos;m actually in it for.
              </p>
              <p>
                I&apos;ve shipped note-taking apps, revision tools for trainee solicitors,
                contributed to a music platform, and built an AI CRM from scratch.
                Different problems, one approach: get it out the door and make it work.
              </p>
            </div>

            <aside className="facts reveal" style={{'--d': '.12s'} as React.CSSProperties}>
              <div className="facts-bar">
                <span className="dots"><i></i><i></i><i></i></span>
                <span>whoami.sh</span>
              </div>
              <div className="fact-row"><span className="k">name</span><span className="v">Alexander Wood</span></div>
              <div className="fact-row"><span className="k">age</span><span className="v">21</span></div>
              <div className="fact-row"><span className="k">based</span><span className="v">Newcastle-upon-Tyne</span></div>
              <div className="fact-row"><span className="k">role</span><span className="v">Full-stack &amp; native dev</span></div>
              <div className="fact-row"><span className="k">company</span><span className="v">Pellar Technologies Ltd</span></div>
              <div className="fact-row"><span className="k">status</span><span className="v accent">open to work →</span></div>
            </aside>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad" id="services">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="kick">02 / what i do</span>
              <h2>I build the full thing.</h2>
            </div>
            <p className="h-right">Tell me what you need.</p>
          </div>

          <div className="svc-grid">
            <article className="svc reveal">
              <span className="svc-no">01</span>
              <h3>Web platforms</h3>
              <p>Next.js front to back. Auth, payments, dashboards, the admin screens nobody sees but everyone needs. Built for production traffic from day one.</p>
              <span className="svc-tags">Next.js · TypeScript · Postgres</span>
            </article>
            <article className="svc reveal" style={{'--d': '.06s'} as React.CSSProperties}>
              <span className="svc-no">02</span>
              <h3>Native iOS apps</h3>
              <p>Swift apps with proper gestures, haptics, and the speed users expect. Noodle went from idea to App Store this way.</p>
              <span className="svc-tags">Swift · SwiftUI · iOS</span>
            </article>
            <article className="svc reveal" style={{'--d': '.12s'} as React.CSSProperties}>
              <span className="svc-no">03</span>
              <h3>Data &amp; backend</h3>
              <p>Postgres schemas built for real traffic. Clean APIs, solid integrations. The infrastructure that keeps the rest of the product running.</p>
              <span className="svc-tags">PostgreSQL · APIs · Auth</span>
            </article>
            <article className="svc reveal">
              <span className="svc-no">04</span>
              <h3>AI tooling</h3>
              <p>AI that does something useful. I built a full CRM with AI at the core — that&apos;s the bar I apply to client work.</p>
              <span className="svc-tags">LLMs · Automation · CRM</span>
            </article>
            <article className="svc reveal" style={{'--d': '.06s'} as React.CSSProperties}>
              <span className="svc-no">05</span>
              <h3>Concept to product</h3>
              <p>A rough sketch or voice note is enough. I&apos;ll take the idea and turn it into something you can put in front of people.</p>
              <span className="svc-tags">Prototyping · MVP · Launch</span>
            </article>
            <article className="svc reveal" style={{'--d': '.12s'} as React.CSSProperties}>
              <span className="svc-no">06</span>
              <h3>Freelance &amp; contract</h3>
              <p>Day rate, full project, or ongoing. Honest timelines, clear updates. My name goes on it — so the work has to be good.</p>
              <span className="svc-tags">Day rate · Project · Retainer</span>
            </article>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="section-pad" id="work">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="kick">03 / selected work</span>
              <h2>Things I&apos;ve shipped.</h2>
            </div>
            <p className="h-right">A selection. More is behind NDAs.</p>
          </div>

          <div className="work-list">
            <a className="work-item reveal" href="#contact">
              <span className="work-no">01</span>
              <span className="work-name">Noodle</span>
              <span className="work-desc">Native iOS note-taking. Fast capture, clean structure. Built in Swift, shipped to the App Store.</span>
              <span className="work-meta">
                <span className="work-tags">Swift · iOS</span>
                <span className="work-status live">● live</span>
              </span>
            </a>
            <a className="work-item reveal" href="#contact">
              <span className="work-no">02</span>
              <span className="work-name">SQEz</span>
              <span className="work-desc">Revision tool for law students sitting the SQE. Structured content built around how the exam actually works.</span>
              <span className="work-meta">
                <span className="work-tags">Swift · Next.js · iOS</span>
                <span className="work-status live">● live</span>
              </span>
            </a>
            <a className="work-item reveal" href="#contact">
              <span className="work-no">03</span>
              <span className="work-name">tooti</span>
              <span className="work-desc">A music app. I contributed engineering and tooling to ship features on schedule.</span>
              <span className="work-meta">
                <span className="work-tags">Collaboration</span>
                <span className="work-status">contributor</span>
              </span>
            </a>
            <a className="work-item reveal" href="#contact">
              <span className="work-no">04</span>
              <span className="work-name">AI CRM</span>
              <span className="work-desc">A CRM built alone, with AI running through the core workflows. Started with an empty repo.</span>
              <span className="work-meta">
                <span className="work-tags">Next.js · AI · Postgres</span>
                <span className="work-status">in use</span>
              </span>
            </a>
            <a className="work-item reveal" href="#contact">
              <span className="work-no">05</span>
              <span className="work-name">…and more</span>
              <span className="work-desc">More projects without case studies. Ask what I can&apos;t show publicly yet.</span>
              <span className="work-meta">
                <span className="work-tags">Various</span>
                <span className="work-status">get in touch →</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* VENTURES */}
      <section className="section-pad" id="ventures">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="kick">04 / ventures</span>
              <h2>The name on the invoices.</h2>
            </div>
            <p className="h-right">Freelance builds and own products, under one roof.</p>
          </div>

          <div className="vent reveal">
            <div className="vent-text">
              <span className="vent-tag">// registered company · UK</span>
              <h3>Pellar Technologies Limited</h3>
              <p>
                Pellar is the company behind the work. I ship my own products through it and take
                on client builds — the same hands on both. Noodle, SQEz, the AI CRM, contributions
                to tooti: all through Pellar.
              </p>
              <div className="vent-products">
                <span className="chip">Noodle</span>
                <span className="chip">SQEz</span>
                <span className="chip">tooti</span>
                <span className="chip">AI CRM</span>
                <span className="chip">+ client work</span>
              </div>
            </div>
            <div className="vent-visual" aria-hidden="true">
              <span className="ring"></span>
              <span className="ring two"></span>
              <span className="stamp">
                <b>PT</b>est. by Alexander Wood<br />building, shipping, repeating
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* DRIVE */}
      <section className="drive section-pad" id="drive">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="kick">05 / what drives me</span>
              <h2>I&apos;ve given myself a deadline.</h2>
            </div>
            <p className="h-right">The target is specific. So is the deadline.</p>
          </div>

          <div className="drive-grid">
            <div className="drive-copy reveal">
              <p className="big">
                I&apos;m driven by what the work <span className="em">buys</span>. A car on
                the drive and a city-centre flat. I&apos;ve got until I&apos;m{' '}
                <span className="em">25</span>.
              </p>
              <p>
                The deadline keeps me moving. It&apos;s why I answer late messages, outwork
                the brief, and take every project seriously. Trust comes from what ships.
              </p>
              <p>
                Wanting something specific by a specific date isn&apos;t a liability.
                That drive is what I bring to your project.
              </p>
            </div>

            <div className="objectives reveal" style={{'--d': '.12s'} as React.CSSProperties}>
              <div className="obj-head">// objectives.json — by age 25</div>
              <div className="obj">
                <span className="box"></span>
                <span>
                  <span className="obj-t">A car on the drive</span>
                  <span className="obj-d">by 25</span>
                </span>
              </div>
              <div className="obj">
                <span className="box"></span>
                <span>
                  <span className="obj-t">City-centre apartment</span>
                  <span className="obj-d">city-centre, mine outright</span>
                </span>
              </div>
              <div className="obj">
                <span className="box"></span>
                <span>
                  <span className="obj-t">Financial stability</span>
                  <span className="obj-d">not just money. options.</span>
                </span>
              </div>

              <div className="timeline">
                <div className="tl-top"><span>age 21 — now</span><span>target 25</span></div>
                <div className="tl-track"><span className="tl-fill" data-pct="25"></span></div>
                <div className="tl-marks">
                  <span>21</span><span>22</span><span>23</span><span>24</span><span>25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad" id="testimonials">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="kick">06 / testimonials</span>
              <h2>What clients say.</h2>
            </div>
            <p className="h-right">From clients, collaborators, and partners.</p>
          </div>

          <div className="tst-grid">
            <article className="tst reveal">
              <p className="body">&quot;Alex is always there for the studio. I feel like he&apos;s available whenever I need him to be.&quot;</p>
              <div className="who">
                <span className="av av-lh" aria-hidden="true">LH</span>
                <span><span className="n">Lucy Healy</span><span className="r">Founder · Burn Mat Studio</span></span>
              </div>
            </article>
            <article className="tst reveal" style={{'--d': '.06s'} as React.CSSProperties}>
              <p className="body">&quot;Alex&apos;s drive for creating solutions that work not only at a technical level but also for non-technical users is beyond anything I&apos;ve seen before.&quot;</p>
              <div className="who">
                <span className="av av-law" aria-hidden="true">P</span>
                <span><span className="n">Partner</span><span className="r">major regional law firm</span></span>
              </div>
            </article>
            <article className="tst reveal" style={{'--d': '.12s'} as React.CSSProperties}>
              <p className="body">&quot;Alex was able to take a bold vision that we had for tooti and create something spectacular with it. We&apos;re amazed at the work that has been done.&quot;</p>
              <div className="who">
                <span className="av av-ac" aria-hidden="true">AC</span>
                <span><span className="n">Alice Clements</span><span className="r">Founder · tooti</span></span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* NOW */}
      <section className="section-pad" id="now">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="kick">07 / now</span>
              <h2>Right now.</h2>
            </div>
            <p className="h-right">Updated when things change.</p>
          </div>

          <div className="now-wrap">
            <div className="now-side reveal">
              <p className="updated">last updated · <b>May 2026</b></p>
              <p>Inspired by the /now movement. If we talk and this looks stale, call me out on it.</p>
            </div>
            <div className="now-feed reveal" style={{'--d': '.1s'} as React.CSSProperties}>
              <div className="now-item">
                <span className="t">now</span>
                <span className="c">
                  <span className="h">Building tooti</span>
                  <span className="d">Shipping features and keeping the engineering moving as the product grows.</span>
                </span>
                <span className="state">active</span>
              </div>
              <div className="now-item">
                <span className="t">now</span>
                <span className="c">
                  <span className="h">Refining Noodle</span>
                  <span className="d">Chasing the details that separate a good iOS app from a great one.</span>
                </span>
                <span className="state">active</span>
              </div>
              <div className="now-item">
                <span className="t">now</span>
                <span className="c">
                  <span className="h">Scaling the AI CRM</span>
                  <span className="d">Making the internal CRM robust enough to hand to other teams.</span>
                </span>
                <span className="state">building</span>
              </div>
              <div className="now-item">
                <span className="t">open</span>
                <span className="c">
                  <span className="h">Open for freelance</span>
                  <span className="d">Room for one or two projects. Web or iOS — bring the interesting ones.</span>
                </span>
                <span className="state">available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact wrap" id="contact">
        <span className="kick reveal">08 / let&apos;s build it</span>
        <h2 className="reveal">
          Got something that<br />needs <span className="em">building?</span>
        </h2>
        <p className="sub reveal" style={{'--d': '.08s'} as React.CSSProperties}>
          Freelance, full-time, or an idea you can&apos;t shake. Message me. I reply fast.
        </p>
        <div className="contact-cta reveal" style={{'--d': '.14s'} as React.CSSProperties}>
          <a href="mailto:hello@alexbuiltit.com" className="btn btn-primary" data-mag="">
            email me <span className="arr">→</span>
          </a>
          <a href="https://wa.me/447346810292" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" data-mag="">
            whatsapp <span className="arr">→</span>
          </a>
        </div>

        <div className="socials reveal" style={{'--d': '.18s'} as React.CSSProperties}>
          <a href="mailto:hello@alexbuiltit.com">
            <span className="s-k">EMAIL</span><span className="s-v">hello@alexbuiltit.com</span>
          </a>
          <a href="https://wa.me/447346810292" target="_blank" rel="noopener noreferrer">
            <span className="s-k">WHATSAPP</span><span className="s-v">+44 7346 810292</span>
          </a>
          <a href="https://x.com/alex_r_wood" target="_blank" rel="noopener noreferrer">
            <span className="s-k">X</span><span className="s-v">@alex_r_wood</span>
          </a>
          <a href="https://instagram.com/xanderdwood" target="_blank" rel="noopener noreferrer">
            <span className="s-k">INSTAGRAM</span><span className="s-v">@xanderdwood</span>
          </a>
          <a href="https://linkedin.com/in/xanderdwood" target="_blank" rel="noopener noreferrer">
            <span className="s-k">LINKEDIN</span><span className="s-v">@xanderdwood</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap">
          <span className="f-mark">alex built it</span>
          <span className="f-meta">
            © <span data-year="">2026</span> Alexander Wood · Built by{' '}
            <a href="#ventures">Pellar Technologies Ltd</a><br />
            Newcastle-upon-Tyne · designed &amp; built end to end
          </span>
        </div>
      </footer>

      <ScriptEffects />
    </>
  );
}
