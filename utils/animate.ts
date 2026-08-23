export function animateCountUp(elId: string, target: number) {
  const el = document.getElementById(elId);
  if (!el) return;
  const num = parseInt(String(target)) || 0;
  let current = 0;
  const step = Math.ceil(num / 40);
  const interval = setInterval(() => {
    current += step;
    if (current >= num) {
      current = num;
      clearInterval(interval);
    }
    el.textContent = current.toLocaleString();
  }, 30);
}