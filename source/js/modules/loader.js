import { animate } from './animate';

var loader = function () {
  var logo = window.page.loader.querySelector('.loader__logo');
  var prompt = window.page.loader.querySelector('.loader__prompt');
  var deviceToPromptText = {
    tablet: 'Кликните на экран',
    desktop: 'Нажмите на Enter',
  };

  window.setTimeout(
    function () {
      logo.classList.add('animated');
    }, 500
  )

  var screenWidth = window.page.getWidth();
  var device = window.page.getDevice(screenWidth);

  var promptMessage = deviceToPromptText[device];

  prompt.textContent = promptMessage;

  var hideLoader = function () {
    window.page.loader.classList.add('loader--hidden');
    window.removeEventListener('resize', onWindowResize);
    animate();
  }

  var onLoaderClick = function () {
    hideLoader();
    window.page.loader.removeEventListener('click', onLoaderClick);
  };

  var onLoaderKeydown = function (evt) {
    if (evt.keyCode === window.util.Keycode['ENTER']) {
      hideLoader();
      document.removeEventListener('keydown', onLoaderKeydown);
    }
  }

  var onWindowResize = function () {
    document.removeEventListener('keydown', onLoaderKeydown);
    window.page.loader.removeEventListener('click', onLoaderClick);
    screenWidth = window.page.getWidth();
    device = window.page.getDevice(screenWidth);
    promptMessage = deviceToPromptText[device];
    prompt.textContent = promptMessage;
    if (device === 'tablet') {
      window.page.loader.addEventListener('click', onLoaderClick);
    } else if (device === 'desktop') {
      document.addEventListener('keydown', onLoaderKeydown);
    }
  }

  window.addEventListener('resize', onWindowResize);
  if (device === 'tablet') {
    window.page.loader.addEventListener('click', onLoaderClick);
  } else if (device === 'desktop') {
    document.addEventListener('keydown', onLoaderKeydown);
  }
};

export { loader };
