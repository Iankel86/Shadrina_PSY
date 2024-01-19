// Универсальная функция для загрузки содержимого HTML файла и вставки его в DOM
function loadContent(selector, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error with the network');
            }
            return response.text();
        })
        .then(html => {
            document.querySelector(selector).innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching content:', error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    loadContent('head', 'components/Head.html');
    loadContent('footer', 'components/Footer.html');
});