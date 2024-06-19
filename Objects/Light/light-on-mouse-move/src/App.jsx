import './App.css';
function Run() {
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const light = document.querySelector('.light');

    light.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 5%, black 20%)`;
  });
  return (
    <>
      <h1>Light</h1>
      <div className="light"></div>
    </>
  );
}
export default Run;
