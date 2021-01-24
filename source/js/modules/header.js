import { disableScrolling, enableScrolling } from '../utils/scroll-lock';
var header = function () {
  var menuBtn = window.page.header.querySelector('.header__menu-btn');
  var mainMenu = window.page.header.querySelector('.header__menu');
  var mainMenuLinks = mainMenu.querySelectorAll('.main-menu__link');

  var onMenuKeydown = function (evt) {
    if (evt.keyCode === window.util.Keycode['ESC']) {
      closeMenu();
    }
  }

  var closeMenu = function () {
    mainMenu.classList.remove('header__menu--opened');
    menuBtn.classList.remove('header__menu-btn--close');
    enableScrolling();
    window.removeEventListener('keydown', onMenuKeydown);
  };

  var openMenu = function () {
    mainMenu.classList.add('header__menu--opened');
    menuBtn.classList.add('header__menu-btn--close');
    disableScrolling();
    window.addEventListener('keydown', onMenuKeydown);
  }

  var onMenuBtnClick = function () {
    if (mainMenu.classList.contains('header__menu--opened')) {
      closeMenu();
    } else {
      openMenu();
    }
  };


  menuBtn.addEventListener('click', onMenuBtnClick);

  mainMenuLinks.forEach(function (link) {
    link.addEventListener('click', function (evt) {
      evt.prenentDefault();
      closeMenu();
    })
  })
}

export { header };
