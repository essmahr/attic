const embeds = document.getElementsByClassName('iframe-wrap');
const players = {};

function initializePlayer(evt, index) {
  const id = evt.currentTarget.getElementsByTagName('div')[0].id;

  players[index] = new YT.Player(id, {
    height: '27',
    autoplay: 1,
    width: '100%',
    videoId: id,
    events: {
      onReady: handlePlayerEvents(index, evt.currentTarget),
      onStateChange: resetPlayer(index, evt.currentTarget),
    }
  });
}

function handlePlayerEvents(index, el) {
  return function(evt) {
    const player = players[index];
    player.playVideo();
    el.classList.add('playing')

    el.addEventListener('click', function(){
      const s = player.getPlayerState();
      el.classList.toggle('playing');
      if (s === 1) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    });
  }
}

function resetPlayer(index, el) {
  return function() {
    const player = players[index];
    if (player.getPlayerState() === 0) {
      el.classList.remove('playing');
    }
  }
}

function checkForBottom(evt) {
  const bottomed = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight;

  if (!bottomed) return;

  const nextHiddenChunk = document.querySelector('.chunk-hidden');

  if (nextHiddenChunk) {
    nextHiddenChunk.classList.remove('chunk-hidden');
  }
}

window.onYouTubePlayerAPIReady = function() {
  for (let i = 0; i < embeds.length; i++) {
    embeds[i].addEventListener('click', (evt) => {
      initializePlayer(evt, i);
    }, { once: true });
  }
}

window.addEventListener('scroll', checkForBottom);

const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

