$(document).ready(function () {
  $('.slider').slick({
    // asNavFor: ".reviews__slider-small",
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    centerMode: true,
    centerPadding: '30px',
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: '50px',
          slidesToShow: 3,
          centerMode: true,
        },
      },
    ],
    mobileFirst: true,
  });
});
