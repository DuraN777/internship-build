const mySliders = document.querySelectorAll('.slider');

mySliders.forEach(sl => {
    const prevBtn = sl.querySelector('.slider__prevBtn');
    const nextBtn = sl.querySelector('.slider__nextBtn');
    const slider = sl.querySelector('.swiper');

    const swiper = new Swiper(slider, {
        navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
        },   
        slidesPerView: 1,
        spaceBetween: 10,   
        breakpoints: {
            990: {
                slidesPerView: 2,
                spaceBetween: 70
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 28
            }
        },
    });
})



