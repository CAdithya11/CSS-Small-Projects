function time() {
  const now = new Date();
  const time = document.querySelector('.time');

  time.innerHTML = `${now.getHours() + ':' + now.getMinutes()}`;
}

time();
setInterval(time, 1000 * 60);

function value(x) {
  const screen = document.querySelector('.calculation');
  const value = document.querySelector('.answer');

  const operators = ['*', '-', '+', '/'];

  if (screen.innerText === '0' || screen.innerText === '') {
    if (operators.includes(x)) {
      screen.innerHTML = value.innerText + x.slice(0, -1);
    }
  }
  if (x === 'C') {
    screen.innerHTML = '0';
    value.innerHTML = '0';
  } else if (x === '=') {
    const result = eval(screen.innerText);
    value.innerHTML = result;
    screen.innerHTML = '0';
  } else if (x === 'b') {
    if (screen.innerText != '0') {
      screen.innerHTML = screen.innerText.slice(0, screen.innerText.length - 1);
    }
  } else if (x != 'C') {
    if (screen.innerText === '0') {
      screen.innerText = x;
    } else {
      screen.innerText += x;
    }
  } else {
    console.log('Not works ');
  }
}
