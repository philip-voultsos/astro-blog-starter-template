const nav = document.querySelector<HTMLElement>('.primary-nav');
const pill = nav?.querySelector<HTMLElement>('.nav-liquid-pill');
const links = nav ? Array.from(nav.querySelectorAll<HTMLAnchorElement>('.nav-link')) : [];

if (nav && pill && links.length) {
  const activeLink = links.find((link) => link.classList.contains('is-active')) ?? links[0];
  let displayedLink = activeLink;

  const movePill = (link: HTMLAnchorElement) => {
    displayedLink = link;
    const navBounds = nav.getBoundingClientRect();
    const linkBounds = link.getBoundingClientRect();

    pill.style.left = `${linkBounds.left - navBounds.left}px`;
    pill.style.top = `${linkBounds.top - navBounds.top}px`;
    pill.style.width = `${linkBounds.width}px`;
    pill.style.height = `${linkBounds.height}px`;
  };

  pill.classList.add('is-initializing');
  movePill(activeLink);
  requestAnimationFrame(() => {
    pill.classList.remove('is-initializing');
    pill.dataset.ready = 'true';
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
