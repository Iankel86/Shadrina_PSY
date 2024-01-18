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

// Вызов функции при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    loadContent('head', 'components/MainHead.html'); // Добавление содержимого в <head>
    loadContent('footer', 'components/MainFooter.html'); // Добавление содержимого в <footer>
    // Можно добавить дополнительные вызовы для других частей страницы
});