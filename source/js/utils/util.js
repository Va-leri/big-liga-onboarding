var util = function () {
  var Keycode = {
    ENTER: 13,
    ESC: 27,
  };

  var Device = {
    768: 'tablet',
    1024: 'desktop',
  }

  window.util = {
    Keycode: Keycode,
    Device: Device,
  };
}

export { util };
