const $buttons = document.querySelectorAll('.buttons button');


for (let i = 0; i < $buttons.length; i++) {
  $buttons[i].addEventListener('click', function() {
    const value = this.textContent;
    console.log(value);
  });
}

