// // Функция для загрузки содержимого файла MainFooter.html для <footer>
// function loadFooterContent() {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'components/Footer.html', true);
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             // Создание нового элемента <div>, содержащего полученный HTML
//             const div = document.createElement('div');
//             div.innerHTML = xhr.responseText;
//             // Добавление элементов из <div> в <footer>
//             document.querySelector('footer').innerHTML = div.innerHTML;
//         }
//     };
//     xhr.send();
// }
// document.addEventListener('DOMContentLoaded', loadFooterContent);