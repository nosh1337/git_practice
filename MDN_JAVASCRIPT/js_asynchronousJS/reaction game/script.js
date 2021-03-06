const spinner = document.querySelector('.spinner p');
const spinnerContainer = document.querySelector('.spinner');
let rotateCount = 0;
let startTime = null;
let rAF;
const btn = document.querySelector('button');
const result = document.querySelector('.result');

//hide the results paragraph and spinner container @ first load

result.style.display = 'none';
spinnerContainer.style.display = 'none';

function random(min,max) {
    var num = Math.floor(Math.random()*(max-min)) + min;
    return num;
  }

function draw(timestamp) {
    if(!startTime) {
     startTime = timestamp;
    }

    let rotateCount = (timestamp - startTime) / 3;
    spinner.style.transform = 'rotate(' + rotateCount + 'deg)';

    if(rotateCount > 359) {
      rotateCount -= 360;
    }

    rAF = requestAnimationFrame(draw);
  }

function reset() {
    btn.style.display = 'block';
    result.textContent = '';
    result.style.display = 'none';
  }

  btn.addEventListener('click', start);

  function start() {
    draw();
    spinnerContainer.style.display = 'block';
    btn.style.display = 'none';
    setTimeout(setEndgame, random(5000,10000));
  }

  function setEndgame() {
    cancelAnimationFrame(rAF);
    spinnerContainer.style.display = 'none';
    result.style.display = 'block';
    result.textContent = 'PLAYERS GO!!';
  
    document.addEventListener('keydown', keyHandler);
  
    function keyHandler(e) {
      console.log(e.key);
      if(e.key === 'a') {
        result.textContent = 'Player 1 won!!';
      } else if(e.key === 'l') {
        result.textContent = 'Player 2 won!!';
      }
  
      document.removeEventListener('keydown', keyHandler);
      setTimeout(reset, 5000);
    };
  }