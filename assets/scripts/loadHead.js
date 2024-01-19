// // Функция для загрузки содержимого файла MainHead.html для <head>
// function loadHeadContent() {
//     // Создание нового запроса
//     const xhr = new XMLHttpRequest();
//     // Конфигурация запроса на получение содержимого файла Head.html
//     xhr.open('GET', 'components/Head.html', true);
//     xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         // Создание нового элемента <div>, содержащего полученный HTML
//         const div = document.createElement('div');
//         div.innerHTML = xhr.responseText;
//         // Добавление элементов из <div> в <head>
//         while (div.firstChild) {
//         document.head.appendChild(div.firstChild);
//         }
//     }
//     };
//     // Отправка запроса
//     xhr.send();
//     }
// // Вызов функции при загрузке страницы
// document.addEventListener('DOMContentLoaded', loadHeadContent);