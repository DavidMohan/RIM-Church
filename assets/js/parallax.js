

const parallax = document.getElementById('parallax');

window.addEventListener('scroll', function() {
  let offset = this.window.pageYOffset;
  parallax.style.backgroundPositionY = offset * .9 +"px";
});