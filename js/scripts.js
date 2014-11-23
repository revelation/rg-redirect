

setupTimer = function() {
  count = 30;
  counter = setInterval(timer, 1000);
  function timer() {
    count = count - 1;
    $('#countdown').html(count + 's')
    if (count <= 0) {
      clearInterval(counter);
      window.location.replace("http://www.focusvision.com/products/revelation-next");
      return;
    }
  }
}

loadItUp = function() {
  setTimeout( function() {
    $('body').addClass('in');
  }, 125);
}

$(document).ready(function(){
  setupTimer();
  loadItUp();
})
