import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const onPlay = function (time) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
};
player.on('timeupdate', throttle(onPlay, 1000));

setCurrentTime();
function setCurrentTime() {
  if (!localStorage.getItem('videoplayer-current-time')) {
    return;
  }
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
