    // объявляем переменную sliders,куда помещаем элемент с классом swiper
        const sliders = document.querySelector('.swiper');
    //проверяем существует ли элемент
        if (sliders) {
         const swiper1 = new Swiper(sliders, {
            // Пагинация
            pagination: {
                el: '.swiper-pagination',
                type: "fraction",
            },

            // Навигационные стрелки
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }