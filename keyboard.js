const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

const test = document.getElementById('.test');

test.addEventListener('keypress', (e) => {
    console.log(e);
});