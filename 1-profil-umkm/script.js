// TODO: ganti dengan produk UMKM kalian. Gambar boleh dikosongkan dulu.
const produk = [
    { nama: 'Produk pertama', harga: 15000, keterangan: 'Keterangan singkat produk.' },
    { nama: 'Produk kedua', harga: 20000, keterangan: 'Keterangan singkat produk.' },
    { nama: 'Produk ketiga', harga: 25000, keterangan: 'Keterangan singkat produk.' },
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

const produkTambahan = [
    {
        id: 'p3',
        nama: 'Yangnyeom Korean Chicken',
        keterangan: 'Ayam goreng renyah tanpa tulang dibalur saus manis pedas khas Korea.',
        harga: 28000,
        poin: 12
    },
    {
        id: 'p4',
        nama: 'Jajangmyeon Eco-Bowl',
        keterangan: 'Mie khas Korea saus kedelai hitam gurih dan potongan daging & sayur.',
        harga: 27000,
        poin: 10
    },
    {
        id: 'p5',
        nama: 'Corn Dog Mozzarella Sausage',
        keterangan: 'Jajanan sosis dan keju mozzarella berselimut adonan renyah khas Korea.',
        harga: 18000,
        poin: 5
    },
    {
        id: 'p6',
        nama: 'Odeng Soupy Bowl',
        keterangan: 'Sate sosis ikan khas Korea disajikan dengan kuah kaldu hangat gurih.',
        harga: 15000,
        poin: 5
    },
    {
        id: 'p7',
        nama: 'Bibimbap Healthy Box',
        keterangan: 'Nasi campur Korea dengan aneka tumis sayuran, daging sapi, dan gochujang.',
        harga: 30000,
        poin: 15
    },
    {
        id: 'p8',
        nama: 'Sundubu Jjigae Set',
        keterangan: 'Sup tahu sutra pedas hangat dengan seafood ringan dan kuah kaya rempah.',
        harga: 32000,
        poin: 15
    },
    {
        id: 'p9',
        nama: 'Mandu Goreng Crispy',
        keterangan: 'Pangsit khas Korea isi daging dan sayuran yang digoreng renyah.',
        harga: 16000,
        poin: 6
    },
    {
        id: 'p10',
        nama: 'Bungae-ppang Red Bean',
        keterangan: 'Kue bentuk ikan hangat khas Korea dengan isian pasta kacang merah manis.',
        harga: 12000,
        poin: 4
    }
];

const kontainerProdukTambahan = document.getElementById('daftar-produk');

if (!kontainerProdukTambahan) {
    throw new Error('Kontainer #daftar-produk tidak ditemukan.');
}

for (const produkBaru of produkTambahan) {
    const kartu = document.createElement('article');
    kartu.className = 'kartu kartu-produk product-card';
    kartu.dataset.productId = produkBaru.id;
    kartu.dataset.price = String(produkBaru.harga);
    kartu.dataset.poin = String(produkBaru.poin);

    const gambar = document.createElement('img');
    gambar.className = 'gambar-produk';
    gambar.dataset.imgTrack = `${produkBaru.id.toUpperCase()}-IMG`;
    gambar.src = `images/${produkBaru.id}.jpg`;
    gambar.alt = produkBaru.nama;

    const judul = document.createElement('h3');
    judul.textContent = produkBaru.nama;

    const keterangan = document.createElement('p');
    keterangan.textContent = produkBaru.keterangan;

    const harga = document.createElement('p');
    harga.className = 'harga';
    harga.textContent = `Rp${produkBaru.harga.toLocaleString('id-ID')}`;

    const badgePoin = document.createElement('span');
    badgePoin.className = 'badge-poin';
    badgePoin.textContent = `+${produkBaru.poin} Poin`;

    const tombolTambah = document.createElement('button');
    tombolTambah.type = 'button';
    tombolTambah.className = 'tombol-tambah-keranjang';
    tombolTambah.textContent = 'Tambah ke Keranjang';

    kartu.append(gambar, judul, keterangan, harga, badgePoin, tombolTambah);
    kontainerProdukTambahan.appendChild(kartu);
}
