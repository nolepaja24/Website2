// Navigasi antar tab
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
  
    // Reset tab dan konten
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
  
    // Aktifkan tab yang dipilih
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
  }
  
  // Fungsi scroll galeri gambar
  function scrollGallery(direction) {
    const carousel = document.getElementById("carousel");
    if (!carousel) return;
  
    const scrollAmount = 320; // pixel
    carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth"
    });
  }
  