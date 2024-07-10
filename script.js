/* eslint-disable no-unused-vars */
function changeColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
