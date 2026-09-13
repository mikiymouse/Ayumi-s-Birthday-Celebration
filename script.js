// ===============================
// EDIT DATA UNDANGAN DI SINI
// ===============================
const undangan = {
  nama: "Ayumi Nadine Elsaki",
  usia: "4",
  tanggalTeks: "26 September 2026",
  jam: "16.00 WIB",
  tempat: "KFC Taman Solo",
  alamat: "Jl. Cempaka Putih Raya No.106, RT.17/RW.3, Cemp. Putih Tim., Kec. Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10510",
  maps: "https://www.google.com/maps/place/KFC/@-6.1766561,106.8707118,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f4d9ab894865:0x1ab8d386951c5efb!8m2!3d-6.1766614!4d106.8732867!16s%2Fg%2F1tqhmgnw?entry=ttu&g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D",
  whatsapp: "+628119310527",

  // Format: YYYY-MM-DDTHH:MM:SS
  countdown: "2026-09-26T19:00:00"
};

const $ = (id) => document.getElementById(id);

$("coverName").textContent = undangan.nama;
$("heroName").textContent = undangan.nama;
$("heroAge").textContent = undangan.usia;
$("heroDate").textContent = undangan.tanggalTeks;
$("detailDate").textContent = undangan.tanggalTeks;
$("detailTime").textContent = undangan.jam;
$("detailPlace").textContent = undangan.tempat;
$("detailAddress").textContent = undangan.alamat;
$("closingName").textContent = undangan.nama;
$("mapsBtn").href = undangan.maps;

const yesMessage = `Halo, saya ingin mengonfirmasi bahwa saya akan hadir di acara ulang tahun ${undangan.nama}. 🎂`;
const noMessage = `Halo, mohon maaf saya belum bisa hadir di acara ulang tahun ${undangan.nama}.`;

$("yesBtn").href = `https://wa.me/${undangan.whatsapp}?text=${encodeURIComponent(yesMessage)}`;
$("noBtn").href = `https://wa.me/${undangan.whatsapp}?text=${encodeURIComponent(noMessage)}`;

// Opening + music
document.body.classList.add("locked");
const opening = $("opening");
const music = $("music");
const musicBtn = $("musicBtn");

$("openBtn").addEventListener("click", async () => {
  opening.classList.add("hide");
  document.body.classList.remove("locked");
  try {
    await music.play();
    musicBtn.textContent = "🔊";
  } catch (e) {
    musicBtn.textContent = "🔇";
  }
});

musicBtn.addEventListener("click", async () => {
  if (music.paused) {
    try { await music.play(); musicBtn.textContent = "🔊"; } catch(e) {}
  } else {
    music.pause();
    musicBtn.textContent = "🔇";
  }
});

// Countdown
function updateCountdown() {
  const target = new Date(undangan.countdown).getTime();
  const now = Date.now();
  let diff = Math.max(0, target - now);

  const days = Math.floor(diff / 86400000); diff %= 86400000;
  const hours = Math.floor(diff / 3600000); diff %= 3600000;
  const minutes = Math.floor(diff / 60000); diff %= 60000;
  const seconds = Math.floor(diff / 1000);

  $("days").textContent = String(days).padStart(2,"0");
  $("hours").textContent = String(hours).padStart(2,"0");
  $("minutes").textContent = String(minutes).padStart(2,"0");
  $("seconds").textContent = String(seconds).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown, 1000);
