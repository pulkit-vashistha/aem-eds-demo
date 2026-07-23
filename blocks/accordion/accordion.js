export default function decorate(block) {
  const [label, content] = block.children;

  if (!label || !content) {
    return; // Don't decorate if not properly formed
  }

  block.classList.add('accordion-item');
  label.classList.add('accordion-button');
  label.setAttribute('role', 'button');
  label.setAttribute('aria-expanded', 'false');
  content.classList.add('accordion-content');
  content.style.display = 'none';
}
