const button = document.getElementById('btn');
const colorInput = document.getElementById('text');
const square = document.getElementById('square');

const rangeInput = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');

const zhmyakBtn = document.getElementById('e_btn');
zhmyakBtn.style.display = 'none';

button.addEventListener('click', () => {
    const color = colorInput.value.trim().toLowerCase();

    if (color === 'yellow') square.style.backgroundColor = 'yellow';
    if (color === 'red') square.style.backgroundColor = 'red';
    if (color === 'green') square.style.backgroundColor = 'green';
    if (color === 'blue') square.style.backgroundColor = 'blue';
    if (color === 'pink') square.style.backgroundColor = 'pink';
});

rangeInput.addEventListener('input', () => {
    const circle = document.getElementById('circle');

    rangeSpan.textContent = rangeInput.value;

    circle.style.width = `${rangeInput.value}%`;
    circle.style.height = `${rangeInput.value}%`;
})

