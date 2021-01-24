var mainContent = function () {
  var screenWidth = window.page.getWidth();
  var device = window.page.getDevice(screenWidth);
  var intro = window.page.mainContent.querySelector('.intro');

  var onIntroClick = function () {
    intro.classList.toggle('animated');
  }

  if (device === 'tablet') {
    intro.addEventListener('click', onIntroClick)
  }

  window.addEventListener('resize', function () {
    intro.removeEventListener('click', onIntroClick);
    screenWidth = window.page.getWidth();
    if (device === 'tablet') {
      intro.addEventListener('click', onIntroClick);
    }
  })
}

export { mainContent };
