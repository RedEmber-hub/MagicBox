const button = document.getElementById('btn');
const colorInput = document.getElementById('text');
const square = document.getElementById('square');

const rangeInput = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');

const zhmyakBtn = document.getElementById('e_btn');
zhmyakBtn.style.display = 'none';

const colors = new Map([
    ['yellow', 'yellow'],
    ['red', 'red'],
    ['green', 'green'],
    ['blue', 'blue'],
    ['pink', 'pink']
]);

button.addEventListener('click', () => {
    const color = colorInput.value.trim().toLowerCase();

    if (colors.has(color)) { //0, '', null, underfined, NaN - false
        square.style.backgroundColor = colors.get(color);
    }
});

rangeInput.addEventListener('input', () => {
    const circle = document.getElementById('circle');

    rangeSpan.textContent = rangeInput.value;

    circle.style.width = `${rangeInput.value}%`;
    circle.style.height = `${rangeInput.value}%`;
})

