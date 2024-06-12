const navLinks = document.querySelectorAll('.link-close-sandwich');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

navLinks.forEach((element) => {
    element.addEventListener('click', () => {
        document.querySelector('#btnFechar').click();
    })
})