const swiper = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    simulateTouch: true,
    initialSlide: 1,
    centeresSlides: true,
    spaceBetween: 20,
    slidesPerView: 2.5,
    breakpoints: {
        320: {
            slidesPerView: 0.5,
        },
        550: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 2,
        },
    }
});


const textSwiper = new Swiper('.swiper1', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },

});

let menuBtn = document.querySelector('.menu-button');
let menu = document.querySelector('.menu-burger');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

$(document).ready(function () {
    $("form").submit(function () {
        
        var formID = $(this).attr('id');
        
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                $(formNm).html(data); 
            },
            error: function (jqXHR, text, error) {
                $(formNm).html(error);         
            }
        });
        return false;
    });
});

