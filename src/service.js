export default {
  getElemetAudio() {
    return document.querySelector("audio");
  },
  pauseOrPlay(element) {
    if (element.paused) {
      element.play();
    } else {
      element.pause();
    }
  },
  getDuration(element) {
    return Math.floor(element.duration | 0);
  },
};
