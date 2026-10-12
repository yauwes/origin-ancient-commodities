/**
 * DATABASE KOMODITAS ALAM PURBA DUNIA (PRE-SUPERMARKET & PRE-COLUMBIAN EXCHANGE)
 * Menelusuri asal-usul otentik tanaman, rempah, pangan, dan fauna sebelum era perdagangan global modern.
 */

const VAVILOV_CENTERS = [
  {
    id: "fertile-crescent",
    name: "Hilal Subur (Fertile Crescent / Mesopotamia & Levant)",
    period: "± 10.000 – 8.000 SM",
    coordinates: [34.5, 41.0],
    radius: 700000,
    color: "#e67e22",
    description: "Cikal bakal revolusi pertanian pertama manusia. Tempat lahirnya gandum, jelai, lentil, kurma, zaitun, serta domestikasi domba dan kambing oleh peradaban Sumeria, Akkadia, dan Babilonia.",
    commodities: ["gandum", "jelai", "lentil", "chickpea", "zaitun", "kurma", "tin", "domba", "delima"]
  },
  {
    id: "mesoamerica",
    name: "Mesoamerika (Lembah Meksiko, Maya, & Olmek)",
    period: "± 7.000 – 4.000 SM",
    coordinates: [19.4, -99.1],
    radius: 650000,
    color: "#27ae60",
    description: "Pusat agrikultur peradaban Maya, Olmek, dan Aztek. Menghasilkan bahan pangan terpenting dunia modern: jagung, kakao (cokelat), cabai, vanila, alpukat, dan tomat.",
    commodities: ["jagung", "kakao", "cabai", "vanila", "alpukat", "tomat", "labu", "kalkun"]
  },
  {
    id: "andean",
    name: "Dataran Tinggi Andes & Amazon Hulu",
    period: "± 8.000 – 3.000 SM",
    coordinates: [-14.5, -72.0],
    radius: 750000,
    color: "#8e44ad",
    description: "Bentang alam ekstrem pegunungan Andes melahirkan lebih dari 4.000 varietas kentang liar, quinoa, serta hewan pekerja tangguh seperti llama dan alpaca bagi peradaban Inka dan Tiwanaku.",
    commodities: ["kentang", "quinoa", "singkong", "ubi-jalar", "kacang-tanah", "karet", "llama", "nanas"]
  },
  {
    id: "china-east-asia",
    name: "Lembah Sungai Yangtze & Kuning (Tiongkok Purba)",
    period: "± 8.000 – 5.000 SM",
    coordinates: [32.0, 114.0],
    radius: 750000,
    color: "#c0392b",
    description: "Pusat peradaban agraris Asia Timur. Lembah Yangtze membudidayakan padi sawah basah pertama, sementara Lembah Sungai Kuning membudidayakan kedelai, teh, persik, dan ulat sutra.",
    commodities: ["padi", "kedelai", "teh", "sutra", "jeruk", "persik", "jawawut"]
  },
  {
    id: "indomalaya-wallacea",
    name: "Sundaland & Kepulauan Rempah Maluku (Nusantara)",
    period: "± 6.000 – 2.000 SM",
    coordinates: [-2.0, 120.0],
    radius: 900000,
    color: "#16a085",
    description: "Ibu kota rempah dunia purba. Cengkeh dan pala endemik murni hanya tumbuh di pulau-pulau vulkanik kecil di Maluku. Asia Tenggara maritim juga merupakan tanah asal tebu, pisang, dan kelapa.",
    commodities: ["cengkeh", "pala", "cendana", "pisang", "tebu", "kelapa", "jahe", "kunyit", "gaharu", "talas"]
  },
  {
    id: "indian-subcontinent",
    name: "Anak Benua India & Lembah Indus (Harappa)",
    period: "± 7.000 – 3.000 SM",
    coordinates: [22.0, 78.0],
    radius: 750000,
    color: "#d35400",
    description: "Peradaban Lembah Sungai Indus dan Ghats Barat India. Tanah asal 'Raja Rempah' (lada hitam), kapulaga, mangga liar, serat katun/kapas purba, dan domestikasi ayam serta sapi zebu.",
    commodities: ["lada-hitam", "kapulaga", "mangga", "kapas", "ayam", "kayu-manis", "sapi-zebu"]
  },
  {
    id: "ethiopian-sahel",
    name: "Dataran Tinggi Etiopia & Sahel Afrika",
    period: "± 5.000 – 2.000 SM",
    coordinates: [9.0, 39.0],
    radius: 750000,
    color: "#b7950b",
    description: "Tanah vulkanik subur pegunungan Kaffa di Etiopia yang melahirkan tanaman kopi arabika liar, serealia teff, sorgum tahan kekeringan, serta semangka purba dari padang pasir Afrika.",
    commodities: ["kopi", "sorgum", "teff", "semangka", "sawit", "okra"]
  },
  {
    id: "central-asia-steppes",
    name: "Asia Tengah & Stepa Eurasia (Tian Shan & Botai)",
    period: "± 4.000 – 2.000 SM",
    coordinates: [45.0, 75.0],
    radius: 800000,
    color: "#2980b9",
    description: "Hutan pohon buah liar Tian Shan (asal-usul seluruh apel modern di dunia) dan padang rumput tanpa batas tempat manusia pertama kali menunggangi dan mendomestikasi kuda di situs Botai.",
    commodities: ["apel", "wortel", "kuda", "bawang-putih", "kenari"]
  },
  {
    id: "mediterranean",
    name: "Cekungan Mediterania & Kaukasus",
    period: "± 6.000 – 3.000 SM",
    coordinates: [39.0, 22.0],
    radius: 700000,
    color: "#7f8c8d",
    description: "Pusat budaya zaitun, fermentasi anggur (wine) purba di lereng Pegunungan Kaukasus (Georgia/Armenia), serta aneka sayuran daun brassica (kubis liar) sebelum menyebar ke seluruh Eropa.",
    commodities: ["anggur", "kubis", "rye", "oat"]
  }
];

const COMMODITIES_DATA = [
  // --- NUSANTARA & ASIA TENGGARA ---
  {
    id: "cengkeh",
    name: "Cengkeh (Clove)",
    scientificName: "Syzygium aromaticum",
    category: "spice",
    categoryLabel: "Rempah-rempah",
    icon: "🌱",
    originRegion: "Kepulauan Maluku Utara (Ternate, Tidore, Moti, Makian, Bacan), Indonesia",
    vavilovCenter: "Sundaland & Kepulauan Rempah Maluku",
    coordinates: [0.7893, 127.3629],
    approxDate: "± 2000 SM (Bukti arkeologis di Terqa, Mesopotamia ~1721 SM)",
    domesticatingCivilization: "Masyarakat Adat Maluku Kuno (Ras Melanesia & Austronesia)",
    shortDescription: "Kuncup bunga kering beraroma tajam yang pernah menjadi komoditas paling berharga di muka bumi, memicu pelayaran keliling dunia bangsa Eropa.",
    historicalStory: `Selama ribuan tahun, pohon cengkeh HANYA tumbuh di lima pulau vulkanik kecil di lepas pantai barat Halmahera: Ternate, Tidore, Moti, Makian, dan Bacan. Tidak ada tempat lain di seluruh planet bumi yang menghasilkan pohon ini sebelum abad ke-18.\n\nPada tahun 1721 SM, sekeping toples di situs Terqa (Suriah kuno, Mesopotamia) ditemukan berisi cengkeh yang diawetkan—membuktikan telah ada jaringan perdagangan maritim estafet melintasi Samudra Hindia 3.700 tahun lalu.\n\nPada era Romawi dan Dinasti Han Tiongkok (di mana para menteri wajib mengulum cengkeh sebelum berbicara dengan kaisar agar nafasnya harum), cengkeh dihargai setara bobot emas murni karena misteri lokasi asalnya yang dijaga ketat para pelaut Nusantara.`,
    supermarketContrast: "Hari ini Anda bisa membeli sebungkus cengkeh di supermarket manapun dengan harga beberapa ribu rupiah. Di abad ke-16, satu kapal penuh cengkeh yang dibawa kembali oleh awak Magellan ke Spanyol sudah cukup untuk melunasi seluruh biaya ekspedisi 5 kapal armada kerajaan Spanyol dan menjamin kekayaan seumur hidup pemiliknya.",
    funFact: "Pohon cengkeh tertua yang masih hidup di dunia bernama 'Afo', tumbuh di lereng Gunung Gamalama Ternate, berumur lebih dari 400 tahun dan menjadi saksi bisu monopoli VOC.",
    ancientTradeRoutes: ["Jalur Rempah Maritim Purba", "Jalur Sutra Maritim"]
  },
  {
    id: "pala",
    name: "Pala & Fuli (Nutmeg & Mace)",
    scientificName: "Myristica fragrans",
    category: "spice",
    categoryLabel: "Rempah-rempah",
    icon: "🌰",
    originRegion: "Kepulauan Banda (Neira, Lonthoir, Ai, Run), Maluku Tengah, Indonesia",
    vavilovCenter: "Sundaland & Kepulauan Rempah Maluku",
    coordinates: [-4.5262, 129.9042],
    approxDate: "± 1500 SM (Artefak tembikar beraroma pala di Pulau Ai)",
    domesticatingCivilization: "Masyarakat Adat Banda Kuno (Orang Kaya Banda)",
    shortDescription: "Satu-satunya buah di dunia yang menghasilkan dua rempah berbeda sekaligus: biji pala dan selubung fuli merah menyala.",
    historicalStory: `Kepulauan Banda adalah kepulauan vulkanik terpencil di tengah Laut Banda yang luasnya tak lebih dari 180 km persegi. Di pulau-pulau inilah satu-satunya habitat pohon pala asli di planet bumi.\n\nDi Eropa abad pertengahan, dokter-dokter meyakini bahwa pala adalah satu-satunya obat penangkal Wabah Hitam (Black Death) yang memusnahkan sepertiga populasi benua itu. Akibatnya harga pala melonjak hingga 60.000% dari harga beli aslinya di Banda.\n\nObsesi ini begitu gila sampai-sampai pada Traktat Breda 1667, Kerajaan Inggris rela menukar Pulau Run di Banda yang dikuasai Belanda dengan sebuah pulau rawa milik Belanda di benua Amerika bernama New Amsterdam—yang kini menjadi Kota Manhattan, New York!`,
    supermarketContrast: "Di supermarket modern, pala hanya bumbu taburan kue pai apel atau sup iga. Di abad ke-17, perebutan monopoli pala menyebabkan Jan Pieterszoon Coen dan VOC membantai dan mengusir hampir seluruh penduduk asli Banda (1621) dalam salah satu tragedi kolonialisme paling kelam dalam sejarah.",
    funFact: "Manhattan (New York) ditukar oleh Inggris kepada Belanda demi mempertahankan monopoli atas satu pulau kecil penghasil pala di Banda bernama Pulau Run.",
    ancientTradeRoutes: ["Jalur Rempah Maritim", "Jalur Perdagangan Jawa-Maluku"]
  },
  {
    id: "tebu",
    name: "Tebu (Sugarcane)",
    scientificName: "Saccharum officinarum",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🎋",
    originRegion: "Pulau Papua / New Guinea & Melanesia",
    vavilovCenter: "Sundaland & Kepulauan Rempah Maluku",
    coordinates: [-4.2694, 140.0805],
    approxDate: "± 8.000 SM",
    domesticatingCivilization: "Petani Awal Lembah Pegunungan Papua (Kuk Early Agricultural Site)",
    shortDescription: "Batang rumput manis raksasa yang mengubah pola makan manusia dari pemburu rasa madu menjadi pecandu kristal sukrosa global.",
    historicalStory: `Sebelum gula tebu dikenal luas, rasa manis di dunia kuno Afro-Eurasia adalah barang sangat mewah yang hanya didapat dari madu lebah liar atau buah ara/kurma yang dikeringkan.\n\nMasyarakat adat Papua purba adalah orang pertama yang membudidayakan rumput tebu liar (Saccharum robustum) dan mengunyah batangnya untuk cairan manisnya sekitar 8000 SM. Pelaut Austronesia kemudian membawanya ke Asia Tenggara Maritim, lalu menyebar ke India sekitar 1000 SM tempat orang India pertama kali menemukan teknik mengkristalkan air tebu menjadi butiran pasir ('khanda', asal kata 'candy').`,
    supermarketContrast: "Di supermarket saat ini, hampir 80% produk olahan mengandung gula tebu rafinasi. Di Eropa abad pertengahan, gula disebut 'emas putih' dan hanya apoteker raja yang boleh menyimpannya di peti terkunci sebagai ramuan obat.",
    funFact: "Teknologi membuat gula pasir kristal pertama kali disempurnakan di India pada era Dinasti Gupta sekitar 350 Masehi, lalu dipelajari oleh kaisar Tiongkok Tang Taizong yang mengirim utusan ke India.",
    ancientTradeRoutes: ["Migrasi Pelaut Austronesia", "Jalur Sutra Maritim", "Perdagangan Segitiga Atlantik"]
  },
  {
    id: "pisang",
    name: "Pisang Liar ke Pisang Budidaya",
    scientificName: "Musa acuminata / Musa balbisiana",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🍌",
    originRegion: "Asia Tenggara Daratan & Kepulauan Sundaland / New Guinea",
    vavilovCenter: "Sundaland & Kepulauan Rempah Maluku",
    coordinates: [-2.5, 115.0],
    approxDate: "± 7.000 – 5.000 SM",
    domesticatingCivilization: "Komunitas Pemburu-Peramu & Petani Awal Wallacea & New Guinea",
    shortDescription: "Buah yang aslinya dipenuhi biji keras seperti kerikil sebelum diseleksi oleh nenek moyang Austronesia menjadi buah manis tanpa biji.",
    historicalStory: `Pisang liar aslinya hampir tidak bisa dimakan manusia: daging buahnya sangat sedikit dan dipenuhi ratusan biji keras mirip butiran gotri senapan angin.\n\nMelalui domestikasi panjang di Asia Tenggara Maritim dan Papua (situs Rawa Kuk), manusia berhasil menyilangkan Musa acuminata dan Musa balbisiana hingga menghasilkan buah partenokarpi (berbuah tanpa pembuahan biji). Para pelaut Austronesia kemudian membawa pisang dalam perahu cadik mereka melintasi Samudra Hindia hingga tiba di Madagaskar dan Afrika sekitar 500 Masehi.`,
    supermarketContrast: "Di supermarket modern, 99% pisang yang Anda lihat adalah satu varietas klon identik: Cavendish. Di hutan asalnya di Nusantara, terdapat ratusan jenis pisang: pisang raja, ambon, kepok, mas, tongkat langit, dengan warna dari kuning, merah, hingga hijau.",
    funFact: "Nama 'pisang' dalam bahasa ilmiah Musa berasal dari kata Arab 'mouz', sedangkan kata 'banana' berasal dari bahasa Wolof di Afrika Barat.",
    ancientTradeRoutes: ["Jalur Migrasi Austronesia Samudra Hindia", "Jalur Madagaskar-Afrika"]
  },
  {
    id: "cendana",
    name: "Kayu Cendana (Sandalwood)",
    scientificName: "Santalum album",
    category: "material",
    categoryLabel: "Kayu, Serat & Material",
    icon: "🪵",
    originRegion: "Kepulauan Nusa Tenggara Timur (Pulau Timor & Sumba), Indonesia",
    vavilovCenter: "Sundaland & Kepulauan Rempah Maluku",
    coordinates: [-9.5, 124.5],
    approxDate: "± 1000 SM",
    domesticatingCivilization: "Masyarakat Adat Timor & Sumba Kuno",
    shortDescription: "Kayu aromatik hemiparasit beraroma suci yang menjadi incaran kuil-kuil Buddha dan dupa pemujaan kaisar Dinasti Tiongkok serta raja-raja India.",
    historicalStory: `Pulau Timor pada masa kuno dikenal oleh pedagang Tiongkok dan Arab sebagai 'Pulau Cendana'. Kayu teras pohon ini mengandung minyak atsiri santalol dengan keharuman yang bertahan puluhan tahun bahkan setelah ditebang.\n\nKitab-kitab kuno India (Veda) dan prasasti Tiongkok mencatat armada kapal niaga yang berlayar ribuan mil ke perairan selatan Nusantara demi membeli kayu cendana putih terbaik dunia yang hanya tumbuh di sabana kering Timor dan Sumba.`,
    supermarketContrast: "Kini wewangian cendana di sabun supermarket sebagian besar adalah aroma sintetis kimia (seperti javanol). Cendana asli Timor kini menjadi salah satu kayu paling langka dan dilindungi ketat di dunia.",
    funFact: "Cendana adalah pohon semi-parasit; akarnya harus menumpang mengisap nutrisi dari akar pohon inang lain untuk dapat bertahan hidup dan tumbuh dewasa.",
    ancientTradeRoutes: ["Jalur Dagang Kayu Cendana Tiongkok-Timor", "Jalur Sutra Maritim"]
  },
  {
    id: "kelapa",
    name: "Kelapa (Coconut)",
    scientificName: "Cocos nucifera",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🥥",
    originRegion: "Pesisir Asia Tenggara Maritim & Samudra Hindia Tropis",
    vavilovCenter: "Sundaland & Kepulauan Rempah Maluku",
    coordinates: [-6.0, 106.8],
    approxDate: "± 3.000 SM",
    domesticatingCivilization: "Bangsa Pelaut Austronesia",
    shortDescription: "'Pohon Kehidupan' penjelajah samudra purba yang menyediakan air tawar segar, minyak, tali sabut, dan kayu perahu.",
    historicalStory: `Penelitian genetika membuktikan kelapa dibudidayakan di dua lokasi terpisah: Samudra Hindia (Asia Tenggara maritim) dan Samudra Pasifik. Tanpa buah kelapa, bangsa Austronesia mustahil dapat melakukan migrasi maritim terjauh dalam sejarah prasejarah manusia.\n\nKelapa yang dapat mengapung di air laut selama berbulan-bulan dan retains air tawar steril di dalamnya bertindak sebagai kantong air minum darurat bagi para navigator bintang yang mengarungi Samudra Pasifik menuju Polinesia dan Hawaii.`,
    supermarketContrast: "Di supermarket Anda membeli santan instan kotak atau air kelapa kemasan tetra pak. Bagi nenek moyang kita, kelapa adalah penyelamat nyawa dari kematian akibat dehidrasi di tengah lautan lepas.",
    funFact: "Sabut kelapa (coir) adalah bahan baku pembuatan tali kapal purba yang elastis dan tahan terhadap korosi air garam, teknologi kunci perahu cadik Nusantara.",
    ancientTradeRoutes: ["Jalur Migrasi Maritim Pasifik", "Jalur Rempah Nusantara"]
  },

  // --- MESOAMERIKA (DUNIA BARU UTARA) ---
  {
    id: "jagung",
    name: "Jagung (Maize)",
    scientificName: "Zea mays",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🌽",
    originRegion: "Lembah Sungai Balsas, Oaxaca & Meksiko Tengah",
    vavilovCenter: "Mesoamerika",
    coordinates: [17.9, -99.8],
    approxDate: "± 7.000 SM (Hasil seleksi rumput liar Teosinte)",
    domesticatingCivilization: "Peradaban Proto-Maya & Petani Lembah Tehuacan",
    shortDescription: "Keajaiban rekayasa genetika prasejarah: mengubah rumput liar keras 'teosinte' menjadi bulir makanan pokok paling produktif di muka bumi.",
    historicalStory: `Jagung adalah bukti kecerdasan agrikultur tertinggi peradaban Mesoamerika kuno. Tanaman liar aslinya, 'teosinte', hanya memiliki tongkol seukuran kelingking dengan 5-12 biji yang terbungkus cangkang sekeras batu.\n\nSelama ribuan tahun seleksi cermat oleh nenek moyang suku Maya dan Aztek, mereka melipatgandakan ukuran tongkol hingga ratusan kali lipat. Bagi bangsa Maya, jagung adalah zat suci: dalam kitab mitologi Popol Vuh, manusia pertama tidak diciptakan dari tanah liat, melainkan dari adonan tepung jagung putih dan kuning!`,
    supermarketContrast: "Di supermarket hari ini, lebih dari 25% produk—mulai dari sirup fruktosa (HFCS), tepung maizena, pakan ayam, hingga plastik biopolimer—berasal dari jagung. Sebelum 1492, tidak ada satu pun manusia di Eropa, Asia, atau Afrika yang pernah melihat sebutir jagung!",
    funFact: "Orang Mesoamerika menemukan teknik 'Nixtamalization' (merendam jagung dalam air kapur sirih) yang melepaskan vitamin B3 (niasin). Ketika orang Eropa membawa jagung tanpa teknik ini, mereka terserang wabah penyakit kulit mematikan bernama pellagra.",
    ancientTradeRoutes: ["Rute Dagang Mesoamerika", "Pertukaran Columbus 1492"]
  },
  {
    id: "kakao",
    name: "Kakao / Cokelat (Cacao)",
    scientificName: "Theobroma cacao",
    category: "stimulant",
    categoryLabel: "Minuman & Stimulan",
    icon: "🍫",
    originRegion: "Cekungan Amazon Hulu & Mesoamerika (Situs Mayo-Chinchipe & Olmek)",
    vavilovCenter: "Mesoamerika",
    coordinates: [18.0, -93.0],
    approxDate: "± 3.300 SM (Situs Mayo-Chinchipe, Ekuador) & 1900 SM (Olmek)",
    domesticatingCivilization: "Peradaban Olmek, Maya, dan Aztek",
    shortDescription: "'Makanan Para Dewa' (Theobroma) yang aslinya diminum pahit, berbusa tebal, dan dicampur cabai pedas serta bunga liar.",
    historicalStory: `Bagi bangsa Maya dan Aztek, biji kakao adalah mata uang resmi sekaligus minuman ritual suci bangsawan. 1 butir kakao bisa membeli 1 buah tomat, 3 butir membeli 1 buah alpukat, dan 100 butir membeli seorang budak atau jubah katun berhias bulu quetzal.\n\nCokelat purba ('xocolatl' = air pahit) sama sekali tidak manis dan tidak memakai susu. Biji kakao disangrai, digiling di batu metate, dicampur air dingin, bubuk cabai merah, dan vanila, lalu dikocok dari ketinggian hingga berbusa tebal. Kaisar Aztek Moctezuma II dilaporkan meminum 50 cawan emas xocolatl setiap hari sebelum mengunjungi haremnya.`,
    supermarketContrast: "Jika Anda membayangkan cokelat batangan manis susu buatan Swiss atau Belgia di rak supermarket, nenek moyang suku Maya akan memuntahkannya karena menganggapnya permen rusak! Cokelat padat manis dengan susu baru diciptakan pada tahun 1875 oleh Henri Nestlé dan Daniel Peter.",
    funFact: "Kata 'cokelat' berasal dari bahasa Nahuatl (Aztek) 'xocolatl', sedangkan nama ilmiah Theobroma diberikan oleh bapak taksonomi Carl Linnaeus yang berarti 'Makanan Para Dewa' dalam bahasa Yunani.",
    ancientTradeRoutes: ["Jalur Barter Kekaisaran Aztek", "Pertukaran Columbus 1492"]
  },
  {
    id: "cabai",
    name: "Cabai (Chili Pepper)",
    scientificName: "Capsicum annuum / Capsicum frutescens",
    category: "spice",
    categoryLabel: "Rempah-rempah",
    icon: "🌶️",
    originRegion: "Meksiko Tengah-Timur & Lembah Tehuacan",
    vavilovCenter: "Mesoamerika",
    coordinates: [18.4, -97.4],
    approxDate: "± 6.000 SM",
    domesticatingCivilization: "Masyarakat Adat Mesoamerika Kuno",
    shortDescription: "Bumbu pedas kapsaisin yang merevolusi seluruh kuliner dunia dari Sambal Indonesia, Kari India, Kimchi Korea, hingga Tom Yum Thailand.",
    historicalStory: `Ini adalah salah satu fakta sejarah paling mengejutkan: SEBELUM TAHUN 1492, TIDAK ADA CABAI DI SELURUH ASIA ATAU EROPA!\n\nMasakan Padang, masakan Manado, kari India, sup tom yum Thailand, szechuan pepper Tiongkok, dan kimchi merah Korea sama sekali tidak menggunakan cabai merah sebelum abad ke-16. Rasa pedas di Asia kuno hanya berasal dari lada hitam (Piper nigrum), jahe, dan cabai jawa (Piper retrofractum).\n\nKetika Christopher Columbus tiba di Karibia tahun 1492 dan merasakan pedasnya buah ini, ia salah mengira telah menemukan lada hitam India yang dicari-carinya, lalu menamakannya 'pepper' (pimiento). Pelaut Portugis dan Spanyol kemudian membawanya ke Goa (India), Malaka, dan Maluku pada awal tahun 1500-an.`,
    supermarketContrast: "Di supermarket Anda menganggap cabai adalah bumbu lokal khas Indonesia. Faktanya, cabai baru tiba di Nusantara sekitar 500 tahun yang lalu dibawa oleh kapal dagang Portugis!",
    funFact: "Burung tidak memiliki reseptor rasa sakit TRPV1 terhadap zat kapsaisin, sehingga burung bisa memakan cabai terpedas di dunia tanpa merasakan pedas sama sekali dan menyebarkan bijinya lewat kotoran.",
    ancientTradeRoutes: ["Pertukaran Columbus 1492", "Rute Armada Portugis Lisbon-Goa-Malaka"]
  },
  {
    id: "tomat",
    name: "Tomat (Tomato)",
    scientificName: "Solanum lycopersicum",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🍅",
    originRegion: "Kawasan Andes (spesies liar) & Domestikasi di Mesoamerika (Meksiko)",
    vavilovCenter: "Mesoamerika",
    coordinates: [19.2, -98.9],
    approxDate: "± 500 SM (Domestikasi buah besar oleh bangsa Aztek)",
    domesticatingCivilization: "Peradaban Aztek (Bahasa Nahuatl: 'tomatl')",
    shortDescription: "Buah merah berair yang pernah ditakuti bangsa Eropa selama 200 tahun sebagai 'Apel Beracun' pembawa maut.",
    historicalStory: `Spesies liar tomat aslinya adalah buah kecil seukuran kelereng berwarna hijau kekuningan yang tumbuh di semak-semak lereng Andes. Bangsa Aztek di Meksiko lah yang pertama kali mendomestikasikannya menjadi buah besar berair dan memberinya nama 'xitomatl'.\n\nKetika dibawa ke Eropa pada abad ke-16, orang Eropa menolak memakannya selama lebih dari dua abad! Mengapa? Karena tomat termasuk dalam keluarga tanaman beracun Solanaceae (nightshade). Selain itu, kaum bangsawan Eropa makan menggunakan piring timah (pewter) berkadar timbal tinggi: asam pada tomat melarutkan timbal piring sehingga mereka keracunan timbal dan menyalahkan tomat sebagai pembunuh berdarah dingin!`,
    supermarketContrast: "Pizza Italia dan saus pasta bolognese tomat yang Anda beli di supermarket hari ini mustahil ada sebelum tahun 1500-an. Saus tomat pertama baru dicatat dalam buku resep di Napoli pada akhir abad ke-17!",
    funFact: "Hingga tahun 1820 di Amerika Serikat, tomat masih dianggap beracun sampai seorang pria bernama Robert Gibbon Johnson sengaja memakan sekeranjang tomat di depan tangga pengadilan New Jersey untuk membuktikan ia tidak mati.",
    ancientTradeRoutes: ["Pertukaran Columbus 1492", "Rute Spanyol Baru (Viceroyalty of New Spain)"]
  },
  {
    id: "vanila",
    name: "Vanila (Vanilla)",
    scientificName: "Vanilla planifolia",
    category: "spice",
    categoryLabel: "Rempah-rempah",
    icon: "🌼",
    originRegion: "Hutan Tropis Pesisir Teluk Meksiko (Veracruz & Papantla)",
    vavilovCenter: "Mesoamerika",
    coordinates: [20.4, -97.3],
    approxDate: "± 1000 M (Suku Totonac)",
    domesticatingCivilization: "Suku Totonac & Kekaisaran Aztek",
    shortDescription: "Satu-satunya anggrek di dunia yang menghasilkan rempah pangan, membutuhkan penyerbukan tangan manual super rumit.",
    historicalStory: `Menurut mitologi suku Totonac di pesisir Teluk Meksiko, anggrek vanila lahir dari tetesan darah seorang putri dewa yang dibunuh ayahnya karena kawin lari dengan pemuda fana. Suku Totonac menyebutnya 'tlilxochitl' (bunga hitam).\n\nSelama ratusan tahun setelah bangsa Spanyol membawanya ke Eropa, pohon anggrek vanila yang ditanam di kebun raya Paris dan London selalu berbunga mekar tetapi TIDAK PERNAH menghasilkan polong vanila sama sekali! Misteri ini terjadi karena di alam liar, bunga vanila hanya bisa diserbuki oleh satu jenis lebah kecil endemik Meksiko tanpa sengat bernama Lebah Melipona.`,
    supermarketContrast: "Di supermarket, 99% perisa vanila pada es krim dan biskuit adalah 'vanilin sintetik' yang disintesis dari limbah bubur kayu kertas atau minyak bumi. Polong vanila asli adalah rempah termahal kedua di dunia setelah kuma-kuma (saffron).",
    funFact: "Teka-teki budidaya vanila di luar Meksiko baru terpecahkan pada tahun 1841 oleh seorang bocah budak berusia 12 tahun bernama Edmond Albius di Pulau Réunion, yang menemukan teknik penyerbukan bunga vanila menggunakan tusuk bambu kecil.",
    ancientTradeRoutes: ["Pertukaran Columbus 1492", "Perdagangan Kerajaan Spanyol"]
  },
  {
    id: "alpukat",
    name: "Alpukat (Avocado)",
    scientificName: "Persea americana",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🥑",
    originRegion: "Lembah Tehuacan, Puebla, Meksiko Selatan",
    vavilovCenter: "Mesoamerika",
    coordinates: [18.4, -97.3],
    approxDate: "± 8.000 – 5.000 SM",
    domesticatingCivilization: "Suku Pribumi Mesoamerika Kuno (Bahasa Nahuatl: 'ahuacatl')",
    shortDescription: "Buah berlemak nabati gurih peninggalan zaman es yang aslinya dimakan oleh hewan raksasa Megafauna (Kungkang Raksasa Purba).",
    historicalStory: `Secara evolusi biologi, pohon alpukat sebenarnya 'anachronism' (tertambat di masa lalu). Biji alpukat yang sangat besar dirancang oleh alam untuk ditelan bulat-bulat dan disebarkan oleh Megafauna Zaman Es seperti Gomphothere (gajah purba) dan Megatherium (kungkang darat raksasa seukuran gajah).\n\nKetika hewan-hewan raksasa ini punah sekitar 12.000 tahun lalu, pohon alpukat berada di ambang kepunahan total—sampai manusia purba Mesoamerika menyukai daging buahnya yang kaya lemak dan mulai menanamnya di pekarangan desa mereka.`,
    supermarketContrast: "Kini alpukat menjadi tren gaya hidup sarapan 'avocado toast' di kafe-kafe modern seluruh dunia. Kata 'alpukat' sendiri berasal dari kata Nahuatl 'āhuacatl' yang juga memiliki arti anatomi 'buah zakar' karena bentuk buahnya yang menggantung berpasangan di dahan.",
    funFact: "Karena daun dan kulitnya beracun bagi banyak mamalia kecil dan burung, hanya manusia dan megafauna purba yang bisa mengonsumsinya dengan aman.",
    ancientTradeRoutes: ["Jalur Pertukaran Mesoamerika", "Pertukaran Columbus 1492"]
  },

  // --- ANDES & AMERIKA SELATAN ---
  {
    id: "kentang",
    name: "Kentang (Potato)",
    scientificName: "Solanum tuberosum",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🥔",
    originRegion: "Cekungan Danau Titicaca, Dataran Tinggi Andes (Peru & Bolivia)",
    vavilovCenter: "Dataran Tinggi Andes & Amazon Hulu",
    coordinates: [-15.8, -69.4],
    approxDate: "± 8.000 – 5.000 SM",
    domesticatingCivilization: "Peradaban Tiwanaku, Aymara, & Inka",
    shortDescription: "Umbi penyelamat kelaparan Eropa yang tumbuh di ketinggian 4.000 meter di atas permukaan laut di pegunungan es Andes.",
    historicalStory: `Di dataran tinggi Andes yang membeku (Puna), gandum atau jagung tidak mampu bertahan hidup. Petani Aymara dan Inka purba menjinakkan tanaman umbi liar yang beracun (mengandung solanin glikoalkaloid tinggi) dengan menciptakan teknik pengawetan beku-kering pertama di dunia bernama 'chuño'.\n\nMereka menginjak-injak kentang di malam hari saat suhu di bawah nol derajat untuk memeras airnya, lalu menjemurnya di terik matahari siang berulang kali hingga menjadi umbi kering yang tahan simpan hingga 10 tahun di lumbung batu kekaisaran Inka.\n\nKetika dibawa ke Eropa oleh penakluk Spanyol pada tahun 1570, kentang melipatgandakan pasokan kalori benua Eropa, mengakhiri siklus kelaparan massal berkala, dan memicu ledakan populasi yang memungkinkan terjadinya Revolusi Industri.`,
    supermarketContrast: "Di supermarket Anda hanya mengenal kentang kuning atau kentang merah biasa. Di pasar tradisional Andes Peru saat ini, petani lokal masih menanam lebih dari 4.000 kultivar kentang unik: mulai dari ungu pekat, merah darah, bertotol hitam, hingga bentuk spiral melingkar.",
    funFact: "Ketergantungan ekstrem bangsa Irlandia pada satu jenis varietas kentang impor (Lumper) menyebabkan Tragedi Kelaparan Besar Irlandia (Great Famine 1845-1852) ketika jamur Phytophthora infestans memusnahkan seluruh panen kentang, menewaskan 1 juta jiwa.",
    ancientTradeRoutes: ["Sistem Lumbung Qullqa Kekaisaran Inka", "Pertukaran Columbus 1492"]
  },
  {
    id: "singkong",
    name: "Singkong / Ubi Kayu (Cassava / Yuca)",
    scientificName: "Manihot esculenta",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🍠",
    originRegion: "Tepi Selatan Cekungan Amazon (Rondônia & Mato Grosso, Brasil)",
    vavilovCenter: "Dataran Tinggi Andes & Amazon Hulu",
    coordinates: [-11.0, -60.0],
    approxDate: "± 8.000 – 6.000 SM",
    domesticatingCivilization: "Suku Pribumi Amazon Kuno (Tupi-Guarani)",
    shortDescription: "Penyelamat pangan tanah tandus yang aslinya mengandung racun sianida mematikan sebelum diperas oleh saringan anyaman rotan suku Amazon.",
    historicalStory: `Singkong liar dan singkong pahit alami mengandung senyawa glikosida sianogenik yang melepaskan gas hidrogen sianida (HCN) mematikan saat dikunyah untuk melindungi diri dari hama serangga dan hewan pengerat.\n\nSuku-suku Amazon purba menemukan teknologi pengolahan biokimia canggih: mereka memarut umbi singkong lalu memasukkannya ke dalam pipa anyaman serat elastis bernama 'tipiti'. Saat ditarik meregang, tipiti memeras habis getah beracun sianida tersebut hingga ampasnya aman dipanggang menjadi tepung tapioka ('farinha').\n\nPelaut Portugis membawa singkong ke Afrika pada abad ke-16, di mana tanaman ini menjadi makanan pokok utama lebih dari 500 juta orang di benua tersebut hari ini. Di Indonesia, singkong baru ditanam massal pada abad ke-19 era kolonial Belanda untuk mengatasi paceklik beras.`,
    supermarketContrast: "Kripik singkong, tepung tapioka boba, dan singkong keju yang melimpah ruah di supermarket modern adalah komoditas impor benua Amerika yang baru dikenal masyarakat Nusantara kurang dari 200 tahun lalu!",
    funFact: "Boba kenyal pada minuman 'boba milk tea' Taiwan yang populer di seluruh dunia 100% terbuat dari tepung tapioka hasil olahan pati akar singkong asal Amazon.",
    ancientTradeRoutes: ["Pertukaran Columbus 1492", "Perdagangan Budak Trans-Atlantik Portugis"]
  },
  {
    id: "quinoa",
    name: "Quinoa (Biji Kuno Andes)",
    scientificName: "Chenopodium quinoa",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🌾",
    originRegion: "Dataran Tinggi Altiplano Andes (Danau Titicaca, Bolivia/Peru)",
    vavilovCenter: "Dataran Tinggi Andes & Amazon Hulu",
    coordinates: [-16.0, -68.5],
    approxDate: "± 5.000 – 3.000 SM",
    domesticatingCivilization: "Peradaban Tiwanaku & Inka",
    shortDescription: "'Ibu Segala Biji' (Chisaya Mama) peradaban Inka yang kaya asam amino esensial lengkap dan sanggup tumbuh di tanah beku bersalinitas tinggi.",
    historicalStory: `Bagi kaisar Inka (Sapa Inka), menanam benih quinoa pertama setiap musim semi dengan sekop emas adalah upacara kenegaraan paling sakral. Quinoa bukanlah serealia rumput sejati, melainkan biji dari keluarga bayam-bayaman (Amaranthaceae).\n\nKetika bangsa penjajah Spanyol menaklukkan Inka, mereka melarang budidaya quinoa karena dianggap tanaman pagan pemujaan dewa matahari, dan memaksa petani menanam gandum Eropa. Akibatnya quinoa hampir punah dan hanya bertahan di desa-desa terpencil di pucuk gunung Andes yang tak terjangkau pasukan berkuda Spanyol.`,
    supermarketContrast: "Di supermarket perkotaan modern, quinoa dijual dengan harga mahal sebagai 'superfood' makanan diet premium kaum elit. Bagi tentara Inka kuno, bola-bola quinoa campur lemak llama adalah ransum perang standar yang membuat mereka mampu berbaris mendaki tebing Andes sejauh puluhan kilometer sehari.",
    funFact: "Badan Antariksa NASA memilih quinoa sebagai tanaman ideal untuk misi luar angkasa jangka panjang karena komposisi nutrisinya yang hampir sempurna mendekati standar gizi manusia.",
    ancientTradeRoutes: ["Jalur Qhapaq Ñan (Jalan Raya Inka)"]
  },
  {
    id: "karet",
    name: "Karet Alami (Natural Rubber)",
    scientificName: "Hevea brasiliensis",
    category: "material",
    categoryLabel: "Kayu, Serat & Material",
    icon: "🌳",
    originRegion: "Hutan Hujan Tropis Cekungan Sungai Amazon (Brasil, Peru, Bolivia)",
    vavilovCenter: "Dataran Tinggi Andes & Amazon Hulu",
    coordinates: [-3.1, -60.0],
    approxDate: "± 1600 SM (Bukti bola karet suku Olmek)",
    domesticatingCivilization: "Peradaban Olmek ('Bangsa Karet') & Penduduk Asli Amazon",
    shortDescription: "Getah putih susu pohon yang melompat memantul, bahan dasar ban kendaraan yang menggerakkan seluruh transportasi dunia modern.",
    historicalStory: `Kata 'Olmek' dalam bahasa Aztek secara harfiah berarti 'Orang-orang dari Negeri Karet' (Olmecatl). Sejak 1600 SM di Mesoamerika, getah lateks pohon dicampur dengan sari tanaman merambat Ipomoea alba untuk divulkanisasi secara alami menjadi bola karet padat untuk pertandingan permainan bola sakral (ōllamaliztli).\n\nHingga akhir abad ke-19, Brasil memegang monopoli mutlak karet dunia dan melarang keras ekspor biji pohon karet hidup dengan ancaman hukuman mati. Namun pada tahun 1876, penjelajah Inggris Henry Wickham berhasil menyelundupkan 70.000 biji karet keluar dari hutan Amazon ke Kebun Raya Kew di London. Biji-biji tersebut kemudian disemai dan dikirim ke Malaysia dan Hindia Belanda (Indonesia), yang seketika menghancurkan ekonomi karet Brasil!`,
    supermarketContrast: "Karet gelang murah, sol sepatu sneaker, dan sarung tangan medis yang kita gunakan setiap hari lahir dari getah pohon liar di jantung hutan Amazon yang pernah diselundupkan dalam operasi biopiraterie terbesar abad ke-19.",
    funFact: "Bola karet suku Olmek berbobot hingga 4 kg dan begitu keras serta elastis sehingga para pemain bola Mesoamerika kuno harus mengenakan pelindung pinggang kayu tebal agar tulang rusuk mereka tidak patah terkena hantaman bola.",
    ancientTradeRoutes: ["Jalur Olmek & Maya", "Penyelundupan Henry Wickham 1876"]
  },
  {
    id: "llama",
    name: "Llama & Alpaca (Domestikasi Fauna Andes)",
    scientificName: "Lama glama / Vicugna pacos",
    category: "fauna",
    categoryLabel: "Hewan Ternak & Domestikasi",
    icon: "🦙",
    originRegion: "Dataran Tinggi Puna Andes (Peru, Bolivia, Cile)",
    vavilovCenter: "Dataran Tinggi Andes & Amazon Hulu",
    coordinates: [-14.0, -71.5],
    approxDate: "± 4.500 SM (Dari Guanaco dan Vicuña liar)",
    domesticatingCivilization: "Masyarakat Penggembala Kuno Andes",
    shortDescription: "Satu-satunya hewan beban berkuku belah yang didomestikasi di seluruh benua Amerika sebelum kedatangan bangsa Eropa.",
    historicalStory: `Sebelum tahun 1492, benua Amerika sama sekali tidak memiliki kuda, sapi, kerbau, keledai, domba, atau kambing. Llama adalah satu-satunya hewan pekerja yang dimiliki oleh peradaban pra-Kolombia di Amerika Selatan.\n\nKarena llama hanya mampu membawa beban maksimal sekitar 30-40 kg dan tidak dapat ditunggangi manusia, peradaban Inka tidak pernah mengembangkan roda untuk transportasi gerobak—mereka mengandalkan ribuan llama pengangkut barang yang berbaris rapi melintasi jembatan tali gantung di atas jurang-jurang ngarai pegunungan Andes.`,
    supermarketContrast: "Saat ini wol alpaca dijual sebagai sweater rajut ultra-mewah di butik mode Paris dan Milan. Bagi bangsa Inka, kain wol vicuña dan alpaca ('qompi') bernilai lebih tinggi dari perhiasan emas.",
    funFact: "Jika seekor llama merasa beban di punggungnya terlalu berat atau diperlakukan kasar oleh tuannya, ia akan berbaring mogok, menolak berdiri, mendesis, dan meludahkan isi lambungnya yang berbau busuk ke wajah orang tersebut.",
    ancientTradeRoutes: ["Jaringan Jalan Raya Inka Qhapaq Ñan"]
  },

  // --- HILAL SUBUR (FERTILE CRESCENT / TIMUR TENGAH) ---
  {
    id: "gandum",
    name: "Gandum Kuno (Emmer & Einkorn Wheat)",
    scientificName: "Triticum dicoccum / Triticum monococcum",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🌾",
    originRegion: "Lereng Pegunungan Karacadag, Anatolia Tenggara (Turki Modern) & Levant",
    vavilovCenter: "Hilal Subur (Fertile Crescent)",
    coordinates: [37.7, 39.8],
    approxDate: "± 9.600 – 8.500 SM (Situs Göbekli Tepe & Nevalı Çori)",
    domesticatingCivilization: "Kebudayaan Natufia & Pembangun Kuil Göbekli Tepe",
    shortDescription: "Ibu dari seluruh peradaban Barat dan Timur Dekat: tanaman yang mengakhiri era berburu-meramu manusia dan menciptakan kota-kota pertama di bumi.",
    historicalStory: `Analisis DNA tanaman modern membuktikan bahwa varietas nenek moyang seluruh gandum di bumi berasal dari satu titik lereng bukit vulkanik Karacadag di tenggara Turki—hanya beberapa puluh kilometer dari kuil batu tertua di dunia, Göbekli Tepe.\n\nDi alam liar, bulir gandum yang matang akan pecah berhamburan ke tanah agar tertiup angin (rachis rapuh). Manusia purba Natufia menemukan mutasi genetik langka di mana bulirnya tetap menempel pada tangkai (rachis kokoh), memungkinkan manusia memanennya dalam jumlah berlimpah. Dari butiran gandum inilah lahir roti pertama, bir pertama, undang-undang tertulis pertama (Hammurabi), dan tulisan paku pertama bangsa Sumeria untuk mencatat hasil panen!`,
    supermarketContrast: "Roti tawar, mie instan, pasta, biskuit, dan pizza di rak supermarket modern semuanya berbahan dasar terigu gandum. 12.000 tahun lalu, penemuan budidaya sebutir gandum ini memaksa manusia berhenti mengembara dan membangun permukiman permanen pertama dalam sejarah.",
    funFact: "Banyak arkeolog percaya bahwa motivasi awal manusia purba membudidayakan gandum bukanlah untuk membuat roti padat, melainkan untuk membuat bir beralkohol demi pesta ritual keagamaan di kuil Göbekli Tepe!",
    ancientTradeRoutes: ["Jalur Perdagangan Mesopotamia Purba", "Penyebaran Neolitikum ke Eropa"]
  },
  {
    id: "zaitun",
    name: "Zaitun & Minyak Zaitun (Olive)",
    scientificName: "Olea europaea",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🫒",
    originRegion: "Pesisir Levant (Palestina, Yordania, Lebanon, Suriah) & Anatolia",
    vavilovCenter: "Hilal Subur (Fertile Crescent)",
    coordinates: [32.5, 35.5],
    approxDate: "± 6.000 – 4.500 SM",
    domesticatingCivilization: "Masyarakat Kanaan & Bangsa Fenisia",
    shortDescription: "Cairan emas cair peradaban Mediterania yang menyinari lentera kuil, melumasi atlet Olimpiade Yunani, dan mengawetkan makanan para kaisar.",
    historicalStory: `Bagi bangsa Yunani Kuno, pohon zaitun adalah hadiah paling berharga dari Dewi Athena dalam sayembara melawan Dewa Poseidon memperebutkan kota Athena. Bangsa Fenisia, para pelaut ulung dari Lebanon kuno, membawa bibit pohon zaitun di kapal-kapal dagang mereka ke sekeliling Mediterania: ke Yunani, Sisilia, Kartago (Tunisia), hingga Spanyol.\n\nPohon zaitun adalah simbol keabadian karena kemampuannya hidup ratusan bahkan ribuan tahun di tanah berbatu cadas kering tanpa air berlebih. Minyak zaitun tidak hanya untuk makanan, tetapi bahan bakar utama lampu penerangan malam hari, kosmetik, sabun, dan ritual minyak urapan para raja Israel kuno.`,
    supermarketContrast: "Di supermarket Anda membeli minyak 'Extra Virgin Olive Oil' botolan. Di Roma Kuno, ribuan ton minyak zaitun dikirim setiap bulan dalam bejana tanah liat keramik bernama 'amfora'. Gunung Monte Testaccio di Roma adalah bukit buatan manusia setinggi 35 meter yang seluruhnya terbuat dari pecahan 53 juta amfora minyak zaitun kuno!",
    funFact: "Ada pohon zaitun di Al-Walaja (dekat Betlehem) dan di Kreta (Olive Tree of Vouves) yang masih berbuah hingga hari ini diperkirakan berusia lebih dari 3.000 sampai 4.000 tahun—hidup sejak zaman Perang Troya!",
    ancientTradeRoutes: ["Jalur Dagang Maritim Fenisia", "Rute Perdagangan Kekaisaran Romawi"]
  },
  {
    id: "kurma",
    name: "Kurma (Date Palm)",
    scientificName: "Phoenix dactylifera",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🌴",
    originRegion: "Cekungan Teluk Persia & Lembah Mesopotamia Bawah (Irak Modern)",
    vavilovCenter: "Hilal Subur (Fertile Crescent)",
    coordinates: [30.5, 47.8],
    approxDate: "± 6.000 – 4.000 SM",
    domesticatingCivilization: "Peradaban Ubaid & Sumeria Purba",
    shortDescription: "'Pohon Kehidupan' oase padang pasir yang buahnya berkadar gula 70%, menjadi bahan bakar karavan penjelajah gurun tandus.",
    historicalStory: `Pepatah kuno bangsa Arab mengatakan bahwa pohon kurma 'harus merendam kakinya di air yang mengalir, dan menaruh kepalanya di api terik matahari'. Di tengah gurun yang membakar di mana tanaman lain layu terpanggang, pohon kurma menyediakan oase keteduhan di bawah daunnya untuk tanaman sayuran dan buah delima tumbuh.\n\nDalam epos tertua manusia, Gilgamesh dari Sumeria kuno, kurma disebutkan sebagai makanan para raja dan pahlawan. Buah kurma yang dikeringkan dapat disimpan selama bertahun-tahun tanpa membusuk, menjadi ransum wajib bagi kafilah pedagang unta yang melintasi Gurun Arab dan Sahara.`,
    supermarketContrast: "Kini kurma identik dengan bulan Ramadan di seluruh dunia. Tanpa pohon kurma liar yang dijinakkan ribuan tahun lalu oleh bangsa Sumeria, kota-kota oase di tengah padang pasir Timur Tengah dan Afrika Utara mustahil pernah terbentuk.",
    funFact: "Biji kurma purba berusia 2.000 tahun yang ditemukan di benteng Masada di gurun Yudea berhasil dikecambahkan kembali oleh ilmuwan modern pada tahun 2005 dan tumbuh menjadi pohon kurma hidup sehat bernama 'Methuselah'.",
    ancientTradeRoutes: ["Jalur Kafilah Dupa & Rempah Arab", "Jalur Sutra Darat"]
  },
  {
    id: "domba",
    name: "Domba & Kambing (Domestikasi Ternak Purba)",
    scientificName: "Ovis aries / Capra hircus",
    category: "fauna",
    categoryLabel: "Hewan Ternak & Domestikasi",
    icon: "🐑",
    originRegion: "Pegunungan Zagros & Taurus (Iran Barat & Turki Timur)",
    vavilovCenter: "Hilal Subur (Fertile Crescent)",
    coordinates: [35.0, 46.0],
    approxDate: "± 10.000 – 9.000 SM (Dari Muflon Asia liar)",
    domesticatingCivilization: "Penggembala Neolitikum Zagros",
    shortDescription: "Hewan pemamah biak pertama yang dijinakkan manusia untuk mengubah rumput kering tak berguna menjadi wol hangat, susu, keju, dan daging.",
    historicalStory: `Bersama dengan revolusi tanaman gandum, penjinakan muflon liar bertanduk menjadi domba jinak di lereng Pegunungan Zagros adalah pilar kedua lahirnya peradaban manusia. Domba adalah pabrik biologi bergerak: mereka mencerna selulosa rumput padang stepa yang tidak bisa dimakan manusia, lalu mengubahnya menjadi lemak bergizi, susu, dan wol.\n\nPenemuan memintal serat wol domba memungkinkan manusia hidup berpindah di daerah beriklim dingin ekstrem di utara dan melahirkan peradaban penggembala nomaden di sepanjang Asia Barat.`,
    supermarketContrast: "Daging kambing, keju feta, susu domba, dan benang wol di supermarket modern bermula dari segelintir kawanan muflon liar yang dikurung di gua-gua pegunungan Iran 11.000 tahun lalu.",
    funFact: "Mata domba memiliki pupil berbentuk garis horisontal persegi panjang yang memberi mereka sudut pandang periferal hampir 320 derajat tanpa perlu memutar kepala, membantu mereka mendeteksi predator gurun dari segala arah.",
    ancientTradeRoutes: ["Jalur Penggembala Nomaden Zagros-Tigris"]
  },

  // --- ASIA TIMUR (TIONGKOK PURBA) ---
  {
    id: "padi",
    name: "Padi Sawah / Beras (Asian Rice)",
    scientificName: "Oryza sativa",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🌾",
    originRegion: "Lembah Sungai Yangtze Tengah & Bawah (Situs Shangshan & Hemudu), Tiongkok",
    vavilovCenter: "Lembah Sungai Yangtze & Kuning",
    coordinates: [29.5, 119.5],
    approxDate: "± 9.000 – 7.000 SM (Fosil fitolit padi di Gua Yuchanyan & Shangshan)",
    domesticatingCivilization: "Kebudayaan Hemudu & Liangzhu Purba",
    shortDescription: "Biji makanan pokok lebih dari separuh populasi planet bumi hari ini, melahirkan sistem birokrasi dan rekayasa irigasi raksasa tertua di Asia.",
    historicalStory: `Beras tidak hanya sekadar makanan; beras adalah arsitek peradaban Asia. Budidaya padi sawah basah membutuhkan gotong royong terorganisir berskala masif: membangun bendungan terasering lereng bukit, parit irigasi, dan kalender tanam presisi berdasarkan peredaran bintang.\n\nKebutuhan kolektif inilah yang melahirkan struktur negara tersentralisasi dan birokrasi kekaisaran pertama di Tiongkok kuno. Dari Lembah Yangtze, teknologi budidaya padi menyebar ke selatan bersama migrasi rumpun bahasa Austronesia dan Austroasiatik ke Vietnam, Nusantara, dan Filipina, serta ke utara menuju Semenanjung Korea dan kepulauan Jepang (zaman Yayoi).`,
    supermarketContrast: "Bagi orang Indonesia, ungkapan 'belum makan kalau belum makan nasi' adalah bukti betapa dominannya komoditas ini. 10.000 tahun lalu, beras hanyalah rumput rawa liar yang mudah rontok di tepi sungai Yangtze sebelum dibudidayakan nenek moyang Asia Timur.",
    funFact: "Di Tiongkok kuno zaman Dinasti Ming, adonan semen ketan (sticky rice mortar)—campuran bubur beras ketan dengan kapur tohor—digunakan sebagai perekat batu bata Tembok Besar Tiongkok sehingga kokoh bertahan dari gempa bumi selama ratusan tahun!",
    ancientTradeRoutes: ["Penyebaran Agrikultur Austronesia", "Jalur Sutra Maritim & Sungai Yangtze"]
  },
  {
    id: "teh",
    name: "Teh (Tea)",
    scientificName: "Camellia sinensis",
    category: "stimulant",
    categoryLabel: "Minuman & Stimulan",
    icon: "🍵",
    originRegion: "Provinsi Yunnan & Sichuan (Pegunungan Hengduan), Tiongkok Barat Daya",
    vavilovCenter: "Lembah Sungai Yangtze & Kuning",
    coordinates: [24.5, 101.5],
    approxDate: "± 2.737 SM (Legenda Kaisar Shennong) & abad ke-2 SM (Makam Han)",
    domesticatingCivilization: "Suku Pribumi Pu & Shu Kuno di Barat Daya Tiongkok",
    shortDescription: "Minuman paling banyak dikonsumsi di muka bumi setelah air mineral, memicu revolusi filsafat Zen, diplomasi Dinasti Tang, hingga Perang Candu.",
    historicalStory: `Legenda Tiongkok menceritakan bahwa Kaisar Shennong (Bapak Pertanian & Herbal) sedang merebus air di bawah pohon rindang ketika sehelai daun teh liar tertiup angin jatuh ke dalam cawan air mendidihnya. Aroma harum dan efek menyegarkannya seketika memikat sang kaisar.\n\nPada awalnya teh dikonsumsi sebagai sup herbal obat pahit. Di era Dinasti Tang (618-907 M), Lu Yu menulis 'Cha Jing' (Kitab Suci Teh), mengangkat teh menjadi seni estetika dan spiritual kelas tinggi. Kafilah kuda membawa bata teh padat melintasi Jalur Kuda-Teh Kuno (Ancient Tea Horse Road) menuju dataran tinggi Tibet untuk ditukar dengan kuda-kuda perang kekaisaran.`,
    supermarketContrast: "Di supermarket Anda membeli teh celup kantong kertas instan atau teh botol manis dingin. Di abad ke-18 dan 19 di Eropa, teh adalah simbol kemewahan kaum bangsawan Inggris yang saking mahalnya memicu Perang Candu dengan Tiongkok dan peristiwa 'Boston Tea Party' yang mengawali Revolusi Kemerdekaan Amerika Serikat!",
    funFact: "Bata teh padat (compressed tea bricks) pernah digunakan sebagai mata uang resmi di Tiongkok, Tibet, Mongolia, dan Siberia hingga awal abad ke-20 karena nilainya stabil dan bisa diseduh jika terjadi krisis pangan.",
    ancientTradeRoutes: ["Jalur Kuda-Teh Kuno (Chamagudao)", "Jalur Sutra Darat & Maritim"]
  },
  {
    id: "kedelai",
    name: "Kedelai (Soybean)",
    scientificName: "Glycine max",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🫘",
    originRegion: "Lembah Sungai Kuning (Tiongkok Utara)",
    vavilovCenter: "Lembah Sungai Yangtze & Kuning",
    coordinates: [36.0, 115.0],
    approxDate: "± 3.000 – 1.500 SM (Zaman Dinasti Shang)",
    domesticatingCivilization: "Peradaban Lembah Sungai Kuning (Dinasti Shang & Zhou)",
    shortDescription: "Biji ajaib fiksasi nitrogen yang menyelamatkan kebutuhan protein nabati miliaran manusia melalui tahu, tempe, kecap, dan miso.",
    historicalStory: `Kedelai liar aslinya adalah tanaman menjalar kecil dengan biji pipih hitam keras. Bangsa Tiongkok kuno menempatkan kedelai sebagai salah satu dari 'Lima Biji Keramat' (Wu Gu) bersama padi, gandum, jawawut, dan milet.\n\nKarena kedelai mentah mengandung tripsin inhibitor yang mengganggu pencernaan jika direbus biasa, orang Tiongkok kuno menemukan teknik fermentasi dan koagulasi: menciptakan kecap asin, tauco, dan tahu (tofu) pada masa Dinasti Han (± 164 SM oleh Pangeran Liu An). Di Nusantara pada abad ke-16, masyarakat Jawa menyempurnakan fermentasi kedelai menggunakan jamur Rhizopus oligosporus, melahirkan satu-satunya makanan berbahan kedelai asli Indonesia yang kini diakui dunia: Tempe!`,
    supermarketContrast: "Minyak goreng nabati, pakan ternak sapi perah, susu kedelai, dan nugget di supermarket modern hampir semuanya mengandung protein kedelai. Namun 90% pasokan kedelai Indonesia hari ini diimpor dari Amerika Serikat dan Brasil, padahal tanaman ini berasal dari Asia Timur ribuan tahun lalu.",
    funFact: "Catatan tertua mengenai tempe di Nusantara tertulis dalam Serat Centhini (awal abad ke-19) yang menceritakan hidangan 'sambel tache tempe' yang disajikan kepada Pangeran Bayat.",
    ancientTradeRoutes: ["Jalur Dagang Asia Timur", "Penyebaran Maritim Asia Tenggara"]
  },
  {
    id: "sutra",
    name: "Ulat Sutra & Kain Sutra (Sericulture)",
    scientificName: "Bombyx mori",
    category: "material",
    categoryLabel: "Kayu, Serat & Material",
    icon: "🧵",
    originRegion: "Lembah Sungai Kuning (Situs Kebudayaan Yangshao & Liangzhu), Tiongkok",
    vavilovCenter: "Lembah Sungai Yangtze & Kuning",
    coordinates: [34.5, 112.5],
    approxDate: "± 4.000 – 3.000 SM (Kepompong sutra tertua di Henan)",
    domesticatingCivilization: "Permaisuri Leizu & Kebudayaan Yangshao",
    shortDescription: "Serat protein hewani berkilau paling mewah dalam sejarah peradaban, rahasia negara paling ketat dijaga yang menamai jalur perdagangan terbesar dunia: Jalur Sutra.",
    historicalStory: `Menurut mitologi Tiongkok, Permaisuri Leizu (istri Kaisar Kuning Huangdi) sedang minum teh di bawah pohon murbei ketika sebuah kepompong ulat jatuh ke dalam cangkir panasnya. Saat ia menarik benang lembut yang terurai, ia menemukan seutas serat berkilau sepanjang ratusan meter yang tak putus.\n\nKekaisaran Tiongkok menjaga rahasia pembuatan sutra (serikultur) dengan hukuman pancung mati bagi siapapun yang mencoba menyelundupkan telur ulat sutra atau bibit murbei keluar perbatasan. Selama lebih dari seribu tahun, kain sutra mengalir melintasi gurun Taklamakan ke Roma Kuno di mana para senator Romawi mengecam sutra karena begitu tipis tembus pandang dan menghabiskan kas devisa kekaisaran!`,
    supermarketContrast: "Kini pakaian sutra bisa dibeli di toko garmen modern. Di zaman kuno, berat kain sutra dihargai seimbang dengan emas dan menjadi mata uang standar diplomatik antar kekaisaran.",
    funFact: "Rahasia sutra akhirnya bocor ke Barat pada tahun 552 Masehi ketika dua orang biarawan Nestorian menyelundupkan telur ulat sutra hidup ke Konstantinopel (Kekaisaran Bizantium) di dalam rongga tongkat bambu jalan kaki mereka!",
    ancientTradeRoutes: ["Jalur Sutra Darat Utama (Chang'an ke Roma)", "Jalur Sutra Maritim"]
  },

  // --- ASIA SELATAN & LEMBAH INDUS ---
  {
    id: "lada-hitam",
    name: "Lada Hitam (Black Pepper)",
    scientificName: "Piper nigrum",
    category: "spice",
    categoryLabel: "Rempah-rempah",
    icon: "⚫",
    originRegion: "Hutan Hujan Pesisir Malabar (Kerala), India Barat Daya",
    vavilovCenter: "Anak Benua India & Lembah Indus",
    coordinates: [10.8, 76.2],
    approxDate: "± 2.000 SM (Ditemukan di lubang hidung mumi Firaun Ramses II 1213 SM)",
    domesticatingCivilization: "Peradaban Pesisir Malabar Kuno",
    shortDescription: "'Raja Segala Rempah' yang pernah menjadi mata uang resmi untuk membayar pajak, upeti perang, dan sewa tanah di Eropa Kuno.",
    historicalStory: `Ketika Firaun Ramses II dari Mesir Kuno dimumikan pada tahun 1213 SM, para pendeta Mesir memasukkan butiran lada hitam Malabar ke dalam lubang hidungnya sebagai balsem pengawet suci—membuktikan rute perdagangan samudra jarak jauh telah ada di zaman perunggu.\n\nDi Roma Kuno, lada hitam adalah obsesi total kuliner: buku resep legendaris Apicius menggunakan lada di hampir 80% resep makanannya! Ketika Raja Visigoth Alaric mengepung kota Roma pada tahun 408 M, salah satu tebusan utama yang ia tuntut dari Senat Romawi agar tidak membumihanguskan kota adalah 3.000 pon lada hitam murni.`,
    supermarketContrast: "Di meja restoran atau supermarket modern, garam dan merica bubuk disediakan gratis di botol kecil. Di Abad Pertengahan Eropa, istilah 'karung lada' (pepper sack) adalah julukan bagi orang yang luar biasa kaya raya.",
    funFact: "Kata 'peppercorn' diserap ke dalam banyak bahasa Eropa, dan pepatah Prancis abad pertengahan 'cher comme poivre' (semahal lada) digunakan untuk menggambarkan barang yang tak ternilai harganya.",
    ancientTradeRoutes: ["Rute Angin Muson Samudra Hindia (Berenike-Muziris)", "Jalur Sutra Maritim"]
  },
  {
    id: "kapas",
    name: "Kapas / Katun (Cotton)",
    scientificName: "Gossypium arboreum / herbaceum",
    category: "material",
    categoryLabel: "Kayu, Serat & Material",
    icon: "☁️",
    originRegion: "Lembah Sungai Indus (Mohenjo-daro & Mehrgarh, Pakistan/India)",
    vavilovCenter: "Anak Benua India & Lembah Indus",
    coordinates: [27.3, 68.1],
    approxDate: "± 5.000 – 4.000 SM (Situs Mehrgarh)",
    domesticatingCivilization: "Peradaban Lembah Sungai Indus (Harappa & Mohenjo-daro)",
    shortDescription: "Serat putih berbulu yang membebaskan manusia dari pakaian kulit hewan yang kaku dan wol yang gatal.",
    historicalStory: `Para arkeolog di Mohenjo-daro menemukan fragmen kain katun berpewarna merah madder yang diawetkan di dekat bejana perak dari milenium ke-3 SM. Orang Yunani kuno yang pertama kali mendengar tentang kapas dari penjelajah Megasthenes dan Herodotus dibuat takjub dan bingung.\n\nHerodotus menulis pada tahun 450 SM bahwa di India ada 'pohon liar yang menghasilkan wol di dahan-dahannya, yang lebih indah dan lebih baik daripada wol domba mana pun, dan orang-orang India membuat pakaian dari wol pohon tersebut!'. Di Eropa abad pertengahan, orang bahkan percaya bahwa pohon kapas berbuah anak domba kecil mungil yang hidup bergelantungan di dahan ('Vegetable Lamb of Tartary')!`,
    supermarketContrast: "Kaus oblong t-shirt dan celana katun yang kita kenakan setiap hari diproduksi massal di pabrik garmen. Sebelum peradaban Harappa menjinakkan pohon kapas, manusia di belahan barat hanya punya pilihan memakai wol domba kasar atau linen rami yang kaku.",
    funFact: "Nama 'cotton' dalam bahasa Inggris diserap dari bahasa Arab 'qutn' (قُطْن), yang menyebar ke Eropa lewat Spanyol Islam (Al-Andalus).",
    ancientTradeRoutes: ["Perdagangan Meluhha (Indus) - Mesopotamia", "Jalur Sutra Maritim"]
  },
  {
    id: "ayam",
    name: "Ayam Domestik (Red Junglefowl)",
    scientificName: "Gallus gallus domesticus",
    category: "fauna",
    categoryLabel: "Hewan Ternak & Domestikasi",
    icon: "🐓",
    originRegion: "Hutan Bambu Asia Tenggara & Lembah Indus",
    vavilovCenter: "Anak Benua India & Lembah Indus",
    coordinates: [20.0, 85.0],
    approxDate: "± 6.000 – 2.500 SM (Dari Ayam Hutan Merah Gallus gallus)",
    domesticatingCivilization: "Komunitas Pemburu Hutan Asia Tenggara & Lembah Indus",
    shortDescription: "Unggas paling melimpah di planet bumi (jumlahnya melebihi populasi manusia 3 banding 1) yang aslinya dipelihara bukan untuk dimakan, melainkan untuk ritual aduan sabung ayam dan kokok fajar.",
    historicalStory: `Di alam liar hutan hujan tropis Asia Tenggara dan India, ayam hutan merah (Gallus gallus) adalah burung pemalu yang terbang lincah di kanopi bambu. Mengapa manusia pertama kali menjinakkannya? Bukti arkeologis menunjukkan bahwa selama ribuan tahun pertama, manusia memelihara ayam BUKAN untuk diambil daging atau telurnya!\n\nAyam jantan dipelihara karena keberanian petarungnya dalam ritual sabung ayam magis, serta kemampuannya yang akurat berkokok menyambut fajar menyingsing sebagai jam biologis spiritual penjaga waktu sembahyang. Baru setelah bangsa Persia dan Fenisia membawanya ke Mediterania pada milenium ke-1 SM, ayam dikembangbiakkan menjadi sumber pangan murah.`,
    supermarketContrast: "Di supermarket modern, ayam broiler potong disembelih dalam hitungan jutaan ekor per hari. Jika Anda melihat ayam hutan merah aslinya di pedalaman hutan Sundaland, tubuhnya ramping, lincah terbang tinggi puluhan meter, dan memiliki bulu leher keemasan memukau.",
    funFact: "Hari ini terdapat lebih dari 33 miliar ekor ayam di bumi pada satu waktu bersamaan—jauh melebihi gabungan seluruh spesies burung liar lainnya di dunia.",
    ancientTradeRoutes: ["Penyebaran Maritim Austronesia ke Pasifik", "Jalur Sutra Darat ke Persia & Eropa"]
  },
  {
    id: "mangga",
    name: "Mangga (Mango)",
    scientificName: "Mangifera indica",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🥭",
    originRegion: "Kaki Pegunungan Himalaya Timur & Lembah Assam/Myanmar",
    vavilovCenter: "Anak Benua India & Lembah Indus",
    coordinates: [26.0, 91.0],
    approxDate: "± 4.000 SM",
    domesticatingCivilization: "Peradaban Veda Kuno India",
    shortDescription: "'Raja Segala Buah' di Asia Selatan, tempat bernaung dan bermeditasi Sang Buddha Gautama dalam kisah kitab Tripitaka.",
    historicalStory: `Dalam kebudayaan India, pohon mangga adalah lambang cinta, kesuburan, dan pencerahan spiritual. Kitab suci Buddhis mencatat bahwa seorang hartawan bernama Amrapali menghadiahkan sebuah kebun mangga luas kepada Sang Buddha Gautama untuk dijadikan tempat peristirahatan dan meditasi para biksu sangha.\n\nBiksu pengelana Tiongkok legendaris Xuanzang (Tong Samgong) yang berziarah ke India pada abad ke-7 Masehi adalah orang pertama yang membawa catatan tertulis tentang kelezatan buah mangga ke Asia Timur. Kaisar Mughal Akbar yang agung saking tergila-gilanya pada mangga sampai menanam kebun mangga 'Lakhi Bagh' berisi 100.000 pohon mangga di Darbhanga!`,
    supermarketContrast: "Di supermarket modern, mangga dijual dalam aneka varietas manis. Di tanah kelahirannya di India, mangga dinobatkan sebagai buah nasional dan memiliki lebih dari 1.000 kultivar kultus.",
    funFact: "Pola motif kain batik 'Paisley' yang terkenal di seluruh dunia berbentuk tetesan air melengkung aslinya adalah stilasi artistik dari bentuk buah mangga muda India (dikenal sebagai motif 'kalka' atau 'amb').",
    ancientTradeRoutes: ["Perjalanan Biksu Xuanzang ke India", "Jalur Maritim Samudra Hindia"]
  },

  // --- AFRIKA (ETIOPIA & SAHEL) ---
  {
    id: "kopi",
    name: "Kopi Arabika (Coffee)",
    scientificName: "Coffea arabica",
    category: "stimulant",
    categoryLabel: "Minuman & Stimulan",
    icon: "☕",
    originRegion: "Dataran Tinggi Hutan Hujan Kaffa & Bonga, Etiopia Barat Daya",
    vavilovCenter: "Dataran Tinggi Etiopia & Sahel Afrika",
    coordinates: [7.2, 36.2],
    approxDate: "± 850 M (Legenda Penggembala Kaldi) & Abad ke-15 (Budidaya Sufi Yaman)",
    domesticatingCivilization: "Masyarakat Adat Oromo di Etiopia & Kaum Sufi Yaman",
    shortDescription: "Cairan stimulan hitam pemacu Revolusi Pencerahan (Age of Enlightenment) Eropa yang awalnya dikunyah oleh prajurit suku Oromo sebagai bola lemak penambah stamina.",
    historicalStory: `Semua cangkir kopi espresso, cappuccino, dan latte di seluruh dunia berakar dari semak-semak liar di hutan pegunungan Kaffa, Etiopia. Legenda mengisahkan seorang penggembala kambing muda bernama Kaldi yang heran melihat kawanan kambingnya melompat-lompat bersemangat dan tidak tidur semalaman setelah memakan buah beri merah dari semak misterius.\n\nSuku Oromo di Etiopia mulanya tidak menyeduh kopi menjadi cairan: mereka menumbuk buah kopi merah dan mencampurnya dengan lemak hewani menjadi bola-bola energi yang dikunyah prajurit saat berburu. Kopi baru diseberangkan melintasi Laut Merah ke pelabuhan Mocha di Yaman pada abad ke-15, di mana para sufi Islam menyeduhnya menjadi minuman malam hari agar tetap terjaga khusyuk berdzikir semalaman.`,
    supermarketContrast: "Hari ini Brasil dan Vietnam adalah produsen kopi terbesar di supermarket. Namun sebelum tahun 1600-an, Yaman dan Etiopia memegang monopoli ketat di mana biji kopi yang diekspor wajib direbus terlebih dahulu agar mandul dan tidak bisa ditanam di tempat lain!",
    funFact: "Monopoli kopi Yaman akhirnya pecah ketika seorang peziarah sufi asal India bernama Baba Budan menyelundupkan tujuh butir biji kopi hijau subur yang dililitkan di balik kain ikat pinggangnya saat pulang berhaji dari Mekkah ke bukit Chandragiri, India Selatan.",
    ancientTradeRoutes: ["Jalur Sufi Laut Merah (Mocha-Kairo)", "Jalur Kafilah Afrika Timur"]
  },
  {
    id: "sorgum",
    name: "Sorgum (Sorghum)",
    scientificName: "Sorghum bicolor",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🌾",
    originRegion: "Wilayah Sahel & Sabana Sudan/Chad (Afrika Timur Laut)",
    vavilovCenter: "Dataran Tinggi Etiopia & Sahel Afrika",
    coordinates: [13.0, 25.0],
    approxDate: "± 4.000 – 3.000 SM",
    domesticatingCivilization: "Komunitas Agropastoral Sahel Purba",
    shortDescription: "Serealia tangguh tahan banting kemarau ekstrem yang menghidupi peradaban sabana Afrika dan kini menjadi benteng ketahanan iklim masa depan.",
    historicalStory: `Ketika Sahara yang dulunya hijau dan subur mulai mengering menjadi gurun pasir tandus sekitar 5.000 tahun lalu, manusia di wilayah Sahel dipaksa beradaptasi. Mereka menemukan rumput liar sorgum yang memiliki akar dalam dan lapisan lilin pelindung daun yang membuatnya sanggup bertahan hidup dalam gelombang panas ekstrem di mana gandum dan jagung akan mati hangus.\n\nSorgum menjadi bahan baku bubur pokok, roti pipih (kisra), dan bir fermentasi tradisional di seluruh kerajaan besar Afrika kuno seperti Kekaisaran Kush, Axum, dan Songhai.`,
    supermarketContrast: "Di supermarket modern barat sorgum sering diremehkan sebagai pakan burung atau silase sapi. Padahal sorgum bebas gluten dan merupakan makanan pokok penyelamat bagi ratusan juta orang di daerah semi-kering Afrika dan Asia.",
    funFact: "Sorgum dapat berhibernasi saat kekeringan melanda: tanaman ini menutup stomata daunnya dan berhenti tumbuh, lalu seketika bangun dan mekar kembali begitu setetes air hujan jatuh menyentuh tanah.",
    ancientTradeRoutes: ["Rute Kafilah Trans-Sahara", "Jalur Laut Samudra Hindia ke India"]
  },
  {
    id: "semangka",
    name: "Semangka (Watermelon)",
    scientificName: "Citrullus lanatus",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🍉",
    originRegion: "Gurun Kalahari & Afrika Timur Laut (Sudan/Mesir Kuno)",
    vavilovCenter: "Dataran Tinggi Etiopia & Sahel Afrika",
    coordinates: [18.0, 31.0],
    approxDate: "± 2.500 SM (Biji semangka di makam Firaun Tutankhamun)",
    domesticatingCivilization: "Peradaban Mesir Kuno & Nubia",
    shortDescription: "Kantong air tawar alami gurun pasir yang aslinya keras dan pahit, dibudidayakan Firaun sebagai bekal minum di alam baka.",
    historicalStory: `Semangka liar aslinya adalah buah kecil berdaging putih keras dan rasanya luar biasa pahit karena kandungan senyawa kukurbitasin. Mengapa manusia purba tertarik menanamnya? Bukan karena rasa manisnya, melainkan karena KANDUNGAN AIRNYA yang mencapai 92%!\n\nDi padang pasir yang membakar, semangka liar adalah 'kantong air alami' yang tidak busuk selama berminggu-minggu di bawah sengatan matahari. Di makam Firaun Tutankhamun (1323 SM) dan makam-makam bangsawan Dinasti ke-12 Mesir, lukisan dinding menunjukkan buah semangka bergaris disajikan di atas nampan persembahan untuk memastikan sang raja tidak kehausan dalam perjalanan menuju alam baka.`,
    supermarketContrast: "Semangka merah manis tanpa biji yang Anda beli potong di supermarket modern adalah hasil pemuliaan hibrida abad ke-20. Nenek moyang semangka purba berdaging putih pucat atau kekuningan dengan biji hitam berlimpah.",
    funFact: "Biji semangka yang disangrai dan diasinkan adalah salah satu camilan tertua manusia, terbukti dari tumpukan kulit biji semangka yang ditemukan di situs neolitikum Uan Muhuggiag di Gurun Sahara Libya.",
    ancientTradeRoutes: ["Rute Sungai Nil Mesir Kuno", "Jalur Perdagangan Mediterania"]
  },

  // --- ASIA TENGAH & STEPA EURASIA ---
  {
    id: "apel",
    name: "Apel Liar Tian Shan (Wild Apple)",
    scientificName: "Malus sieversii",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🍎",
    originRegion: "Lereng Pegunungan Tian Shan (Kazakhstan, Kyrgyzstan, Xinjiang)",
    vavilovCenter: "Asia Tengah & Stepa Eurasia",
    coordinates: [43.2, 76.9],
    approxDate: "± 4.000 – 2.000 SM",
    domesticatingCivilization: "Komunitas Pemburu Hutan Gunung Tian Shan & Kafilah Jalur Sutra",
    shortDescription: "Ibu kandung genetik dari 7.500 varietas apel modern di muka bumi, tumbuh di hutan rimba apel raksasa di kaki pegunungan es Kazakhstan.",
    historicalStory: `Semua apel yang pernah Anda makan—Fuji, Gala, Granny Smith, Washington, hingga Malang—secara genetika 100% berasal dari satu spesies pohon apel liar: Malus sieversii yang tumbuh di hutan pegunungan Tian Shan di Kazakhstan.\n\nNama kota terbesar Kazakhstan, 'Almaty', secara harfiah berarti 'Bapak Segala Apel' (Father of Apples). Beruang cokelat Tian Shan adalah agen seleksi alam pertama yang memakan buah apel paling manis dan besar, lalu menyebarkan kotorannya. Ketika Jalur Sutra dibuka melintasi wilayah ini, para penunggang kuda dan kafilah pedagang memetik apel-apel tersebut dan membawa bijinya ke arah barat menuju Yunani dan Roma serta ke timur menuju Tiongkok.`,
    supermarketContrast: "Di supermarket Anda melihat apel merah mengkilap berlapis lilin. Di hutan liar Almaty, pohon apel liar purba tumbuh setinggi 30 meter dengan lingkar batang 2 meter, menghasilkan buah dengan aneka rasa mulai dari manis madu, masam, pedas herba, hingga aroma adas manis.",
    funFact: "Ilmuwan genetika Soviet legendaris Nikolai Vavilov adalah orang pertama yang mendaki hutan Tian Shan pada tahun 1929 dan terperangah mendapati lereng gunung dipenuhi rimba pohon apel liar sebesar pohon beringin.",
    ancientTradeRoutes: ["Jalur Sutra Darat Jalur Utara", "Rute Nomaden Asia Tengah"]
  },
  {
    id: "kuda",
    name: "Kuda Domestik (Horse Domestication)",
    scientificName: "Equus caballus",
    category: "fauna",
    categoryLabel: "Hewan Ternak & Domestikasi",
    icon: "🐎",
    originRegion: "Stepa Pontic-Caspian & Budaya Botai (Kazakhstan Utara & Ukraina)",
    vavilovCenter: "Asia Tengah & Stepa Eurasia",
    coordinates: [53.0, 67.5],
    approxDate: "± 3.500 SM (Situs Botai) & 2.200 SM (Sintashta)",
    domesticatingCivilization: "Kebudayaan Botai & Penggembala Padang Stepa Sintashta",
    shortDescription: "Teknologi pengubah kecepatan peradaban manusia: hewan yang memperluas batas kekaisaran, menaklukkan benua, dan menciptakan peperangan kereta kuda serta kavaleri.",
    historicalStory: `Sebelum manusia menjinakkan kuda, batas perjalanan manusia di daratan ditentukan oleh seberapa jauh sepasang kaki manusia bisa melangkah dalam sehari (sekitar 20-30 km). Penjinakan kuda di padang rumput tanpa ujung Botai dan Stepa Pontic seketika melipatgandakan kecepatan gerak manusia sepuluh kali lipat!\n\nAnalisis tembikar Botai menemukan sisa lemak susu kuda (kumis/airag), membuktikan manusia awalnya memerah susunya sebelum menciptakan tali kekang dan pelana. Penemuan kereta perang beroda jeruji (chariot) oleh bangsa Sintashta sekitar 2000 SM memicu gelombang migrasi suku Indo-Eropa ke segala penjuru: ke Eropa, Iran, dan India.`,
    supermarketContrast: "Kini mobil dan pesawat bermesin jet telah menggantikan fungsi kuda (meski tenaga mesin masih diukur dalam satuan 'Horsepower' / Daya Kuda). Selama 5.000 tahun sejarah tertulis manusia sebelum mesin uap, kuda adalah satu-satunya mesin transportasi tercepat di muka bumi.",
    funFact: "Bangsa Hun, Mongol di bawah Jenghis Khan, dan kavaleri nomaden lainnya sanggup tidur, makan, dan menembakkan panah tepat ke sasaran sambil menunggang kuda yang berlari kencang tanpa memegang tali kendali.",
    ancientTradeRoutes: ["Jalur Stepa Eurasia (Steppe Route)", "Jalur Kuda-Teh Purba"]
  },
  {
    id: "bawang-putih",
    name: "Bawang Putih (Garlic)",
    scientificName: "Allium sativum",
    category: "spice",
    categoryLabel: "Rempah-rempah",
    icon: "🧄",
    originRegion: "Dataran Tinggi Pegunungan Asia Tengah (Tian Shan & Pamir)",
    vavilovCenter: "Asia Tengah & Stepa Eurasia",
    coordinates: [39.0, 71.0],
    approxDate: "± 4.000 SM",
    domesticatingCivilization: "Masyarakat Pengumpul Asia Tengah & Sumeria",
    shortDescription: "Umbi belerang antibakteri alami yang mengobati infeksi prajurit pembangun Piramida Giza dan membumbui wajan peradaban dunia.",
    historicalStory: `Spesies liar nenek moyang bawang putih (Allium longicuspis) hanya ditemukan tumbuh secara alami di pegunungan terjal Asia Tengah antara Kyrgyzstan, Tajikistan, dan Uzbekistan. Dari sana, umbi beraroma menyengat ini menyebar ke Sumeria, Mesir Kuno, dan India.\n\nDi Mesir Kuno, sejarawan Yunani Herodotus mencatat prasasti di Piramida Agung Khufu yang mendokumentasikan bahwa firaun menghabiskan 1.600 talenta perak hanya untuk membeli ransum bawang putih, bawang bombay, dan lobak bagi puluhan ribu pekerja piramida agar mereka tetap kuat dan bebas dari infeksi disentri usus. Bahkan tercatat pemogokan buruh pertama dalam sejarah terjadi ketika jatah bawang putih para pembangun makam terlambat dibagikan!`,
    supermarketContrast: "Bawang putih adalah bahan bumbu paling wajib di dapur manapun dan supermarket modern. Di zaman kuno, sifat antibakterinya (senyawa alisin) menjadikannya antibiotik alami sebelum penisilin ditemukan oleh Alexander Fleming pada 1928.",
    funFact: "Mitos bawang putih sebagai penangkal vampir di Eropa timur berakar dari kenyataan medis kuno bahwa bawang putih adalah obat alami pengusir nyamuk, lintah pengisap darah, dan parasit rabies pembawa infeksi.",
    ancientTradeRoutes: ["Jalur Sutra Darat", "Perdagangan Sumeria-Mesir Kuno"]
  },

  // --- CEKUNGAN MEDITERANIA & EROPA ---
  {
    id: "anggur",
    name: "Anggur & Wine Kuno (Grapevine)",
    scientificName: "Vitis vinifera",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🍇",
    originRegion: "Pegunungan Kaukasus Selatan (Georgia, Armenia, Azerbaijan)",
    vavilovCenter: "Cekungan Mediterania & Kaukasus",
    coordinates: [41.7, 44.8],
    approxDate: "± 6.000 – 4.000 SM (Situs Gadachrili Gora di Georgia & Gua Areni-1 di Armenia)",
    domesticatingCivilization: "Peradaban Neolitikum Kaukasus (Situs Shulaveri-Shomu)",
    shortDescription: "Minuman fermentasi para dewa Olympus (Dionysus/Bacchus) yang disimpan di tempayan tanah liat qvevri ribuan tahun sebelum tong kayu ek Prancis.",
    historicalStory: `Bongkahan tembikar berusia 8.000 tahun yang ditemukan di Georgia terbukti mengandung kristal asam tartarat—sidik jari kimiawi pembuatan wine tertua di dunia. Di situs gua Areni-1 di Armenia (4100 SM), arkeolog menemukan instalasi kilang anggur lengkap tertua: tempat pemerasan anggur dari batu kapur, saluran pembuangan, dan bejana fermentasi tanah liat besar.\n\nDi dunia Yunani dan Romawi Kuno, air minum sering kali tercemar bakteri berbahaya; fermentasi wine menghasilkan minuman yang steril dan aman diminum sehari-hari (meski biasanya diencerkan dengan air 1:3). Perdagangan wine mendorong perkapalan laut Mediterania dan membentuk tata pergaulan diplomasi simposium kaum intelektual Athena.`,
    supermarketContrast: "Di supermarket Anda melihat botol-botol wine berlabel Prancis, Italia, atau California. Jauh sebelum bangsa Galia (Prancis) mengenal wine, orang-orang pegunungan Kaukasus telah menyempurnakan fermentasi anggur dalam kendi keramik yang dikubur di bawah lantai rumah mereka.",
    funFact: "Di Yunani Kuno, tuan rumah pesta simposium selalu meminum cawan anggur pertama di depan para tamunya untuk membuktikan bahwa anggur tersebut tidak diracun—inilah asal mula tradisi 'toasting' bersulang cangkir hari ini!",
    ancientTradeRoutes: ["Jalur Maritim Mediterania", "Rute Pegunungan Kaukasus-Mesopotamia"]
  },
  {
    id: "kubis",
    name: "Kubis Liar / Brassica (Wild Cabbage)",
    scientificName: "Brassica oleracea",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🥬",
    originRegion: "Tebing Kapur Pesisir Samudra Atlantik & Laut Mediterania (Eropa Barat)",
    vavilovCenter: "Cekungan Mediterania & Kaukasus",
    coordinates: [50.5, 1.5],
    approxDate: "± 1.000 SM (Era Bangsa Kelt & Yunani Kuno)",
    domesticatingCivilization: "Bangsa Kelt & Petani Mediterania Kuno",
    shortDescription: "Satu tanaman daun liar yang diubah manusia menjadi tujuh sayuran berbeda di supermarket: kubis, brokoli, kembang kol, kale, kohlrabi, brussels sprout, dan gai lan!",
    historicalStory: `Jika Anda pergi ke tebing kapur berangin di pantai Inggris atau Prancis, Anda akan menemukan rumput kubis liar berduri dengan daun kebiruan yang liat dan pahit. Dari satu spesies tunggal ini (Brassica oleracea), petani Eropa kuno melakukan seleksi buatan luar biasa selama ratusan tahun:\n\n- Menyeleksi tunas daun terminal besar -> menghasilkan KUBIS (kol bundar)\n- Menyeleksi kumpulan kuncup bunga padat -> menghasilkan BROKOLI dan KEMBANG KOL\n- Menyeleksi batang yang membengkak tebal -> menghasilkan KOHLRABI\n- Menyeleksi tunas daun ketiak lateral -> menghasilkan BRUSSELS SPROUTS\n- Menyeleksi daun lebar hijau keriting -> menghasilkan KALE!`,
    supermarketContrast: "Di supermarket Anda mengira brokoli, kembang kol, kubis, dan kale adalah tanaman yang sama sekali berbeda spesies. Faktanya secara ilmiah mereka adalah tanaman yang persis sama, hanya bagian tubuhnya yang dimutasi manusia!",
    funFact: "Kaisar Romawi Diokletianus begitu bangga dengan kebun kubisnya sehingga ketika ditawari kembali menduduki tahta kekaisaran Romawi, ia menolak dan berkata: 'Jika kau melihat kubis yang kutanam dengan tanganku sendiri, kau tak akan pernah memintaku kembali menjadi kaisar.'",
    ancientTradeRoutes: ["Jalur Pertanian Neolitikum Eropa", "Pasar Perkotaan Romawi"]
  },
  {
    id: "kayu-manis",
    name: "Kayu Manis Asli (Ceylon Cinnamon)",
    scientificName: "Cinnamomum verum",
    category: "spice",
    categoryLabel: "Rempah-rempah",
    icon: "🪵",
    originRegion: "Pulau Sri Lanka (Sailan Kuno)",
    vavilovCenter: "Anak Benua India & Lembah Indus",
    coordinates: [7.87, 80.77],
    approxDate: "± 2.000 SM (Disebut dalam Alkitab Ibrani & Kitab Papirus Mesir Kuno)",
    domesticatingCivilization: "Masyarakat Kuno Sri Lanka & Pedagang Austronesia",
    shortDescription: "Kulit kayu manis harum yang asal-usul aslinya ditutup-tutupi oleh pedagang Arab dengan mitos sarang burung raksasa pemakan bangkai.",
    historicalStory: `Selama lebih dari dua ribu tahun, bangsa Yunani dan Romawi tidak tahu dari mana kayu manis berasal. Para pedagang Arab merahasiakan lokasi aslinya dengan menyebarkan dongeng bahwa kayu manis diperoleh dari sarang burung pemangsa raksasa di puncak tebing terjal yang tak terjangkau manusia!\n\nKayu manis sejati (Ceylon cinnamon) hanya tumbuh di pulau Sri Lanka. Tekstur kulit kayunya berlapis-lapis tipis dan lembut seperti kertas cerutu dengan aroma manis yang lembut, sangat berbeda dengan kayu manis cassia asal Tiongkok dan Sumatra yang tebal dan keras.`,
    supermarketContrast: "Di supermarket hari ini, sebagian besar bubuk 'cinnamon' murah sebenarnya adalah Cassia (Cinnamomum cassia) yang mengandung kadar kumarin tinggi yang bisa membebani organ hati jika dikonsumsi berlebihan. Kayu manis asli Sailan bernilai jauh lebih mahal.",
    funFact: "Kaisar Romawi Nero membakar persediaan kayu manis seluruh kota Roma setara kebutuhan satu tahun dalam upacara pemakaman istrinya Poppaea Sabina pada tahun 65 M sebagai wujud duka cita ekstrem.",
    ancientTradeRoutes: ["Rute Kayu Manis Austronesia", "Jalur Rempah Samudra Hindia"]
  },
  {
    id: "jahe",
    name: "Jahe (Ginger)",
    scientificName: "Zingiber officinale",
    category: "spice",
    categoryLabel: "Rempah-rempah",
    icon: "🫚",
    originRegion: "Hutan Tropis Maritim Asia Tenggara (Nusantara & Indochina)",
    vavilovCenter: "Sundaland & Kepulauan Rempah Maluku",
    coordinates: [-7.0, 110.0],
    approxDate: "± 3.000 SM",
    domesticatingCivilization: "Bangsa Pelaut Austronesia",
    shortDescription: "Rimpang pedas penghangat tubuh yang dibawa oleh perahu cadik Austronesia menjelajahi seluruh Samudra Pasifik dan Hindia.",
    historicalStory: `Jahe liar sejati diyakini telah punah di alam; seluruh jahe di dunia hari ini adalah tanaman hasil perbanyakan vegetatif oleh tangan manusia melalui rimpangnya. Jahe adalah tanaman wajib di setiap perahu penjelajah Austronesia kuno karena digunakan untuk mengatasi mabuk laut, radang lambung, dan mengawetkan daging bekal perjalanan.\n\nFilsuf Konfusius di Tiongkok (551-479 SM) tercatat tidak pernah menyantap makanan apapun tanpa didampingi sepotong jahe untuk menjaga kejernihan pikiran dan pernapasan.`,
    supermarketContrast: "Permen jahe dan wedang jahe instan yang praktis di supermarket modern adalah warisan bioteknologi rimpang purba pelaut Nusantara ribuan tahun silam.",
    funFact: "Kata Inggris 'ginger' berakar dari bahasa Sanskerta 'srngaveram' yang berarti 'berbentuk tanduk rusa', merujuk pada cabang-cabang rimpangnya yang mirip tanduk.",
    ancientTradeRoutes: ["Migrasi Austronesia Pasifik", "Jalur Rempah Maritim Purba"]
  },
  {
    id: "nanas",
    name: "Nanas (Pineapple)",
    scientificName: "Ananas comosus",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🍍",
    originRegion: "Cekungan Sungai Paraná-Paraguay (Brasil Selatan & Paraguay)",
    vavilovCenter: "Dataran Tinggi Andes & Amazon Hulu",
    coordinates: [-23.5, -57.5],
    approxDate: "± 2.000 – 1.000 SM",
    domesticatingCivilization: "Suku Pribumi Tupi-Guarani ('nanas' = buah yang lezat)",
    shortDescription: "Kumpulan ratusan buah beri yang menyatu dengan mahkota daun berduri, pernah menjadi lambang status miliarder di Eropa abad ke-18.",
    historicalStory: `Suku Tupi-Guarani menyebarkan nanas ke seluruh Amerika Selatan dan Karibia ribuan tahun sebelum bangsa Eropa datang. Mereka menyebutnya 'ananas' yang bermakna 'buah yang wangi dan lezat'.\n\nKetika Christopher Columbus membawa nanas pertama kali ke Spanyol pada 1493, raja Ferdinand dibuat terpesona oleh rasanya yang manis asam eksotis. Di Inggris era Georgia (abad ke-18), nanas sangat langka dan sulit diimpor tanpa membusuk sehingga satu butir nanas segar bisa berharga hingga £8.000 dalam nilai uang hari ini! Kaum bangsawan menyewa nanas hanya untuk ditenteng ke pesta dansa malam hari sebagai simbol kekayaan luar biasa!`,
    supermarketContrast: "Di supermarket Anda bisa membeli sekaleng nanas potong hanya dengan belasan ribu rupiah. 250 tahun lalu di London, orang rela membayar uang sewa hanya untuk meminjam satu buah nanas selama satu malam untuk dipajang di atas meja makan makan malam mereka.",
    funFact: "Nanas mengandung enzim bromelain yang memecah protein. Ketika Anda memakan nanas dan lidah Anda terasa sedikit perih atau 'tergigit', itu karena enzim bromelain nanas sedang mencoba mencerna protein di permukaan lidah Anda!",
    ancientTradeRoutes: ["Rute Tupi-Guarani Amerika Selatan", "Pertukaran Columbus 1492"]
  },
  {
    id: "kacang-tanah",
    name: "Kacang Tanah (Peanut / Groundnut)",
    scientificName: "Arachis hypogaea",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🥜",
    originRegion: "Lembah Gran Chaco & Kaki Pegunungan Andes (Bolivia & Argentina Barat Laut)",
    vavilovCenter: "Dataran Tinggi Andes & Amazon Hulu",
    coordinates: [-19.0, -64.0],
    approxDate: "± 5.600 SM",
    domesticatingCivilization: "Peradaban Pra-Inka & Moche",
    shortDescription: "Polong ajaib yang bunganya mekar di udara tetapi membengkokkan tangkainya sendiri masuk menancap ke dalam tanah untuk mematangkan bijinya.",
    historicalStory: `Kacang tanah adalah keajaiban botani yang disebut geokarpi: bunganya mekar kuning di atas tanah, tetapi setelah diserbuki, tangkai buahnya (peg) memanjang ke bawah dan menembus masuk ke dalam tanah sedalam beberapa sentimeter untuk membesarkan polongnya di dalam kegelapan tanah!\n\nPeradaban Moche di pesisir Peru kuno (± 100-800 M) begitu memuja kacang tanah sampai-sampai di makam El Señor de Sipán (Penguasa Sipan), arkeolog menemukan kalung megah terbuat dari 20 manik-manik kacang tanah raksasa yang dibuat dari lempengan emas murni dan perak.`,
    supermarketContrast: "Bumbu kacang sate, gado-gado, dan selai kacang (peanut butter) di supermarket modern terasa sangat 'Indonesia' atau 'Barat'. Padahal kacang tanah adalah komoditas Dunia Baru asal Amerika Selatan yang baru dibawa ke Asia oleh pelaut Spanyol dan Portugis pada abad ke-16.",
    funFact: "Kacang tanah bukan kacang pohon (tree nut), melainkan legum atau polong-polongan (keluarga Fabaceae) yang berkerabat dekat dengan kedelai dan kacang polong.",
    ancientTradeRoutes: ["Rute Dagang Pra-Inka Pasifik", "Pertukaran Columbus 1492"]
  },
  {
    id: "ubi-jalar",
    name: "Ubi Jalar (Sweet Potato / Camote)",
    scientificName: "Ipomoea batatas",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🍠",
    originRegion: "Amerika Tengah & Semenanjung Yucatan hingga Peru",
    vavilovCenter: "Dataran Tinggi Andes & Amazon Hulu",
    coordinates: [-8.0, -78.0],
    approxDate: "± 6.000 – 4.000 SM",
    domesticatingCivilization: "Peradaban Lembah Chilca (Peru Kuno) & Maya",
    shortDescription: "Bukti arkeologis paling mengejutkan tentang kontak pelayaran samudra antara suku Polinesia dan suku Andes ribuan tahun sebelum Columbus!",
    historicalStory: `Ubi jalar adalah 'senjata rahasia' para antropolog yang memecahkan teka-teki pelayaran samudra purba. Para ilmuwan bingung menemukan bahwa ubi jalar telah ditanam dan dimakan di Kepulauan Polinesia (Kepulauan Cook, Hawaii, Selandia Baru) sebelum tahun 1000 M—ratusan tahun sebelum bangsa Eropa 'menemukan' benua Amerika!\n\nBukti linguistiknya sangat mencengangkan: bahasa Quechua di Andes menyebut ubi jalar 'kumar' (atau kumara), dan bahasa Maori di Polinesia/Selandia Baru menyebut ubi jalar dengan nama yang sama persis: 'kumara'! Ini membuktikan pelaut Polinesia pernah berlayar mengarungi Samudra Pasifik hingga pesisir Amerika Selatan dan membawa umbi ini pulang.`,
    supermarketContrast: "Ubi cilembu manis madu yang sering kita jumpai di toko dan supermarket adalah varietas ubi jalar asal Amerika Selatan tropis yang menyelamatkan Tiongkok dan Jepang dari kelaparan massal pada abad ke-17.",
    funFact: "Di Selandia Baru, ubi jalar (kumara) adalah makanan sakral suku Maori yang penanamannya disertai mantra-mantra karakia khusus untuk Dewa Pertanian Rongo.",
    ancientTradeRoutes: ["Pelayaran Purba Polinesia-Amerika Selatan", "Pertukaran Columbus 1492"]
  },
  {
    id: "wortel",
    name: "Wortel Purba Ungu & Kuning (Wild Carrot)",
    scientificName: "Daucus carota subsp. sativus",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🥕",
    originRegion: "Dataran Tinggi Persia & Pegunungan Hindu Kush (Afghanistan)",
    vavilovCenter: "Asia Tengah & Stepa Eurasia",
    coordinates: [34.5, 69.2],
    approxDate: "± 900 M (Ditemukan di catatan Persia & Arab kuno)",
    domesticatingCivilization: "Petani Khurasan & Persia Kuno",
    shortDescription: "Sayuran yang aslinya berwarna UNGU pekat dan KUNING tajam sebelum diubah menjadi oranye pada abad ke-17 demi penghormatan kepada Pangeran Belanda!",
    historicalStory: `Hampir semua orang mengira wortel dari sananya selalu berwarna oranye terang. Fakta sejarahnya: SELAMA RIBUAN TAHUN, WORTEL BERWARNA UNGU GELAP ATAU KUNING PUCAT!\n\nWortel asli didomestikasikan di wilayah Afghanistan dan Persia modern sekitar abad ke-10. Umbinya kaya zat antosianin berwarna ungu seperti buah terong atau kuning kunyit. Wortel oranye baru diciptakan pada abad ke-17 oleh para petani di Belanda melalui persilangan mutan wortel kuning dan merah, sengaja dimuliakan untuk menghormati Wangsa Oranye-Nassau (House of Orange) yang memimpin perang kemerdekaan Belanda melawan Spanyol!`,
    supermarketContrast: "Di supermarket modern 99.9% wortel berwarna oranye. Jika kaisar Persia kuno melihat wortel oranye di supermarket hari ini, ia akan mengira itu tanaman mutan beracun!",
    funFact: "Wortel liar aslinya hanya dimanfaatkan biji aromatik dan daunnya oleh bangsa Yunani Kuno sebagai obat lambung, bukan umbi akarnya yang waktu itu kurus dan berkayu.",
    ancientTradeRoutes: ["Jalur Sutra Darat", "Perdagangan Abbasiyah Khurasan"]
  },
  {
    id: "kelapa-sawit",
    name: "Kelapa Sawit (African Oil Palm)",
    scientificName: "Elaeis guineensis",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🌴",
    originRegion: "Hutan Hujan Tropis Pesisir Afrika Barat (Nigeria, Ghana, Kamerun)",
    vavilovCenter: "Dataran Tinggi Etiopia & Sahel Afrika",
    coordinates: [6.5, 3.3],
    approxDate: "± 3.000 SM (Ditemukan guci minyak sawit di makam Mesir Kuno di Abydos)",
    domesticatingCivilization: "Masyarakat Pribumi Afrika Barat & Perdagangan Mesir Kuno",
    shortDescription: "Minyak nabati paling produktif di dunia yang kini mendominasi separuh produk supermarket modern dari sabun hingga margarin.",
    historicalStory: `Di sebuah makam Firaun di Abydos, Mesir, arkeolog menemukan bejana tanah liat berusia 5.000 tahun yang berisi sisa minyak sawit Afrika seberat beberapa kilogram—membuktikan telah ada perdagangan kuno dari hutan Guinea Afrika Barat melintasi benua Afrika.\n\nPohon sawit liar tumbuh subur di sepanjang sabana basah Afrika Barat, di mana minyak merah kaya karotenoidnya diperas tradisional untuk sup pedas dan sabun hitam Afrika. Pada tahun 1848, empat bibit pohon kelapa sawit Afrika dibawa ke Kebun Raya Bogor di Hindia Belanda (Indonesia) sebagai tanaman hias koleksi taman—yang kemudian menjadi cikal bakal seluruh industri jutaan hektar kelapa sawit di Indonesia dan Malaysia hari ini!`,
    supermarketContrast: "Di supermarket hari ini, lebih dari 50% produk kemasan—mulai dari mie instan, cokelat, sabun mandi, lipstik, deterjen hingga biskuit—mengandung minyak kelapa sawit. Komoditas raksasa Asia Tenggara ini aslinya 100% adalah tanaman endemik pesisir Afrika Barat!",
    funFact: "Empat bibit sawit pertama di Kebun Raya Bogor tahun 1848 dikenal dalam sejarah botani sebagai 'The Four Mother Palms of Southeast Asia'.",
    ancientTradeRoutes: ["Rute Perdagangan Afrika Barat Trans-Sahara", "Penyelundupan Botani Kolonial"]
  },
  {
    id: "lapis-lazuli",
    name: "Lapis Lazuli (Batu Permata Biru Purba)",
    scientificName: "Lazurite / Mineral Alami",
    category: "material",
    categoryLabel: "Kayu, Serat & Material",
    icon: "💎",
    originRegion: "Tambang Sar-e-Sang, Lembah Kokcha, Badakhshan (Afghanistan Timur Laut)",
    vavilovCenter: "Asia Tengah & Stepa Eurasia",
    coordinates: [36.2, 70.8],
    approxDate: "± 7.000 SM (Situs Mehrgarh & Ebla)",
    domesticatingCivilization: "Penambang Kuno Badakhshan, Peradaban Sumeria & Mesir Kuno",
    shortDescription: "Komoditas mineral tertua dalam sejarah perdagangan internasional manusia: batu biru langit berbintik emas pirit yang menghiasi topeng emas Tutankhamun.",
    historicalStory: `Sebelum jalur rempah atau sutra lahir, rute perdagangan jarak jauh tertua di dunia adalah 'Jalur Lapis Lazuli' (Lapis Lazuli Route) pada Zaman Perunggu. Selama lebih dari 6.000 tahun, HANYA ADA SATU TEMPAT DI SELURUH DUNIA yang menghasilkan batu biru langit ultramarin berkualitas tinggi: tambang Sar-e-Sang di jurang terjal pegunungan Hindu Kush, Badakhshan.\n\nDari lembah terpencil ini, batu lapis lazuli dibawa beribu-ribu kilometer melintasi padang pasir ke kota-kota Sumeria di Ur dan Babel, serta ke istana para Firaun di Mesir Kuno. Alis mata dan janggut pada topeng emas Firaun Tutankhamun yang terkenal di dunia dibuat dari tatahan batu lapis lazuli asal Badakhshan ini!`,
    supermarketContrast: "Di era modern, pigmen biru sintetis murah melimpah di cat tembok dan pakaian. Di Eropa era Renaisans, bubuk lapis lazuli murni yang digiling menjadi cat 'Ultramarine' bernilai lebih mahal dari emas, dan seniman seperti Michelangelo atau Vermeer hanya diizinkan menggunakannya untuk melukis jubah Bunda Maria.",
    funFact: "Batu lapis lazuli disebutkan dalam Epos Gilgamesh Sumeria (± 2100 SM) sebagai tanduk banteng surgawi dan mahkota dewi cinta Ishtar.",
    ancientTradeRoutes: ["Jalur Lapis Lazuli Kuno (Badakhshan-Mesopotamia)", "Jalur Kafilah Teluk Persia"]
  }
];

// DATASET PARADOKS SUPERMARKET (THE DISH ANALYZER)
const DISH_ANALYSIS = [
  {
    id: "rendang",
    name: "Rendang Sapi Khas Minangkabau (Indonesia)",
    imageIcon: "🍲",
    tagline: "Hidangan terlezat di dunia yang bahan aslinya menjelajahi empat benua",
    description: "Sebelum tahun 1500-an, nenek moyang orang Minang TIDAK BISA membuat rendang pedas merah seperti hari ini karena cabai merah belum ada di Asia!",
    ingredients: [
      {
        item: "Daging Sapi",
        origin: "Lembah Indus / Asia Selatan (Sapi Zebu)",
        pre1492Status: "Tersedia via domestikasi lokal & India",
        distance: "Lokal / Regional"
      },
      {
        item: "Cabai Merah & Rawit",
        origin: "Mesoamerika (Meksiko) - Benua Amerika!",
        pre1492Status: "TIDAK ADA! Sebelum abad ke-16, rasa pedas hanya dari lada hitam & cabai jawa.",
        distance: "Antar-Benua (Dunia Baru)"
      },
      {
        item: "Santan Kelapa",
        origin: "Asia Tenggara Maritim / Kepulauan Sundaland",
        pre1492Status: "Asli lokal Nusantara sejak ribuan tahun lalu",
        distance: "Endemik Nusantara"
      },
      {
        item: "Kunyit, Jahe, Serai, Lengkuas",
        origin: "Hutan Hujan Asia Tenggara Tropis",
        pre1492Status: "Bumbu purba lokal Nusantara",
        distance: "Endemik Nusantara"
      },
      {
        item: "Bawang Merah & Putih",
        origin: "Asia Tengah & Levant",
        pre1492Status: "Masuk via Jalur Sutra Maritim pada abad permulaan masehi",
        distance: "Eurasia Tengah"
      }
    ],
    historicalInsight: "Rendang purba sebelum kedatangan kapal Portugis berwarna cokelat kehitaman yang hanya mengandalkan lada hitam, ketumbar, dan kelapa sangrai, bukan warna merah membara dari cabai Meksiko!"
  },
  {
    id: "pizza-margherita",
    name: "Pizza Margherita Napoli (Italia)",
    imageIcon: "🍕",
    tagline: "Ikon kuliner Italia yang mustahil ada tanpa tanaman benua Amerika dan Timur Tengah",
    description: "Semua orang mengasosiasikan pasta dan pizza dengan tomat Italia. Namun Italia tidak mengenal tomat selama 1.500 tahun pertama peradabannya!",
    ingredients: [
      {
        item: "Adonan Roti Gandum",
        origin: "Hilal Subur (Fertile Crescent / Levant & Turki)",
        pre1492Status: "Tersedia sejak zaman Romawi kuno",
        distance: "Timur Dekat"
      },
      {
        item: "Saus Tomat Merah",
        origin: "Pegunungan Andes & Mesoamerika (Dunia Baru)!",
        pre1492Status: "TIDAK ADA! Orang Italia baru berani memakan tomat pada akhir 1600-an.",
        distance: "Antar-Benua (Dunia Baru)"
      },
      {
        item: "Keju Mozzarella Kerbau",
        origin: "Kerbau Rawa didomestikasi di India & Asia Tenggara, dibawa ke Italia abad ke-7 M",
        pre1492Status: "Hasil perdagangan abad pertengahan",
        distance: "Asia Selatan"
      },
      {
        item: "Minyak Zaitun",
        origin: "Levant pesisir Mediterania Timur (Lebanon/Suriah)",
        pre1492Status: "Sudah ada sejak zaman Yunani & Fenisia",
        distance: "Mediterania Kuno"
      },
      {
        item: "Daun Basil Segar",
        origin: "India & Asia Tenggara Tropis",
        pre1492Status: "Masuk ke Mediterania via ekspedisi Aleksander Agung",
        distance: "Asia Selatan"
      }
    ],
    historicalInsight: "Pizza Romawi kuno aslinya hanyalah roti focaccia pipih kering yang diolesi lemak babi, minyak zaitun, dan keju asin. Penambahan saus tomat merah baru diciptakan di Napoli pada abad ke-18 dan didedikasikan untuk Ratu Margherita pada tahun 1889!"
  },
  {
    id: "swiss-chocolate",
    name: "Cokelat Batangan Manis (Swiss / Belgia)",
    imageIcon: "🍫",
    tagline: "Simbol kemewahan Eropa dari tiga benua yang berbeda",
    description: "Eropa sama sekali tidak memiliki iklim untuk menanam pohon kakao atau tebu!",
    ingredients: [
      {
        item: "Biji Kakao (Cokelat)",
        origin: "Cekungan Amazon & Mesoamerika (Suku Olmek/Maya)",
        pre1492Status: "TIDAK ADA! Bangsa Eropa baru melihat kakao setelah penaklukan Aztek 1521.",
        distance: "Benua Amerika"
      },
      {
        item: "Gula Pasir Kristal",
        origin: "Pulau Papua / New Guinea & India",
        pre1492Status: "Sangat langka dan mewah di Eropa abad pertengahan",
        distance: "Melanesia / Asia Selatan"
      },
      {
        item: "Susu Kental / Bubuk",
        origin: "Eropa & Timur Dekat (Domestikasi sapi perah)",
        pre1492Status: "Lokal Eropa",
        distance: "Eurasia Kuno"
      },
      {
        item: "Ekstrak Vanila",
        origin: "Hutan Tropis Meksiko (Suku Totonac)",
        pre1492Status: "TIDAK ADA di Eropa pra-1492",
        distance: "Mesoamerika"
      }
    ],
    historicalInsight: "Jika peradaban supermarket modern runtuh dan jalur perdagangan global terputus, Swiss dan Belgia tidak akan bisa memproduksi satu batang cokelat pun karena pohon kakao hanya bisa tumbuh 20 derajat di utara dan selatan garis khatulistiwa!"
  },
  {
    id: "indian-curry",
    name: "Kari Ayam Pedas (India)",
    imageIcon: "🍛",
    tagline: "Kuliner seribu rempah yang rasa pedasnya diimpor dari seberang samudra",
    description: "Tanpa pedagang Portugis abad ke-16, kari India tidak akan pernah terasa pedas menyengat dari cabai!",
    ingredients: [
      {
        item: "Daging Ayam",
        origin: "Ayam Hutan Merah Asia Tenggara & Lembah Indus",
        pre1492Status: "Lokal India kuno",
        distance: "Lembah Indus"
      },
      {
        item: "Cabai Merah & Hijau",
        origin: "Mesoamerika (Meksiko)!",
        pre1492Status: "TIDAK ADA! Sebelum 1500, kari India hanya pedas dari lada hitam & jahe.",
        distance: "Benua Amerika"
      },
      {
        item: "Kunyit & Kapulaga",
        origin: "India Selatan & Ghats Barat",
        pre1492Status: "Rempah asli anak benua India",
        distance: "Lokal India"
      },
      {
        item: "Ketumbar & Jintan",
        origin: "Mediterania Timur & Hilal Subur",
        pre1492Status: "Diimpor lewat perdagangan purba dengan Mesopotamia",
        distance: "Timur Dekat"
      }
    ],
    historicalInsight: "Kata 'curry' berasal dari kata Tamil 'kari' yang berarti saus rempah. Sebelum kontak dengan bangsa Spanyol dan Portugis, rasa pedas kari India murni berasal dari butiran lada hitam Malabar."
  },
  {
    id: "kimchi",
    name: "Kimchi Merah Pedas (Korea)",
    imageIcon: "🥬",
    tagline: "Fermentasi sayur legendaris yang warnanya berubah total setelah globalisasi",
    description: "Kimchi purba berwarna putih pucat dan sama sekali tidak pedas!",
    ingredients: [
      {
        item: "Sawi Putih (Napa Cabbage)",
        origin: "Lembah Sungai Yangtze, Tiongkok",
        pre1492Status: "Tersedia sejak zaman Tiga Kerajaan Korea",
        distance: "Asia Timur"
      },
      {
        item: "Bubuk Cabai Merah (Gochugaru)",
        origin: "Mesoamerika (Meksiko)!",
        pre1492Status: "TIDAK ADA! Cabai baru masuk Semenanjung Korea akhir abad ke-16 via Jepang.",
        distance: "Benua Amerika"
      },
      {
        item: "Bawang Putih",
        origin: "Pegunungan Asia Tengah (Tian Shan)",
        pre1492Status: "Tersedia via Jalur Sutra ribuan tahun lalu",
        distance: "Asia Tengah"
      },
      {
        item: "Garam Laut & Saus Ikan",
        origin: "Pesisir Semenanjung Korea",
        pre1492Status: "Lokal Korea",
        distance: "Lokal"
      }
    ],
    historicalInsight: "Buku resep kuno Korea 'Sanga Yorok' (1459 M) mencatat resep kimchi yang hanya diasinkan dengan garam dan direndam arak beras tanpa sejumput pun bubuk cabai merah!"
  }
];

// JALUR PERTUKARAN BESAR (THE COLUMBIAN EXCHANGE 1492 & ANCIENT TRADE ROUTES)
const TRADE_ROUTES = [
  {
    id: "spice-route",
    name: "Jalur Rempah Maritim Purba (Maritime Spice Route)",
    period: "± 2000 SM – Abad ke-17 M",
    color: "#e67e22",
    description: "Rute pelayaran rempah legendaris dari Kepulauan Maluku & Sundaland melintasi Selat Malaka, Teluk Benggala, pesisir India, Laut Merah, hingga Alexandria dan Venesia.",
    waypoints: [
      [0.78, 127.36],   // Ternate / Maluku
      [-4.52, 129.90],  // Banda
      [-6.2, 106.8],    // Sunda Kelapa / Jawa
      [2.2, 102.2],     // Selat Malaka
      [10.8, 76.2],     // Malabar (Kochi/Kozhikode, India)
      [12.8, 45.0],     // Aden (Yaman)
      [27.8, 34.3],     // Laut Merah
      [31.2, 29.9],     // Alexandria (Mesir)
      [45.4, 12.3]      // Venesia (Italia)
    ]
  },
  {
    id: "silk-road",
    name: "Jalur Sutra Darat (Overland Silk Road)",
    period: "± 130 SM – 1453 M",
    color: "#c0392b",
    description: "Jalur kafilah terpanjang dunia menghubungkan Chang'an (Xi'an) di Tiongkok dengan Roma dan Konstantinopel, membawa sutra, teh, porselen, dan benih apel.",
    waypoints: [
      [34.3, 108.9],    // Chang'an (Xi'an)
      [40.1, 94.6],     // Dunhuang
      [43.8, 87.6],     // Urumqi (Tian Shan)
      [39.6, 66.9],     // Samarkand (Uzbekistan)
      [35.7, 51.4],     // Rayy / Teheran
      [33.3, 44.3],     // Bagdad
      [36.2, 36.1],     // Antiokhia
      [41.0, 28.9],     // Konstantinopel (Istanbul)
      [41.9, 12.5]      // Roma
    ]
  },
  {
    id: "columbian-new-to-old",
    name: "Pertukaran Columbus: Dari Dunia Baru ke Dunia Lama (1492+)",
    period: "Mulai 1492 M",
    color: "#27ae60",
    description: "Tanaman asli benua Amerika yang diekspor ke Afro-Eurasia: Jagung, Kentang, Tomat, Cabai, Kakao, Singkong, Vanila, Tembakau, Karet.",
    waypoints: [
      [19.4, -99.1],    // Meksiko (Tenochtitlan)
      [23.1, -82.3],    // Havana (Kuba)
      [28.0, -40.0],    // Samudra Atlantik
      [36.5, -6.3],     // Cadiz / Seville (Spanyol)
      [38.7, -9.1]      // Lisbon (Portugal)
    ]
  },
  {
    id: "columbian-old-to-new",
    name: "Pertukaran Columbus: Dari Dunia Lama ke Dunia Baru (1492+)",
    period: "Mulai 1492 M",
    color: "#2980b9",
    description: "Komoditas Afro-Eurasia yang dibawa ke benua Amerika: Gandum, Tebu, Kopi, Padi, Kuda, Sapi, Domba, Ayam, Pisang, Zaitun.",
    waypoints: [
      [36.5, -6.3],     // Seville (Spanyol)
      [28.1, -15.4],    // Kepulauan Canaria
      [20.0, -45.0],    // Samudra Atlantik
      [18.4, -69.9],    // Santo Domingo (Karibia)
      [12.0, -77.0]     // Lima (Peru)
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { VAVILOV_CENTERS, COMMODITIES_DATA, DISH_ANALYSIS, TRADE_ROUTES };
}

