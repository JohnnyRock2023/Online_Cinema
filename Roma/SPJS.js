var input = document.getElementById('input');
var suggestions = document.getElementById('suggestions');
var search = document.getElementById('search');

input.addEventListener('focus', () => {
    search.style.width = "600px";
    if (input.value.trim() !== '') {
        suggestions.style.display = 'flex';
    }
});

input.addEventListener('input', () => {
    if (input.value.trim() === '') {
        suggestions.style.display = 'none';
        search.style.width = "400px";
    } else {
        suggestions.style.display = 'flex';
        search.style.width = "600px";
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search')) {
        suggestions.style.display = 'none';
        search.style.width = "400px";
    }
});