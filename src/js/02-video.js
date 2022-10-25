import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

let windowWithVideo = document.querySelector("#vimeo-player")
const player = new Player(windowWithVideo);


const onPlay = function(timeupdate) {  
    window.localStorage.setItem("videoplayer-current-time", timeupdate.seconds)
};

player.on('play', throttle(onPlay, 1000))

let time = localStorage.getItem("videoplayer-current-time")

player.setCurrentTime(time)



