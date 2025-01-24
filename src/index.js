import './style.css';
import goblinImage from './goblin.png'; // картинка гоблина

const boardSize = 4;
const board = document.getElementById('game-board');

// Функция для создания игрового поля 4x4
function createBoard() {
  board.style.display = 'grid';
  board.style.gridTemplateColumns = 'repeat(4, 100px)';
  board.style.gridTemplateRows = 'repeat(4, 100px)';
  board.style.gap = '10px';
  for (let i = 0; i < boardSize * boardSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
  }
}

// Функция для случайного выбора ячейки
function getRandomCell() {
  const cells = document.querySelectorAll('.cell');
  const randomIndex = Math.floor(Math.random() * cells.length);
  return cells[randomIndex];
}

// Создаем персонажа (гоблина)
const goblin = document.createElement('img');
goblin.src = goblinImage;
goblin.alt = 'Гоблин';
goblin.width = 90;
goblin.height = 90;

// Функция для перемещения гоблина
function moveGoblin() {
  const oldCell = document.querySelector('.goblin');
  if (oldCell) {
    oldCell.classList.remove('goblin');
  }

  // Проверяем, что новая ячейка не совпадает с текущей позицией
  function getUniqueCell() {
    const newCell = getRandomCell();
    if (newCell !== oldCell) {
      return newCell;
    }
    return getRandomCell();
  }

  const newCell = getUniqueCell();
  newCell.appendChild(goblin);
  newCell.classList.add('goblin');
}

// Запускаем игру
createBoard();
moveGoblin(); // Размещаем гоблина при первой загрузке

setInterval(moveGoblin, 1000); // гоблин будет перемещаться каждую секунду