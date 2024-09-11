document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded');
    // Add your JavaScript here
});

document.querySelector('.menu-button').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('open');
});