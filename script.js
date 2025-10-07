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

// Tampilkan hanya sekali (semua pesan berurutan, lalu berhenti)
async function showMessagesOnce() {
  const messageEl = document.getElementById("message");
  for (let i = 0; i < messages.length; i++) {
    messageEl.textContent = messages[i];
    messageEl.style.animation = "fadeIn 1s forwards";
    await new Promise(resolve => setTimeout(resolve, 3000)); // jeda 3 detik per pesan
  }
}

// --- Animasi hati hanya 1 kali putaran ---
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

// Jalankan efek hati beberapa kali di awal lalu berhenti
function heartsOnce() {
  for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 200);
  }
}

window.onload = () => {
  showMessagesOnce();
  heartsOnce();
};
