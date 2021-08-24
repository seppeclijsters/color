// Color
let currentColor = "red";

// ----- Draw grid -----
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(100, 100);


// ----- Draw cells -----
const drawCell = (e) => {
    console.log(e);
    console.log(e.currentTarget);
    e.currentTarget.classList.toggle('is-active');
    if (!e.currentTarget.classList.contains('is-active')) {
        e.currentTarget.style.backgroundColor = "unset";
    } else {
        e.currentTarget.style.backgroundColor = currentColor;
    }
}

let cells = document.querySelectorAll('.grid-item');
cells.forEach(cell => {
    cell.addEventListener('click', drawCell);
});

// ----- Right click -> pick color -----
const pickColor = (e) => {
    // prevent right click browser 
    e.preventDefault();

    // Mouse coordinates
    let x = e.clientX;
    let y = e.clientY;
    console.log(y);
    console.log(x);
    let colorPicker = document.querySelector('.color-picker');
    console.log(colorPicker);
    colorPicker.style.top = (y - "16") + "px";
    colorPicker.style.left = (x - "67.5") + "px";

    // Animation hide/show color picker
    if (colorPickers.classList.contains('hide')) {
        console.log('verstopt');
        colorPickers.classList.add('show');
    } else {
        consol.log('niet verstopt');
    }
}

document.addEventListener('contextmenu', pickColor);


// ----- Toggle colorpicker on mouseleave ----- 
let colorPickers = document.querySelector('.color-picker');

const hideColorPicker = () => {
    if (colorPickers.classList.contains('show')) {
        colorPickers.classList.toggle('show');
    } else {
        colorPickers.classList.toggle('hide');
    }
}

colorPickers.addEventListener('mouseleave', hideColorPicker);

// ----- Pick a color -----
let colors = document.querySelectorAll('.color');
const chooseColor = (e) => {
    currentColor = e.currentTarget.dataset.color;
    colors.forEach(color => {
        if (color.classList.contains('color-active')){
            color.classList.remove('color-active')
        } 
    })
    e.currentTarget.classList.add('color-active');
}

colors.forEach(color => {
    color.addEventListener('click', chooseColor)
})
