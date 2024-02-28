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
      // var swiper2 = new Swiper(".swiper2", {
      //   slidesPerView: 2.7,
      //   spaceBetween: 0,
      //   freeMode: true,
        
      // });
      var swiper2 = new Swiper(".swiper2", {
        slidesPerView: 2.5,
        spaceBetween: 20,
        freeMode: true,
        slidesOffsetAfter: 200,
      });
      swiper2.changeLanguageDirection('rtl')
      //new slider
      var swiper3 = new Swiper(".swiper3", {
        slidesPerView: 3,
        spaceBetween: 40,
        freeMode: true,
        slidesOffsetAfter: 125,
      });

      var delay = 0;
      var dur = 1.5;
      var tp = "100%";

      //greensock 플러그인
      // gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.saveStyles(".mobile, .desktop");
      
      ScrollTrigger.matchMedia ({
        // pc버전
        "(min-width:1024px)":function(){
          gsap.timeline({
            scrollTrigger:{
              trigger:'.food',
              height:'auto',
              pin:true,
              start:'top top',
              // end:'bottom top',
              scrub:1,
            }
          }).to('.food .banner_img1', {duration:3, opacity:0})
        
          gsap.timeline({
            scrollTrigger:{
              trigger:'.food',
              // pin:true,
              start:'top top',
              // end:'bottom top',
              scrub:1,
            }
          }).to('.food .banner_img2', {duration:3, opacity:1})
          
          //아이스크림 스크롤트리거
          gsap.timeline({
            scrollTrigger:{
              trigger:'.icecream',
              pin:true,
              start:'top top',
              end:'+=4000',
              scrub:1,
            }
          })
          // .to('.icecream .banner_img1', {duration:2})
          .to('.icecream .banner_img1', {duration:3, opacity:0})
          .to('.icecream .banner_img1', {duration:7})
          // .to('.icecream .banner_img2', {duration:3, opacity:1})
          // .to('.icecream .banner_img2', {duration:3, scale:0})
          // .to('.icecream .banner_img3', {duration:3, top:0})
          // .to('.icecream .banner_img3', {duration:3, top:'-20%'})
          // .to('.icecream .banner_img4', {duration:3, top:'22%'})

          gsap.timeline({
            scrollTrigger:{
              trigger:'.icecream',
              // pin:true,
              start:'top top',
              end:'+=4000 bottom',
              scrub:1,
            }
          })
          .to('.icecream .banner_img2', {duration:5})
          .to('.icecream .banner_img2', {duration:4, opacity:1})
          .to('.icecream .banner_img2', {duration:2, scale:0})
          .to('.icecream .banner_img3', {duration:2, top:0})
          .to('.icecream .banner_img3', {duration:2, top:0})
          .to('.icecream .banner_img4', {duration:5, top:'5vw'})
          .to('.icecream .banner_img4', {duration:5})
        
        
        
          gsap.timeline({
            scrollTrigger:{
              trigger:'.introduce',
              pin:true,
              start:'top top',
              end:'+=3000',
              scrub:1,
            }
          })
          .to('.introduce .banner_img .ani_img', {duration:3})
          .to('.introduce .banner_img .ani_img', {duration:2, top:'-50vw'})
          .to('.introduce .banner_img .ani_img', {duration:5})
        
          gsap.timeline({
            scrollTrigger:{
              trigger:'.introduce',
              // pin:true,
              start:'top top',
              end:'+=3500',
              scrub:2,
            }
          })
          .from('.introduce .banner_img .banner_img2', {duration:2, scale:1.5})         //초기값
          .to('.introduce .banner_img .banner_img2', {duration:2, scale:1})
          .to('.introduce .banner_img .banner_img2', {delay:2, duration:5, top:'80%'})
          .to('.introduce .banner_img .banner_img2', {delay:2, duration:10, top:'115%'})
        },
        // 태블릿 버전
        "(max-width:1023px) and (min-width:768px)":function(){
          gsap.timeline({
            scrollTrigger:{
              trigger:'.food',
              height:'auto',
              pin:true,
              start:'10% 10%',
              // end:'bottom top',
              scrub:1,
            }
          }).to('.food .banner_img1', {duration:3, opacity:0})

          gsap.timeline({
            scrollTrigger:{
              trigger:'.food',
              // pin:true,
              start:'10% 10%',
              // end:'bottom top',
              scrub:1,
            }
          }).to('.food .banner_img2', {duration:3, opacity:1})

          //아이스크림 스크롤트리거
          gsap.timeline({
            scrollTrigger:{
              trigger:'.icecream',
              pin:true,
              start:'5% 5%',
              end:'+=4000',
              scrub:1,
            }
          })
          // .to('.icecream .banner_img1', {duration:2})
          .to('.icecream .banner_img1', {duration:3, opacity:0})
          .to('.icecream .banner_img1', {duration:7})
          // .to('.icecream .banner_img2', {duration:3, opacity:1})
          // .to('.icecream .banner_img2', {duration:3, scale:0})
          // .to('.icecream .banner_img3', {duration:3, top:0})
          // .to('.icecream .banner_img3', {duration:3, top:'-20%'})
          // .to('.icecream .banner_img4', {duration:3, top:'22%'})

          gsap.timeline({
            scrollTrigger:{
              trigger:'.icecream',
              // pin:true,
              start:'5% 5%',
              end:'+=4000',
              scrub:1,
            }
          })
          .to('.icecream .banner_img2', {duration:5})
          .to('.icecream .banner_img2', {duration:4, opacity:1})
          .to('.icecream .banner_img2', {duration:2, scale:0})
          .to('.icecream .banner_img3', {duration:2, top:'-20vw'})
          .to('.icecream .banner_img4', {duration:5, top:'-20vw'})
          .to('.icecream .banner_img4', {duration:5})



          gsap.timeline({
            scrollTrigger:{
              trigger:'.introduce',
              pin:true,
              start:'5% 5%',
              end:'+=3000',
              scrub:1,
            }
          })
          .to('.introduce .banner_img .ani_img', {duration:3})
          .to('.introduce .banner_img .ani_img', {duration:2, top:'-80vw'})
          .to('.introduce .banner_img .ani_img', {duration:5})

          gsap.timeline({
            scrollTrigger:{
              trigger:'.introduce',
              // pin:true,
              start:'5% 5%',
              end:'+=3500',
              scrub:2,
              // markers:true,
            }
          })
          .from('.introduce .banner_img .banner_img2', {duration:2, scale:1.5})         //초기값
          .to('.introduce .banner_img .banner_img2', {duration:2, scale:1})
          .to('.introduce .banner_img .banner_img2', {delay:2, duration:5, top:'40vh'})
          .to('.introduce .banner_img .banner_img2', {delay:2, duration:10, top:'80vh'})
        },
        // 모바일 버전
        "(min-width:360px)":function(){

        }
      })

      //스크롤 이벤트에 따른 투명도 애니메이션

      
      // 패밀리 사이트
      $('.family > a').click(function(e){
        e.preventDefault()
        $('.fa_list').slideToggle()
      })
      // 팝업 갤러리
      $('.all_photos ul li').click(function(e){
        e.preventDefault()
        // 클릭한 li의 인덱스 번호를 가져와서 변수에 저장
        var idx=$(this).index()+1
        $('.container').empty()
        $('.popup').hide()
        $('.container').append('<img src="img/bottom'+idx+'.png">')
        $('.popup').fadeIn()
      })
      // 팝업갤러리 안의 닫기 버튼
      $('.popup .close_btn').click(function(e){
        e.preventDefault()
        // container영역 비우기
        // $('.container').empty()
        $('.popup').fadeOut()
        
        
      })
      // 팝업갤러리 아무데나 클릭해도 팝업창 닫기
      $(document).mouseup(function(e){
        e.preventDefault()
        let popup=$('.popup');
        if(!popup.is(e.target) && popup.has(e.target).length===0){
          // container영역 비우기
          // $('.container').empty()
          $('.popup').fadeOut()
        }
      })
      // 햄버거 메뉴 클릭하면 span 애니메이션
      let sw=false;
      $('.ham_menu').click(function(){
        if(sw==false) {
          sw=true;
          $(this).addClass('active')
          $('.menu_area').animate({right:0})
        }else {
          sw=false;
          $(this).removeClass('active')
          $('.menu_area').animate({right:'-100vw'})
        }
      })
      
      // 태블릿
      let winWidth=$(window).width();
      if(winWidth >= 768 && winWidth < 1024) {
      //   var swiper2 = new Swiper(".swiper2", {
      //     slidesPerView: 2.5,
      //     spaceBetween: 10,
      //     freeMode: true,
      //     slideOffsetAfter: 120,
      //   })
        swiper2.changeLanguageDirection('ltr')
      }
      // $(window).resize(function(){
      //   if(window.innerWidth > 768 && window.innerWidth < 1024) {
      //     var swiper2 = new Swiper(".swiper2", {
      //       slidesPerView: 2.5,
      //       spaceBetween: 0,
      //       freeMode: true,
      //       slideOffsetAfter: 120,
      //       // loop: true,
      //     });
      //     swiper2.changeLanguageDirection('ltr')
      //   }
      // }).resize()
})  //document