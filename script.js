// --- Musik otomatis ---
window.addEventListener("load", function() {
  const audio = document.getElementById("bg-music");
  audio.volume = 0.5;
  audio.play().catch(() => {
    document.body.addEventListener("click", () => audio.play(), { once: true });
  });
});

// --- Pesan romantis berganti ---
const messages = [
  "Alooooo cayaannngggg..... 💕",
  "Udah mauuu duaaa tahunn yaaaa",
  "Hampir tiap hari gado ajaa kita tapi ga putus heheheee 😍",
  "Semogaa bertahannn teyusss yaaaa 💓",
  "Camat ulang tahun yaaa inceess tuuuu",
  "Semoga yang di inginkan cepat tercapai, ujiannya lancar, kuliahnya lancar, rezeki deres", 
  "Aku sayang kamuuu 😘💖",
  "Kamu tuh rumah terindah buat aku 💞"
];

let index = 0;
function showMessage() {
  const messageEl = document.getElementById("message");
  messageEl.textContent = messages[index];
  messageEl.style.animation = "fadeIn 1s forwards";
  index = (index + 1) % messages.length;
}
setInterval(showMessage, 3000);
showMessage();

// --- Animasi hati jatuh ---
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);
