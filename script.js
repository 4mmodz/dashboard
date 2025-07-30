function showPage(page) {
  const title = document.getElementById("page-title");
  const content = document.getElementById("main-content");

  if (page === 'home') {
    title.innerText = "Home";
    content.innerHTML = `
      <div class="card" onclick="window.open('https://abouthmmodzteam.netlify.app/', '_blank')">
        <h3>About Me</h3>
        <p>Welcome, Kami Adalah HM MODZ TEAM, Membantu Mengalahkan Penipuan Online/Scammers.</p>
      </div>
      <div class="card" onclick="window.open('https://abouthmmodz.netlify.app/', '_blank')">
        <h3>Layanan</h3>
        <p>Layanan Kami, Kami Selalu Online 24/7 Dan Selalu Ada Bagi Yang Membutuhkan.</p>
      </div>`;
  } else if (page === 'Tentang Kami') {
    title.innerText = "Tentang Kami";
    content.innerHTML = `
      <div class="card" onclick="window.open('https://tentangteamkami.netlify.app/', '_blank')">
        <h3>Tentang Kami</h3>
        <p>Klik untuk membuka halaman Tentang Kami.</p>
      </div>`;
  } else if (page === 'Document') {
    title.innerText = "Document";
    content.innerHTML = `
      <div class="card" onclick="window.open('https://www.mediafire.com/file/n8u9x6stm09ttz3/Database+Hacking.7z/file', '_blank')">
        <h3>Document</h3>
        <p>Klik untuk melihat dokumen kami yang terenkripsi.</p>
      </div>`;
  } else if (page === 'Contact') {
    title.innerText = "Contact";
    content.innerHTML = `
      <div class="card" onclick="window.open('https://wa.me/6281315665572', '_blank')">
        <h3>Contact</h3>
        <p>Klik untuk menghubungi kami secara langsung.</p>
      </div>`;
  }
}

function logoutConfirm() {
  const confirmLogout = confirm("Apakah kamu yakin ingin logout?");
  if (confirmLogout) {
    window.location.href = "https://www.google.com";
  }
}


const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

function toggleMusic() {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "⏸️";
  } else {
    music.pause();
    musicBtn.textContent = "▶️";
  }
}

window.onload = () => {
  music.play();
};
