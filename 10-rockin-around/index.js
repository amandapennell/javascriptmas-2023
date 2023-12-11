const player = document.getElementById("player")

// https://www.youtube.com/embed/PoAjmmD89Vw?autoplay=1

function playSong(id) {
  // Challenge: Add code here to make the youtube player play the new YouTube song

  let currentSrc = player.src
  let currentId = currentSrc.match(/\/embed\/([^?]+)/)[1];

  let newSrc = currentSrc.replace(currentId, id);
  
  player.src = newSrc
}