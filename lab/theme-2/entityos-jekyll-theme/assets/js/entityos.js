/* ════════════════════════════════════════════════
   entityOS Learn · GitHub Pages Jekyll Theme
   entityos.js
   ════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── Theme (light / dark) ─── */
  const htmlEl = document.documentElement;
  const savedTheme = localStorage.getItem('entityos-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  function setTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('entityos-theme', theme);
  }

  // Apply on load
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (prefersDark) {
    setTheme('dark');
  }

  // Toggle button
  document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        const current = htmlEl.getAttribute('data-theme');
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }
  });

  /* ─── Nav: scroll shadow ─── */
  document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('site-header');
    if (!header) return;

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(function () {
          if (window.scrollY > 10) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  });

  /* ─── Mobile menu ─── */
  document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('nav-burger');
    const menu   = document.getElementById('mobile-menu');
    if (!burger || !menu) return;

    burger.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
      menu.setAttribute('aria-hidden', String(!isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!header.contains(e.target) && menu.classList.contains('open')) {
        menu.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });

    var header = document.getElementById('site-header');
  });

  /* ─── Scroll reveal ─── */
  document.addEventListener('DOMContentLoaded', function () {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    if (!('IntersectionObserver' in window)) {
      // Fallback: just show all
      revealEls.forEach(function (el) { el.classList.add('visible'); });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(function (el) { observer.observe(el); });
  });

  /* ─── Sidebar TOC (on guide pages with toc: true) ─── */
  document.addEventListener('DOMContentLoaded', function () {
    const tocContainer = document.getElementById('toc-content');
    const contentArea  = document.querySelector('.content-area');
    if (!tocContainer || !contentArea) return;

    const headings = contentArea.querySelectorAll('h2, h3');
    if (!headings.length) return;

    const ul = document.createElement('ul');
    ul.style.cssText = 'list-style:none;padding:0;margin:0;';

    headings.forEach(function (h) {
      if (!h.id) {
        // Auto-generate id
        h.id = h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      }
      const li = document.createElement('li');
      li.style.marginBottom = '4px';
      const a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      a.style.cssText = [
        'display:block',
        'font-size:13px',
        'color:var(--muted)',
        'padding:5px 8px',
        'border-radius:6px',
        'transition:all 0.15s',
        h.tagName === 'H3' ? 'padding-left:20px;font-size:12px;' : ''
      ].join(';');
      a.addEventListener('mouseenter', function () { a.style.color = 'var(--text)'; a.style.background = 'var(--surface2)'; });
      a.addEventListener('mouseleave', function () { a.style.color = 'var(--muted)'; a.style.background = ''; });
      li.appendChild(a);
      ul.appendChild(li);
    });

    tocContainer.appendChild(ul);

    // Highlight on scroll
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        const id = entry.target.id;
        const link = tocContainer.querySelector('a[href="#' + id + '"]');
        if (link) {
          link.style.color = entry.isIntersecting ? 'var(--accent)' : 'var(--muted)';
          link.style.fontWeight = entry.isIntersecting ? '600' : '';
        }
      });
    }, { rootMargin: '-80px 0px -70% 0px' });

    headings.forEach(function (h) { observer.observe(h); });
  });

  /* ─── Code block copy buttons ─── */
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.content-area pre').forEach(function (pre) {
      const btn = document.createElement('button');
      btn.textContent = 'Copy';
      btn.style.cssText = [
        'position:absolute', 'top:10px', 'right:10px',
        'background:rgba(255,255,255,0.12)', 'color:rgba(255,255,255,0.7)',
        'border:none', 'border-radius:6px', 'padding:4px 10px',
        'font-size:12px', 'font-family:var(--font-sans)',
        'cursor:pointer', 'transition:all 0.15s'
      ].join(';');

      pre.style.position = 'relative';

      btn.addEventListener('click', function () {
        const code = pre.querySelector('code') || pre;
        navigator.clipboard.writeText(code.textContent).then(function () {
          btn.textContent = 'Copied!';
          btn.style.color = '#4ade80';
          setTimeout(function () { btn.textContent = 'Copy'; btn.style.color = 'rgba(255,255,255,0.7)'; }, 2000);
        });
      });

      pre.appendChild(btn);
    });
  });

})();
