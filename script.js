// TODO: ganti dengan produk UMKM kalian. Gambar boleh dikosongkan dulu.
const produk = [
    { nama: 'Tteokbokki', harga: 25000, keterangan: 'Tteokbokki kenyal bersaus pedas manis, bikin hangat dan ketagihan.' },
    { nama: 'Kimbap', harga: 22000, keterangan: 'Nasi gulung rumput laut dengan isian lezat di setiap gigitan.' },
    { nama: 'Korean Fried Chicken', harga: 35000, keterangan: 'Ayam renyah berbalut saus khas Korea yang bikin nagih.' },
    { nama: 'Korean Corn Dog', harga: 20000, keterangan: 'Sosis dan keju berbalut adonan renyah, nikmat selagi hangat.' },
    { nama: 'Ramyeon', harga: 25000, keterangan: 'Mi kuah hangat dengan rasa gurih dan sentuhan pedas.' },
    { nama: 'Mandu', harga: 22000, keterangan: 'Pangsit Korea dengan isian gurih dan kulit yang lembut.' },
    { nama: 'Bulgogi', harga: 40000, keterangan: 'Irisan daging berbumbu manis gurih dengan aroma menggoda.' },
    { nama: 'Bibimbap', harga: 35000, keterangan: 'Nasi hangat dengan sayuran warna-warni dan saus gochujang.' },
    { nama: 'Japchae', harga: 28000, keterangan: 'Soun kenyal dengan sayuran dan bumbu gurih khas Korea.' },
    { nama: 'Odeng', harga: 18000, keterangan: 'Eomuk hangat dengan kuah gurih yang nyaman di perut.' },
    { nama: 'Hotteok', harga: 15000, keterangan: 'Pancake Korea hangat dengan isian manis yang lumer.' },
    { nama: 'Kimchi Jjigae', harga: 32000, keterangan: 'Sup kimchi bercita rasa asam pedas, pas disantap hangat.' },
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
