if(localStorage.getItem('theme') == 'dark') {
    document.body.classList.add('dark');
}

document.getElementById('theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    }
    else {
        localStorage.setItem('theme', '');
    }

    // localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : '');
});
