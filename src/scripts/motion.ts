import { gsap } from 'gsap';

const RESPONSE_SECONDS = 0.5;
const SCROLL_SECONDS = 0.58;
const MAGNETIC_STRENGTH = 4.5;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

if (!prefersReducedMotion.matches) {
  if (finePointer.matches) {
    document.querySelectorAll<HTMLElement>('.magnetic').forEach((element) => {
      const moveToPointer = (event: PointerEvent) => {
        const bounds = element.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * MAGNETIC_STRENGTH;
        const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * MAGNETIC_STRENGTH;

        gsap.to(element, {
          x,
          y,
          duration: RESPONSE_SECONDS,
          ease: 'power3.out',
          overwrite: 'auto'
        });
      };

      const resetPosition = () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: RESPONSE_SECONDS,
          ease: 'back.out(1.35)',
          overwrite: 'auto'
        });
      };

      element.addEventListener('pointermove', moveToPointer);
      element.addEventListener('pointerleave', resetPosition);
      element.addEventListener('blur', resetPosition);
    });
  }

  const revealElements = document.querySelectorAll<HTMLElement>('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        gsap.fromTo(entry.target, { y: 18, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: SCROLL_SECONDS,
          ease: 'power3.out',
          clearProps: 'opacity,transform'
        });

        const staggerItems = entry.target.querySelectorAll<HTMLElement>(
          '.focus-row, .appointment-row, .prose-section, .aside-section, .study-list li'
        );
        if (staggerItems.length) {
          gsap.fromTo(staggerItems, { y: 12, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 0.48,
            stagger: 0.075,
            delay: 0.06,
            ease: 'power2.out',
            clearProps: 'opacity,transform'
          });
        }
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

    revealElements.forEach((element) => revealObserver.observe(element));
  }
}
