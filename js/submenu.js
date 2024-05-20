document.addEventListener("DOMContentLoaded", function() {
    // Получаем список всех пунктов меню
    var menuItems = document.querySelectorAll('.menu__item');

    // Добавляем обработчик клика для каждого пункта меню
    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            // Закрываем все подменю
            closeAllSubmenus();

            // Открываем подменю для текущего пункта
            var submenu = item.querySelector('.menu__submenu');
            if (submenu) {
                submenu.style.display = 'block';
            }

            // Проверяем, есть ли ссылка внутри пункта меню
            var link = item.querySelector('a');
            if (link && !submenu) {
                // Переходим по ссылке
                window.location = link.href;
            }

            // Отменяем действие по умолчанию (переход по ссылке)
            event.preventDefault();
        });
    });

    // Функция для закрытия всех подменю
    function closeAllSubmenus() {
        var submenus = document.querySelectorAll('.menu__submenu');
        submenus.forEach(function(submenu) {
            submenu.style.display = 'none';
        });
    }
});