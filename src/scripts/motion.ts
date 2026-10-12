import { gsap } from 'gsap';

const RESPONSE_SECONDS = 0.14;
const MAGNETIC_STRENGTH = 3.5;
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
          ease: 'elastic.out(1, 0.72)',
          overwrite: 'auto'
        });
      };

      const resetPosition = () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: RESPONSE_SECONDS,
          ease: 'elastic.out(1, 0.72)',
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

        gsap.fromTo(
          entry.target,
          { y: 8 },
          {
            y: 0,
            duration: RESPONSE_SECONDS,
            ease: 'power2.out',
            clearProps: 'transform'
          }
        );
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    revealElements.forEach((element) => revealObserver.observe(element));
  }
}
