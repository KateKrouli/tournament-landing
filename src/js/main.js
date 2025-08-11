

// Счетчик с рандомным числом
function startRandomCounter() {
  const el = document.getElementById('random-counter');
  if (!el) return;
  function update() {
    el.textContent = Math.floor(Math.random() * (1600 - 1200 + 1)) + 1200;
  }
  update();
  setInterval(update, 5000);
}

document.addEventListener('DOMContentLoaded', startRandomCounter);


// filepath: /workspaces/tournament-landing/src/components/main-block.html
// ...existing code...

/**
 * Таймер обратного отсчёта до заданной даты окончания.
 * @param {string} selector - CSS-селектор контейнера таймера.
 * @param {string|Date} endDate - Дата окончания (например, '2025-08-20T18:00:00').
 */
function startCountdown(selector, endDate) {
  const timer = document.querySelector(selector);
  if (!timer) return;

  function pad(num) {
    return String(num).padStart(2, '0');
  }

  function update() {
    const now = new Date();
    const end = new Date(endDate);
    let diff = Math.max(0, end - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
    const seconds = Math.floor(diff / 1000);

    const items = timer.querySelectorAll('.timer__item');
    if (items.length === 4) {
      items[0].querySelector('.timer__number').textContent = pad(days);
      items[1].querySelector('.timer__number').textContent = pad(hours);
      items[2].querySelector('.timer__number').textContent = pad(minutes);
      items[3].querySelector('.timer__number').textContent = pad(seconds);
    }

    if (end - now <= 0) clearInterval(interval);
  }

  update();
  const interval = setInterval(update, 1000);
}


document.addEventListener('DOMContentLoaded', function() {
  startCountdown('.timer', '2025-08-20T18:00:00');
});