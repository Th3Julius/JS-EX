const $span = document.getElementById("text")
let count = 0;

function saludo() {
  count++;
  $span.textContent =`Count: ${count}`;
  
  return;
}
