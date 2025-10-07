// filenames for assets (must exist in same folder)
const images = [
  'WhatsApp Image 2025-10-07 at 07.37.11_97b0c764.jpg',
  'WhatsApp Image 2025-10-07 at 07.37.11_a16378d3.jpg',
  'WhatsApp Image 2025-10-07 at 07.37.11_f69fbc8d.jpg',
  'WhatsApp Image 2025-10-07 at 07.37.11_f6526f94.jpg'
];
const giftVideoFilename = 'hadiah.mp4.mp4'; // use exact uploaded name (keep as-is)
const bgMusicEl = document.getElementById('bg-music');

// play background music after user interaction (some browsers block autoplay)
window.addEventListener('load', () => {
  if (bgMusicEl) {
    bgMusicEl.volume = 0.45;
    bgMusicEl.play().catch(()=>{
      // play on first click if blocked
      document.body.addEventListener('click', ()=> bgMusicEl.play(), { once:true });
    });
  }
});

// Build gallery thumbnails
const galleryEl = document.getElementById('gallery');
images.forEach(src => {
  const div = document.createElement('div');
  div.className = 'thumb';
  div.innerHTML = `<img src="${src}" alt="foto-kenangan" loading="lazy">`;
  galleryEl.appendChild(div);

  // click to open full image in modal-like view (quick)
  div.addEventListener('click', ()=> {
    openImageInModal(src);
  });
});

// Simple image modal (reuse video modal to display image)
const modal = document.getElementById('video-modal');
const modalVideo = document.getElementById('gift-video');
const openGiftBtn = document.getElementById('open-gift');
const closeBtn = document.getElementById('close-modal');

function openVideoModal() {
  if (!modal) return;
  modal.setAttribute('aria-hidden','false');
  // pause background music
  if (bgMusicEl && !bgMusicEl.paused) bgMusicEl.pause();
  // set video source and autoplay (user clicked so allowed)
  modalVideo.src = giftVideoFilename;
  modalVideo.play().catch(()=>{});
}

function closeModal() {
  if (!modal) return;
  modal.setAttribute('aria-hidden','true');
  // stop the video and clear src to release memory
  modalVideo.pause();
  modalVideo.currentTime = 0;
  modalVideo.src = '';
  // resume bg music
  if (bgMusicEl) bgMusicEl.play().catch(()=>{});
}

openGiftBtn.addEventListener('click', openVideoModal);
closeBtn.addEventListener('click', closeModal);

// Close when clicking outside content
modal.addEventListener('click', (e)=> {
  if (e.target === modal) closeModal();
});

// Image modal support: show image in the same modal but using <img> temporarily
function openImageInModal(src) {
  if (!modal) return;
  modal.setAttribute('aria-hidden','false');
  if (bgMusicEl && !bgMusicEl.paused) bgMusicEl.pause();

  // replace video with an image element
  modalVideo.pause();
  modalVideo.src = '';
  const img = document.createElement('img');
  img.src = src;
  img.style.width = '100%';
  img.style.borderRadius = '8px';

  const content = modal.querySelector('.modal-content');
  // remove any previous temp image placeholder
  const prev = content.querySelector('img.temp-preview');
  if (prev) prev.remove();

  img.className = 'temp-preview';
  content.appendChild(img);
}

// Remove temp image when closing modal
closeBtn.addEventListener('click', ()=> {
  const content = modal.querySelector('.modal-content');
  const temp = content.querySelector('img.temp-preview');
  if (temp) temp.remove();
});

// small floating heart
const heart = document.createElement('div');
heart.className='heart-floating';
heart.textContent='💗';
document.body.appendChild(heart);
