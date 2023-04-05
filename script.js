//Hamburger Menu
const hamburgerBtn = document.querySelector(".hamburgerIcon");
const mobileNav = document.querySelector(".mobileNav");
hamburgerBtn.addEventListener("click", function () {
  if (mobileNav.classList.contains("hide")) {
    console.log("hello");
    mobileNav.classList.remove("hide");
    mobileNav.classList.add("show");
  } else {
    mobileNav.classList.add("hide");
    mobileNav.classList.remove("show");
  }
});

const modeIcon = document.querySelector(".modeIcon");
const searchIcon = document.querySelector(".searchIcon");
const hamburgerIcon = document.querySelector(".hamburgerIcon");

modeIcon.addEventListener("click", function () {
  if (document.body.classList.contains("darkMode")) {
    document.body.classList.remove("darkMode");
    document.body.classList.add("lightMode");
    modeIcon.innerHTML =
      '<img src="assets/light-mode-icon.png" width="24px" height="24px" alt="">';
    searchIcon.innerHTML =
      '<img src="assets/light-mode-search-icon.png" width="24px" height="24px" alt="">';
    hamburgerIcon.innerHTML =
      '<img src="assets/hamburger-light-mode-icon.png" width="24px" height="24px" alt="">';
  } else {
    document.body.classList.remove("lightMode");
    document.body.classList.add("darkMode");
    modeIcon.innerHTML =
      '<img src="assets/dark-mode-icon.png" width="24px" height="24px" alt="">';
    searchIcon.innerHTML =
      '<img src="assets/dark-mode-search-icon.png" width="24px" height="24px" alt="">';
    hamburgerIcon.innerHTML =
      '<img src="assets/hamburger-dark-mode-icon.png" width="24px" height="24px" alt="">';
  }
});
const carouselSlide = document.querySelector(".carouselSlide");
const carouselImages = document.querySelectorAll(".carouselSlide img");
const dots = document.querySelectorAll(".dot");
const prevButton = document.querySelector(".prev-slide");
const nextButton = document.querySelector(".next-slide");

let counter = 1;
const slideWidth = carouselImages[0].clientWidth;

carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter = index + 1;
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    updateDots();
  });
});

nextButton.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
  updateDots();
});

prevButton.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
  updateDots();
});

function updateDots() {
  dots.forEach((dot, index) => {
    if (index === counter) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function checkImagePosition() {
  if (carouselImages[counter].id === "last-clone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    updateDots();
  }

  if (carouselImages[counter].id === "first-clone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    updateDots();
  }
}

carouselSlide.addEventListener("transitionend", checkImagePosition);
