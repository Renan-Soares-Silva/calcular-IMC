let randonNumber = Number(Math.round(Math.random() * 10));
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
let atemptCount = 1;

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleTryReset);

function handleTryClick(event) {
  event.preventDefault();
  const imputNumber = document.querySelector('#inputNumber');

  if (randonNumber == imputNumber.value) {
    screenToggle();

    document.querySelector(
      '.screen2 h2'
    ).innerText = `você acertou em ${atemptCount} tentativas`;
  }
  console.log(randonNumber, imputNumber.value);
  imputNumber.value = '';

  atemptCount++;
}

function handleTryReset() {
  screenToggle();
  atemptCount = 1;
  randonNumber = Number(Math.round(Math.random() * 10));
  console.log('cheguei');
}

function screenToggle() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}

// testando o commit
