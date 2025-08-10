<!DOCTYPE html>
<html lang="en">
<link rel="stylesheet" href="Style.css">
<head>
  <meta charset="UTF-8">
  <title>Happy Birthday</title>
  <style>
    
    body {
      font-family: sans-serif;
      text-align: center;
      background-color: #ffeef8;
      padding: 40px;
    }
    h1 {
      color: #ff4081;
    }
    #her-photo {
      width: 250px;
      border-radius: 15px;
      box-shadow: 0 0 12px rgba(0,0,0,0.3);
      transition: all 0.3s ease;
    }
  </style>
</head>
<body>
<div class="top-section">
  <div class="photo-container">
    <img id="her-photo" src="her1.jpg" alt="Her Picture">
  </div>

  <div class="heading-container">
    <h1>Happy Birthday <span id="nickname">Muskii</span> 🎉</h1>
  </div>

  <div id="music-controls">
    <img src="disco.png" id="discoBtn" alt="Disco Ball" width="60" class="disco-icon">
    <div class="cake-controls">
      <img src="prev.png" id="prevBtn" alt="Previous Song" width="40">
      <img src="cake.png" id="cakeBtn" alt="Cake" width="60">
      <img src="next.png" id="nextBtn" alt="Next Song" width="40">
    </div>
  </div>
</div>
</body>

  <script>
    const photos = ["her1.jpg", "her2.jpg", "her3.jpg", "her4.jpg", "her5.jpg", "her6.jpg", "her7.jpg", "her8.jpg", "her9.jpg"];
const photoElement = document.getElementById("her-photo");
let photoIndex = 0;

function changePhoto() {
  photoElement.src = photos[photoIndex];
  photoIndex = (photoIndex + 1) % photos.length;
}

setInterval(changePhoto, 5000); // every 5 seconds

const nicknames = ["Muskii", "Anshi", "Barbie", "Sunshine", "Khoobsurat", "Sundari", "Maal", "Chulbuli", "Good girl", "Hansini"];
const nicknameElement = document.getElementById("nickname");
let nicknameIndex = 0;

function changeNickname() {
  nicknameElement.textContent = nicknames[nicknameIndex];
  nicknameIndex = (nicknameIndex + 1) % nicknames.length;
}

setInterval(changeNickname, 5000); // every 5 seconds
  
// Music functionality
  // Arrays of song files   
  const cakeSongs = ["cake1.mp3", "cake2.mp3", "cake3.mp3"];
  const discoSongs = ["disco1.mp3", "disco2.mp3", "disco3.mp3"];

  let cakeIndex = 0;
  let discoIndex = 0;

  const cakeAudio = new Audio();
  const discoAudio = new Audio();

  const cakeBtn = document.getElementById("cakeBtn");
  const discoBtn = document.getElementById("discoBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentCategory = null; // "cake" or "disco"

  function playSong(category) {
    if (category === "cake") {
      // Pause disco if playing
      if (!discoAudio.paused) {
        discoAudio.pause();
        discoAudio.currentTime = 0; // Reset disco
      }

      // Only change src if it's a new song
      if (cakeAudio.src !== getFullUrl(cakeSongs[cakeIndex])) {
        cakeAudio.src = cakeSongs[cakeIndex];
      }

      cakeAudio.play();
      currentCategory = "cake";

    } else if (category === "disco") {
      // Pause cake if playing
      if (!cakeAudio.paused) {
        cakeAudio.pause();
        cakeAudio.currentTime = 0; // Reset cake
      }

      if (discoAudio.src !== getFullUrl(discoSongs[discoIndex])) {
        discoAudio.src = discoSongs[discoIndex];
      }

      discoAudio.play();
      currentCategory = "disco";
    }
  }

  function toggleCategory(category) {
    if (category === "cake") {
      // If playing, pause. If paused, resume without resetting
      if (cakeAudio.paused) {
        playSong("cake");
      } else {
        cakeAudio.pause();
      }
    } else if (category === "disco") {
      if (discoAudio.paused) {
        playSong("disco");
      } else {
        discoAudio.pause();
      }
    }
  }

  function changeSong(direction) {
    if (currentCategory === "cake") {
      cakeIndex = (cakeIndex + direction + cakeSongs.length) % cakeSongs.length;
      playSong("cake"); // Will load new song and play from start
    } else if (currentCategory === "disco") {
      discoIndex = (discoIndex + direction + discoSongs.length) % discoSongs.length;
      playSong("disco");
    }
  }

  // Utility function to get full path of audio file (fixes src check)
  function getFullUrl(filename) {
    const link = document.createElement("a");
    link.href = filename;
    return link.href;
  }

  // Event listeners
  cakeBtn.addEventListener("click", () => toggleCategory("cake"));
  discoBtn.addEventListener("click", () => toggleCategory("disco"));
  prevBtn.addEventListener("click", () => changeSong(-1));
  nextBtn.addEventListener("click", () => changeSong(1));
</script>

</body>
