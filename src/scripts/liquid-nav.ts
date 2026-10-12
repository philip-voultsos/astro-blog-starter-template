import { gsap } from 'gsap';

const nav = document.querySelector<HTMLElement>('.primary-nav');
const pill = nav?.querySelector<HTMLElement>('.nav-liquid-pill');
const links = nav ? Array.from(nav.querySelectorAll<HTMLAnchorElement>('.nav-link')) : [];

if (nav && pill && links.length) {
  const activeLink = links.find((link) => link.classList.contains('is-active')) ?? links[0];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let displayedLink = activeLink;

  const measure = (link: HTMLAnchorElement) => {
    const navBounds = nav.getBoundingClientRect();
    const linkBounds = link.getBoundingClientRect();
    return {
      x: linkBounds.left - navBounds.left,
      y: linkBounds.top - navBounds.top,
      width: linkBounds.width,
      height: linkBounds.height
    };
  };

  const initialPosition = measure(activeLink);
  gsap.set(pill, { ...initialPosition, opacity: 0 });

  const xTo = gsap.quickTo(pill, 'x', { duration: 0.34, ease: 'power3.out', overwrite: 'auto' });
  const yTo = gsap.quickTo(pill, 'y', { duration: 0.34, ease: 'power3.out', overwrite: 'auto' });
  const widthTo = gsap.quickTo(pill, 'width', { duration: 0.34, ease: 'power3.out', overwrite: 'auto' });
  const heightTo = gsap.quickTo(pill, 'height', { duration: 0.34, ease: 'power3.out', overwrite: 'auto' });

  const movePill = (link: HTMLAnchorElement) => {
    displayedLink = link;
    const position = measure(link);

    if (reduceMotion) {
      gsap.set(pill, position);
      return;
    }

    xTo(position.x);
    yTo(position.y);
    widthTo(position.width);
    heightTo(position.height);
  };

  requestAnimationFrame(() => {
    pill.dataset.ready = 'true';
    gsap.to(pill, { opacity: 1, duration: 0.16, ease: 'power1.out', overwrite: 'auto' });
  });

  links.forEach((link) => {
    link.addEventListener('pointerenter', () => movePill(link));
    link.addEventListener('focus', () => movePill(link));
    link.addEventListener('click', () => movePill(link));
  });

  nav.addEventListener('pointerleave', () => movePill(activeLink));
  nav.addEventListener('focusout', (event: FocusEvent) => {
    if (!(event.relatedTarget instanceof Node) || !nav.contains(event.relatedTarget)) {
      movePill(activeLink);
    }
  });

  window.addEventListener('resize', () => movePill(displayedLink), { passive: true });
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(() => movePill(displayedLink));
    observer.observe(nav);
    links.forEach((link) => observer.observe(link));
  }

  if (document.fonts) {
    void document.fonts.ready.then(() => movePill(displayedLink));
  }
}
