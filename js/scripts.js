'use strict'
document.addEventListener("DOMContentLoaded", () => {
    // * 1.Начало.
    // * 2.Получаем все элементы изображений с описанием.
    // * 3. Для каждого изображения (проверяем есть ли таие изображения):
    // *    3.1. Добавляем обработчик наведения курсора на изображение:
    // *        3.1.1. Да: 
    // *               3.1.1.1. показываем текст при наведении
    // *            3.1.2. Нет: продолжаем.
    // *    3.2. Добаляем обработчик курсор уходит с изображения:
    // *        3.3.1. Да:
    // *            3.3.1.1. Скрываем элемент с описанием.                
    // *        3.3.2. Нет: продолжаем.
    // * 4. Конец
    console.log('Скрипт отработал корректно')

    // Объявляем переменную-массив intensiveImg и сохраняем в нее все элементы на странице с классом intensive__img  
    const intensiveImg = document.querySelectorAll('.prouseful__item__img');

    // Пройдемся по каждому элементу массива intensiveImg, с помощью цикла forEach.  Внутри функции 2 переменные: 
    // item - текущее изображение, а index — его номер в массиве, начиная с 0
    intensiveImg.forEach((item, index) => {
    // Объявляем переменную intensiveText и сохраняем в нее все элементы с классом intensive__description, которые связаны с описаниями для изображений
        const intensiveText = document.querySelectorAll('.prouseful__item__description');
    // Когда курсор наводится на изображение (событие mouseenter), срабатывает обработчик события mouseenter:
        item.addEventListener('mouseenter', () => {
        intensiveText[index].removeAttribute('hidden');
    });
    // Когда курсор убираем с изображения (событие mouseleave), срабатывает обработчик события mouseleave:
        item.addEventListener('mouseleave', () => {
        intensiveText[index].setAttribute('hidden', true);
        });
    });

});