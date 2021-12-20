const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const h1 = document.getElementById('h1');
increaseBtn.addEventListener('click', increase);
resetBtn.addEventListener('click', reset);
decreaseBtn.addEventListener('click', decrease);

// function increase() {
//     if (Number(h1.innerHTML) < 50) {
//         h1.innerHTML = Number(h1.innerHTML) + 1;
//     }
// }

// function reset() {
//     h1.innerHTML = 0;
// }

// function decrease() {
//     if (Number(h1.innerHTML) > 0) {
//         h1.innerHTML = Number(h1.innerHTML) - 1;
//     }
// }

function increase() {
    if (Number(h1.innerHTML) < 50) {
        h1.innerHTML = Number(h1.innerHTML) + 1;
        if (Number(h1.innerHTML) > 0) {
            h1.style.color = 'green';
        }
    }
    h1.animate([{ opacity: '0.2' }, { opacity: '1.0' }], { duration: 500 });
}

function reset() {
    h1.innerHTML = 0;
    if (Number(h1.innerHTML) === 0) {
        h1.style.color = 'white';
    }
    h1.animate([{ opacity: '0.2' }, { opacity: '1.0' }], { duration: 500 });

}

function decrease() {
    h1.innerHTML = Number(h1.innerHTML) - 1;
    if (Number(h1.innerHTML) < 0) {
        h1.style.color = 'red';
    }
    h1.animate([{ opacity: '0.2' }, { opacity: '1.0' }], { duration: 500, fill: 'forwards' });
}