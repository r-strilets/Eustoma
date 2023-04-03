$(document).ready(function () {
  $(".slider").slick({
    // asNavFor: ".reviews__slider-small",
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
    ],
    mobileFirst: true,
  });
});
