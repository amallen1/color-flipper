const body = document.body;
const colorSpan = document.querySelector('#color');
const colorBtn = document.querySelector('#color-btn');

colorBtn.addEventListener('click', (e) => {
    colorSpan.innerText = generateColor();
})

function generateColor(){
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    body.style.backgroundColor = randomColor;
    return randomColor;
}
