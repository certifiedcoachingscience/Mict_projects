var i=0;
var txt = "Pineplace High Schools is a school that bases its mission on giving students access to knowledge that is pertinent to South Africa's goals for enhancing and growing its economy. Our goal is to ensure that everyone, especially matriculants, is prepared for life in the real world the following year, whether or not they want to pursue further education. At Pineplace High School, we only accept a passing grade in every class. 'We progress in excellence is the main motto we educate by.";
var speed = 50;

function typeWriter(){
    if(i < txt.length){
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });