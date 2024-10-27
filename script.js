function cekJawaban() {
    const jawaban = document.getElementById('jawaban').value.toLowerCase();
    const pesan = document.getElementById('pesan');

    // Ubah jawaban ini sesuai dengan teka-teki yang ingin kamu buat
    if (jawaban === '3') {
        // Jika benar, arahkan ke halaman hadiah.html
        window.location.href = 'hadiah.html';
    } else {
        pesan.textContent = 'Jawaban salah, coba lagi!';
    }
}
