const $input = document.querySelector('.box__input');
const $output = document.querySelector('.box__output');
const $btn = document.querySelector('.box__btn');
const $errorText = document.querySelector('.box__error');

$btn.addEventListener('click', () => {
  const userInputValue = $input.value;
  const regexp = /^[01]+$/;

  if (regexp.test(userInputValue)) {
    $errorText.classList.remove('box__error_show');
  } else {
    $errorText.classList.add('box__error_show');
    return;
  }

  const reversedUserInputValue = userInputValue.split('').map(Number).reverse();

  $output.value = reversedUserInputValue.reduce((acc, num, index) => {
    return acc + (num * Math.pow(2, index));
  }, 0);
});
