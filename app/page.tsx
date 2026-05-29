import ScriptEffects from './components/ScriptEffects';

export default function Home() {
  return (
    <>
      {/* atmosphere */}
      <div className="fx fx-grid"></div>
      <div className="fx fx-glow"></div>
      <div className="fx fx-scan"></div>
      <div className="fx fx-vignette"></div>

      {/* NAV */}
      <nav className="nav">
        <a href="#top" className="nav-logo" aria-label="alex built it — home">
          alex&nbsp;built&nbsp;it<span className="blink"></span>
        </a>
        <div className="nav-links">
          <a href="#about" data-target="about"><span className="slash">~/</span>about</a>
          <a href="#services" data-target="services"><span className="slash">~/</span>what-i-do</a>
          <a href="#work" data-target="work"><span className="slash">~/</span>work</a>
          <a href="#ventures" data-target="ventures"><span className="slash">~/</span>ventures</a>
          <a href="#drive" data-target="drive"><span className="slash">~/</span>drive</a>
          <a href="#now" data-target="now"><span className="slash">~/</span>now</a>
        </div>
        <a href="#contact" className="nav-cta">hire&nbsp;me&nbsp;→</a>
        <button className="nav-burger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* HERO */}
      <header className="hero wrap" id="top">
        <div className="hero-status" data-hero="">
          <span className="dot"></span>available for freelance &amp; full-time · 2026
        </div>

        <h1 className="wordmark">
          <span className="prompt">&gt;&nbsp;</span>
          <span className="type-target" data-text="alex built it"></span>
          <span className="caret"></span>
        </h1>

        <p className="hero-sub" data-hero="">
          I turn half-formed ideas into <span className="em">web apps</span> and{' '}
          <span className="em">native software</span> that actually ship.
        </p>
        <p className="hero-meta" data-hero="">// Alexander Wood · 21 · Newcastle-upon-Tyne</p>

        <div className="hero-cta" data-hero="">
          <a href="#contact" className="btn btn-primary" data-mag="">hire me <span className="arr">→</span></a>
          <a href="#work" className="btn btn-ghost" data-mag="">see the work <span className="arr">→</span></a>
        </div>

        <div className="stack-row" data-hero="">
          <span className="lbl">built with:</span>
          <span className="chip">Next.js</span>
          <span className="chip">Swift</span>
          <span className="chip">PostgreSQL</span>
          <span className="chip">TypeScript</span>
          <span className="chip">AI tooling</span>
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
              <h2>The person who designs it is the person who builds it.</h2>
            </div>
            <p className="h-right">No agency layers. No hand-off problems. One developer, end to end.</p>
          </div>

          <div className="about-grid">
            <div className="about-copy reveal">
              <p className="lead">
                I&apos;m 21, working out of Newcastle-upon-Tyne, and I build the whole thing — the database,
                the backend, the interface, and the app you actually hold in your hand.
              </p>
              <p>
                Most days I&apos;m in <strong>Next.js</strong> for the web or <strong>Swift</strong> for iOS,
                with <strong>PostgreSQL</strong> underneath. I like the part where a vague idea becomes something
                a person can open and use. That&apos;s the job I&apos;d do for free — getting paid to do it is
                the goal.
              </p>
              <p>
                I&apos;ve shipped note-taking apps, study tools for trainee solicitors, contributed to a music
                platform, and built an AI-driven CRM from an empty repo. Different problems, same instinct:
                make it real, make it fast, make it good.
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
              <h2>Bring me a problem. I&apos;ll bring back a product.</h2>
            </div>
            <p className="h-right">Whatever the project is, I&apos;d rather build it than talk about building it.</p>
          </div>

          <div className="svc-grid">
            <article className="svc reveal">
              <span className="svc-no">01</span>
              <h3>Web platforms</h3>
              <p>Full-stack Next.js apps — auth, payments, dashboards, and the boring admin panels that make a product actually run. Built to handle real users, not just a demo.</p>
              <span className="svc-tags">Next.js · TypeScript · Postgres</span>
            </article>
            <article className="svc reveal" style={{'--d': '.06s'} as React.CSSProperties}>
              <span className="svc-no">02</span>
              <h3>Native iOS apps</h3>
              <p>Swift apps that feel native because they are — proper gestures, haptics, and speed. Noodle was built exactly this way, from first screen to App Store.</p>
              <span className="svc-tags">Swift · SwiftUI · iOS</span>
            </article>
            <article className="svc reveal" style={{'--d': '.12s'} as React.CSSProperties}>
              <span className="svc-no">03</span>
              <h3>Data &amp; backend</h3>
              <p>PostgreSQL schemas that don&apos;t fall over under load. APIs, third-party integrations, and the plumbing nobody sees but everybody depends on.</p>
              <span className="svc-tags">PostgreSQL · APIs · Auth</span>
            </article>
            <article className="svc reveal">
              <span className="svc-no">04</span>
              <h3>AI tooling</h3>
              <p>Practical AI features that earn their place — not a chatbot bolted onto a homepage. I built my own AI-driven CRM end to end to prove the point.</p>
              <span className="svc-tags">LLMs · Automation · CRM</span>
            </article>
            <article className="svc reveal" style={{'--d': '.06s'} as React.CSSProperties}>
              <span className="svc-no">05</span>
              <h3>Concept → product</h3>
              <p>Got a sketch, a voice note, a &quot;wouldn&apos;t it be cool if…&quot;? That&apos;s my favourite starting point. I&apos;ll turn it into something you can put in front of people.</p>
              <span className="svc-tags">Prototyping · MVP · Launch</span>
            </article>
            <article className="svc reveal" style={{'--d': '.12s'} as React.CSSProperties}>
              <span className="svc-no">06</span>
              <h3>Freelance &amp; contract</h3>
              <p>Short sprints, full builds, or a steady hand on an existing codebase. Clear updates, honest timelines, and work I&apos;d put my own name on — because I do.</p>
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
              <h2>Things I&apos;ve built and shipped.</h2>
            </div>
            <p className="h-right">A slice of it. There&apos;s a long tail of internal tools and one-off builds behind these.</p>
          </div>

          <div className="work-list">
            <a className="work-item reveal" href="#contact">
              <span className="work-no">01</span>
              <span className="work-name" data-glitch="">Noodle</span>
              <span className="work-desc">A native iOS note-taking app — fast capture, clean structure, built in Swift from the first screen to the App Store.</span>
              <span className="work-meta">
                <span className="work-tags">Swift · iOS</span>
                <span className="work-status live">● live</span>
              </span>
            </a>
            <a className="work-item reveal" href="#contact">
              <span className="work-no">02</span>
              <span className="work-name" data-glitch="">SQEz</span>
              <span className="work-desc">A study tool for law students preparing to qualify as solicitors — structured SQE revision that fits how people actually learn.</span>
              <span className="work-meta">
                <span className="work-tags">Next.js · Postgres</span>
                <span className="work-status live">● live</span>
              </span>
            </a>
            <a className="work-item reveal" href="#contact">
              <span className="work-no">03</span>
              <span className="work-name" data-glitch="">tooti</span>
              <span className="work-desc">A music app I helped bring to life — contributing tooling and engineering to get features out the door.</span>
              <span className="work-meta">
                <span className="work-tags">Collaboration</span>
                <span className="work-status">contributor</span>
              </span>
            </a>
            <a className="work-item reveal" href="#contact">
              <span className="work-no">04</span>
              <span className="work-name" data-glitch="">AI-driven CRM</span>
              <span className="work-desc">A customer-relationship platform I built solo, with AI woven through the workflow — from an empty repo to a working internal product.</span>
              <span className="work-meta">
                <span className="work-tags">Next.js · AI · Postgres</span>
                <span className="work-status">in use</span>
              </span>
            </a>
            <a className="work-item reveal" href="#contact">
              <span className="work-no">05</span>
              <span className="work-name" data-glitch="">…and more</span>
              <span className="work-desc">Numerous other tools and platforms — the kind of work that doesn&apos;t always get a landing page. Ask me what I&apos;m not allowed to show yet.</span>
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
            <p className="h-right">Not just freelance hours — a company building its own products too.</p>
          </div>

          <div className="vent reveal">
            <div className="vent-text">
              <span className="vent-tag">// registered company · UK</span>
              <h3>Pellar Technologies Limited</h3>
              <p>
                The studio behind the work. Through Pellar I ship products under my own roof and take on builds
                for other people — the same hands on both. Noodle and SQEz live here, the music app tooti got
                my engineering, and the AI-driven CRM was built in-house.
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
            <p className="h-right">Honest about the why. It&apos;s the thing that gets me to the desk early.</p>
          </div>

          <div className="drive-grid">
            <div className="drive-copy reveal">
              <p className="big">
                I&apos;ll be straight with you: I&apos;m driven by what the work can{' '}
                <span className="em">buy</span>. I want a Tesla in the drive and a city-centre apartment
                to come home to — and I&apos;ve given myself until <span className="em">25</span> to get there.
              </p>
              <p>
                That deadline isn&apos;t pressure, it&apos;s the engine. It&apos;s why I&apos;ll outwork the
                brief, answer the late message, and treat your project like the next one depends on it —
                because it does. I&apos;d rather earn trust by shipping than promise it in a pitch.
              </p>
              <p>
                Ambition gets a bad name. I think wanting more, and being willing to work tirelessly for it,
                is exactly the energy you want pointed at your problem.
              </p>
            </div>

            <div className="objectives reveal" style={{'--d': '.12s'} as React.CSSProperties}>
              <div className="obj-head">// objectives.json — by age 25</div>
              <div className="obj">
                <span className="box"></span>
                <span>
                  <span className="obj-t">Tesla Model Y</span>
                  <span className="obj-d">on the drive — the visible proof the work paid off</span>
                </span>
              </div>
              <div className="obj">
                <span className="box"></span>
                <span>
                  <span className="obj-t">City-centre apartment</span>
                  <span className="obj-d">a place that&apos;s mine, in the middle of it all</span>
                </span>
              </div>
              <div className="obj">
                <span className="box"></span>
                <span>
                  <span className="obj-t">Financial stability</span>
                  <span className="obj-d">the real prize — options, security, room to breathe</span>
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
              <h2>Don&apos;t take my word for it.</h2>
            </div>
            <p className="h-right">Real words from real clients — slotting in as the work speaks for itself.</p>
          </div>

          <div className="tst-grid">
            <article className="tst placeholder reveal">
              <span className="q">// awaiting_review</span>
              <p className="body">&quot;Drop a client quote here — what it was like to work with me, and what shipped.&quot;</p>
              <div className="who">
                <span className="av"></span>
                <span><span className="n">[ client name ]</span><span className="r">role · company</span></span>
              </div>
            </article>
            <article className="tst placeholder reveal" style={{'--d': '.06s'} as React.CSSProperties}>
              <span className="q">// awaiting_review</span>
              <p className="body">&quot;A second voice — ideally about delivery, communication, or the result.&quot;</p>
              <div className="who">
                <span className="av"></span>
                <span><span className="n">[ client name ]</span><span className="r">role · company</span></span>
              </div>
            </article>
            <article className="tst placeholder reveal" style={{'--d': '.12s'} as React.CSSProperties}>
              <span className="q">// awaiting_review</span>
              <p className="body">&quot;And a third — short and specific beats long and vague every time.&quot;</p>
              <div className="who">
                <span className="av"></span>
                <span><span className="n">[ client name ]</span><span className="r">role · company</span></span>
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
              <h2>What I&apos;m working on right now.</h2>
            </div>
            <p className="h-right">A living page — what&apos;s got my attention this week.</p>
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
                  <span className="h">Growing SQEz</span>
                  <span className="d">Adding content and polishing the revision flow for the next exam cohort.</span>
                </span>
                <span className="state">active</span>
              </div>
              <div className="now-item">
                <span className="t">now</span>
                <span className="c">
                  <span className="h">Refining Noodle</span>
                  <span className="d">Shipping updates and chasing the little details that make an iOS app feel right.</span>
                </span>
                <span className="state">active</span>
              </div>
              <div className="now-item">
                <span className="t">now</span>
                <span className="c">
                  <span className="h">Scaling the AI CRM</span>
                  <span className="d">Turning the internal tool into something sturdier and more useful day to day.</span>
                </span>
                <span className="state">building</span>
              </div>
              <div className="now-item">
                <span className="t">open</span>
                <span className="c">
                  <span className="h">Taking on freelance</span>
                  <span className="d">Room for one or two new projects. Web or iOS — bring the interesting ones.</span>
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
          Freelance, full-time, or a half-baked idea you can&apos;t stop thinking about — start the conversation. I reply fast.
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
          <span className="f-mark">alex built it<span className="blink"></span></span>
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
