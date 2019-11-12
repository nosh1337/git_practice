var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */


for (let i = 1; i < 6; i++) {
  let newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
  imageSource = newImage.getAttribute('src');

  newImage.onclick = function(event) {
    let imageSource = event.target.getAttribute('src');
    setImage(imageSource);
  }
  function setImage(imageSource){
    displayedImage.setAttribute('src', imageSource);
  }
  
}
/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
}
