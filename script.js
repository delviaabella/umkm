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

const gambarProduk = [
    'https://i.pinimg.com/236x/95/de/c8/95dec85801baadcd4e4936b1091cd9b3.jpg',
    'https://i.pinimg.com/236x/af/ca/5d/afca5d2239c84a35de1d624488f5b5c0.jpg',
    'https://i.pinimg.com/236x/73/0d/5e/730d5e76bba81f039505d715822dfb65.jpg',
    'https://i.pinimg.com/1200x/b4/4a/35/b44a354199d5857050eb142a395e4a9b.jpg',
    'https://i.pinimg.com/236x/ce/63/72/ce6372afc0ad4ad79d0bcb4d36762cdc.jpg',
    'https://i.pinimg.com/236x/5c/9c/91/5c9c917bd53ef7314fb94b3d5793786e.jpg',
    'https://i.pinimg.com/236x/27/a2/71/27a2719a1b3c6a810f33305b3085b347.jpg',
    'https://i.pinimg.com/236x/32/b9/5f/32b95fc5d05e88ba409c5f26a3e70066.jpg',
    'https://i.pinimg.com/236x/6e/1a/30/6e1a3052bb56717e69a0581bb275a9ad.jpg',
    'https://i.pinimg.com/236x/44/2b/3a/442b3ac7ecab515fda7bbaa8a7df7031.jpg',
    'https://i.pinimg.com/236x/8c/f7/30/8cf730fcbd286669c40a7088e521e04b.jpg',
    'https://i.pinimg.com/236x/50/17/54/5017546a665626cc1e8cf5718dd876fb.jpg'
];

document.querySelectorAll('#daftar-produk .kartu').forEach((kartu, index) => {
    const wadahGambar = kartu.querySelector('.foto');
    const produkSaatIni = produk[index];
    const urlGambar = gambarProduk[index];

    if (!wadahGambar || !produkSaatIni || !urlGambar) return;

    const img = document.createElement('img');
    img.src = urlGambar;
    img.alt = produkSaatIni.nama;
    img.loading = 'lazy';
    wadahGambar.replaceChildren(img);
});

const daftarKartuProduk = document.querySelectorAll('#daftar-produk .kartu');
const bagianProduk = document.getElementById('produk');
const keranjang = new Map();

if (bagianProduk && daftarKartuProduk.length > 0) {
    const bagianKeranjang = document.createElement('section');
    bagianKeranjang.id = 'keranjang-pesanan';
    bagianKeranjang.tabIndex = -1;
    bagianKeranjang.setAttribute('aria-live', 'polite');
    bagianKeranjang.innerHTML = `
        <h2>Keranjang Pesanan</h2>
        <p class="keranjang-kosong">Keranjang masih kosong. Pilih produk untuk mulai memesan.</p>
        <div class="keranjang-daftar"></div>
        <p class="keranjang-total" hidden></p>
        <a class="keranjang-checkout" href="#" target="_blank" rel="noopener" hidden>
            Lanjutkan Pesan via WhatsApp
        </a>
    `;
    bagianProduk.insertAdjacentElement('afterend', bagianKeranjang);

    const elemenKosong = bagianKeranjang.querySelector('.keranjang-kosong');
    const elemenDaftar = bagianKeranjang.querySelector('.keranjang-daftar');
    const elemenTotal = bagianKeranjang.querySelector('.keranjang-total');
    const tombolCheckout = bagianKeranjang.querySelector('.keranjang-checkout');
    const tautanWhatsApp = document.querySelector('a.tombol[href^="https://wa.me/"]');

    function formatRupiah(nilai) {
        return `Rp${nilai.toLocaleString('id-ID')}`;
    }

    function gambarKeranjang() {
        elemenDaftar.replaceChildren();
        let total = 0;
        const rincianPesanan = [];

        for (const [nama, produk] of keranjang) {
            total += produk.harga * produk.jumlah;
            rincianPesanan.push(`${nama} x${produk.jumlah} - ${formatRupiah(produk.harga * produk.jumlah)}`);

            const baris = document.createElement('div');
            baris.className = 'keranjang-item';

            const info = document.createElement('div');
            info.className = 'keranjang-item-info';

            const namaProduk = document.createElement('strong');
            namaProduk.textContent = nama;

            const hargaProduk = document.createElement('p');
            hargaProduk.textContent = `${formatRupiah(produk.harga)} per item`;
            info.append(namaProduk, hargaProduk);

            const kontrol = document.createElement('div');
            kontrol.className = 'keranjang-kontrol';

            const tombolKurang = document.createElement('button');
            tombolKurang.type = 'button';
            tombolKurang.textContent = '-';
            tombolKurang.setAttribute('aria-label', `Kurangi ${nama}`);
            tombolKurang.addEventListener('click', () => ubahJumlah(nama, -1));

            const jumlah = document.createElement('span');
            jumlah.textContent = produk.jumlah;

            const tombolTambah = document.createElement('button');
            tombolTambah.type = 'button';
            tombolTambah.textContent = '+';
            tombolTambah.setAttribute('aria-label', `Tambah ${nama}`);
            tombolTambah.addEventListener('click', () => ubahJumlah(nama, 1));

            kontrol.append(tombolKurang, jumlah, tombolTambah);
            baris.append(info, kontrol);
            elemenDaftar.appendChild(baris);
        }

        const adaPesanan = keranjang.size > 0;
        elemenKosong.hidden = adaPesanan;
        elemenTotal.hidden = !adaPesanan;
        tombolCheckout.hidden = !adaPesanan;
        elemenTotal.textContent = `Total: ${formatRupiah(total)}`;

        if (adaPesanan && tautanWhatsApp) {
            const pesan = [
                'Halo Oppa Bites, saya ingin memesan:',
                ...rincianPesanan,
                `Total: ${formatRupiah(total)}`
            ].join('\n');
            const nomorWhatsApp = tautanWhatsApp.href.replace(/^https:\/\/wa\.me\//, '').split('?')[0];
            tombolCheckout.href = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;
        }
    }

    function ubahJumlah(nama, perubahan) {
        const produk = keranjang.get(nama);
        if (!produk) return;

        produk.jumlah += perubahan;
        if (produk.jumlah <= 0) keranjang.delete(nama);
        gambarKeranjang();
    }

    for (const kartu of daftarKartuProduk) {
        const nama = kartu.querySelector('h3')?.textContent;
        const teksHarga = kartu.querySelector('.harga')?.textContent ?? '';
        const harga = Number(teksHarga.replace(/\D/g, ''));

        if (!nama || !Number.isFinite(harga) || harga <= 0) continue;

        const tombolPesan = document.createElement('button');
        tombolPesan.type = 'button';
        tombolPesan.className = 'tombol-pesan';
        tombolPesan.textContent = 'Pesan sekarang';
        tombolPesan.addEventListener('click', () => {
            const produk = keranjang.get(nama);
            if (produk) {
                produk.jumlah += 1;
            } else {
                keranjang.set(nama, { harga, jumlah: 1 });
            }

            gambarKeranjang();
            bagianKeranjang.scrollIntoView({ behavior: 'smooth', block: 'start' });
            bagianKeranjang.focus({ preventScroll: true });
        });

        kartu.appendChild(tombolPesan);
    }

    gambarKeranjang();
}
