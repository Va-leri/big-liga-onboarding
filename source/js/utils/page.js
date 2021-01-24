var page = function () {
  var mainContent = document.querySelector('.main-content');
  var header = document.querySelector('.header');
  var loader = document.querySelector('.loader');
  var animItems = mainContent.querySelectorAll('.anim-item');

  window.page = {
    header: header,
    mainContent: mainContent,
    loader: loader,
    animItems: animItems,
    getWidth: function () {
      return document.documentElement.clientWidth;
    },
    getDevice: function (width) {
      return window.util.Device[width];
    },
  };
}

export { page };
