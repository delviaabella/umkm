// TODO: ganti dengan produk UMKM kalian. Gambar boleh dikosongkan dulu.
const produk = [
    { nama: 'Tteokbokki', harga: 25000, keterangan: 'Keterangan singkat produk.' },
    { nama: 'Kimbap', harga: 22000, keterangan: 'Keterangan singkat produk.' },
    { nama: 'Korean Fried Chicken', harga: 35000, keterangan: 'Keterangan singkat produk.' },
    { nama: 'Korean Corn Dog', harga: 20000, keterangan: 'Keterangan singkat produk.' },
    { nama: 'Ramyeon', harga: 25000, keterangan: 'Keterangan singkat produk.' },
    { nama: 'Mandu', harga: 22000, keterangan: 'Keterangan singkat produk.' },
    { nama: 'Bulgogi', harga: 40000, keterangan: 'Keterangan singkat produk.' },
    { nama: 'Bibimbap', harga: 35000, keterangan: 'Keterangan singkat produk.' },
    { nama: 'Japchae', harga: 28000, keterangan: 'Keterangan singkat produk.' },
    { nama: 'Odeng', harga: 18000, keterangan: 'Keterangan singkat produk.' },
    { nama: 'Hotteok', harga: 15000, keterangan: 'Keterangan singkat produk.' },
    { nama: 'Kimchi Jjigae', harga: 32000, keterangan: 'Keterangan singkat produk.' },
];

// TODO: sesuaikan jam buka (format 24 jam)
const jamBuka = 8;
const jamTutup = 17;

function rupiah(angka) {
    return 'Rp' + angka.toLocaleString('id-ID');
}

function tampilkanProduk() {
    const wadah = document.getElementById('daftar-produk');
    wadah.innerHTML = '';
    for (const p of produk) {
        const kartu = document.createElement('article');
        kartu.className = 'kartu';
        kartu.innerHTML = `
            <div class="foto">Foto</div>
            <h3>${p.nama}</h3>
            <p>${p.keterangan}</p>
            <p class="harga">${rupiah(p.harga)}</p>
        `;
        wadah.appendChild(kartu);
    }
}

function tampilkanStatusBuka() {
    const jam = new Date().getHours();
    const buka = jam >= jamBuka && jam < jamTutup;
    const el = document.getElementById('status-buka');
    el.textContent = buka ? 'Buka sekarang' : 'Sedang tutup';
    el.className = buka ? 'buka' : 'tutup';
}

tampilkanProduk();
tampilkanStatusBuka();
