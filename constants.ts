import { Car, Testimonial, Article } from './types';

export const SALES_INFO = {
  name: 'Citra',
  phone: '6282260067490', // Indonesian country code
};

export const SUZUKI_LOGO_URL = 'https://iili.io/KJCXvz7.png';

export const HERO_SLIDES = [
  {
    image: 'https://mobilsuzukisolo.com/wp-content/uploads/2024/02/Banner-All-New-Ertiga-Cruise.png',
    title: 'Miliki Suzuki Impian Anda',
    subtitle: 'Promo terbaik, layanan profesional, dan pengalaman berkendara tak terlupakan menanti Anda.',
  },
  {
    image: 'https://mobilsuzukisolo.com/wp-content/uploads/2025/06/Banner-Mobil-Suzuki-Fronx.jpg',
    title: 'Performa & Gaya dalam Satu Paket',
    subtitle: 'Jelajahi berbagai pilihan mobil Suzuki yang dirancang untuk setiap kebutuhan.',
  },
  {
    image: 'https://mobilsuzukisolo.com/wp-content/uploads/2020/02/Banner-Mobil-Suzuki-XL7-Hybrid.jpg',
    title: 'Jadwalkan Test Drive Hari Ini',
    subtitle: 'Rasakan langsung kenyamanan dan ketangguhan mobil Suzuki favorit Anda.',
  },
];

export const VIDEOS: { title: string; embedUrl: string }[] = [
  {
    title: 'Suzuki Fronx | Educational Content | Lane Keep Assist & Lane Departure Prevention',
    embedUrl: 'https://www.youtube.com/embed/42_kN4zU9Ts'
  },
  {
    title: 'Kata Mereka Tentang Suzuki New XL7 Hybrid',
    embedUrl: 'https://www.youtube.com/embed/GjucWKtMgQQ'
  },
  {
    title: 'The legend is back - Suzuki Grand Vitara!',
    embedUrl: 'https://www.youtube.com/embed/K7myLx48YRo'
  },
  {
    title: 'The Last Journey | Suzuki Jimny',
    embedUrl: 'https://www.youtube.com/embed/hvs0Y994GOQ'
  },
]

export const CARS: Car[] = [
  {
    id: 'fronx',
    name: 'Fronx',
    image: 'https://imgcdn.oto.com/large/gallery/exterior/37/3224/suzuki-fronx-front-side-view-744342.jpg',
    tagline: 'The Shape of New',
    description: 'Suzuki Fronx adalah SUV coupe yang memadukan desain futuristik dengan performa sporty. Tampil beda di jalanan dengan gaya yang unik dan fitur-fitur canggih.',
    features: [
        { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/3224/suzuki-fronx-front-side-view-744342.jpg', text: 'Head-Up Display' },
        { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/3224/suzuki-fronx-front-side-view-744342.jpg', text: '360 View Camera' },
        { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/3224/suzuki-fronx-front-side-view-744342.jpg', text: 'Wireless Charger' },
        { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/3224/suzuki-fronx-front-side-view-744342.jpg', text: '6 Airbags' },
    ],
    colors: [
        { name: 'Ice Grayish Blue', hex: ['#A8B6BD', '#2C2C2C'], imageUrl: 'https://i.imghippo.com/files/ARkP8374QxU.webp' },
        { name: 'White Black', hex: ['#FFFFFF', '#2C2C2C'], imageUrl: 'https://i.imghippo.com/files/Khn4464Fb.webp' },
        { name: 'Savanna Ivory Black', hex: ['#EAE0D3', '#2C2C2C'], imageUrl: 'https://i.imghippo.com/files/fyG3310mUc.webp' },
        { name: 'Snow White Pearl', hex: '#FFFFFF', imageUrl: 'https://i.imghippo.com/files/zVC3295TCY.webp' },
        { name: 'Cool Black', hex: '#2C2C2C', imageUrl: 'https://i.imghippo.com/files/Sv6768iqg.webp' },
        { name: 'Savanna Ivory', hex: '#EAE0D3', imageUrl: 'https://i.imghippo.com/files/MCaS9722xIk.webp' },
        { name: 'Metallic Magma Gray', hex: '#555555', imageUrl: 'https://i.imghippo.com/files/TnJj7209K.webp' },
    ],
    variants: [
        { name: 'FRONX GL MT', price: 261800000 },
        { name: 'FRONX GL AT', price: 273800000 },
        { name: 'FRONX GX MT', price: 278800000 },
        { name: 'FRONX GX AT', price: 296600000 },
        { name: 'FRONX SGX', price: 322600000 },
        { name: 'FRONX SGX 2TONE', price: 324600000 },
    ]
  },
  {
    id: 'xl7-hybrid',
    name: 'Suzuki XL7 Hybrid',
    image: 'https://imgcdn.oto.com/medium/gallery/exterior/37/2220/suzuki-xl7-12009.jpg',
    tagline: 'Gear to Accomplish',
    description: 'Suzuki XL7 Hybrid hadir dengan desain SUV yang gagah dan fitur canggih untuk menemani petualangan Anda. Dilengkapi teknologi Smart Hybrid Vehicle by Suzuki (SHVS) yang ramah lingkungan dan efisien.',
    features: [
      { iconUrl: 'https://imgcdn.oto.com/medium/gallery/exterior/37/2220/suzuki-xl7-12009.jpg', text: 'Smart Hybrid (SHVS)' },
      { iconUrl: 'https://imgcdn.oto.com/medium/gallery/exterior/37/2220/suzuki-xl7-12009.jpg', text: '7 Seater' },
      { iconUrl: 'https://imgcdn.oto.com/medium/gallery/exterior/37/2220/suzuki-xl7-12009.jpg', text: 'Electronic Stability Programme' },
      { iconUrl: 'https://imgcdn.oto.com/medium/gallery/exterior/37/2220/suzuki-xl7-12009.jpg', text: 'Autolight with Guide Me Light' },
    ],
    colors: [
      
      { name: 'Savanna Ivory Black', hex: ['#EAE0D3', '#2C2C2C'], imageUrl: 'https://i.imghippo.com/files/Sct7171cc.webp' },
      { name: 'White Black', hex: ['#FFFFFF', '#2C2C2C'], imageUrl: 'https://i.imghippo.com/files/HV2098EGw.webp' },
      { name: 'Sunrise Orange Black', hex: ['#E67451', '#2C2C2C'], imageUrl: 'https://i.imghippo.com/files/MlzI1488TrY.webp' },
      { name: 'Snow White Pearl', hex: '#FFFFFF', imageUrl: 'https://i.imghippo.com/files/yWW1938j.webp' },
      { name: 'Metallic Magma Gray', hex: '#555555', imageUrl: 'https://i.imghippo.com/files/M3194Fg.webp' },
      { name: 'Cool Black', hex: '#2C2C2C', imageUrl: 'https://i.imghippo.com/files/JWi4582Jo.webp' },
      { name: 'Brave Khakhi', hex: '#4A3728', imageUrl: 'https://i.imghippo.com/files/dUtg6545YJ.webp' },
    ],
    variants: [
      { name: 'XL7 ZETA MT', price: 269900000 },
      { name: 'XL7 ZETA AT', price: 281100000 },
      { name: 'XL7 BETA MT HYBRID', price: 292200000 },
      { name: 'XL7 BETA AT HYBRID', price: 303100000 },
      { name: 'XL7 ALPHA MT HYBRID', price: 303300000 },
      { name: 'XL7 ALPHA MT HYBRID 2TONE', price: 305300000 },
      { name: 'XL7 ALPHA AT HYBRID', price: 314200000 },
      { name: 'XL7 ALPHA AT HYBRID 2TONE', price: 316300000 },
    ],
  },
  {
    id: 'all-new-ertiga',
    name: 'All New Ertiga',
    image: 'https://imgcdn.oto.com/large/gallery/exterior/37/2614/suzuki-ertiga-smart-hybrid-front-angle-low-view-164264.jpg',
    tagline: 'Kebanggaan Keluarga',
    description: 'All New Ertiga memberikan kenyamanan dan keamanan premium untuk keluarga Anda. Dengan kabin yang luas dan fitur modern, setiap perjalanan menjadi lebih menyenangkan.',
    features: [
      { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2614/suzuki-ertiga-smart-hybrid-front-angle-low-view-164264.jpg', text: '7 Seater' },
      { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2614/suzuki-ertiga-smart-hybrid-front-angle-low-view-164264.jpg', text: 'Cruise Control' },
      { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2614/suzuki-ertiga-smart-hybrid-front-angle-low-view-164264.jpg', text: 'Electronic Stability Programme' },
      { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2614/suzuki-ertiga-smart-hybrid-front-angle-low-view-164264.jpg', text: 'Rear Camera' },
    ],
    colors: [
      { name: 'Cool Black', hex: '#2C2C2C', imageUrl: 'https://i.imghippo.com/files/xaIJ3386w.webp' },
      { name: 'Silky Silver', hex: '#C0C0C0', imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2614/suzuki-ertiga-smart-hybrid-front-angle-low-view-164264.jpg' },
      { name: 'Cool Black', hex: '#2C2C2C', imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2614/suzuki-ertiga-smart-hybrid-front-angle-low-view-164264.jpg' },
    ],
    variants: [
      { name: 'ALL NEW ERTIGA GA', price: 241750000 },
      { name: 'ALL NEW ERTIGA MC GL MT', price: 265350000 },
      { name: 'ALL NEW ERTIGA MC GL AT', price: 276400000 },
      { name: 'ALL NEW ERTIGA MC GX MT', price: 282000000 },
      { name: 'ALL NEW ERTIGA MC GX AT', price: 293000000 },
      { name: 'ALL NEW ERTIGA CRUISE MT', price: 294800000 },
      { name: 'ALL NEW ERTIGA CRUISE MT 2TONE', price: 296800000 },
      { name: 'ALL NEW ERTIGA CRUISE AT', price: 305700000 },
      { name: 'ALL NEW ERTIGA CRUISE AT 2TONE', price: 307700000 },
    ],
  },
  {
    id: 'grand-vitara',
    name: 'Grand Vitara',
    image: 'https://imgcdn.oto.com/large/gallery/exterior/37/2721/suzuki-grand-vitara-2023-front-angle-low-view-707340.jpg',
    tagline: 'The Next Generation SUV',
    description: 'Grand Vitara kembali dengan desain yang lebih modern, performa tangguh, dan teknologi hybrid canggih. Nikmati pengalaman berkendara yang luar biasa di segala medan.',
    features: [
      { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2721/suzuki-grand-vitara-2023-front-angle-low-view-707340.jpg', text: 'Smart Hybrid (SHVS)' },
      { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2721/suzuki-grand-vitara-2023-front-angle-low-view-707340.jpg', text: 'Panoramic Sunroof' },
      { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2721/suzuki-grand-vitara-2023-front-angle-low-view-707340.jpg', text: '360 View Camera' },
      { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2721/suzuki-grand-vitara-2023-front-angle-low-view-707340.jpg', text: 'Head-Up Display' },
    ],
    colors: [
      { name: 'Celestial Blue', hex: '#3B5998', imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2721/suzuki-grand-vitara-2023-front-angle-low-view-707340.jpg' },
      { name: 'Arctic White', hex: '#FFFFFF', imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2721/suzuki-grand-vitara-2023-front-angle-low-view-707340.jpg' },
      { name: 'Splendid Silver', hex: '#C0C0C0', imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2721/suzuki-grand-vitara-2023-front-angle-low-view-707340.jpg' },
    ],
    variants: [
      { name: 'GRAND VITARA GX AT', price: 403200000 },
      { name: 'GRAND VITARA GX AT 2TONE', price: 406100000 },
    ],
  },
  {
    id: 'jimny',
    name: 'Suzuki Jimny',
    image: 'https://imgcdn.oto.com/medium/gallery/exterior/37/782/suzuki-jimny-24418.jpg',
    tagline: 'The One and Only',
    description: 'Suzuki Jimny adalah SUV legendaris yang siap menaklukkan segala medan. Desain ikonik, kemampuan off-road sejati, dan ukuran yang ringkas menjadikannya teman petualangan terbaik.',
    features: [
      { iconUrl: 'https://imgcdn.oto.com/medium/gallery/exterior/37/782/suzuki-jimny-24418.jpg', text: 'AllGrip Pro 4x4' },
      { iconUrl: 'https://imgcdn.oto.com/medium/gallery/exterior/37/782/suzuki-jimny-24418.jpg', text: 'Ladder Frame Chassis' },
      { iconUrl: 'https://imgcdn.oto.com/medium/gallery/exterior/37/782/suzuki-jimny-24418.jpg', text: '3-Link Rigid Axle Suspension' },
      { iconUrl: 'https://imgcdn.oto.com/medium/gallery/exterior/37/782/suzuki-jimny-24418.jpg', text: 'Hill Descent Control' },
    ],
    colors: [
      { name: 'Kinetic Yellow', hex: '#F7D002', imageUrl: 'https://imgcdn.oto.com/medium/gallery/exterior/37/782/suzuki-jimny-24418.jpg' },
      { name: 'Jungle Green', hex: '#2E3B27', imageUrl: 'https://imgcdn.oto.com/medium/gallery/exterior/37/782/suzuki-jimny-24418.jpg' },
      { name: 'Bluish Black Pearl', hex: '#1C2127', imageUrl: 'https://imgcdn.oto.com/medium/gallery/exterior/37/782/suzuki-jimny-24418.jpg' },
      { name: 'Kinetic Yellow / Black Roof', hex: ['#F7D002', '#1C2127'], imageUrl: 'https://imgcdn.oto.com/medium/gallery/exterior/37/782/suzuki-jimny-24418.jpg' },
    ],
    variants: [
      { name: 'JIMNY 3 DOOR MT', price: 511500000 },
      { name: 'JIMNY 3 DOOR AT', price: 524000000 },
      { name: 'JIMNY 3 DOOR MT 2TONE', price: 514850000 },
      { name: 'JIMNY 3 DOOR AT 2TONE', price: 527300000 },
      { name: 'JIMNY 5 DOOR MT', price: 496100000 },
      { name: 'JIMNY 5 DOOR AT', price: 508700000 },
      { name: 'JIMNY 5 DOOR MT 2TONE', price: 499350000 },
      { name: 'JIMNY 5 DOOR AT 2TONE', price: 511900000 },
      { name: 'JIMNY 5 DOOR AT WHITE RHINO', price: 522300000 },
    ],
  },
  {
    id: 's-presso',
    name: 'S-Presso',
    image: 'https://imgcdn.oto.com/large/gallery/exterior/37/2620/suzuki-s-presso-front-angle-low-view-628835.jpg',
    tagline: 'Mini SUV, Big Spirit',
    description: 'S-Presso adalah mini SUV yang lincah dan hemat bahan bakar, cocok untuk mobilitas perkotaan. Dengan ground clearance tinggi dan desain yang stylish, S-Presso siap menemani aktivitas Anda.',
    features: [
      { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2620/suzuki-s-presso-front-angle-low-view-628835.jpg', text: 'Engine Auto Start-Stop' },
      { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2620/suzuki-s-presso-front-angle-low-view-628835.jpg', text: 'Electronic Stability Programme' },
      { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2620/suzuki-s-presso-front-angle-low-view-628835.jpg', text: 'High Mount Stop Lamp' },
      { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2620/suzuki-s-presso-front-angle-low-view-628835.jpg', text: 'Dual Airbags' },
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF', imageUrl: 'https://i.imghippo.com/files/BRSe6891zew.webp' },
      { name: 'Silky Silver Metallic', hex: '#AAA9AD', imageUrl: 'https://i.imghippo.com/files/oOZ6122cM.webp' },
      { name: 'Granite Grey Metallic', hex: '#808782', imageUrl: 'https://i.imghippo.com/files/oXOc5268jGs.webp' },
      { name: 'Solid Fire Red', hex: '#B82025', imageUrl: 'https://i.imghippo.com/files/Boh6541CQ.webp' },
      { name: 'Sizzle Orange', hex: '#FF6B1A', imageUrl: 'https://i.imghippo.com/files/uT6186bM.webp' },
    ],
    variants: [
      { name: 'S-PRESSO MT', price: 176600000 },
      { name: 'S-PRESSO AT', price: 186600000 },
    ],
  },
  {
    id: 'new-carry-pu',
    name: 'New Carry PU',
    image: 'https://imgcdn.oto.com/large/gallery/exterior/37/2158/suzuki-carry-front-angle-low-view-924731.jpg',
    tagline: 'Rajanya Pick Up',
    description: 'New Carry Pick Up adalah andalan para pengusaha. Dengan bak yang luas, sasis yang kuat, dan mesin yang irit, New Carry siap mengangkut berbagai macam muatan untuk kelancaran bisnis Anda.',
    features: [
      { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2158/suzuki-carry-front-angle-low-view-924731.jpg', text: 'Bak Luas & Kokoh' },
      { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2158/suzuki-carry-front-angle-low-view-924731.jpg', text: 'Power Steering' },
      { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2158/suzuki-carry-front-angle-low-view-924731.jpg', text: 'Air Conditioner' },
      { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2158/suzuki-carry-front-angle-low-view-924731.jpg', text: 'Irit Bahan Bakar' },
    ],
    colors: [
      { name: 'Superior White', hex: '#FFFFFF', imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2158/suzuki-carry-front-angle-low-view-924731.jpg' },
      { name: 'Silky Silver', hex: '#C0C0C0', imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2158/suzuki-carry-front-angle-low-view-924731.jpg' },
      { name: 'Real Black', hex: '#000000', imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2158/suzuki-carry-front-angle-low-view-924731.jpg' },
    ],
    variants: [
      { name: 'NEW CARRY PU', price: 175500000 },
      { name: 'NEW CARRY PU FD AC PS', price: 183500000 },
      { name: 'NEW CARRY PU WD', price: 176600000 },
      { name: 'NEW CARRY PU WD AC PS', price: 184400000 },
    ],
  },
  {
    id: 'apv',
    name: 'APV',
    image: 'https://imgcdn.oto.com/large/gallery/exterior/37/326/suzuki-apv-arena-front-angle-low-view-886242.jpg',
    tagline: 'Multi Purpose Vehicle',
    description: 'APV adalah kendaraan serbaguna yang handal untuk keluarga maupun bisnis. Dengan kabin lega dan mesin bertenaga, APV memberikan fleksibilitas untuk segala kebutuhan Anda.',
    features: [
        { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/326/suzuki-apv-arena-front-angle-low-view-886242.jpg', text: 'Kabin Super Lega' },
        { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/326/suzuki-apv-arena-front-angle-low-view-886242.jpg', text: 'Captain Seat (Tipe SGX)' },
        { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/326/suzuki-apv-arena-front-angle-low-view-886242.jpg', text: 'Side Impact Beam' },
        { iconUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/326/suzuki-apv-arena-front-angle-low-view-886242.jpg', text: 'Air Intake Tinggi' },
    ],
    colors: [
        { name: 'Cool Black', hex: '#2C2C2C', imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/326/suzuki-apv-arena-front-angle-low-view-886242.jpg' },
        { name: 'Silky Silver', hex: '#C0C0C0', imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/326/suzuki-apv-arena-front-angle-low-view-886242.jpg' },
        { name: 'Graphite Grey', hex: '#808080', imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/326/suzuki-apv-arena-front-angle-low-view-886242.jpg' },
    ],
    variants: [
        { name: 'APV GE PS MT AB', price: 228200000 },
        { name: 'APV GL MT AB', price: 236400000 },
        { name: 'APV GX MT AB', price: 250500000 },
        { name: 'APV SGX MT AB', price: 253900000 },
    ]
  },
  
];

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Budi Santoso', car: 'Suzuki XL7 Hybrid', imageUrl: 'https://i.imghippo.com/files/HxR6953AtA.jpg' },
  { name: 'Rina Wijaya', car: 'All New Ertiga', imageUrl: 'https://i.imghippo.com/files/HxR6953AtA.jpg' },
  { name: 'Agus Setiawan', car: 'Suzuki Jimny', imageUrl: 'https://i.imghippo.com/files/HxR6953AtA.jpg' },
  { name: 'Dewi Lestari', car: 'S-Presso', imageUrl: 'https://i.imghippo.com/files/HxR6953AtA.jpg' },
];

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: '5 Tips Merawat Mobil Hybrid Agar Tetap Prima',
    excerpt: 'Mobil hybrid membutuhkan perhatian khusus agar performanya tetap optimal. Simak 5 tips mudah yang bisa Anda lakukan sendiri di rumah.',
    content: 'Merawat mobil hybrid sebenarnya tidak jauh berbeda dengan mobil konvensional, namun ada beberapa komponen tambahan yang perlu diperhatikan. Pertama, pastikan Anda rutin memeriksa kondisi baterai hybrid. Kedua, gunakan bahan bakar sesuai rekomendasi pabrikan. Ketiga, jangan abaikan servis berkala di bengkel resmi. Keempat, perhatikan cara berkendara Anda, hindari akselerasi dan pengereman mendadak untuk menjaga kesehatan baterai. Kelima, jaga kebersihan filter udara dan sistem pendingin baterai.',
    imageUrl: 'https://images.bisnis.com/posts/2025/08/19/1903812/suzuki_fronx_1_1750940009.jpg',
    author: 'Tim Suzuki',
    publishDate: '15 Juli 2024'
  },
  {
    id: 2,
    title: 'Keunggulan Suzuki AllGrip Pro di Medan Off-Road',
    excerpt: 'Teknologi AllGrip Pro pada Suzuki Jimny bukanlah sekadar gimmick. Pahami cara kerjanya dan mengapa ia begitu superior di medan berat.',
    content: 'Suzuki AllGrip Pro adalah sistem penggerak 4x4 part-time yang dirancang untuk para petualang sejati. Sistem ini memiliki transfer case dengan tiga mode: 2H (2WD High), 4H (4WD High), dan 4L (4WD Low). Mode 4L memberikan torsi maksimal ke semua roda, memungkinkan Jimny merayap di tanjakan curam atau melewati bebatuan besar dengan mudah. Dipadukan dengan sasis ladder frame yang kokoh dan suspensi 3-link rigid axle, AllGrip Pro menjadikan Jimny sebagai off-roader yang tak terkalahkan di kelasnya.',
    imageUrl: 'https://images.bisnis.com/posts/2025/08/19/1903812/suzuki_fronx_1_1750940009.jpg',
    author: 'Citra Suzuki',
    publishDate: '10 Juli 2024'
  },
  {
    id: 3,
    title: 'Memilih Mobil Keluarga: XL7 Hybrid vs All New Ertiga',
    excerpt: 'Bingung memilih antara SUV tangguh XL7 Hybrid atau MPV nyaman All New Ertiga? Berikut perbandingan lengkapnya untuk membantu Anda.',
    content: 'Keduanya adalah pilihan terbaik untuk mobil keluarga 7 penumpang, namun dengan karakter yang berbeda. XL7 Hybrid menawarkan ground clearance lebih tinggi dan desain SUV yang gagah, cocok untuk keluarga yang suka berpetualang. Di sisi lain, All New Ertiga fokus pada kenyamanan kabin premium dan kemewahan, ideal untuk perjalanan keluarga di dalam kota maupun luar kota. Keduanya kini dilengkapi fitur-fitur modern dan efisiensi bahan bakar yang baik. Pilihan kembali pada prioritas dan gaya hidup keluarga Anda.',
    imageUrl: 'https://images.bisnis.com/posts/2025/08/19/1903812/suzuki_fronx_1_1750940009.jpg',
    author: 'Tim Suzuki',
    publishDate: '5 Juli 2024'
  },
];