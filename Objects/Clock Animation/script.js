function clock() {
  const secound = document.querySelector('.secound');
  const minute = document.querySelector('.minute');
  const hour = document.querySelector('.hour');

  const now = new Date();

  const seconds = now.getSeconds() * 6;
  const minutes = now.getMinutes() * 6 + now.getSeconds() * 0.1;
  const hours = (now.getHours() % 12) * 30 + now.getMinutes() * 0.5 + now.getSeconds() * (0.5 / 60);

  secound.style.transform = `rotate(${seconds}deg)`;
  minute.style.transform = `rotate(${minutes}deg)`;
  hour.style.transform = `rotate(${hours}deg)`;
}
setInterval(clock, 1000);
