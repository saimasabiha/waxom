$(function () {

    //    Banner slider part

    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay: true,
        arrows: false,
        speed: 3000,

    });

    //    Service slider part

    $('.service-slider ').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });

    var containerEl = document.querySelector('.filter');

    var mixer = mixitup(containerEl);



    $('.venobox').venobox();



    $('.counter').counterUp({
        delay: 100,
        time: 5000,
    });
});





$('.post-slider  ').slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,

            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }

  ]
});
