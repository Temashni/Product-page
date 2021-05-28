function show(){ document.getElementById("modal").style.display="flex";
document.getElementById("scroll").style.overflow="hidden";
}

function unshow(){
  document.getElementById("modal").style.display="none";
  document.getElementById("scroll").style.overflow="auto";
}

var myswiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: ".product-card__slider-button__right",
    prevEl: ".product-card__slider-button__left",
  },
});

var swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: ".product-card__slider-button__next",
    prevEl: ".product-card__slider-button__prev",
  },
});

function changedViewedImage(event) {
  console.log(1);
  const linkToImage = this.event.target.getAttribute("src");
  document.getElementById("imageOutput").setAttribute("src", linkToImage);
}