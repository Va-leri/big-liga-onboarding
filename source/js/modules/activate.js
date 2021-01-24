var activate = function () {
  window.page.header.classList.remove('nojs');
  if (window.page.mainContent) {
    window.page.mainContent.classList.remove('nojs');
  }
}

export { activate };
