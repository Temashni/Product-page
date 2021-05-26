function show(){ document.getElementById("modal").style.display="flex";
document.getElementById("scroll").style.overflow="hidden";
}

function unshow(){
  document.getElementById("modal").style.display="none";
  document.getElementById("scroll").style.overflow="auto";
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".product-card__slider-button__right",
    prevEl: ".product-card__slider-button",
  },
});