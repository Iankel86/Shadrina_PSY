export default function initHeadAndFooter() {
    // Функция loadContent теперь возвращает Promise
    function loadContent(selector, filePath) {
        return fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                document.querySelector(selector).innerHTML = html;
            });
    }
    // Загружаю шапку и подвал, и возвращаю Promise.all, который будет разрешен, когда оба Promise от loadContent будут разрешены.
    return Promise.all([
        loadContent('head', 'components/Head.html'),
        loadContent('footer', 'components/Footer.html')
    ]);
}