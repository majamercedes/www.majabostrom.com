var rowCentered = document.getElementsByClassName('rowCentered')[0];

var parallax = function () {
  var scroll = window.scrollY;
  var offset = scroll * 0.25;
  rowCentered.style.backgroundPositionY =  offset + 'px';
  window.requestAnimationFrame(parallax);
}

parallax();
