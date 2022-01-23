let index = 0;
const speed = 5;
const numberOfSlides = 17;
const carouselContainer = document.querySelector(".carouselContainer");
const carouselItemWidth = carouselContainer.scrollWidth / numberOfSlides;
setInterval(() => {
  carouselContainer.scrollBy(carouselItemWidth, 0);
  timeoutId = setTimeout(() => {
    index = index % numberOfSlides;
    let childToMove = carouselContainer.querySelectorAll(`.carouselItem`)[
      index
    ];
    // The line below move the item to end of carousel by 
    // manipulating its flex order
    childToMove.style.order =
      childToMove.style.order && childToMove.style.order === 0
        ? 1
        : +childToMove.style.order + 1;
    index++;
    clearTimeout(timeoutId);
  }, 1000);
}, speed * 1000);