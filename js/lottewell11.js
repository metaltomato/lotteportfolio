$(document).ready(function(){
    //메인 슬라이드
    var swiper1 = new Swiper(".swiper1", {
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      // 슬라이드 영역에 마우스 오버하면 슬라이드 멈추고,
      // 슬라이드 영역에서 마우스 아웃하면 다시 슬라이드 자동 실행
      $('.swiper1').mouseenter(function(){
        swiper1.autoplay.stop()
      })
      $('.swiper1').mouseleave(function(){
        swiper1.autoplay.start()
      })

      //best slider
      var swiper2 = new Swiper(".swiper2", {
        slidesPerView: 2.5,
        spaceBetween: 40,
        freeMode: true,
      });
})  //document