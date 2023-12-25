const countElement = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const clearBtn = document.getElementById('clear');

let count = 0;

function updateCount() {
  countElement.textContent = count;
}

function increment() {
  count++;
  updateCount();
}

function decrement() {
  if (count > 0) {
    count--;
    updateCount();
  }
}

function clearCount() {
  count = 0;
  updateCount();
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
clearBtn.addEventListener('click', clearCount);
