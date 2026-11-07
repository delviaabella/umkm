const gambarProduk = [
    {
        url: 'https://i.pinimg.com/236x/95/de/c8/95dec85801baadcd4e4936b1091cd9b3.jpg',
        pin: 'https://id.pinterest.com/pin/745064332138417073/'
    },
    {
        url: 'https://i.pinimg.com/236x/af/ca/5d/afca5d2239c84a35de1d624488f5b5c0.jpg',
        pin: 'https://id.pinterest.com/pin/1002262092067857793/'
    },
    {
        url: 'https://i.pinimg.com/236x/72/a1/e7/72a1e728432381176b4005629b201b73.jpg',
        pin: 'https://id.pinterest.com/pin/91268329945781415/'
    },
    {
        url: 'https://i.pinimg.com/236x/54/92/39/5492399baab81493d928b301b690faf4.jpg',
        pin: 'https://id.pinterest.com/pin/1149121661209746687/'
    },
    {
        url: 'https://i.pinimg.com/236x/ce/63/72/ce6372afc0ad4ad79d0bcb4d36762cdc.jpg',
        pin: 'https://id.pinterest.com/pin/593701163361088336/'
    },
    {
        url: 'https://i.pinimg.com/236x/5c/9c/91/5c9c917bd53ef7314fb94b3d5793786e.jpg',
        pin: 'https://id.pinterest.com/pin/913456736934436695/'
    },
    {
        url: 'https://i.pinimg.com/236x/27/a2/71/27a2719a1b3c6a810f33305b3085b347.jpg',
        pin: 'https://id.pinterest.com/pin/420734790209948811/'
    },
    {
        url: 'https://i.pinimg.com/236x/32/b9/5f/32b95fc5d05e88ba409c5f26a3e70066.jpg',
        pin: 'https://id.pinterest.com/pin/862861609890765432/'
    },
    {
        url: 'https://i.pinimg.com/236x/6e/1a/30/6e1a3052bb56717e69a0581bb275a9ad.jpg',
        pin: 'https://id.pinterest.com/pin/311522499247717334/'
    },
    {
        url: 'https://i.pinimg.com/236x/44/2b/3a/442b3ac7ecab515fda7bbaa8a7df7031.jpg',
        pin: 'https://id.pinterest.com/pin/708683691392014510/'
    },
    {
        url: 'https://i.pinimg.com/236x/8c/f7/30/8cf730fcbd286669c40a7088e521e04b.jpg',
        pin: 'https://id.pinterest.com/pin/4597823462334552128/'
    },
    {
        url: 'https://i.pinimg.com/236x/50/17/54/5017546a665626cc1e8cf5718dd876fb.jpg',
        pin: 'https://id.pinterest.com/pin/321092648442053313/'
    }
];

document.querySelectorAll('#daftar-produk .kartu').forEach((kartu, index) => {
    const wadahGambar = kartu.querySelector('.foto');
    const gambar = gambarProduk[index];

    if (!wadahGambar || !gambar) return;

    const tautan = document.createElement('a');
    tautan.className = wadahGambar.className;
    tautan.href = gambar.pin;
    tautan.target = '_blank';
    tautan.rel = 'noopener noreferrer';
    tautan.setAttribute('aria-label', `Lihat gambar ${kartu.querySelector('h3').textContent} di Pinterest`);

    const img = document.createElement('img');
    img.src = gambar.url;
    img.alt = kartu.querySelector('h3').textContent;
    img.loading = 'lazy';

    tautan.appendChild(img);
    wadahGambar.replaceWith(tautan);
});
