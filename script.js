function visi() {
  let misi = document.getElementById("misi");
  let visi = document.getElementById("visi");
  misi.setAttribute("class", "ps-5 pe-5 fw-medium");
  visi.setAttribute("class", "ps-5 pe-5 fw-medium activeVisiMisi");
  let isiVisiMisi = document.getElementById("isiVisiMisi");
  isiVisiMisi.innerText =
    "`Menjadi sumber utama informasi dan promosi kekayaan budaya dan keindahan alam dari setiap daerah di Bali, sehingga memperkuat identitas budaya lokal dan meningkatkan kesadaran akan pentingnya pelestarian warisan budaya Bali.`";
  let img = document.getElementById("imgVisiMisi");
  img.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
}

function misi() {
  let visi = document.getElementById("visi");
  let misi = document.getElementById("misi");
  visi.setAttribute("class", "ps-5 pe-5 fw-medium");
  misi.setAttribute("class", "ps-5 pe-5 fw-medium activeVisiMisi");
  let isiVisiMisi = document.getElementById("isiVisiMisi");
  isiVisiMisi.innerText =
    "`Menyediakan platform untuk pelaku industri pariwisata dan seni untuk mempromosikan produk dan layanan mereka, sehingga meningkatkan pendapatan dan kesejahteraan ekonomi masyarakat setempat.`";
  let img = document.getElementById("imgVisiMisi");
  img.setAttribute(
    "src",
    "Assets/httpsunsplash.comphotosa-couple-of-people-that-are-standing-in-the-street-SXM0NC45wU0.jpg"
  );
}
