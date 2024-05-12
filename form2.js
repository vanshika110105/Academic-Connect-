const requestBtn = document.getElementById('requestBtn');
const googleForm = document.getElementById('googleForm');
const overlay = document.getElementById('overlay');

requestBtn.addEventListener('click', () => {
    googleForm.style.display = 'block';
    overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
    googleForm.style.display = 'none';
    overlay.style.display = 'none';
});
