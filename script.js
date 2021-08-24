function changeToOne() {
    const s1 = document.getElementById('s1');
    const s2 = document.getElementById('s2');

    s2.disabled = true;
    s1.disabled = false; 
}

function changeToTwo() {
    const s1 = document.getElementById('s1');
    const s2 = document.getElementById('s2');

    s1.disabled = true;
    s2.disabled = false;
}

const activate1 = document.getElementById('activate1');
const activate2 = document.getElementById('activate2');

activate1.addEventListener('click', changeToOne);
activate2.addEventListener('click', changeToTwo);