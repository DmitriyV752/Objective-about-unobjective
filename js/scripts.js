'use strict'
document.addEventListener("DOMContentLoaded", () => {
    //Объявляем переменную cardsPrice и сохраняем в нее элемент с классом price
    const cardsPrice = document.querySelector('.prouseful__list');
    // Если такой элемент существует
    if (cardsPrice) {
        //Создаем объект cardsPriceData, которая содержит данные для трех карточки.
        const cardsPriceData = {
                // каждая ссылка содержит name (название категории), img (изображение), description (описание найденных знаний).
                data1: {
                    name: "Структура общества",
                    img:  "images/society.jpg",
                    description: "Любимая фраза некоторых ученых заключается в том, что все люди разные по огромному числу признаков.Мы всегда делились и сейчас, в эпоху стремительного движения вперед различия стали особенно ощутимы. Иерархическая лестница всегда начинается с беднейших, а завершается богатейшими, пусть и с многочисленными изменениями.",
                },
                data2: {
                    name: "Политика",
                    img: "images/politics.jpg",
                    description: "Обязательной составляющей любого цивилизованного общества является его возможность и способность решать проблемыс помощью переговоров и поиска компромиссов, выгодных обеим сторонам."
                },
                data3: {
                    name: "Вооружение",
                    img: "images/weapon.webp",
                    description: "Так или иначе, человечество на протяжение своей истории имеет врагов внешних и внутренних. Доминация однимх сменяется компромиссами, компромиссы сменяются переделом и так далее.Государства и весь мир- они постоянно защищают чьи-то интересы",
                },
                data4: {
                    name: "Общественные отношения",
                    img: "images/20221222070459-805656.jpg",
                    description: "Различные типы обществ взаимодействуют с разной интенсивностью. Также эта разница усложняется комплексом противоречий по отношению к религии, ее формам,экономическим составляющим и историческим местом в мире.",
                },
            }
            //Создаем функцию createCard, которая будет добавлять карточку. Внутри функции 4 переменные: level (название тарифа), price (цена), description (описание тарифа), button (кнопку для оформления заявки)
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
            // Создаем цикл for и проходим по всем элементам объекта cardsPriceData.
        for (const cardKey in cardsPriceData) {
            //Получаем данные одной карточки из объекта cardsPriceData 
            const card = cardsPriceData[cardKey];
            //создаем переменную cardElement и вызываем функцию createLink, куда передаем тариф, цену, описание и кнопку (то, из чего будет состоять ваша карточка).
            const cardElement = createCard(card.name, card.img, card.description);
            // с помощью метода insertAdjacentHTML добавляем созданный HTML-код в конец списка priceList.
            cardsPrice.insertAdjacentHTML('beforeend', cardElement);
        }
    }
});

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