// import 'bootstrap';


// FULL SCREEN API

let fullScreenElement = document.querySelector('.fullscreen-btn');
    var removeFullScreenElement = document.querySelector('.exit-fullscreen-btn');


function fullscreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

function fullScreenEvent() {
    document.documentElement.requestFullscreen();
    fullScreenElement.innerHTML = 'exit full screen';
    fullScreenElement.classList.remove('fullscreen-btn');
    fullScreenElement.classList.add('exit-fullscreen-btn');
    var removeFullScreenElement = document.querySelector('.exit-fullscreen-btn');

    function closeFullscreen() {
        if (document.exitFullscreen) {
          document.exitFullscreen();
          removeFullScreenElement.innerHTML = 'Fullscreen';
          fullScreenElement.classList.remove('exit-fullscreen-btn');
          fullScreenElement.classList.add('fullscreen-btn');
        } else if (document.webkitExitFullscreen) { /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
          document.msExitFullscreen();
        }

      }

      console.log(removeFullScreenElement)

      removeFullScreenElement.addEventListener('click', closeFullscreen)
}


fullScreenElement.addEventListener('click',fullScreenEvent);





