var animate = function () {
  window.page.animItems.forEach(function (item) {
    item.classList.add('animated');
  });
}

export { animate };
