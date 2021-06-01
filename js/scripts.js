// this is a function that'll change the img background on hover on the menu

let indexHomePage = (function () {

  let mainBackground = document.querySelector('.main-backset');
  let headerOne = document.querySelector('.nameContainer');
  let headerTwo = document.querySelector('.nameContainerTwo');
  let headerThree = document.querySelector('.nameContainerThree');
  function timedBackground() {
    setTimeout(() => {
      mainBackground.classList.add('background-move');
    }, 1000);
    setTimeout(() => {
      headerOne.classList.add('fadeIn');
    }, 1800);
    setTimeout(() => {
      headerTwo.classList.add('fadeIn');
    }, 3600);
    setTimeout(() => {
      headerThree.classList.add('fadeIn');
    }, 5200);
  }

  timedBackground();

})();
