const navToggler = document.getElementById('navToggler');
const nav = document.getElementById('nav');
const navBtn = document.getElementById('navBtn');

 navToggler.addEventListener('click', () => {
    nav.classList.toggle('hidden');
    navBtn.classList.toggle('hidden');
});    