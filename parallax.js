// header Paralax

let kuilKanan = document.getElementById("kuilKanan");
let kuilKiri = document.getElementById("kuilKiri");
let gapura = document.getElementById("gapura");
let daratan = document.getElementById("daratan");
let awan = document.getElementById("awan");
let bungaKiri = document.getElementById("bungaKiri");
let bungaKanan = document.getElementById("bungaKanan");
let headlineText = document.getElementById("headlineText");

// header Paralax

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  console.log(value);

  if (value <= 300) {
    kuilKiri.style.opacity = -value * 0.5 + 100 + "%";
    kuilKiri.style.left = value * -0.05 + "%";
    kuilKanan.style.opacity = -value * 0.5 + 100 + "%";
    kuilKanan.style.right = value * -0.05 + "%";
    gapura.style.opacity = -value * 0.5 + 100 + "%";
    daratan.style.opacity = -value * 0.5 + 100 + "%";
    daratan.style.left = value * -0.25 + "%";
    bungaKiri.style.opacity = -value * 0.5 + 100 + "%";
    bungaKiri.style.left = value * -0.25 + "%";
    bungaKanan.style.opacity = -value * 0.5 + 100 + "%";
    bungaKanan.style.right = value * -0.25 + "%";
    headlineText.style.opacity = -value * 0.5 + 100 + "%";
  }

  if (value > 300) {
    kuilKiri.style.left = 0 + "%";
    kuilKanan.style.right = 0 + "%";
    daratan.style.left = 0 + "%";
    bungaKiri.style.left = 0 + "%";
    bungaKanan.style.right = 0 + "%";
  }

  let introWeb = document.getElementById("introWeb");
  introWeb.style.opacity = value / 7 + "%";

  let daerah = document.getElementById("daerah");
  daerah.style.opacity = value * 0.13 - 80 + "%";

  let searchEngine = document.getElementById("searchEngine");
  let kontenBudaya = document.getElementById("kontenBudaya");
  searchEngine.style.opacity = value * 0.12 - 100 + "%";
  kontenBudaya.style.opacity = value * 0.12 - 100 + "%";

  let testimoniPage = document.getElementById("testimoniPage");
  testimoniPage.style.opacity = value * 0.055 - 100 + "%";
  console.log(testimoniPage);

  // intro Parallax
  let kanan2 = document.getElementById("kanan2");
  let kiri2 = document.getElementById("kiri2");

  // intro Parallax
  kiri2.style.opacity = -value * -0.5 + 100 + "%";
  kiri2.style.left = value * 0.01 + "%";
  kanan2.style.opacity = -value * -0.5 + 100 + "%";
  kanan2.style.right = value * 0.01 + "%";

  //   testimoni input
  let daunKanan = document.getElementById("daunKanan");
  let daunKiri = document.getElementById("daunKiri");
  //   testimoni input
  daunKiri.style.opacity = -value * -0.5 + 100 + "%";
  daunKanan.style.opacity = -value * -0.5 + 100 + "%";
});
