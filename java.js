// Contoh sederhana JavaScript untuk mengubah tema
function changeTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}

document.getElementById('themeButton').addEventListener('click', changeTheme);
