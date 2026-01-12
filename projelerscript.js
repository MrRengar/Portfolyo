function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
    document.body.style.overflow = "hidden"; /* Arka planda kaydırmayı durdurur */
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto"; /* Kaydırmayı tekrar açar */
}
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex"; // Gizli olan paneli görünür yapar
        document.body.style.overflow = "hidden"; // Arka plan kaymasını engeller
    } else {
        console.error("Hata: " + modalId + " ID'li modal bulunamadı!");
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}