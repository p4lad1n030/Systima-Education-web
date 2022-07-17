const movie = document.querySelector('#movie');
const playPauseButton = document.querySelector('#playPause');
const backwardButton = document.querySelector('#backward');
const forwardButton = document.querySelector('#forward');
function playPause() {
    if (movie.paused) {
        movie.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        movie.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    }
}
function stop() {
  movie.pause();
  movie.currentTime = 0;
  playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
}
function StepForward() {
  movie.currentTime += 10;
}
function stepBackward() {
  movie.currentTime -= 10;
}
function backward() {
  movie.playbackRate -= 0.25;
  if(movie.playbackRate){
    backwardButton.innerHTML =  movie.playbackRate.toFixed(2);
    setTimeout(() => {
      backwardButton.innerHTML = '<i class="fas fa-backward"></i>'
    },500);
  }
}
function forward() {
  movie.playbackRate += 0.25;
  if(movie.playbackRate){
    forwardButton.innerHTML =  movie.playbackRate.toFixed(2);
    setTimeout(() => {
      forwardButton.innerHTML = '<i class="fas fa-forward"></i>'
    },500);
  }
}