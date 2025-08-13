// banner
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});







// goods_popup

// 1) 공통 클래스 modal로 모든 팝업 숨기기
$(".modal").hide();

// 2) 열기 버튼: 클래스명에서 번호(1,2,...)를 뽑아서 해당 modal#을 fadeIn
$("[class^='popup_open']").on("click", function () {
  // this.className 예: "popup_open1"
  const num = this.className.match(/popup_open(\d+)/)[1];
  $(".modal" + num).fadeIn();
});

// 3) 닫기 버튼: 자신이 속한 .modal 요소를 fadeOut
$(".popup_close").on("click", function () {
  $(this).closest("[class^='modal']").fadeOut(0);
});






// guide_tab
$(".board> li> a").click(function () {
  $(this).parent().addClass("on").siblings().removeClass("on")
});
// guide icon hover
const tabItems = document.querySelectorAll('.board li');

tabItems.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault(); // 스크롤 방지

    // 모든 li에서 on 제거
    tabItems.forEach(li => li.classList.remove('on'));

    // 클릭한 li만 on 추가
    this.classList.add('on');
  });
});








//course
$(function () {
  $('.flex-container').waitForImages(function () {
    $('.spinner').fadeOut();
  }, $.noop, true);

  $(".flex-slide").each(function () {
    $(this).hover(function () {
      $(this).find('.flex-title').css({
        transform: 'rotate(0deg)',
        top: '10%'
      });
      $(this).find('.flex-about').css({
        opacity: '1'
      });
    }, function () {
      $(this).find('.flex-title').css({
        transform: 'rotate(90deg)',
        top: '15%'
      });
      $(this).find('.flex-about').css({
        opacity: '0'
      });
    });
  });
});






// sns
var snsSwiper = new Swiper(".snsSwiper", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".snsSwiper-button-next",
    prevEl: ".snsSwiper-button-prev",
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});







// 흐르는 텍스트
const ticker = new Swiper(".myTickerSwiper", {
  slidesPerView: "auto",
  spaceBetween: 9700,
  loop: true,
  allowTouchMove: false,
  speed: 94000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});







//topBtn
const topBtn = document.getElementById('topBtn');

// 스크롤 시 버튼 표시/숨김
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // 200px 이상 스크롤되면
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
});

// 버튼 클릭 시 맨 위로 부드럽게 이동
topBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}); 