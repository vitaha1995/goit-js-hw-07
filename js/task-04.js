const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  // Розміри найпершого <div> - 30px на 30px
  let boxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    // Створення нового <div>
    const box = document.createElement('div');

    // Випадковий колір фону
    box.style.backgroundColor = getRandomHexColor();

    // Розмір <div>
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;

    // Додавання <div> в div#boxes
    boxes.appendChild(box);

    // Збільшення розміру на 10px для наступного <div>
    boxSize += 10;
  }
}

function destroyBoxes() {
  // Очистка вмісту div#boxes
  boxes.innerHTML = '';
}

// Обробники подій для кнопок
createBtn.addEventListener('click', () => {
  createBoxes(input.value);
});

destroyBtn.addEventListener('click', destroyBoxes);
