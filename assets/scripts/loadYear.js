window.onload = function() {
    // Получаю текущий год
    var currentYear = new Date().getFullYear();

    // Нахожу все элементы с классом 'year'
    document.querySelectorAll('.year').forEach(function(element) {
        // Обновляю текст каждого элемента на '© ' + текущий год
        element.textContent = 'Copyright: 2019 - ' + currentYear + ' © Елена Шадрина | Все права защищены';
    });
};
