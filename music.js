
// Replace with your YouTube Data API key
const apiKey = 'AIzaSyAJ-RMHVJkP9RKKVjFsZE8TgtluZwnyyAI';

// Function to extract the video ID from the YouTube URL
function getVideoId(url) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?.*v=))([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : '';
}

// Function to load the YouTube IFrame API
function loadYouTubeAPI() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Global variable for the YouTube player
let player;

// Function to create and play the YouTube audio
function playAudio() {
  const youtubeUrl = document.getElementById('youtubeUrl').value;
  const videoId = getVideoId(youtubeUrl);

  if (videoId) {
    if (!player) {
      player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: videoId,
        events: {
          onReady: onPlayerReady,
        }
      });
    } else {
      player.loadVideoById(videoId);
    }
  } else {
    alert('Invalid YouTube URL. Please provide a valid URL.');
  }
}

// Function called when the YouTube player is ready
function onPlayerReady(event) {
  event.target.setVolume(100);
  event.target.playVideo();
}

// Load the YouTube IFrame API
loadYouTubeAPI();
