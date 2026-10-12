/**
 * A tiny spring-damped hover response for key links.
 * Intentionally dependency-free: native anchors keep their semantics and keyboard use.
 */
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

if (!reducedMotion.matches && finePointer.matches) {
  const elements = document.querySelectorAll<HTMLElement>('.magnetic');

  elements.forEach((element) => {
    let x = 0;
    let y = 0;
    let velocityX = 0;
    let velocityY = 0;
    let targetX = 0;
    let targetY = 0;
    let frame = 0;

    const strength = Number(element.dataset.magneticStrength || 4);

    const tick = () => {
      // Spring force pulls the element towards its target; damping prevents mechanical jitter.
      velocityX = (velocityX + (targetX - x) * 0.19) * 0.68;
      velocityY = (velocityY + (targetY - y) * 0.19) * 0.68;
      x += velocityX;
      y += velocityY;

      if (Math.abs(x) < 0.025 && Math.abs(y) < 0.025 && Math.abs(velocityX) < 0.025 && Math.abs(velocityY) < 0.025) {
        x = 0;
        y = 0;
        element.style.transform = '';
        frame = 0;
        return;
      } else {
        element.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
      }

      frame = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (!frame) frame = window.requestAnimationFrame(tick);
    };

    element.addEventListener('pointermove', (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width - 0.5) * strength;
      targetY = ((event.clientY - rect.top) / rect.height - 0.5) * strength;
      start();
    });

    element.addEventListener('pointerleave', () => {
      targetX = 0;
      targetY = 0;
      start();
    });

    element.addEventListener('blur', () => {
      targetX = 0;
      targetY = 0;
      start();
    });
  });
}
