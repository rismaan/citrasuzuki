import { Car, Testimonial, Article } from './types';

export const SALES_INFO = {
  name: 'Citra',
  phone: '6282260067490', // Indonesian country code
};

export const SUZUKI_LOGO_URL = '/images/common/suzuki-logo.svg';

export const HERO_SLIDES = [
  {
    image: '/images/common/hero-1.jpg',
    title: 'Miliki Suzuki Impian Anda',
    subtitle: 'Promo terbaik, layanan profesional, dan pengalaman berkendara tak terlupakan menanti Anda.',
  },
  {
    image: '/images/common/hero-2.jpg',
    title: 'Performa & Gaya dalam Satu Paket',
    subtitle: 'Jelajahi berbagai pilihan mobil Suzuki yang dirancang untuk setiap kebutuhan.',
  },
  {
    image: '/images/common/hero-3.jpg',
    title: 'Jadwalkan Test Drive Hari Ini',
    subtitle: 'Rasakan langsung kenyamanan dan ketangguhan mobil Suzuki favorit Anda.',
  },
];

export const VIDEOS: { title: string; embedUrl: string }[] = [
  {
    title: 'Review Suzuki XL7 Hybrid 2024',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    title: 'Test Drive All New Ertiga Cruise',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    title: 'Off-road Bersama Suzuki Jimny 5 Pintu',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    title: 'First Impression Suzuki Fronx Indonesia',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
]

export const CARS: Car[] = [
  {
    id: 'xl7-hybrid',
    name: 'Suzuki XL7 Hybrid',
    image: '/images/cars/xl7-hybrid.jpg',
    tagline: 'Gear to Accomplish',
    description: 'Suzuki XL7 Hybrid hadir dengan desain SUV yang gagah dan fitur canggih untuk menemani petualangan Anda. Dilengkapi teknologi Smart Hybrid Vehicle by Suzuki (SHVS) yang ramah lingkungan dan efisien.',
    features: [
      { iconUrl: '/images/icons/hybrid.svg', text: 'Smart Hybrid (SHVS)' },
      { iconUrl: '/images/icons/seater.svg', text: '7 Seater' },
      { iconUrl: '/images/icons/esp.svg', text: 'Electronic Stability Programme' },
      { iconUrl: '/images/icons/autolight.svg', text: 'Autolight with Guide Me Light' },
    ],
    colors: [
      { name: 'Savanna Ivory', hex: '#EAE0D3', imageUrl: '/images/cars/xl7-ivory.jpg' },
      { name: 'Snow White', hex: '#FFFFFF', imageUrl: '/images/cars/xl7-white.jpg' },
      { name: 'Cool Black', hex: '#2C2C2C', imageUrl: '/images/cars/xl7-black.jpg' },
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
    image: '/images/cars/ertiga.jpg',
    tagline: 'Kebanggaan Keluarga',
    description: 'All New Ertiga memberikan kenyamanan dan keamanan premium untuk keluarga Anda. Dengan kabin yang luas dan fitur modern, setiap perjalanan menjadi lebih menyenangkan.',
    features: [
      { iconUrl: '/images/icons/seater.svg', text: '7 Seater' },
      { iconUrl: '/images/icons/cruise-control.svg', text: 'Cruise Control' },
      { iconUrl: '/images/icons/esp.svg', text: 'Electronic Stability Programme' },
      { iconUrl: '/images/icons/camera.svg', text: 'Rear Camera' },
    ],
    colors: [
      { name: 'Brave Khaki', hex: '#797869', imageUrl: '/images/cars/ertiga-khaki.jpg' },
      { name: 'Silky Silver', hex: '#C0C0C0', imageUrl: '/images/cars/ertiga-silver.jpg' },
      { name: 'Cool Black', hex: '#2C2C2C', imageUrl: '/images/cars/ertiga-black.jpg' },
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
    image: '/images/cars/grand-vitara.jpg',
    tagline: 'The Next Generation SUV',
    description: 'Grand Vitara kembali dengan desain yang lebih modern, performa tangguh, dan teknologi hybrid canggih. Nikmati pengalaman berkendara yang luar biasa di segala medan.',
    features: [
      { iconUrl: '/images/icons/hybrid.svg', text: 'Smart Hybrid (SHVS)' },
      { iconUrl: '/images/icons/sunroof.svg', text: 'Panoramic Sunroof' },
      { iconUrl: '/images/icons/camera.svg', text: '360 View Camera' },
      { iconUrl: '/images/icons/head-up-display.svg', text: 'Head-Up Display' },
    ],
    colors: [
      { name: 'Celestial Blue', hex: '#3B5998', imageUrl: '/images/cars/vitara-blue.jpg' },
      { name: 'Arctic White', hex: '#FFFFFF', imageUrl: '/images/cars/vitara-white.jpg' },
      { name: 'Splendid Silver', hex: '#C0C0C0', imageUrl: '/images/cars/vitara-silver.jpg' },
    ],
    variants: [
      { name: 'GRAND VITARA GX AT', price: 403200000 },
      { name: 'GRAND VITARA GX AT 2TONE', price: 406100000 },
    ],
  },
  {
    id: 'jimny',
    name: 'Suzuki Jimny',
    image: '/images/cars/jimny.jpg',
    tagline: 'The One and Only',
    description: 'Suzuki Jimny adalah SUV legendaris yang siap menaklukkan segala medan. Desain ikonik, kemampuan off-road sejati, dan ukuran yang ringkas menjadikannya teman petualangan terbaik.',
    features: [
      { iconUrl: '/images/icons/4x4.svg', text: 'AllGrip Pro 4x4' },
      { iconUrl: '/images/icons/chassis.svg', text: 'Ladder Frame Chassis' },
      { iconUrl: '/images/icons/suspension.svg', text: '3-Link Rigid Axle Suspension' },
      { iconUrl: '/images/icons/hill-descent.svg', text: 'Hill Descent Control' },
    ],
    colors: [
      { name: 'Kinetic Yellow', hex: '#F7D002', imageUrl: '/images/cars/jimny-yellow.jpg' },
      { name: 'Jungle Green', hex: '#2E3B27', imageUrl: '/images/cars/jimny-green.jpg' },
      { name: 'Bluish Black Pearl', hex: '#1C2127', imageUrl: '/images/cars/jimny-black.jpg' },
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
    image: '/images/cars/s-presso.jpg',
    tagline: 'Mini SUV, Big Spirit',
    description: 'S-Presso adalah mini SUV yang lincah dan hemat bahan bakar, cocok untuk mobilitas perkotaan. Dengan ground clearance tinggi dan desain yang stylish, S-Presso siap menemani aktivitas Anda.',
    features: [
      { iconUrl: '/images/icons/engine-start-stop.svg', text: 'Engine Auto Start-Stop' },
      { iconUrl: '/images/icons/esp.svg', text: 'Electronic Stability Programme' },
      { iconUrl: '/images/icons/high-mount-stop-lamp.svg', text: 'High Mount Stop Lamp' },
      { iconUrl: '/images/icons/airbags.svg', text: 'Dual Airbags' },
    ],
    colors: [
      { name: 'Sizzle Orange', hex: '#F37F1B', imageUrl: '/images/cars/spresso-orange.jpg' },
      { name: 'Solid Fire Red', hex: '#E41F26', imageUrl: '/images/cars/spresso-red.jpg' },
      { name: 'Pearl Starry Blue', hex: '#1A376C', imageUrl: '/images/cars/spresso-blue.jpg' },
    ],
    variants: [
      { name: 'S-PRESSO MT', price: 176600000 },
      { name: 'S-PRESSO AT', price: 186600000 },
    ],
  },
  {
    id: 'new-carry-pu',
    name: 'New Carry PU',
    image: '/images/cars/carry.jpg',
    tagline: 'Rajanya Pick Up',
    description: 'New Carry Pick Up adalah andalan para pengusaha. Dengan bak yang luas, sasis yang kuat, dan mesin yang irit, New Carry siap mengangkut berbagai macam muatan untuk kelancaran bisnis Anda.',
    features: [
      { iconUrl: '/images/icons/cargo.svg', text: 'Bak Luas & Kokoh' },
      { iconUrl: '/images/icons/power-steering.svg', text: 'Power Steering' },
      { iconUrl: '/images/icons/ac.svg', text: 'Air Conditioner' },
      { iconUrl: '/images/icons/fuel-efficient.svg', text: 'Irit Bahan Bakar' },
    ],
    colors: [
      { name: 'Superior White', hex: '#FFFFFF', imageUrl: '/images/cars/carry-white.jpg' },
      { name: 'Silky Silver', hex: '#C0C0C0', imageUrl: '/images/cars/carry-silver.jpg' },
      { name: 'Real Black', hex: '#000000', imageUrl: '/images/cars/carry-black.jpg' },
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
    image: '/images/cars/apv.jpg',
    tagline: 'Multi Purpose Vehicle',
    description: 'APV adalah kendaraan serbaguna yang handal untuk keluarga maupun bisnis. Dengan kabin lega dan mesin bertenaga, APV memberikan fleksibilitas untuk segala kebutuhan Anda.',
    features: [
        { iconUrl: '/images/icons/spacious.svg', text: 'Kabin Super Lega' },
        { iconUrl: '/images/icons/captain-seat.svg', text: 'Captain Seat (Tipe SGX)' },
        { iconUrl: '/images/icons/side-impact-beam.svg', text: 'Side Impact Beam' },
        { iconUrl: '/images/icons/air-intake.svg', text: 'Air Intake Tinggi' },
    ],
    colors: [
        { name: 'Cool Black', hex: '#2C2C2C', imageUrl: '/images/cars/apv-black.jpg' },
        { name: 'Silky Silver', hex: '#C0C0C0', imageUrl: '/images/cars/apv-silver.jpg' },
        { name: 'Graphite Grey', hex: '#808080', imageUrl: '/images/cars/apv-grey.jpg' },
    ],
    variants: [
        { name: 'APV GE PS MT AB', price: 228200000 },
        { name: 'APV GL MT AB', price: 236400000 },
        { name: 'APV GX MT AB', price: 250500000 },
        { name: 'APV SGX MT AB', price: 253900000 },
    ]
  },
  {
    id: 'fronx',
    name: 'Fronx',
    image: '/images/cars/fronx.jpg',
    tagline: 'The Shape of New',
    description: 'Suzuki Fronx adalah SUV coupe yang memadukan desain futuristik dengan performa sporty. Tampil beda di jalanan dengan gaya yang unik dan fitur-fitur canggih.',
    features: [
        { iconUrl: '/images/icons/head-up-display.svg', text: 'Head-Up Display' },
        { iconUrl: '/images/icons/camera.svg', text: '360 View Camera' },
        { iconUrl: '/images/icons/wireless-charger.svg', text: 'Wireless Charger' },
        { iconUrl: '/images/icons/airbags.svg', text: '6 Airbags' },
    ],
    colors: [
        { name: 'Earthen Brown', hex: '#5C4033', imageUrl: '/images/cars/fronx-brown.jpg' },
        { name: 'Opulent Red', hex: '#A52A2A', imageUrl: '/images/cars/fronx-red.jpg' },
        { name: 'Splendid Silver', hex: '#C0C0C0', imageUrl: '/images/cars/fronx-silver.jpg' },
    ],
    variants: [
        { name: 'FRONX GL MT', price: 261800000 },
        { name: 'FRONX GL AT', price: 273800000 },
        { name: 'FRONX GX MT', price: 278800000 },
        { name: 'FRONX GX AT', price: 296600000 },
        { name: 'FRONX SGX', price: 322600000 },
        { name: 'FRONX SGX 2TONE', price: 324600000 },
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Budi Santoso', car: 'Suzuki XL7 Hybrid', imageUrl: '/images/testimonials/budi.jpg' },
  { name: 'Rina Wijaya', car: 'All New Ertiga', imageUrl: '/images/testimonials/rina.jpg' },
  { name: 'Agus Setiawan', car: 'Suzuki Jimny', imageUrl: '/images/testimonials/agus.jpg' },
  { name: 'Dewi Lestari', car: 'S-Presso', imageUrl: '/images/testimonials/dewi.jpg' },
];

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: '5 Tips Merawat Mobil Hybrid Agar Tetap Prima',
    excerpt: 'Mobil hybrid membutuhkan perhatian khusus agar performanya tetap optimal. Simak 5 tips mudah yang bisa Anda lakukan sendiri di rumah.',
    content: 'Merawat mobil hybrid sebenarnya tidak jauh berbeda dengan mobil konvensional, namun ada beberapa komponen tambahan yang perlu diperhatikan. Pertama, pastikan Anda rutin memeriksa kondisi baterai hybrid. Kedua, gunakan bahan bakar sesuai rekomendasi pabrikan. Ketiga, jangan abaikan servis berkala di bengkel resmi. Keempat, perhatikan cara berkendara Anda, hindari akselerasi dan pengereman mendadak untuk menjaga kesehatan baterai. Kelima, jaga kebersihan filter udara dan sistem pendingin baterai.',
    imageUrl: '/images/articles/hybrid-care.jpg',
    author: 'Tim Suzuki',
    publishDate: '15 Juli 2024'
  },
  {
    id: 2,
    title: 'Keunggulan Suzuki AllGrip Pro di Medan Off-Road',
    excerpt: 'Teknologi AllGrip Pro pada Suzuki Jimny bukanlah sekadar gimmick. Pahami cara kerjanya dan mengapa ia begitu superior di medan berat.',
    content: 'Suzuki AllGrip Pro adalah sistem penggerak 4x4 part-time yang dirancang untuk para petualang sejati. Sistem ini memiliki transfer case dengan tiga mode: 2H (2WD High), 4H (4WD High), dan 4L (4WD Low). Mode 4L memberikan torsi maksimal ke semua roda, memungkinkan Jimny merayap di tanjakan curam atau melewati bebatuan besar dengan mudah. Dipadukan dengan sasis ladder frame yang kokoh dan suspensi 3-link rigid axle, AllGrip Pro menjadikan Jimny sebagai off-roader yang tak terkalahkan di kelasnya.',
    imageUrl: '/images/articles/allgrip-pro.jpg',
    author: 'Citra Suzuki',
    publishDate: '10 Juli 2024'
  },
  {
    id: 3,
    title: 'Memilih Mobil Keluarga: XL7 Hybrid vs All New Ertiga',
    excerpt: 'Bingung memilih antara SUV tangguh XL7 Hybrid atau MPV nyaman All New Ertiga? Berikut perbandingan lengkapnya untuk membantu Anda.',
    content: 'Keduanya adalah pilihan terbaik untuk mobil keluarga 7 penumpang, namun dengan karakter yang berbeda. XL7 Hybrid menawarkan ground clearance lebih tinggi dan desain SUV yang gagah, cocok untuk keluarga yang suka berpetualang. Di sisi lain, All New Ertiga fokus pada kenyamanan kabin premium dan kemewahan, ideal untuk perjalanan keluarga di dalam kota maupun luar kota. Keduanya kini dilengkapi fitur-fitur modern dan efisiensi bahan bakar yang baik. Pilihan kembali pada prioritas dan gaya hidup keluarga Anda.',
    imageUrl: '/images/articles/xl7-vs-ertiga.jpg',
    author: 'Tim Suzuki',
    publishDate: '5 Juli 2024'
  },
];