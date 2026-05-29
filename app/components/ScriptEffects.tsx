'use client';

import { useEffect } from 'react';

export default function ScriptEffects() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function typeWordmark() {
      const el = document.querySelector('.type-target') as HTMLElement | null;
      if (!el) return;
      const text = el.getAttribute('data-text') || el.textContent || '';
      if (reduce) { el.textContent = text; return; }
      el.textContent = '';
      let i = 0;
      const speed = 62;
      function step() {
        if (i <= text.length) {
          el!.textContent = text.slice(0, i);
          i++;
          setTimeout(step, speed + (Math.random() * 36 - 18));
        }
      }
      setTimeout(step, 420);
    }

    function heroReveal() {
      const items = document.querySelectorAll('[data-hero]');
      items.forEach((el, idx) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.opacity = '0';
        htmlEl.style.transform = 'translateY(18px)';
        htmlEl.style.transition = 'opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)';
        setTimeout(() => {
          htmlEl.style.opacity = '1';
          htmlEl.style.transform = 'none';
        }, 250 + idx * 110);
      });
    }

    function scrollReveals() {
      const els = document.querySelectorAll('.reveal');
      if (reduce || !('IntersectionObserver' in window)) {
        els.forEach(e => e.classList.add('in'));
        return;
      }
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
      els.forEach(e => io.observe(e));
    }

    function navBehavior() {
      const nav = document.querySelector('.nav');
      if (!nav) return;
      const links = [...document.querySelectorAll('.nav-links a[data-target]')] as HTMLAnchorElement[];
      const sections = links
        .map(a => document.getElementById(a.getAttribute('data-target') || ''))
        .filter(Boolean) as HTMLElement[];

      function onScroll() {
        (nav as Element).classList.toggle('scrolled', window.scrollY > 24);
        const probe = window.scrollY + window.innerHeight * 0.32;
        let current: HTMLElement | null = null;
        for (const s of sections) {
          if (s.offsetTop <= probe) current = s;
        }
        links.forEach(a =>
          a.classList.toggle('active', !!current && a.getAttribute('data-target') === current.id)
        );
      }
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    function mobileMenu() {
      const burger = document.querySelector('.nav-burger');
      const links = document.querySelector('.nav-links');
      if (!burger || !links) return;
      burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        links.classList.toggle('open');
      });
      links.querySelectorAll('a').forEach(a =>
        a.addEventListener('click', () => {
          burger.classList.remove('open');
          links.classList.remove('open');
        })
      );
    }

    function magnetic() {
      if (reduce || window.matchMedia('(pointer: coarse)').matches) return;
      document.querySelectorAll('[data-mag]').forEach(btn => {
        const btnEl = btn as HTMLElement;
        const strength = 0.32;
        btnEl.addEventListener('mousemove', (e) => {
          const r = btnEl.getBoundingClientRect();
          const x = (e as MouseEvent).clientX - r.left - r.width / 2;
          const y = (e as MouseEvent).clientY - r.top - r.height / 2;
          btnEl.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        });
        btnEl.addEventListener('mouseleave', () => { btnEl.style.transform = ''; });
      });
    }

    function timeline() {
      const fill = document.querySelector('.tl-fill') as HTMLElement | null;
      if (!fill) return;
      const pct = fill.getAttribute('data-pct') || '0';
      if (!('IntersectionObserver' in window)) { fill.style.width = pct + '%'; return; }
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            fill.style.width = pct + '%';
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.5 });
      io.observe(fill);
    }

    function glitch() {
      if (reduce) return;
      const glyphs = '!<>-_\\/[]{}—=+*^?#________';
      document.querySelectorAll('[data-glitch]').forEach(el => {
        const original = el.textContent || '';
        let frame: ReturnType<typeof setInterval>;
        el.addEventListener('mouseenter', () => {
          let iteration = 0;
          clearInterval(frame);
          frame = setInterval(() => {
            el.textContent = original.split('').map((ch, i) => {
              if (ch === ' ') return ' ';
              if (i < iteration) return original[i];
              return glyphs[Math.floor(Math.random() * glyphs.length)];
            }).join('');
            iteration += 1 / 2;
            if (iteration >= original.length) { clearInterval(frame); el.textContent = original; }
          }, 28);
        });
        el.addEventListener('mouseleave', () => { clearInterval(frame); el.textContent = original; });
      });
    }

    function year() {
      const y = document.querySelector('[data-year]');
      if (y) y.textContent = new Date().getFullYear().toString();
    }

    typeWordmark();
    heroReveal();
    scrollReveals();
    navBehavior();
    mobileMenu();
    magnetic();
    timeline();
    glitch();
    year();
  }, []);

  return null;
}
