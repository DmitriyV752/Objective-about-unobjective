'use strict'
    const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".content");
    if (preloader && content) {
        setTimeout(() => {
            // Скрываем прелоадер
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";

            // Показываем контент
            content.style.display = "block";

            // Удаляем элемент из DOM
            preloader.remove();
        }, 3000); // Задержка 3 секунды
    }
document.addEventListener("DOMContentLoaded", () => {
    //Объявляем переменную cardsPrice и сохраняем в нее элемент с классом price
    const cardsPrice = document.querySelector('.prouseful__list');
    // Если такой элемент существует
    if (cardsPrice) {
        const createCard = (name, img, description) => {
            // Создаем переменную  card, которая будет содержать HTML-код карточки и вставляем туда 4 переменные
            const card = `
            <li class="prouseful__item">
                <span class="prouseful__item__name">${name}</span>
                <img class="prouseful__item__img" src="${img}" alt="${name}">
                <span class="prouseful__item__description" hidden>${description}</span>
            </li>
        `;
            //  Возвращаем значение переменной card
            return card;
        }
    
        // Пример URL для получения данных с сервера
        const apiUrl = "images.json";
        // Запрос к серверу с помощью метода fetch
        fetch(apiUrl)
            // После того как запрос выполнен, возвращается объект Response, где вызывается метод json(), который преобразует ответ в формат JSON
            .then((response) => response.json())
            //получение данных 
            .then((images) => {
                images.forEach((item) => {
                    // создается переменная cardElement, где для каждого элемента массива вызывается функция createCard и передаются параметры
                    const cardElement = createCard(item.name, item.img, item.description);
                    // Добавление карточки на страницу в список cardListImages  с помощью метода insertAdjacentHTML beforeend указывает, что карточка должна быть добавлена в конец списка
                    cardsPrice.insertAdjacentHTML("beforeend", cardElement);
                });
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
    }
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

    //Объявляем переменную trenersContainer и сохраняем в нее элементы treners
    const trenersContainer = document.querySelector(".prouseful__list");
    // проверяем существует ли элемент trenersContainer, если он существует то переходим далее
    if (trenersContainer) {
        //далее создаем массив dataTitleTreners, который содержит строки с именами тренеров.(здесь уже пишем те значения, которые надо подставить вместо слова Тренер 1, Тренер 2 и т.д)
        const dataTitleTreners= [
                "Структура общества",
                "Политика",
                "Вооружение",
                "Общественные отношения",
            ];
        //Объявляем переменную titleTreners и сохраняем в нее все элементы на странице с классом treners__subtitle (где должны стоять имена тренеров)
        const titleTreners =trenersContainer.querySelectorAll(".prouseful__item__name");
        // Проходим по каждому элементу массива titleTreners с помощью цикла forEach. Внутри функции 2 переменные: item – текущий заголовок, а index — его индекс в массиве.
        titleTreners.forEach((item, index) => {
            //здесь обновляем значение текущего заголовка (textContent) на новое значение из массива dataTitleCards, используя индекс текущего заголовка.
            item.textContent = dataTitleTreners[index];
        });
    }
});