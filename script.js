// --- Musik otomatis diputar ---
window.addEventListener("load", function() {
  const audio = document.getElementById("bg-music");
  audio.volume = 0.5; // atur volume 50%
  audio.play().catch(() => {
    console.log("Autoplay diblokir browser, klik layar untuk mulai musik 🎵");
    document.body.addEventListener("click", () => {
      audio.play();
    }, { once: true });
  });
});

const messages = [
  "Dah mau dua tahun aja ya..... 💕",
  "Hampir tiap hari gado ajaa kita tapi ga putus putus heheeee 😆",
  "Cemogaa bertahannn teyusss yaaaa 💗",
  "Aku sayang kamuuu 🥹💖"
];

let index = 0;
const messageEl = document.getElementById("message");
const bgMusic = document.getElementById("bg-music");

window.addEventListener("load", () => {
  bgMusic.volume = 0.5;
  showMessage();
});

function showMessage() {
  if (index < messages.length) {
    messageEl.textContent = messages[index];
    messageEl.style.animation = "none";
    void messageEl.offsetWidth;
    messageEl.style.animation = "fadeIn 1s forwards";
    index++;
    setTimeout(showMessage, 4000);
  } else {
    floatingHearts();
  }
}

function floatingHearts() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.textContent = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animation = `float ${5 + Math.random() * 5}s linear infinite`;
    document.body.appendChild(heart);
  }
}
