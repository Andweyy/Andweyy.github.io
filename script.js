var select = function(s) {
  return document.querySelector(s);
}

function randomBetween(min,max)
{
    var number = Math.floor(Math.random()*(max-min+1)+min);
  
    if ( number !== 0 ){
      return number;
    }else {
      return 0.5;
    }
}

var tl = new TimelineMax();

for(var i = 0; i < 20; i++){

  var t = TweenMax.to(select('.bubble' + i), randomBetween(1, 1.5), {
    x: randomBetween(12, 15) * (randomBetween(-1, 1)),
    y: randomBetween(12, 15) * (randomBetween(-1, 1)), 
    repeat:-1,
    repeatDelay:randomBetween(0.2, 0.5),
    yoyo:true,
    ease:Elastic.easeOut.config(1, 0.5)
  })

  tl.add(t, (i+1)/0.6)
}

tl.seek(50);
var nameElement = document.querySelector('.name-wrapper h1');

nameElement.addEventListener('mousedown', function() {
  nameElement.style.textShadow = '0 0 10px #66cc99, 0 0 20px #66cc99, 0 0 30px #66cc99';
  nameElement.style.color = '#66cc99'; /* Change to the desired color */
});

nameElement.addEventListener('mouseup', function() {
  nameElement.style.textShadow = '';
  nameElement.style.color = ''; /* Revert to the original color */
});