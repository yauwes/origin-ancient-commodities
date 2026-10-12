/**
 * DATABASE KOMODITAS ALAM PURBA DUNIA (PRE-SUPERMARKET & PRE-COLUMBIAN EXCHANGE)
 * Menelusuri asal-usul otentik tanaman, rempah, pangan, dan fauna sebelum era perdagangan global modern.
 * Dilengkapi Sumber Referensi Akademis Terpercaya & Kronologi Pergerakan (SM / Masehi).
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
    commodities: ["gandum", "jelai", "lentil", "chickpea", "zaitun", "kurma", "tin", "domba", "delima", "pistachio"]
  },
  {
    id: "mesoamerica",
    name: "Mesoamerika (Lembah Meksiko, Maya, & Olmek)",
    period: "± 7.000 – 4.000 SM",
    coordinates: [19.4, -99.1],
    radius: 650000,
    color: "#27ae60",
    description: "Pusat agrikultur peradaban Maya, Olmek, dan Aztek. Menghasilkan bahan pangan terpenting dunia modern: jagung, kakao (cokelat), cabai, vanila, alpukat, dan tomat.",
    commodities: ["jagung", "kakao", "cabai", "vanila", "alpukat", "tomat", "labu", "kalkun", "tembakau", "bunga-matahari", "pepaya"]
  },
  {
    id: "andean",
    name: "Dataran Tinggi Andes & Amazon Hulu",
    period: "± 8.000 – 3.000 SM",
    coordinates: [-14.5, -72.0],
    radius: 750000,
    color: "#8e44ad",
    description: "Bentang alam ekstrem pegunungan Andes melahirkan lebih dari 4.000 varietas kentang liar, quinoa, serta hewan pekerja tangguh seperti llama dan alpaca bagi peradaban Inka dan Tiwanaku.",
    commodities: ["kentang", "quinoa", "singkong", "ubi-jalar", "kacang-tanah", "karet", "llama", "nanas", "kacang-mete", "markisa"]
  },
  {
    id: "china-east-asia",
    name: "Lembah Sungai Yangtze & Kuning (Tiongkok Purba)",
    period: "± 8.000 – 5.000 SM",
    coordinates: [32.0, 114.0],
    radius: 750000,
    color: "#c0392b",
    description: "Pusat peradaban agraris Asia Timur. Lembah Yangtze membudidayakan padi sawah basah pertama, sementara Lembah Sungai Kuning membudidayakan kedelai, teh, persik, dan ulat sutra.",
    commodities: ["padi", "kedelai", "teh", "sutra", "jeruk", "persik", "jawawut", "terong", "aprikot"]
  },
  {
    id: "indomalaya-wallacea",
    name: "Sundaland & Kepulauan Rempah Maluku (Nusantara)",
    period: "± 6.000 – 2.000 SM",
    coordinates: [-2.0, 120.0],
    radius: 900000,
    color: "#16a085",
    description: "Ibu kota rempah dunia purba. Cengkeh dan pala endemik murni hanya tumbuh di pulau-pulau vulkanik kecil di Maluku. Asia Tenggara maritim juga merupakan tanah asal tebu, pisang, kelapa, sagu, dan rimpang obat.",
    commodities: ["cengkeh", "pala", "cendana", "pisang", "tebu", "kelapa", "jahe", "kunyit", "gaharu", "talas", "sagu", "lengkuas", "sirih", "sukun"]
  },
  {
    id: "indian-subcontinent",
    name: "Anak Benua India & Lembah Indus (Harappa)",
    period: "± 7.000 – 3.000 SM",
    coordinates: [22.0, 78.0],
    radius: 750000,
    color: "#d35400",
    description: "Peradaban Lembah Sungai Indus dan Ghats Barat India. Tanah asal 'Raja Rempah' (lada hitam), kapulaga, mangga liar, serat katun/kapas purba, dan domestikasi ayam serta sapi zebu.",
    commodities: ["lada-hitam", "kapulaga", "mangga", "kapas", "ayam", "kayu-manis", "sapi-zebu", "wijen", "gula-pasir"]
  },
  {
    id: "ethiopian-sahel",
    name: "Dataran Tinggi Etiopia & Sahel Afrika",
    period: "± 5.000 – 2.000 SM",
    coordinates: [9.0, 39.0],
    radius: 750000,
    color: "#b7950b",
    description: "Tanah vulkanik subur pegunungan Kaffa di Etiopia yang melahirkan tanaman kopi arabika liar, serealia teff, sorgum tahan kekeringan, ubi yam, dan kelapa sawit Afrika.",
    commodities: ["kopi", "sorgum", "teff", "semangka", "sawit", "okra", "ubi-yam", "biji-kola"]
  },
  {
    id: "central-asia-steppes",
    name: "Asia Tengah & Stepa Eurasia (Tian Shan & Botai)",
    period: "± 4.000 – 2.000 SM",
    coordinates: [45.0, 75.0],
    radius: 800000,
    color: "#2980b9",
    description: "Hutan pohon buah liar Tian Shan (asal-usul seluruh apel modern di dunia) dan padang rumput tanpa batas tempat manusia pertama kali menunggangi dan mendomestikasi kuda di situs Botai.",
    commodities: ["apel", "wortel", "kuda", "bawang-putih", "kenari", "bawang-bombay", "lapis-lazuli"]
  },
  {
    id: "mediterranean",
    name: "Cekungan Mediterania & Kaukasus",
    period: "± 6.000 – 3.000 SM",
    coordinates: [39.0, 22.0],
    radius: 700000,
    color: "#7f8c8d",
    description: "Pusat budaya zaitun, fermentasi anggur (wine) purba di lereng Pegunungan Kaukasus (Georgia/Armenia), serta aneka sayuran daun brassica (kubis liar) sebelum menyebar ke seluruh Eropa.",
    commodities: ["anggur", "kubis", "rye", "oat", "kacang-hazel"]
  }
];

const COMMODITIES_DATA = [
  // =========================================================================
  // 1. NUSANTARA & ASIA TENGGARA MARITIM
  // =========================================================================
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
    approxDate: "± 2000 SM (Bukti bejana Terqa, Mesopotamia ~1721 SM)",
    domesticatingCivilization: "Masyarakat Adat Maluku Kuno (Ras Melanesia & Austronesia)",
    shortDescription: "Kuncup bunga kering aromatik yang pernah menjadi komoditas paling diburu di bumi, memicu pelayaran keliling dunia bangsa Eropa.",
    historicalStory: `Selama ribuan tahun, pohon cengkeh HANYA tumbuh di lima pulau vulkanik kecil di lepas pantai barat Halmahera: Ternate, Tidore, Moti, Makian, dan Bacan. Tidak ada tempat lain di seluruh planet bumi yang menghasilkan pohon ini sebelum abad ke-18.\n\nPada tahun 1721 SM, sekeping toples di situs Terqa (Suriah kuno, Mesopotamia) ditemukan berisi cengkeh yang diawetkan—membuktikan telah ada jaringan perdagangan maritim estafet melintasi Samudra Hindia 3.700 tahun lalu.\n\nPada era Romawi dan Dinasti Han Tiongkok (di mana para menteri wajib mengulum cengkeh sebelum berbicara dengan kaisar agar nafasnya harum), cengkeh dihargai setara bobot emas murni karena misteri lokasi asalnya yang dijaga ketat para pelaut Nusantara.`,
    supermarketContrast: "Hari ini Anda bisa membeli sebungkus cengkeh di supermarket manapun dengan harga beberapa ribu rupiah. Di abad ke-16, satu kapal penuh cengkeh yang dibawa kembali oleh awak Magellan ke Spanyol sudah cukup untuk melunasi seluruh biaya ekspedisi 5 kapal armada kerajaan Spanyol dan menjamin kekayaan seumur hidup pemiliknya.",
    funFact: "Pohon cengkeh tertua yang masih hidup di dunia bernama 'Afo', tumbuh di lereng Gunung Gamalama Ternate, berumur lebih dari 400 tahun dan menjadi saksi bisu monopoli VOC.",
    ancientTradeRoutes: ["Jalur Rempah Maritim Purba", "Jalur Sutra Maritim"],
    reference: {
      title: "Encyclopaedia Britannica - Clove (Syzygium aromaticum)",
      url: "https://www.britannica.com/plant/clove"
    }
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
    historicalStory: `Kepulauan Banda adalah gugusan pulau vulkanik terpencil di Laut Banda yang luas daratannya tak lebih dari 180 km persegi. Di pulau-pulau inilah satu-satunya habitat pohon pala asli di planet bumi.\n\nDi Eropa abad pertengahan, dokter meyakini pala adalah satu-satunya penangkal Wabah Hitam (Black Death). Harganya melonjak hingga 60.000% dari harga beli di Banda. Obsesi ini berujung pada Traktat Breda 1667 di mana Kerajaan Inggris menukar Pulau Run di Banda dengan sebuah pulau rawa milik Belanda bernama New Amsterdam—yang kini menjadi Kota Manhattan, New York!`,
    supermarketContrast: "Di supermarket modern, pala hanya bumbu taburan kue atau sup iga. Di abad ke-17, perebutan monopoli pala menyebabkan Jan Pieterszoon Coen dan VOC membantai dan mengusir hampir seluruh penduduk asli Banda (1621).",
    funFact: "Manhattan (New York) ditukar oleh Inggris kepada Belanda demi mempertahankan monopoli atas satu pulau kecil penghasil pala di Banda bernama Pulau Run.",
    ancientTradeRoutes: ["Jalur Rempah Maritim", "Jalur Perdagangan Jawa-Maluku"],
    reference: {
      title: "Kew Royal Botanic Gardens - Myristica fragrans (Nutmeg)",
      url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:587425-1"
    }
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
    approxDate: "± 8.000 SM (Situs Agrikultur Awal Rawa Kuk, Papua)",
    domesticatingCivilization: "Petani Awal Lembah Pegunungan Papua (Kuk Early Agricultural Site)",
    shortDescription: "Rumput manis raksasa yang mengubah manusia dari pemburu madu liar menjadi konsumen sukrosa global.",
    historicalStory: `Masyarakat adat Papua purba adalah orang pertama yang mendomestikasi rumput tebu liar (Saccharum robustum) sekitar 8000 SM. Pelaut Austronesia membawanya ke Nusantara dan India sekitar 1000 SM, tempat orang India menemukan teknik kristalisasi air tebu menjadi butiran pasir ('khanda', asal kata 'candy').`,
    supermarketContrast: "Hari ini gula pasir melimpah ruah dan murah di supermarket. Di Eropa abad pertengahan, gula dijuluki 'emas putih' dan hanya apoteker raja yang menyimpannya di peti terkunci sebagai ramuan obat langka.",
    funFact: "Teknik membuat gula pasir kristal pertama kali disempurnakan di India pada era Dinasti Gupta sekitar 350 Masehi.",
    ancientTradeRoutes: ["Migrasi Pelaut Austronesia", "Jalur Sutra Maritim", "Perdagangan Segitiga Atlantik"],
    reference: {
      title: "UNESCO World Heritage - Kuk Early Agricultural Site, Papua New Guinea",
      url: "https://whc.unesco.org/en/list/887/"
    }
  },
  {
    id: "pisang",
    name: "Pisang Liar ke Budidaya (Banana)",
    scientificName: "Musa acuminata / Musa balbisiana",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🍌",
    originRegion: "Asia Tenggara Daratan & Kepulauan Sundaland / New Guinea",
    vavilovCenter: "Sundaland & Kepulauan Rempah Maluku",
    coordinates: [-2.5, 115.0],
    approxDate: "± 7.000 – 5.000 SM",
    domesticatingCivilization: "Komunitas Pemburu & Petani Awal Wallacea & New Guinea",
    shortDescription: "Buah yang aslinya dipenuhi biji keras seperti batu sebelum diseleksi nenek moyang Austronesia menjadi buah manis tanpa biji.",
    historicalStory: `Pisang liar aslinya hampir tidak bisa dimakan: daging buahnya sangat sedikit dan dipenuhi ratusan biji keras. Seleksi panjang di Asia Tenggara Maritim dan New Guinea menghasilkan buah partenokarpi (tanpa biji). Pelaut Austronesia kemudian membawanya melintasi Samudra Hindia hingga tiba di Madagaskar dan Afrika sekitar 500 Masehi.`,
    supermarketContrast: "Di supermarket modern hampir seluruh pisang adalah satu klon identik: Cavendish. Di hutan asalnya di Nusantara, terdapat ratusan jenis pisang warna-warni.",
    funFact: "Nama ilmiah Musa berasal dari kata Arab 'mouz', sedangkan kata 'banana' berasal dari bahasa Wolof di Afrika Barat.",
    ancientTradeRoutes: ["Jalur Migrasi Austronesia Samudra Hindia", "Jalur Madagaskar-Afrika"],
    reference: {
      title: "FAO (Food and Agriculture Organization) - Banana Origins & Diversity",
      url: "https://www.fao.org/land-water/databases-and-software/crop-information/banana/en/"
    }
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
    shortDescription: "Kayu aromatik hemiparasit beraroma suci incaran kuil Buddha dan dupa kaisar Dinasti Tiongkok serta India.",
    historicalStory: `Pulau Timor kuno dikenal pedagang Tiongkok dan Arab sebagai 'Pulau Cendana'. Kayu teras pohon ini mengandung minyak atsiri santalol dengan keharuman yang bertahan puluhan tahun bahkan setelah ditebang. Prasasti Tiongkok kuno mencatat kapal niaga yang berlayar ribuan mil ke perairan Nusa Tenggara demi membeli kayu cendana putih terbaik dunia.`,
    supermarketContrast: "Kini aroma cendana di sabun supermarket adalah wewangian sintetis kimia (seperti javanol). Cendana asli Timor kini merupakan kayu langka yang dilindungi ketat.",
    funFact: "Pohon cendana adalah semi-parasit; akarnya harus menumpang menghisap nutrisi dari akar pohon inang lain untuk dapat bertahan hidup.",
    ancientTradeRoutes: ["Jalur Dagang Kayu Cendana Tiongkok-Timor", "Jalur Sutra Maritim"],
    reference: {
      title: "Kew Royal Botanic Gardens - Santalum album (Indian sandalwood)",
      url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:780658-1"
    }
  },
  {
    id: "kelapa",
    name: "Kelapa (Coconut)",
    scientificName: "Cocos nucifera",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🥥",
    originRegion: "Pesisir Asia Tenggara Maritim & Samudra Pasifik Barat",
    vavilovCenter: "Sundaland & Kepulauan Rempah Maluku",
    coordinates: [-6.0, 106.8],
    approxDate: "± 3.000 SM",
    domesticatingCivilization: "Bangsa Pelaut Austronesia",
    shortDescription: "'Pohon Kehidupan' penjelajah samudra purba yang menyediakan air tawar steril, minyak, tali sabut, dan kayu perahu.",
    historicalStory: `Analisis DNA tanaman membuktikan kelapa dibudidayakan di Asia Tenggara maritim. Buah kelapa yang mengapung di air laut selama berbulan-bulan dan retains air tawar steril di dalamnya bertindak sebagai kantong air minum darurat bagi para penjelajah bintang Austronesia yang mengarungi Samudra Pasifik menuju Polinesia dan Hawaii.`,
    supermarketContrast: "Di supermarket Anda membeli santan instan kotak atau minyak kelapa botolan. Bagi nenek moyang pelaut, kelapa adalah penyelamat nyawa dari dehidrasi di tengah samudera.",
    funFact: "Sabut kelapa (coir) adalah bahan baku tali kapal purba yang elastis dan tahan terhadap korosi air garam, kunci teknologi perahu cadik Nusantara.",
    ancientTradeRoutes: ["Jalur Migrasi Maritim Pasifik", "Jalur Rempah Nusantara"],
    reference: {
      title: "National Geographic - The Deep Roots of the Coconut",
      url: "https://www.nationalgeographic.com/culture/article/the-deep-roots-of-the-coconut"
    }
  },
  {
    id: "sagu",
    name: "Sagu (Sago Palm)",
    scientificName: "Metroxylon sagu",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🌴",
    originRegion: "Hutan Rawa Maluku & Dataran Rendah Papua (New Guinea)",
    vavilovCenter: "Sundaland & Kepulauan Rempah Maluku",
    coordinates: [-2.5, 136.0],
    approxDate: "± 4.000 SM",
    domesticatingCivilization: "Komunitas Pemburu-Peramu Rawa Papua & Maluku Kuno",
    shortDescription: "Pohon palem raksasa penghasil ratusan kilogram tepung pati di dalam batang pohonnya sebelum pohon berbunga dan mati.",
    historicalStory: `Satu pohon palem sagu dewasa dapat menghasilkan 150 hingga 300 kilogram tepung pati murni—cukup untuk memberi makan satu keluarga selama beberapa bulan. Masyarakat adat Papua dan Maluku telah memanen sagu ribuan tahun sebelum padi dikenal di kepulauan timur. Sagu diolah menjadi papeda atau dibakar menjadi lempeng sagu keras yang tahan disimpan bertahun-tahun di perahu layar.`,
    supermarketContrast: "Di supermarket Anda hanya melihat mutiara sagu kecil untuk bubur manis. Bagi peradaban rawa Papua dan Maluku, sagu adalah tulang punggung kehidupan yang menjaga kelestarian hutan tanpa perlu membabat tanah untuk sawah.",
    funFact: "Pohon sagu menyimpan seluruh energinya di empulur batang selama 10-15 tahun, dan jika tidak ditebang sebelum berbunga, seluruh pati tersebut akan habis diserap oleh bunga pohon lalu pohonnya mati.",
    ancientTradeRoutes: ["Jalur Maritim Wallacea", "Jalur Pelayaran Papua-Maluku"],
    reference: {
      title: "FAO - Sago Palm (Metroxylon sagu) Production and Processing",
      url: "https://www.fao.org/3/x5813e/x5813e00.htm"
    }
  },
  {
    id: "lengkuas",
    name: "Lengkuas / Laos (Galangal)",
    scientificName: "Alpinia galanga",
    category: "spice",
    categoryLabel: "Rempah-rempah",
    icon: "🫚",
    originRegion: "Hutan Tropis Maritim Nusantara & Asia Tenggara",
    vavilovCenter: "Sundaland & Kepulauan Rempah Maluku",
    coordinates: [-6.8, 107.6],
    approxDate: "± 2.000 SM",
    domesticatingCivilization: "Bangsa Pelaut Austronesia",
    shortDescription: "Rimpang aromatik beraroma tajam mirip pinus yang menjadi pondasi bumbu rendang, soto, dan tom yum.",
    historicalStory: `Lengkuas adalah bumbu purba asli Asia Tenggara yang telah diekspor ke Eropa sejak Abad Pertengahan. Pedagang Arab menyebutnya 'khalanjan', yang diserap menjadi nama bahasa Inggris 'galangal'. Pada abad ke-12, biarawati dan tabib Jerman Hildegard von Bingen memuji lengkuas sebagai 'bumbu kehidupan' penyembuh sakit jantung dan paru-paru.`,
    supermarketContrast: "Di supermarket modern barat lengkuas sering salah dikira sebagai jahe biasa. Padahal lengkuas memiliki aroma kayu pinus dan kapur barus yang unik dan tidak bisa digantikan oleh jahe.",
    funFact: "Di Eropa abad pertengahan, lengkuas diseduh dengan cuka hangat untuk mengobati kuda yang terserang flu dan demam.",
    ancientTradeRoutes: ["Jalur Rempah Maritim", "Perdagangan Jalur Sutra Laut"],
    reference: {
      title: "Kew Royal Botanic Gardens - Alpinia galanga (Greater Galangal)",
      url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:795775-1"
    }
  },

  // =========================================================================
  // 2. MESOAMERIKA (DUNIA BARU UTARA)
  // =========================================================================
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
    shortDescription: "Keajaiban seleksi botani prasejarah: mengubah rumput liar keras 'teosinte' menjadi bulir makanan pokok paling produktif di muka bumi.",
    historicalStory: `Tanaman liar asli jagung, 'teosinte', hanya memiliki tongkol seukuran kelingking dengan 5-12 biji berkulit sekeras batu. Nenek moyang suku Maya dan Aztek melipatgandakan ukuran bulirnya hingga ratusan kali lipat. Dalam mitologi Maya (Popol Vuh), manusia pertama diciptakan dari adonan tepung jagung putih dan kuning. Sebelum 1492, tidak ada satu pun orang di Eropa, Asia, atau Afrika yang pernah melihat tanaman jagung.`,
    supermarketContrast: "Di supermarket hari ini, lebih dari 25% produk olahan—mulai dari sirup fruktosa (HFCS), tepung maizena, pakan ayam, hingga bioplastik—berasal dari jagung Amerika.",
    funFact: "Orang Mesoamerika menemukan teknik 'Nixtamalization' (merendam jagung dalam air kapur sirih) yang melepaskan vitamin B3. Tanpa teknik ini, orang Eropa yang mengonsumsi jagung terkena wabah penyakit kulit pellagra.",
    ancientTradeRoutes: ["Rute Dagang Mesoamerika", "Pertukaran Columbus 1492"],
    reference: {
      title: "Proceedings of the National Academy of Sciences (PNAS) - Domestication of Maize in the Balsas Valley",
      url: "https://www.pnas.org/doi/10.1073/pnas.0812525106"
    }
  },
  {
    id: "kakao",
    name: "Kakao / Cokelat (Cacao)",
    scientificName: "Theobroma cacao",
    category: "stimulant",
    categoryLabel: "Minuman & Stimulan",
    icon: "🍫",
    originRegion: "Cekungan Amazon Hulu (Ekuador) & Domestikasi Mesoamerika (Olmek & Maya)",
    vavilovCenter: "Mesoamerika",
    coordinates: [18.0, -93.0],
    approxDate: "± 3.300 SM (Mayo-Chinchipe, Ekuador) & 1900 SM (Olmek)",
    domesticatingCivilization: "Kebudayaan Mayo-Chinchipe, Suku Olmek, Maya, dan Aztek",
    shortDescription: "'Makanan Para Dewa' yang aslinya diminum pahit, berbusa tebal, dan dibumbui cabai pedas serta vanila.",
    historicalStory: `Bagi bangsa Maya dan Aztek, biji kakao adalah mata uang resmi sekaligus minuman ritual para raja. Cokelat purba ('xocolatl' = air pahit) sama sekali tidak manis dan tidak memakai susu. Moctezuma II dilaporkan meminum 50 cawan emas xocolatl berbusa setiap hari. Cokelat batangan manis susu baru diciptakan pada abad ke-19 di Eropa.`,
    supermarketContrast: "Jika Anda membayangkan cokelat batangan manis susu Swiss di supermarket, orang Maya kuno akan menganggapnya aneh karena minuman asli mereka adalah minuman pahit dingin berbusa bercampur cabai bubuk.",
    funFact: "Nama ilmiah Theobroma diberikan oleh Carl Linnaeus yang berarti 'Makanan Para Dewa' dalam bahasa Yunani.",
    ancientTradeRoutes: ["Jalur Barter Kekaisaran Aztek", "Pertukaran Columbus 1492"],
    reference: {
      title: "Nature Ecology & Evolution - The use and domestication of Theobroma cacao in South America",
      url: "https://www.nature.com/articles/s41559-018-0697-x"
    }
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
    shortDescription: "Bumbu pedas kapsaisin yang merevolusi kuliner dunia dari Sambal Indonesia, Kari India, Kimchi Korea, hingga Tom Yum Thailand.",
    historicalStory: `SEBELUM TAHUN 1492, TIDAK ADA CABAI DI SELURUH ASIA ATAU EROPA! Sambal terasi Indonesia, masakan Padang, kari India, sup tom yum Thailand, dan kimchi merah Korea sama sekali tidak menggunakan cabai merah sebelum abad ke-16. Rasa pedas kuno di Asia murni berasal dari lada hitam (Piper nigrum), jahe, dan cabai jawa (Piper retrofractum). Columbus salah mengira buah ini sebagai lada India lalu menyebutnya 'pepper'.`,
    supermarketContrast: "Di supermarket Anda menganggap cabai adalah tanaman asli lokal Nusantara. Faktanya, cabai baru tiba di Indonesia sekitar 500 tahun lalu dibawa kapal dagang Portugis!",
    funFact: "Burung tidak memiliki reseptor rasa sakit terhadap zat kapsaisin, sehingga mereka dapat memakan cabai terpedas di dunia tanpa kepedasan.",
    ancientTradeRoutes: ["Pertukaran Columbus 1492", "Rute Armada Portugis Lisbon-Goa-Malaka"],
    reference: {
      title: "Science - Multiple Domestication of Chili Peppers across the Americas",
      url: "https://www.science.org/doi/10.1126/science.1147415"
    }
  },
  {
    id: "tomat",
    name: "Tomat (Tomato)",
    scientificName: "Solanum lycopersicum",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🍅",
    originRegion: "Kawasan Andes (spesies liar) & Domestikasi Buah Besar di Meksiko",
    vavilovCenter: "Mesoamerika",
    coordinates: [19.2, -98.9],
    approxDate: "± 500 SM (Domestikasi oleh bangsa Aztek)",
    domesticatingCivilization: "Peradaban Aztek (Bahasa Nahuatl: 'tomatl')",
    shortDescription: "Buah berair yang pernah ditakuti bangsa Eropa selama 200 tahun sebagai 'Apel Beracun' pembawa maut.",
    historicalStory: `Spesies liar tomat aslinya seukuran kelereng kecil di lereng Andes. Bangsa Aztek di Meksiko lah yang pertama kali menjinakkannya menjadi buah besar berair ('xitomatl'). Ketika dibawa ke Eropa pada abad ke-16, kaum bangsawan mengira tomat beracun karena asam tomat melarutkan timbal pada piring pewter mereka hingga menyebabkan keracunan timbal!`,
    supermarketContrast: "Pizza Italia dan pasta bolognese saus tomat di supermarket mustahil ada sebelum tahun 1500-an. Saus tomat baru mulai diterima di Napoli pada akhir abad ke-17.",
    funFact: "Hingga tahun 1820 di Amerika Serikat, tomat masih dianggap tanaman beracun mematikan.",
    ancientTradeRoutes: ["Pertukaran Columbus 1492", "Rute Spanyol Baru"],
    reference: {
      title: "Encyclopaedia Britannica - Tomato (Solanum lycopersicum)",
      url: "https://www.britannica.com/plant/tomato"
    }
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
    shortDescription: "Satu-satunya anggrek di dunia yang menghasilkan rempah pangan bernilai tinggi.",
    historicalStory: `Suku Totonac menyebutnya 'tlilxochitl' (bunga hitam). Selama ratusan tahun setelah dibawa ke Eropa, pohon anggrek vanila yang ditanam di kebun raya Paris dan London selalu berbunga mekar tetapi TIDAK PERNAH menghasilkan buah vanila! Misteri ini terjadi karena di alam liar, bunga vanila hanya bisa diserbuki oleh lebah endemik Meksiko tanpa sengat bernama Melipona.`,
    supermarketContrast: "Di supermarket, 99% perisa vanila pada es krim adalah 'vanilin sintetik' dari limbah kayu atau minyak bumi. Polong vanila asli adalah rempah termahal kedua di dunia setelah saffron.",
    funFact: "Teknik penyerbukan manual bunga vanila ditemukan pada tahun 1841 oleh seorang anak budak berusia 12 tahun bernama Edmond Albius di Pulau Réunion.",
    ancientTradeRoutes: ["Pertukaran Columbus 1492", "Perdagangan Kerajaan Spanyol"],
    reference: {
      title: "Kew Royal Botanic Gardens - Vanilla planifolia (Vanilla Orchid)",
      url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:653457-1"
    }
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
    shortDescription: "Buah berlemak gurih peninggalan zaman es yang aslinya dimakan oleh Megafauna Kungkang Raksasa Purba.",
    historicalStory: `Biji alpukat yang sangat besar dirancang oleh alam purba untuk ditelan bulat-bulat oleh Megafauna Zaman Es seperti Gomphothere (gajah purba) dan Megatherium (kungkang seukuran gajah). Ketika hewan-hewan ini punah 12.000 tahun lalu, pohon alpukat hampir punah sampai manusia purba Mesoamerika menyukai daging buahnya dan mulai menanamnya di pekarangan desa mereka.`,
    supermarketContrast: "Kini alpukat menjadi tren 'avocado toast' di kafe modern seluruh dunia. Kata 'alpukat' berasal dari bahasa Nahuatl 'āhuacatl' yang berarti buah zakar karena bentuk buahnya menggantung berpasangan.",
    funFact: "Karena daun dan kulitnya beracun bagi banyak mamalia kecil, hanya manusia dan megafauna purba yang bisa mengonsumsinya secara aman.",
    ancientTradeRoutes: ["Jalur Pertukaran Mesoamerika", "Pertukaran Columbus 1492"],
    reference: {
      title: "Smithsonian Magazine - Why the Avocado Should Have Gone Extinct",
      url: "https://www.smithsonianmag.com/arts-culture/why-the-avocado-should-have-gone-extinct-180968940/"
    }
  },

  // =========================================================================
  // 3. ANDES & AMERIKA SELATAN (INKA, TIWANAKU, AMAZON)
  // =========================================================================
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
    shortDescription: "Umbi penyelamat kelaparan Eropa yang tumbuh di ketinggian 4.000 meter di pegunungan es Andes.",
    historicalStory: `Petani Aymara dan Inka purba menjinakkan umbi liar Andes yang beracun dengan menciptakan teknik pengawetan beku-kering pertama di dunia bernama 'chuño'. Ketika dibawa ke Eropa oleh bangsa Spanyol pada 1570, kentang melipatgandakan pasokan kalori, mengakhiri siklus kelaparan massal berkala Eropa, dan memicu ledakan populasi yang memungkinkan Revolusi Industri.`,
    supermarketContrast: "Di supermarket Anda hanya mengenal 1-2 varietas kentang. Di pasar tradisional Andes Peru saat ini, petani lokal masih membudidayakan lebih dari 4.000 kultivar kentang unik dengan aneka warna dan corak.",
    funFact: "Ketergantungan ekstrem bangsa Irlandia pada satu jenis varietas kentang impor menyebabkan Wabah Kelaparan Besar Irlandia (Great Famine 1845-1852) yang menewaskan 1 juta jiwa.",
    ancientTradeRoutes: ["Sistem Lumbung Qullqa Kekaisaran Inka", "Pertukaran Columbus 1492"],
    reference: {
      title: "International Potato Center (CIP) - Potato Origins & Diversity in the Andes",
      url: "https://cipotato.org/potato/"
    }
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
    historicalStory: `Singkong liar mengandung senyawa glikosida sianogenik yang melepaskan racun hidrogen sianida (HCN). Suku Amazon purba menemukan teknologi pengolahan biokimia: memarut umbi dan memasukkannya ke pipa anyaman elastis 'tipiti' untuk memeras getah sianidanya sebelum dipanggang menjadi tepung tapioka ('farinha'). Pelaut Portugis membawanya ke Afrika dan Asia pada abad ke-16.`,
    supermarketContrast: "Keripik singkong, tepung tapioka boba, dan singkong goreng di supermarket adalah komoditas Dunia Baru asal Amazon yang baru dikenal masyarakat Nusantara pada abad ke-19 era kolonial Belanda.",
    funFact: "Boba kenyal pada minuman kekinian boba milk tea 100% terbuat dari tepung tapioka olahan pati akar singkong Amazon.",
    ancientTradeRoutes: ["Pertukaran Columbus 1492", "Perdagangan Portugis Trans-Atlantik"],
    reference: {
      title: "PNAS - Origin and Domestication of Cassava (Manihot esculenta) in the Southern Amazon",
      url: "https://www.pnas.org/doi/10.1073/pnas.97.8.4386"
    }
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
    shortDescription: "'Ibu Segala Biji' (Chisaya Mama) peradaban Inka yang kaya asam amino esensial lengkap dan sanggup tumbuh di tanah beku.",
    historicalStory: `Bagi kaisar Inka (Sapa Inka), menanam benih quinoa pertama setiap musim semi dengan sekop emas adalah upacara kenegaraan paling sakral. Spanyol sempat melarang budidaya quinoa karena dianggap tanaman pagan, sehingga quinoa hampir punah dan hanya bertahan di desa terpencil pucuk gunung Andes.`,
    supermarketContrast: "Di supermarket perkotaan modern quinoa dijual mahal sebagai 'superfood' premium. Bagi prajurit Inka kuno, bola quinoa campur lemak llama adalah ransum perang standar yang membuat mereka mampu mendaki tebing Andes berhari-hari.",
    funFact: "NASA memilih quinoa sebagai tanaman ideal untuk misi stasiun luar angkasa karena komposisi asam amino lengkapnya.",
    ancientTradeRoutes: ["Jalur Qhapaq Ñan (Jalan Raya Inka)"],
    reference: {
      title: "FAO - International Year of Quinoa (Supercrop of the Andes)",
      url: "https://www.fao.org/quinoa-2013/en/"
    }
  },
  {
    id: "kacang-tanah",
    name: "Kacang Tanah (Peanut)",
    scientificName: "Arachis hypogaea",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🥜",
    originRegion: "Lembah Gran Chaco & Kaki Andes (Bolivia & Argentina Barat Laut)",
    vavilovCenter: "Dataran Tinggi Andes & Amazon Hulu",
    coordinates: [-19.0, -64.0],
    approxDate: "± 5.600 SM",
    domesticatingCivilization: "Peradaban Pra-Inka & Moche",
    shortDescription: "Polong ajaib yang bunganya mekar di udara tetapi membengkokkan tangkainya masuk ke dalam tanah untuk mematangkan bijinya.",
    historicalStory: `Kacang tanah adalah keajaiban botani geokarpi: bunganya mekar di udara, tetapi setelah penyerbukan tangkainya memanjang dan menancap masuk ke dalam tanah untuk membesarkan polongnya di dalam kegelapan. Di makam El Señor de Sipán (Peru, ± 300 M), arkeolog menemukan kalung megah manik-manik kacang tanah raksasa dari emas dan perak murni.`,
    supermarketContrast: "Bumbu kacang sate, gado-gado, dan selai kacang terasa sangat identik dengan dapur Indonesia atau Barat, padahal kacang tanah adalah komoditas Amerika Selatan yang baru dibawa ke Asia pada abad ke-16.",
    funFact: "Kacang tanah secara botani bukanlah kacang pohon (nut), melainkan polong-polongan (legume) sekeluarga dengan kedelai.",
    ancientTradeRoutes: ["Rute Dagang Pra-Inka Pasifik", "Pertukaran Columbus 1492"],
    reference: {
      title: "Nature Genetics - The genome of cultivated peanut (Arachis hypogaea)",
      url: "https://www.nature.com/articles/s41588-019-0405-z"
    }
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
    domesticatingCivilization: "Suku Pribumi Tupi-Guarani ('ananas' = buah wangi)",
    shortDescription: "Kumpulan ratusan buah beri menyatu yang pernah disewa bangsawan Eropa abad ke-18 seharga ribuan poundsterling hanya untuk dipajang di pesta.",
    historicalStory: `Suku Tupi-Guarani menyebarkan nanas ke seluruh benua Amerika. Di Inggris abad ke-18, satu butir nanas segar bisa berharga hingga ribuan poundsterling dalam nilai uang hari ini karena sulitnya transportasi kapal tanpa membusuk. Kaum bangsawan menyewa nanas hanya untuk ditenteng ke pesta dansa malam hari sebagai simbol kemewahan tertinggi.`,
    supermarketContrast: "Di supermarket Anda membeli nanas potong kaleng dengan harga belasan ribu rupiah. 250 tahun lalu di London, orang membayar uang sewa mahal hanya untuk memajang nanas semalam di meja tamu.",
    funFact: "Nanas mengandung enzim bromelain yang memecah protein—rasa 'menggigit' di lidah saat memakan nanas adalah enzim tersebut yang sedang memecah protein permukaan lidah Anda.",
    ancientTradeRoutes: ["Rute Tupi-Guarani", "Pertukaran Columbus 1492"],
    reference: {
      title: "Kew Royal Botanic Gardens - Ananas comosus (Pineapple)",
      url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:112001-3"
    }
  },

  // =========================================================================
  // 4. HILAL SUBUR (MESOPOTAMIA, LEVANT, ANATOLIA)
  // =========================================================================
  {
    id: "gandum",
    name: "Gandum Kuno (Einkorn & Emmer Wheat)",
    scientificName: "Triticum monococcum / Triticum dicoccum",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🌾",
    originRegion: "Lereng Pegunungan Karacadag, Anatolia Tenggara (dekat Göbekli Tepe, Turki)",
    vavilovCenter: "Hilal Subur (Fertile Crescent)",
    coordinates: [37.7, 39.8],
    approxDate: "± 9.600 – 8.500 SM (Situs Göbekli Tepe & Nevalı Çori)",
    domesticatingCivilization: "Kebudayaan Natufia & Pembangun Kuil Göbekli Tepe",
    shortDescription: "Ibu dari seluruh peradaban Barat dan Timur Dekat: tanaman yang mengakhiri era berburu-meramu manusia dan menciptakan kota-kota pertama di bumi.",
    historicalStory: `Analisis DNA tanaman membuktikan nenek moyang seluruh gandum di bumi berasal dari satu lereng bukit vulkanik Karacadag di tenggara Turki—dekat kuil batu tertua dunia, Göbekli Tepe. Penjinakan gandum melahirkan roti pertama, bir pertama, undang-undang tertulis pertama, dan tulisan paku tertua Sumeria untuk menghitung hasil panen.`,
    supermarketContrast: "Roti tawar, mie instan, pasta, biskuit, dan pizza di rak supermarket semuanya berbahan dasar terigu gandum. 11.000 tahun lalu, penemuan ini memaksa manusia berhenti mengembara dan membangun kota permanen pertama.",
    funFact: "Arkeolog meyakini motivasi awal manusia membudidayakan gandum di Göbekli Tepe adalah untuk membuat bir beralkohol demi pesta ritual keagamaan kuil.",
    ancientTradeRoutes: ["Penyebaran Agrikultur Neolitikum ke Eropa", "Jalur Dagang Mesopotamia Purba"],
    reference: {
      title: "Science - Site of Einkorn Wheat Domestication Identified by DNA Fingerprinting",
      url: "https://www.science.org/doi/10.1126/science.278.5341.1312"
    }
  },
  {
    id: "jelai",
    name: "Jelai / Barley",
    scientificName: "Hordeum vulgare",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🌾",
    originRegion: "Cekungan Sungai Yordan & Lembah Bulan Sabit Subur",
    vavilovCenter: "Hilal Subur (Fertile Crescent)",
    coordinates: [32.0, 35.5],
    approxDate: "± 8.500 SM",
    domesticatingCivilization: "Petani Neolitikum Levant & Sumeria Kuno",
    shortDescription: "Biji pokok tangguh tanah asin yang menjadi bahan baku bir pertama peradaban Sumeria dan Mesir Kuno.",
    historicalStory: `Jelai adalah salah satu tanaman pertama yang dijinakkan bersama gandum. Keunggulan jelai adalah ketahanannya terhadap tanah bersalinitas tinggi dan kering di mana gandum gagal tumbuh. Di Sumeria kuno, upah harian para pekerja dan prajurit dibayar dalam takaran liter jelai dan ransum tempayan bir jelai beralkohol.`,
    supermarketContrast: "Kini jelai lebih banyak digunakan sebagai malt bir atau pakan ternak. Di dunia kuno, jelai adalah mata uang standar tertulis pertama dalam tablet lempung paku bangsa Sumeria.",
    funFact: "Prasasti tablet Hammurabi mencatat aturan hukum tertua tentang takaran standar bir jelai dan larangan menipu volume bir di kedai minum.",
    ancientTradeRoutes: ["Jalur Mesopotamia-Mesir", "Rute Perunggu Kuno"],
    reference: {
      title: "Encyclopaedia Britannica - Barley (Hordeum vulgare)",
      url: "https://www.britannica.com/plant/barley-cereal"
    }
  },
  {
    id: "zaitun",
    name: "Zaitun & Minyak Zaitun (Olive)",
    scientificName: "Olea europaea",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🫒",
    originRegion: "Pesisir Levant (Palestina, Lebanon, Suriah) & Anatolia",
    vavilovCenter: "Hilal Subur (Fertile Crescent)",
    coordinates: [33.5, 35.8],
    approxDate: "± 6.000 – 4.500 SM",
    domesticatingCivilization: "Masyarakat Kanaan & Bangsa Fenisia",
    shortDescription: "Cairan emas peradaban Mediterania yang menyinari lentera kuil, melumasi atlet Olimpiade Yunani, dan mengawetkan makanan para kaisar.",
    historicalStory: `Bagi Yunani Kuno, pohon zaitun adalah hadiah Dewi Athena. Pelaut Fenisia membawanya mengelilingi Mediterania: ke Yunani, Sisilia, Kartago, hingga Spanyol. Bukit Monte Testaccio di Roma adalah bukit setinggi 35 meter yang seluruhnya terbentuk dari pecahan 53 juta bejana keramik (amfora) minyak zaitun kuno.`,
    supermarketContrast: "Di supermarket Anda membeli minyak Extra Virgin Olive Oil botolan. Di Roma Kuno, minyak zaitun adalah bahan bakar penerangan lentera rumah, sabun mandi, hingga minyak urapan raja.",
    funFact: "Pohon zaitun di Kreta (Vouves) diperkirakan berusia lebih dari 3.000 tahun dan masih berbuah subur hingga hari ini.",
    ancientTradeRoutes: ["Jalur Dagang Maritim Fenisia", "Rute Kekaisaran Romawi"],
    reference: {
      title: "Kew Royal Botanic Gardens - Olea europaea (Olive)",
      url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:610996-1"
    }
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
    shortDescription: "'Pohon Kehidupan' oase padang pasir berkadar gula 70%, bahan bakar kafilah penjelajah gurun tandus.",
    historicalStory: `Dalam epos tertua manusia, Gilgamesh dari Sumeria kuno, kurma disebutkan sebagai makanan para raja dan pahlawan. Buah kurma yang dikeringkan dapat disimpan selama bertahun-tahun tanpa membusuk, menjadi ransum wajib bagi kafilah pedagang unta yang melintasi Gurun Arab dan Sahara.`,
    supermarketContrast: "Kini kurma identik dengan bulan Ramadan di seluruh dunia. Tanpa pohon kurma liar yang dijinakkan bangsa Sumeria, kota-kota oase di tengah padang pasir Timur Tengah mustahil pernah terbentuk.",
    funFact: "Biji kurma berusia 2.000 tahun yang ditemukan di benteng Masada di gurun Yudea berhasil dikecambahkan kembali oleh ilmuwan pada 2005 dan tumbuh menjadi pohon hidup sehat bernama 'Methuselah'.",
    ancientTradeRoutes: ["Jalur Kafilah Dupa & Rempah Arab", "Jalur Sutra Darat"],
    reference: {
      title: "Science - Germination, Genetics, and Growth of an Ancient Date Seed",
      url: "https://www.science.org/doi/10.1126/science.1153600"
    }
  },
  {
    id: "domba",
    name: "Domba & Kambing (Sheep & Goat Domestication)",
    scientificName: "Ovis aries / Capra hircus",
    category: "fauna",
    categoryLabel: "Hewan Ternak & Domestikasi",
    icon: "🐑",
    originRegion: "Pegunungan Zagros & Taurus (Iran Barat & Turki Timur)",
    vavilovCenter: "Hilal Subur (Fertile Crescent)",
    coordinates: [35.0, 46.0],
    approxDate: "± 10.000 – 9.000 SM (Dari Muflon Asia liar)",
    domesticatingCivilization: "Penggembala Neolitikum Zagros",
    shortDescription: "Hewan ternak pertama yang dijinakkan manusia untuk mengubah rumput padang kering menjadi wol hangat, susu, keju, dan daging.",
    historicalStory: `Penjinakan muflon liar bertanduk menjadi domba jinak di lereng Pegunungan Zagros adalah pilar kedua lahirnya peradaban bersama tanaman gandum. Domba mencerna selulosa rumput padang stepa yang tidak bisa dimakan manusia menjadi lemak bergizi, susu, dan wol pembuat pakaian hangat.`,
    supermarketContrast: "Daging kambing, keju feta, dan benang wol di supermarket modern bermula dari kawanan muflon liar yang dikurung di gua pegunungan Iran 11.000 tahun lalu.",
    funFact: "Mata domba memiliki pupil berbentuk garis horisontal persegi panjang yang memberi mereka sudut pandang periferal hampir 320 derajat tanpa perlu memutar kepala.",
    ancientTradeRoutes: ["Jalur Penggembala Nomaden Zagros-Tigris"],
    reference: {
      title: "Science - The Evolutionary History of Domestic Sheep",
      url: "https://www.science.org/doi/10.1126/science.aav0912"
    }
  },

  // =========================================================================
  // 5. ASIA TIMUR (TIONGKOK PURBA)
  // =========================================================================
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
    approxDate: "± 9.000 – 7.000 SM (Fosil fitolit padi di Situs Shangshan)",
    domesticatingCivilization: "Kebudayaan Hemudu & Liangzhu Purba",
    shortDescription: "Biji makanan pokok lebih dari separuh populasi planet bumi, melahirkan birokrasi dan rekayasa irigasi tertua di Asia.",
    historicalStory: `Budidaya padi sawah basah membutuhkan gotong royong masif: membangun bendungan terasering lereng bukit, parit irigasi, dan kalender tanam presisi astronomi. Kebutuhan kolektif inilah yang melahirkan struktur negara tersentralisasi dan birokrasi kekaisaran pertama di Tiongkok kuno sebelum menyebar ke Nusantara, Korea, dan Jepang.`,
    supermarketContrast: "Bagi orang Indonesia, ungkapan 'belum makan kalau belum makan nasi' adalah bukti dominasi komoditas ini. 10.000 tahun lalu, beras hanyalah rumput rawa liar di tepi sungai Yangtze.",
    funFact: "Di Tiongkok zaman Dinasti Ming, bubur beras ketan dicampur kapur tohor digunakan sebagai adonan semen perekat batu bata Tembok Besar Tiongkok.",
    ancientTradeRoutes: ["Penyebaran Agrikultur Austronesia", "Jalur Sutra Maritim"],
    reference: {
      title: "PNAS - Earliest Rice Domestication in the Yangtze River Basin",
      url: "https://www.pnas.org/doi/10.1073/pnas.1213032110"
    }
  },
  {
    id: "teh",
    name: "Teh (Tea)",
    scientificName: "Camellia sinensis",
    category: "stimulant",
    categoryLabel: "Minuman & Stimulan",
    icon: "🍵",
    originRegion: "Pegunungan Hengduan, Provinsi Yunnan & Sichuan, Tiongkok Barat Daya",
    vavilovCenter: "Lembah Sungai Yangtze & Kuning",
    coordinates: [24.5, 101.5],
    approxDate: "± 2.737 SM (Legenda Shennong) & Abad ke-2 SM (Makam Han)",
    domesticatingCivilization: "Suku Pribumi Pu & Shu Kuno di Tiongkok Barat Daya",
    shortDescription: "Minuman paling banyak dikonsumsi di bumi setelah air mineral, pemicu filsafat Zen, diplomasi Tang, hingga Perang Candu.",
    historicalStory: `Awalnya teh dikonsumsi sebagai sup herbal obat. Di era Dinasti Tang (618-907 M), Lu Yu menulis 'Cha Jing' (Kitab Suci Teh), mengangkat teh menjadi seni estetika dan spiritual. Kafilah membawa bata teh padat melintasi Jalur Kuda-Teh Kuno (Tea Horse Road) menuju dataran tinggi Tibet untuk ditukar dengan kuda-kuda perang kekaisaran.`,
    supermarketContrast: "Di supermarket Anda membeli teh celup kantong instan. Di abad ke-19 di Eropa, teh adalah simbol kemewahan yang memicu Perang Candu Inggris-Tiongkok dan insiden Boston Tea Party pemicu revolusi Amerika.",
    funFact: "Bata teh padat pernah digunakan sebagai mata uang resmi di Tiongkok, Tibet, dan Siberia hingga awal abad ke-20 karena nilainya stabil dan bisa diseduh saat krisis.",
    ancientTradeRoutes: ["Jalur Kuda-Teh Kuno (Chamagudao)", "Jalur Sutra Darat & Maritim"],
    reference: {
      title: "Kew Royal Botanic Gardens - Camellia sinensis (Tea Plant)",
      url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:828549-1"
    }
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
    shortDescription: "Biji ajaib fiksasi nitrogen penyelamat protein nabati miliaran manusia melalui tahu, tempe, kecap, dan miso.",
    historicalStory: `Bangsa Tiongkok kuno menempatkan kedelai sebagai salah satu dari 'Lima Biji Keramat' (Wu Gu). Orang Tiongkok menemukan teknik fermentasi dan koagulasi menjadi tahu dan kecap pada era Dinasti Han. Di Nusantara pada abad ke-16, masyarakat Jawa menyempurnakan fermentasi jamur Rhizopus oligosporus, melahirkan Tempe!`,
    supermarketContrast: "Minyak goreng, pakan ternak sapi, susu kedelai, dan nugget di supermarket modern hampir semuanya mengandung protein kedelai. 90% pasokan kedelai Indonesia hari ini diimpor dari Amerika Serikat dan Brasil.",
    funFact: "Catatan tertua mengenai tempe di Nusantara tertulis dalam naskah Serat Centhini (awal abad ke-19) hidangan 'sambel tache tempe'.",
    ancientTradeRoutes: ["Jalur Dagang Asia Timur", "Penyebaran Maritim Asia Tenggara"],
    reference: {
      title: "Nature Biotechnology - Resequencing of 302 wild and cultivated accessions identifies genes related to soybean domestication",
      url: "https://www.nature.com/articles/nbt.3096"
    }
  },
  {
    id: "sutra",
    name: "Ulat Sutra & Kain Sutra (Sericulture)",
    scientificName: "Bombyx mori",
    category: "material",
    categoryLabel: "Kayu, Serat & Material",
    icon: "🧵",
    originRegion: "Lembah Sungai Kuning (Kebudayaan Yangshao), Tiongkok",
    vavilovCenter: "Lembah Sungai Yangtze & Kuning",
    coordinates: [34.5, 112.5],
    approxDate: "± 4.000 – 3.000 SM (Kepompong sutra tertua di Henan)",
    domesticatingCivilization: "Permaisuri Leizu & Kebudayaan Yangshao",
    shortDescription: "Serat protein berkilau paling mewah dalam sejarah peradaban, rahasia negara paling ketat dijaga yang menamai Jalur Sutra.",
    historicalStory: `Kekaisaran Tiongkok menjaga rahasia serikultur dengan ancaman hukuman pancung mati bagi siapapun yang menyelundupkan telur ulat sutra atau bibit murbei keluar perbatasan. Kain sutra mengalir melintasi gurun Taklamakan ke Roma Kuno di mana para senator Romawi mengecam sutra karena begitu tipis tembus pandang dan menguras kas emas kekaisaran.`,
    supermarketContrast: "Kini pakaian sutra bisa dibeli di toko garmen modern. Di zaman kuno, berat kain sutra dihargai setara bobot emas murni.",
    funFact: "Rahasia sutra bocor ke Barat pada 552 M ketika dua biarawan Nestorian menyelundupkan telur ulat sutra ke Konstantinopel di dalam rongga tongkat bambu jalan kaki mereka.",
    ancientTradeRoutes: ["Jalur Sutra Darat Utama (Chang'an ke Roma)", "Jalur Sutra Maritim"],
    reference: {
      title: "Encyclopaedia Britannica - Silk & Sericulture History",
      url: "https://www.britannica.com/topic/silk"
    }
  },

  // =========================================================================
  // 6. ASIA SELATAN & LEMBAH INDUS
  // =========================================================================
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
    approxDate: "± 2.000 SM (Ditemukan di lubang hidung mumi Ramses II 1213 SM)",
    domesticatingCivilization: "Peradaban Pesisir Malabar Kuno",
    shortDescription: "'Raja Segala Rempah' yang pernah menjadi mata uang resmi untuk membayar upeti perang di Eropa Kuno.",
    historicalStory: `Ketika Firaun Ramses II dari Mesir Kuno dimumikan pada 1213 SM, pendeta Mesir memasukkan butiran lada hitam Malabar ke lubang hidungnya sebagai balsem pengawet suci. Ketika Raja Visigoth Alaric mengepung kota Roma pada 408 M, salah satu tebusan utama yang ia tuntut agar tidak membakar kota adalah 3.000 pon lada hitam murni.`,
    supermarketContrast: "Di meja restoran atau supermarket modern merica bubuk disediakan gratis di botol kecil. Di Abad Pertengahan Eropa, julukan 'karung lada' (pepper sack) disematkan pada orang yang luar biasa kaya raya.",
    funFact: "Pepatah Prancis kuno 'cher comme poivre' (semahal lada) digunakan untuk menggambarkan barang yang tak ternilai harganya.",
    ancientTradeRoutes: ["Rute Angin Muson Samudra Hindia (Berenike-Muziris)", "Jalur Sutra Maritim"],
    reference: {
      title: "Kew Royal Botanic Gardens - Piper nigrum (Black Pepper)",
      url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:682572-1"
    }
  },
  {
    id: "kapas",
    name: "Kapas / Katun (Cotton)",
    scientificName: "Gossypium arboreum / herbaceum",
    category: "material",
    categoryLabel: "Kayu, Serat & Material",
    icon: "☁️",
    originRegion: "Lembah Sungai Indus (Mehrgarh & Mohenjo-daro, Pakistan/India)",
    vavilovCenter: "Anak Benua India & Lembah Indus",
    coordinates: [27.3, 68.1],
    approxDate: "± 5.000 – 4.000 SM (Situs Mehrgarh)",
    domesticatingCivilization: "Peradaban Lembah Sungai Indus (Harappa & Mohenjo-daro)",
    shortDescription: "Serat putih berbulu yang membebaskan manusia dari pakaian kulit hewan yang kaku dan wol yang gatal.",
    historicalStory: `Arkeolog di Mohenjo-daro menemukan kain katun tertua milenium ke-3 SM. Herodotus menulis pada 450 SM bahwa di India ada 'pohon liar yang menghasilkan wol di dahan-dahannya, yang lebih indah dari wol domba manapun, dan orang-orang membuat pakaian darinya'. Di Eropa abad pertengahan orang percaya mitos pohon kapas berbuah anak domba kecil yang bergelantungan di dahan.`,
    supermarketContrast: "Kaos katun yang kita kenakan setiap hari lahir dari tanaman yang dijinakkan ribuan tahun lalu oleh peradaban Harappa di Sungai Indus.",
    funFact: "Kata 'cotton' dalam bahasa Inggris diserap dari bahasa Arab 'qutn' (قُطْن).",
    ancientTradeRoutes: ["Perdagangan Meluhha (Indus) - Mesopotamia", "Jalur Sutra Maritim"],
    reference: {
      title: "Encyclopaedia Britannica - Cotton (Gossypium)",
      url: "https://www.britannica.com/plant/cotton-fiber-and-plant"
    }
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
    shortDescription: "Unggas paling melimpah di bumi (jumlahnya melebihi manusia 3 banding 1) yang aslinya dipelihara bukan untuk dimakan, melainkan untuk sabung ayam dan kokok fajar.",
    historicalStory: `Ayam hutan merah aslinya adalah burung kanopi bambu pemalu. Selama ribuan tahun pertama manusia memelihara ayam BUKAN untuk daging atau telur, melainkan untuk keberanian bertarung magis sabung ayam dan kokok akurat fajar sebagai jam spiritual penjaga waktu sembahyang. Baru setelah bangsa Persia membawanya ke Mediterania, ayam dikembangbiakkan menjadi sumber protein murah.`,
    supermarketContrast: "Di supermarket modern ayam potong dijual jutaan ekor sehari. Di hutan aslinya, ayam hutan merah bertubuh ramping dan mampu terbang puluhan meter melintasi dahan pohon.",
    funFact: "Hari ini terdapat lebih dari 33 miliar ekor ayam di bumi—melebihi seluruh gabungan spesies burung liar lainnya di dunia.",
    ancientTradeRoutes: ["Penyebaran Maritim Austronesia ke Pasifik", "Jalur Sutra Darat ke Persia & Eropa"],
    reference: {
      title: "PNAS - The multifaceted history of chicken domestication",
      url: "https://www.pnas.org/doi/10.1073/pnas.2121978119"
    }
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
    approxDate: "± 2.000 SM (Disebut dalam catatan Papirus Mesir Kuno)",
    domesticatingCivilization: "Masyarakat Kuno Sri Lanka & Pedagang Austronesia",
    shortDescription: "Kulit kayu harum yang asal-usul aslinya ditutup-tutupi oleh pedagang Arab dengan dongeng sarang burung raksasa di puncak tebing.",
    historicalStory: `Selama lebih dari dua ribu tahun, bangsa Yunani dan Romawi tidak tahu di mana kayu manis tumbuh. Pedagang Arab merahasiakan lokasinya dengan dongeng bahwa kayu manis diperoleh dari sarang burung raksasa di puncak tebing jurang yang tak terjangkau manusia. Kayu manis sejati hanya tumbuh di Sri Lanka dengan kulit tipis lembut berlapis mirip cerutu.`,
    supermarketContrast: "Sebagian besar bubuk kayu manis murah di supermarket adalah Cassia (Cinnamomum cassia) berkadar kumarin tinggi. Kayu manis asli Sailan bernilai jauh lebih mahal dan aromanya jauh lebih halus.",
    funFact: "Kaisar Romawi Nero membakar persediaan kayu manis seluruh kota Roma setara kebutuhan satu tahun dalam upacara pemakaman istrinya Poppaea Sabina pada 65 M.",
    ancientTradeRoutes: ["Rute Kayu Manis Austronesia", "Jalur Rempah Samudra Hindia"],
    reference: {
      title: "Kew Royal Botanic Gardens - Cinnamomum verum (Ceylon Cinnamon)",
      url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:463870-1"
    }
  },

  // =========================================================================
  // 7. AFRIKA (ETIOPIA, SAHEL & AFRIKA BARAT)
  // =========================================================================
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
    shortDescription: "Cairan stimulan hitam pemacu Revolusi Pencerahan Eropa yang awalnya dikunyah suku Oromo sebagai bola lemak penambah stamina.",
    historicalStory: `Semua kopi di dunia berakar dari hutan pegunungan Kaffa, Etiopia. Suku Oromo mulanya menumbuk buah kopi merah dan mencampurnya dengan lemak hewani menjadi bola energi berburu. Kopi diseberangkan ke pelabuhan Mocha di Yaman pada abad ke-15, di mana para sufi Islam menyeduhnya untuk tetap terjaga berdzikir semalaman.`,
    supermarketContrast: "Hari ini Brasil dan Vietnam adalah produsen kopi terbesar di supermarket. Sebelum 1600-an, Yaman dan Etiopia memegang monopoli ketat di mana biji kopi yang diekspor wajib direbus terlebih dahulu agar mandul.",
    funFact: "Monopoli kopi Yaman pecah ketika peziarah sufi India Baba Budan menyelundupkan tujuh butir biji kopi hijau subur di balik kain ikat pinggangnya ke India Selatan.",
    ancientTradeRoutes: ["Jalur Sufi Laut Merah (Mocha-Kairo)", "Jalur Kafilah Afrika Timur"],
    reference: {
      title: "Kew Royal Botanic Gardens - Coffea arabica (Arabica Coffee)",
      url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:750100-1"
    }
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
    shortDescription: "Serealia tangguh tahan banting kemarau ekstrem yang menghidupi kerajaan sabana Afrika Kush dan Songhai.",
    historicalStory: `Ketika Gurun Sahara mulai mengering 5.000 tahun lalu, manusia di wilayah Sahel menjinakkan sorgum yang memiliki akar dalam dan lapisan lilin pelindung daun yang sanggup bertahan di gelombang panas ekstrem di mana gandum dan jagung akan mati hangus terbakar.`,
    supermarketContrast: "Di barat sorgum sering diremehkan sebagai pakan ternak. Padahal sorgum bebas gluten dan merupakan makanan pokok penyelamat bagi ratusan juta orang di daerah semi-kering dunia.",
    funFact: "Sorgum dapat berhibernasi saat kemarau panjang: menutup stomata daun dan berhenti tumbuh, lalu seketika bangun mekar saat hujan pertama turun.",
    ancientTradeRoutes: ["Rute Kafilah Trans-Sahara", "Jalur Laut Samudra Hindia ke India"],
    reference: {
      title: "FAO - Sorghum and Millets in Human Nutrition",
      url: "https://www.fao.org/3/t0818e/T0818E00.htm"
    }
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
    approxDate: "± 2.500 SM (Biji semangka di makam Tutankhamun)",
    domesticatingCivilization: "Peradaban Mesir Kuno & Nubia",
    shortDescription: "Kantong air tawar alami gurun pasir yang aslinya keras dan pahit, dibudidayakan Firaun sebagai bekal minum di alam baka.",
    historicalStory: `Semangka liar aslinya adalah buah kecil berdaging putih keras dan rasanya pahit. Manusia purba tertarik menanamnya bukan karena rasa manisnya, melainkan karena KANDUNGAN AIRNYA yang mencapai 92% di tengah padang pasir yang membakar. Di makam Firaun Tutankhamun (1323 SM), lukisan dinding menunjukkan semangka disajikan di nampan persembahan agar sang raja tidak kehausan di alam baka.`,
    supermarketContrast: "Semangka merah manis tanpa biji di supermarket modern adalah hasil pemuliaan hibrida abad ke-20. Nenek moyang semangka purba berdaging putih pucat dengan biji hitam melimpah.",
    funFact: "Biji semangka yang diasinkan adalah salah satu camilan tertua manusia, ditemukan di situs Zaman Batu Gurun Sahara Libya.",
    ancientTradeRoutes: ["Rute Sungai Nil Mesir Kuno", "Jalur Dagang Mediterania"],
    reference: {
      title: "Science - A 3,500-Year-Old Watermelon Leaf from an Egyptian Tomb",
      url: "https://www.science.org/doi/10.1126/science.aaw9966"
    }
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
    approxDate: "± 3.000 SM (Guci minyak sawit di makam Mesir di Abydos)",
    domesticatingCivilization: "Masyarakat Pribumi Afrika Barat & Perdagangan Mesir Kuno",
    shortDescription: "Minyak nabati paling produktif di dunia yang kini mendominasi separuh produk supermarket modern dari sabun hingga margarin.",
    historicalStory: `Di makam Firaun di Abydos Mesir, ditemukan bejana berusia 5.000 tahun berisi minyak sawit Afrika. Pada tahun 1848, empat bibit pohon kelapa sawit Afrika dibawa ke Kebun Raya Bogor di Hindia Belanda (Indonesia) sebagai tanaman hias koleksi taman—yang kemudian menjadi cikal bakal jutaan hektar kelapa sawit di Asia Tenggara hari ini.`,
    supermarketContrast: "Di supermarket hari ini, lebih dari 50% produk kemasan—mulai dari mie instan, cokelat, sabun, lipstik, hingga deterjen—mengandung minyak kelapa sawit Afrika.",
    funFact: "Empat bibit sawit pertama di Kebun Raya Bogor tahun 1848 dikenal dalam sejarah botani sebagai 'The Four Mother Palms of Southeast Asia'.",
    ancientTradeRoutes: ["Rute Trans-Sahara Kuno", "Penyelundupan Botani Kolonial"],
    reference: {
      title: "Nature Plants - The history and genetics of African oil palm domestication",
      url: "https://www.nature.com/articles/s41477-019-0382-7"
    }
  },

  // =========================================================================
  // 8. ASIA TENGAH & STEPA EURASIA
  // =========================================================================
  {
    id: "apel",
    name: "Apel Liar Tian Shan (Wild Apple)",
    scientificName: "Malus sieversii",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🍎",
    originRegion: "Lereng Pegunungan Tian Shan (Almaty, Kazakhstan)",
    vavilovCenter: "Asia Tengah & Stepa Eurasia",
    coordinates: [43.2, 76.9],
    approxDate: "± 4.000 – 2.000 SM",
    domesticatingCivilization: "Komunitas Pemburu Hutan Gunung Tian Shan & Kafilah Jalur Sutra",
    shortDescription: "Ibu kandung genetik dari 7.500 varietas apel modern di muka bumi, tumbuh di hutan rimba apel raksasa di kaki pegunungan es Kazakhstan.",
    historicalStory: `Semua apel yang pernah Anda makan secara genetika 100% berasal dari satu spesies: Malus sieversii di hutan Tian Shan. Nama kota Almaty berarti 'Bapak Segala Apel'. Beruang cokelat Tian Shan memakan buah paling manis dan menyebarkan kotorannya. Kafilah Jalur Sutra kemudian membawa bijinya ke barat menuju Eropa dan ke timur menuju Tiongkok.`,
    supermarketContrast: "Di supermarket Anda melihat apel merah mengkilap seragam. Di hutan liar Almaty, pohon apel purba tumbuh setinggi 30 meter dengan rasa mulai dari manis madu hingga pedas adas manis.",
    funFact: "Ilmuwan Soviet Nikolai Vavilov mendaki hutan Tian Shan pada 1929 dan terperangah mendapati lereng gunung dipenuhi rimba pohon apel liar sebesar pohon beringin.",
    ancientTradeRoutes: ["Jalur Sutra Darat Jalur Utara", "Rute Nomaden Asia Tengah"],
    reference: {
      title: "Nature Communications - Genome sequencing reveals apple origin and history along the Silk Road",
      url: "https://www.nature.com/articles/s41467-017-00336-7"
    }
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
    shortDescription: "Teknologi pengubah kecepatan peradaban manusia: melipatgandakan kecepatan jelajah manusia sepuluh kali lipat dan menciptakan peperangan kereta kuda.",
    historicalStory: `Sebelum manusia menjinakkan kuda, batas perjalanan darat manusia hanya sejauh sepasang kaki melangkah dalam sehari (20-30 km). Penjinakan kuda di situs Botai dan penemuan kereta beroda jeruji oleh bangsa Sintashta melipatgandakan daya jelajah manusia dan memicu migrasi suku Indo-Eropa ke segala penjuru.`,
    supermarketContrast: "Kini mobil bermesin uap dan jet telah menggantikan kuda (meski satuan tenaga mesin masih diukur dalam Horsepower/Daya Kuda). Selama 5.000 tahun sejarah, kuda adalah mesin transportasi tercepat di bumi.",
    funFact: "Pasukan nomaden Jenghis Khan sanggup tidur dan menembakkan panah tepat sasaran di punggung kuda yang berlari kencang tanpa memegang kendali.",
    ancientTradeRoutes: ["Jalur Stepa Eurasia (Steppe Route)", "Jalur Kuda-Teh Purba"],
    reference: {
      title: "Nature - The origins and spread of domestic horses from the Western Eurasian steppes",
      url: "https://www.nature.com/articles/s41586-021-04018-9"
    }
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
    shortDescription: "Umbi belerang antibakteri alami yang mengobati infeksi prajurit pembangun Piramida Giza.",
    historicalStory: `Spesies liar nenek moyang bawang putih (Allium longicuspis) hanya ditemukan di pegunungan terjal Asia Tengah antara Kyrgyzstan dan Tajikistan. Di Mesir Kuno, Herodotus mencatat prasasti Piramida Giza bahwa firaun menghabiskan ribuan talenta perak hanya untuk ransum bawang putih dan lobak bagi puluhan ribu pembangun piramida agar terbebas dari infeksi disentri usus.`,
    supermarketContrast: "Bawang putih adalah bumbu wajib di supermarket modern. Di zaman kuno, sifat antibakterinya menjadikannya antibiotik alami sebelum penisilin ditemukan.",
    funFact: "Pemogokan buruh pertama dalam sejarah tercatat terjadi di Mesir kuno saat jatah ransum bawang putih pekerja makam terlambat dibagikan.",
    ancientTradeRoutes: ["Jalur Sutra Darat", "Perdagangan Sumeria-Mesir Kuno"],
    reference: {
      title: "Kew Royal Botanic Gardens - Allium sativum (Garlic)",
      url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:528828-1"
    }
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
    approxDate: "± 900 M (Catatan Persia & Arab kuno)",
    domesticatingCivilization: "Petani Khurasan & Persia Kuno",
    shortDescription: "Sayuran yang aslinya berwarna UNGU pekat dan KUNING sebelum dimuliakan menjadi oranye pada abad ke-17 di Belanda.",
    historicalStory: `SELAMA RIBUAN TAHUN, WORTEL BERWARNA UNGU GELAP ATAU KUNING PUCAT! Wortel asli didomestikasikan di Afghanistan dan Persia modern sekitar abad ke-10. Wortel oranye baru diciptakan pada abad ke-17 oleh petani Belanda melalui pemuliaan mutan warna, sengaja dibudidayakan untuk menghormati pahlawan kemerdekaan Belanda Wangsa Oranye-Nassau (House of Orange).`,
    supermarketContrast: "Di supermarket 99.9% wortel berwarna oranye. Jika kaisar Persia kuno melihat wortel oranye di supermarket hari ini, ia akan mengira itu tanaman mutan beracun!",
    funFact: "Wortel liar aslinya hanya dimanfaatkan biji aromatik dan daunnya oleh bangsa Yunani Kuno sebagai obat lambung, bukan umbi akarnya yang waktu itu kurus dan berkayu.",
    ancientTradeRoutes: ["Jalur Sutra Darat", "Perdagangan Abbasiyah Khurasan"],
    reference: {
      title: "Nature Genetics - A high-quality carrot genome assembly provides new insights into carotenoid accumulation and domestication",
      url: "https://www.nature.com/articles/ng.3565"
    }
  },

  // =========================================================================
  // 9. CEKUNGAN MEDITERANIA & EROPA
  // =========================================================================
  {
    id: "anggur",
    name: "Anggur & Wine Kuno (Grapevine)",
    scientificName: "Vitis vinifera",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🍇",
    originRegion: "Pegunungan Kaukasus Selatan (Georgia & Armenia)",
    vavilovCenter: "Cekungan Mediterania & Kaukasus",
    coordinates: [41.7, 44.8],
    approxDate: "± 6.000 – 4.000 SM (Situs Gadachrili Gora di Georgia & Gua Areni-1 di Armenia)",
    domesticatingCivilization: "Peradaban Neolitikum Kaukasus (Situs Shulaveri-Shomu)",
    shortDescription: "Minuman fermentasi para dewa Olympus yang disimpan di tempayan tanah liat qvevri ribuan tahun sebelum tong kayu ek Prancis.",
    historicalStory: `Bongkahan tembikar 8.000 tahun lalu di Georgia terbukti mengandung kristal asam tartarat—sidik jari pembuatan wine tertua di dunia. Di situs gua Areni-1 Armenia (4100 SM), ditemukan kilang anggur lengkap tertua: pemerasan batu kapur, saluran pembuangan, dan bejana tanah liat qvevri yang dikubur di bawah tanah.`,
    supermarketContrast: "Di supermarket Anda melihat botol wine label Prancis atau Italia. Jauh sebelum bangsa Galia mengenal wine, orang pegunungan Kaukasus telah menyempurnakan fermentasi anggur dalam kendi keramik bawah tanah.",
    funFact: "Di Yunani Kuno, tuan rumah selalu meminum cawan wine pertama di depan para tamunya untuk membuktikan wine tidak diracun—asal mula tradisi bersulang 'toast' hari ini.",
    ancientTradeRoutes: ["Jalur Maritim Mediterania", "Rute Kaukasus-Mesopotamia"],
    reference: {
      title: "PNAS - Early Neolithic wine of Georgia in the South Caucasus",
      url: "https://www.pnas.org/doi/10.1073/pnas.1714728114"
    }
  },
  {
    id: "kubis",
    name: "Kubis Liar / Brassica (Wild Cabbage)",
    scientificName: "Brassica oleracea",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🥬",
    originRegion: "Tebing Kapur Pesisir Samudra Atlantik & Mediterania (Eropa Barat)",
    vavilovCenter: "Cekungan Mediterania & Kaukasus",
    coordinates: [50.5, 1.5],
    approxDate: "± 1.000 SM (Era Bangsa Kelt & Yunani Kuno)",
    domesticatingCivilization: "Bangsa Kelt & Petani Mediterania Kuno",
    shortDescription: "Satu tanaman daun liar yang diubah manusia menjadi tujuh sayuran berbeda di supermarket: kubis, brokoli, kembang kol, kale, kohlrabi, dan brussels sprouts!",
    historicalStory: `Dari satu spesies tunggal (Brassica oleracea) di tebing kapur Inggris dan Prancis, seleksi buatan manusia menghasilkan keajaiban: tunas daun terminal besar menjadi KUBIS, kuncup bunga padat menjadi BROKOLI dan KEMBANG KOL, batang membengkak menjadi KOHLRABI, tunas lateral menjadi BRUSSELS SPROUTS, dan daun lebar keriting menjadi KALE.`,
    supermarketContrast: "Di supermarket Anda mengira brokoli, kol, kembang kol, dan kale adalah tanaman yang berbeda spesies. Faktanya secara ilmiah mereka adalah tanaman yang persis sama!",
    funFact: "Kaisar Romawi Diokletianus menolak tawaran kembali menjadi kaisar demi merawat kebun kubis yang ia tanam sendiri.",
    ancientTradeRoutes: ["Jalur Pertanian Neolitikum Eropa", "Pasar Perkotaan Romawi"],
    reference: {
      title: "Encyclopaedia Britannica - Brassica oleracea (Wild Cabbage & Cultivars)",
      url: "https://www.britannica.com/plant/cabbage"
    }
  },
  // --- KOMODITAS TAMBAHAN LENGKAP ---
  {
    id: "temulawak",
    name: "Temulawak (Javanese Turmeric)",
    scientificName: "Curcuma zanthorrhiza",
    category: "spice",
    categoryLabel: "Rempah-rempah",
    icon: "🫚",
    originRegion: "Hutan Hujan Jawa & Kepulauan Sundaland, Indonesia",
    vavilovCenter: "Sundaland & Kepulauan Rempah Maluku",
    coordinates: [-7.2, 110.4],
    approxDate: "± 1.500 SM",
    domesticatingCivilization: "Masyarakat Adat Jawa Kuno & Sunda Kuno",
    shortDescription: "Rimpang obat kurkuminoid endemik Pulau Jawa yang menjadi mahkota jamu tradisional Nusantara.",
    historicalStory: `Temulawak adalah rimpang emas endemik pulau Jawa yang tidak ditemukan tumbuh asli di belahan bumi lain. Relief candi-candi di Jawa Tengah (seperti Candi Borobudur dan Prambanan dari abad ke-8 dan ke-9 Masehi) memahat gambaran tabib istana meracik rimpang tanaman obat ini sebagai ramuan jamu penjaga vitalitas para raja dan prajurit kerajaan Mataram Kuno.`,
    supermarketContrast: "Di supermarket modern minuman ekstrak temulawak dijual kalengan. Di masa kuno, rimpang ini adalah obat pelindung fungsi hati dan empedu paling ampuh di kepulauan tropis.",
    funFact: "Kandungan minyak atsiri xanthorrhizol pada temulawak memiliki sifat antibakteri alami kuat yang mampu membunuh bakteri perusak gigi dan plak Streptococcus mutans.",
    ancientTradeRoutes: ["Jalur Jamu Tradisional Jawa", "Jalur Rempah Nusantara"],
    reference: {
      title: "Kew Royal Botanic Gardens - Curcuma zanthorrhiza (Javanese Turmeric)",
      url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:796472-1"
    }
  },
  {
    id: "sukun",
    name: "Sukun (Breadfruit)",
    scientificName: "Artocarpus altilis",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🍈",
    originRegion: "Papua (New Guinea) & Kepulauan Pasifik Barat",
    vavilovCenter: "Sundaland & Kepulauan Rempah Maluku",
    coordinates: [-3.8, 137.0],
    approxDate: "± 3.500 SM",
    domesticatingCivilization: "Masyarakat Adat Melanesia & Penjelajah Polinesia",
    shortDescription: "Buah pohon raksasa berpati padat yang rasanya menyerupai roti gandum panggang yang baru matang.",
    historicalStory: `Sukun adalah tanaman pangan pokok yang menyelamatkan para pelaut Polinesia dan Melanesia saat mengarungi luasnya Samudra Pasifik. Ketika buahnya dipanggang di atas bara batu, tekstur dan aromanya sangat mirip dengan roti tawar empuk (sehingga dijuluki 'Breadfruit'). Pada 1789, Kerajaan Inggris mengirim kapal legendaris HMS Bounty di bawah Kapten William Bligh untuk mengumpulkan bibit sukun dari Tahiti demi memberi makan para budak di perkebunan gula Karibia.`,
    supermarketContrast: "Di supermarket Anda hanya melihat buah impor mahal, padahal sebatang pohon sukun sanggup berbuah hingga 200 buah per musim tanpa perlu mengolah tanah atau menggunakan pestisida kimia.",
    funFact: "Pemberontakan paling terkenal di atas kapal dalam sejarah dunia, 'Mutiny on the Bounty' (1789), dipicu oleh ekspedisi pengumpulan pohon sukun di Tahiti.",
    ancientTradeRoutes: ["Jalur Tanaman Kano Pasifik", "Pelayaran HMS Bounty 1789"],
    reference: {
      title: "National Tropical Botanical Garden - Breadfruit Institute",
      url: "https://ntbg.org/breadfruit/"
    }
  },
  {
    id: "tembakau",
    name: "Tembakau (Tobacco)",
    scientificName: "Nicotiana tabacum",
    category: "stimulant",
    categoryLabel: "Minuman & Stimulan",
    icon: "🍂",
    originRegion: "Dataran Tinggi Andes & Lembah Mesoamerika Tropis",
    vavilovCenter: "Mesoamerika",
    coordinates: [16.5, -92.5],
    approxDate: "± 5.000 – 3.000 SM",
    domesticatingCivilization: "Masyarakat Adat Andes & Peradaban Maya",
    shortDescription: "Daun nikotina suci pemujaan dewa peradaban pra-Kolombia yang asapnya dianggap sebagai jembatan doa manusia menuju alam roh.",
    historicalStory: `Bagi bangsa Maya, asap tembakau adalah nafas para dewa; relief batu di Palenque (abad ke-7 Masehi) menggambarkan pendeta agung sedang meniup pipa cerutu tembakau saat upacara ritual. Ketika Christopher Columbus tiba di Karibia tahun 1492, suku Taíno menghadiahkannya gulungan daun kering yang berbau harum. Ketika pelaut Rodrigo de Jerez membawa tembakau ke Spanyol dan menghembuskan asap dari mulut dan hidungnya, Inkuisisi Spanyol memenjarakannya selama 7 tahun karena menuduhnya dirasuki iblis!`,
    supermarketContrast: "Di supermarket tembakau dijual sebagai rokok kemasan. Bagi peradaban suku Maya dan penduduk asli Amerika, tembakau adalah tanaman obat dan pembuka upacara musyawarah perdamaian suku ('pipa perdamaian').",
    funFact: "Nama genus Nicotiana dinamai untuk menghormati Jean Nicot, duta besar Prancis untuk Portugal yang mengirim biji tembakau ke Ratu Catherine de' Medici pada tahun 1560 sebagai obat sakit kepala migrain.",
    ancientTradeRoutes: ["Jalur Barter Karibia-Mesoamerika", "Pertukaran Columbus 1492"],
    reference: {
      title: "Encyclopaedia Britannica - Tobacco (Nicotiana tabacum)",
      url: "https://www.britannica.com/plant/tobacco-plant"
    }
  },
  {
    id: "ubi-jalar",
    name: "Ubi Jalar (Sweet Potato / Camote)",
    scientificName: "Ipomoea batatas",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🍠",
    originRegion: "Semenanjung Yucatan (Meksiko) & Lembah Andes Pesisir Peru",
    vavilovCenter: "Dataran Tinggi Andes & Amazon Hulu",
    coordinates: [-8.0, -78.0],
    approxDate: "± 6.000 – 4.000 SM",
    domesticatingCivilization: "Peradaban Lembah Chilca (Peru Kuno) & Maya",
    shortDescription: "Bukti arkeologis mencengangkan kontak pelayaran samudra antara suku Polinesia dan suku Andes ribuan tahun sebelum Columbus!",
    historicalStory: `Ubi jalar membuktikan pelaut Polinesia pernah berlayar menyeberangi Samudra Pasifik hingga pesisir Amerika Selatan jauh sebelum Columbus: bahasa Quechua di Andes menyebut ubi jalar 'kumar' (atau kumara), dan bahasa suku Maori di Selandia Baru menyebutnya dengan nama persis sama: 'kumara'! Ketika dibawa ke Tiongkok dan Jepang pada abad ke-17, tanaman umbi manis ini menyelamatkan jutaan nyawa dari bencana paceklik beras kelaparan.`,
    supermarketContrast: "Ubi cilembu madu panggang yang manis di supermarket adalah tanaman Dunia Baru asal Amerika Selatan yang menyelamatkan banyak negara Asia dari kelaparan pada masa lalu.",
    funFact: "Di Selandia Baru, ubi jalar (kumara) adalah tanaman sakral suku Maori yang penanamannya disertai mantra-mantra karakia khusus untuk Dewa Pertanian Rongo.",
    ancientTradeRoutes: ["Pelayaran Purba Polinesia-Amerika Selatan", "Pertukaran Columbus 1492"],
    reference: {
      title: "PNAS - Historical transfer of the sweetpotato from South America to Polynesia",
      url: "https://www.pnas.org/doi/10.1073/pnas.1211049110"
    }
  },
  {
    id: "bunga-matahari",
    name: "Bunga Matahari (Sunflower)",
    scientificName: "Helianthus annuus",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🌻",
    originRegion: "Meksiko Tengah-Utara & Lembah Sungai Mississippi (Amerika Utara)",
    vavilovCenter: "Mesoamerika",
    coordinates: [24.0, -101.0],
    approxDate: "± 3.000 SM",
    domesticatingCivilization: "Komunitas Pribumi Lembah Meksiko & Woodland Kuno",
    shortDescription: "Bunga raksasa heliotropik penghasil biji minyak padat energi yang bunganya selalu berputar menghadap matahari terbit.",
    historicalStory: `Suku-suku pribumi Amerika Utara dan Meksiko mendomestikasi bunga liar ini ribuan tahun sebelum bangsa Eropa datang. Mereka menggiling biji kuaci bunga matahari menjadi tepung kaya protein untuk kue bekal berburu dan memeras minyaknya untuk pelindung kulit dan rambut. Orang Spanyol membawanya ke Eropa pada abad ke-16 awalnya sebagai tanaman hias taman sebelum Tsar Peter yang Agung membawanya ke Rusia, tempat ia diubah menjadi komoditas minyak goreng terbesar di dunia.`,
    supermarketContrast: "Minyak goreng bunga matahari dan kuaci kemasan di supermarket berakar dari bunga yang disembah sebagai lambang dewa matahari oleh suku-suku kuno benua Amerika.",
    funFact: "Bunga matahari muda memutar kepalanya mengikuti gerak matahari dari timur ke barat setiap hari (heliotropisme) dan kembali ke timur pada malam hari untuk menunggu fajar.",
    ancientTradeRoutes: ["Rute Pribumi Amerika Utara-Meksiko", "Pertukaran Columbus 1492"],
    reference: {
      title: "PNAS - Sunflower was domesticated in the Americas",
      url: "https://www.pnas.org/doi/10.1073/pnas.0804430105"
    }
  },
  {
    id: "pepaya",
    name: "Pepaya (Papaya)",
    scientificName: "Carica papaya",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🍈",
    originRegion: "Hutan Tropis Dataran Rendah Meksiko Selatan & Amerika Tengah",
    vavilovCenter: "Mesoamerika",
    coordinates: [17.0, -94.0],
    approxDate: "± 2.000 SM",
    domesticatingCivilization: "Masyarakat Adat Maya & Karibia Kuno",
    shortDescription: "Buah oranye manis kaya enzim papain pemecah protein yang aslinya dibudidayakan suku Maya.",
    historicalStory: `Bangsa Maya menyebut pepaya 'chichihualzapoti' yang berarti 'buah buah dada' karena kandungan getah putih susunya yang berlimpah. Suku Maya menggunakan daun dan getah pepaya mentah untuk membungkus daging buruan agar empuk sebelum dipanggang. Pelaut Spanyol dan Portugis membawa bibit pepaya ke Karibia, Filipina, Malaka, dan India pada pertengahan tahun 1500-an.`,
    supermarketContrast: "Di supermarket Anda mengira pepaya California atau pepaya Bangkok adalah tanaman lokal Asia Tenggara. Pepaya adalah 100% buah asal benua Amerika tropis yang baru masuk Asia 450 tahun lalu.",
    funFact: "Enzim papain dari getah pepaya digunakan di seluruh dunia sebagai bahan aktif pelunak daging komersial (meat tenderizer) dan pembersih lensa kontak.",
    ancientTradeRoutes: ["Jalur Spanyol Manila Galleon", "Jalur Rempah Portugis"],
    reference: {
      title: "Kew Royal Botanic Gardens - Carica papaya (Papaya)",
      url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:30366883-2"
    }
  },
  {
    id: "llama",
    name: "Llama & Alpaca (Andean Camelids)",
    scientificName: "Lama glama / Vicugna pacos",
    category: "fauna",
    categoryLabel: "Hewan Ternak & Domestikasi",
    icon: "🦙",
    originRegion: "Dataran Tinggi Altiplano Puna Andes (Peru, Bolivia, Cile)",
    vavilovCenter: "Dataran Tinggi Andes & Amazon Hulu",
    coordinates: [-14.0, -71.5],
    approxDate: "± 4.500 SM (Dari Guanaco dan Vicuña liar)",
    domesticatingCivilization: "Masyarakat Penggembala Kuno Andes",
    shortDescription: "Satu-satunya hewan beban berkuku belah yang didomestikasi di seluruh benua Amerika sebelum kedatangan bangsa Eropa.",
    historicalStory: `Sebelum 1492, benua Amerika tidak memiliki kuda, sapi, kerbau, keledai, atau domba. Llama adalah satu-satunya hewan angkut barang yang dimiliki peradaban Inka. Karena llama tidak bisa ditunggangi manusia dan hanya kuat membawa beban 30-40 kg, peradaban Inka tidak pernah mengembangkan gerobak beroda—mereka mengandalkan kafilah ribuan llama melintasi jalan setapak dan jembatan tali gantung di atas ngarai pegunungan Andes.`,
    supermarketContrast: "Sweater wol alpaca dijual sebagai barang mewah di butik mode modern. Bagi peradaban Inka, kain tenun wol alpaca dan vicuña ('qompi') bernilai lebih tinggi dari logam emas batangan.",
    funFact: "Jika seekor llama merasa beban di punggungnya terlalu berat, ia akan berbaring mogok dan meludahkan isi lambungnya yang berbau busuk ke wajah tuannya.",
    ancientTradeRoutes: ["Jalur Qhapaq Ñan (Jalan Raya Inka)"],
    reference: {
      title: "Encyclopaedia Britannica - Llama (Lama glama)",
      url: "https://www.britannica.com/animal/llama"
    }
  },
  {
    id: "karet",
    name: "Karet Alami (Natural Rubber)",
    scientificName: "Hevea brasiliensis",
    category: "material",
    categoryLabel: "Kayu, Serat & Material",
    icon: "🌳",
    originRegion: "Hutan Hujan Tropis Cekungan Sungai Amazon (Brasil & Peru)",
    vavilovCenter: "Dataran Tinggi Andes & Amazon Hulu",
    coordinates: [-3.1, -60.0],
    approxDate: "± 1.600 SM (Bola karet tertua suku Olmek)",
    domesticatingCivilization: "Peradaban Olmek ('Bangsa Karet') & Penduduk Asli Amazon",
    shortDescription: "Getah putih susu pohon yang memantul elastis, bahan dasar ban kendaraan yang menggerakkan seluruh transportasi dunia modern.",
    historicalStory: `Kata 'Olmek' secara harfiah berarti 'Orang-orang dari Negeri Karet' (Olmecatl). Sejak 1600 SM mereka mencampur lateks getah pohon dengan sari tanaman merambat Ipomoea alba untuk divulkanisasi alami menjadi bola karet padat pertandingan suci. Pada 1876, penjelajah Inggris Henry Wickham menyelundupkan 70.000 biji karet keluar dari hutan Amazon ke London, yang kemudian disemai dan ditanam massal di Malaysia dan Hindia Belanda (Indonesia).`,
    supermarketContrast: "Karet gelang dan ban mobil yang menggerakkan kehidupan modern lahir dari getah pohon rimba liar Amazon yang diselundupkan dalam operasi biopiracy terbesar abad ke-19.",
    funFact: "Bola karet suku Olmek berbobot hingga 4 kg dan begitu padat sehingga pemain bola Mesoamerika harus mengenakan pelindung pinggang kayu tebal agar tulang rusuk tidak patah.",
    ancientTradeRoutes: ["Jalur Olmek & Maya", "Penyelundupan Henry Wickham 1876"],
    reference: {
      title: "Kew Royal Botanic Gardens - Hevea brasiliensis (Para Rubber Tree)",
      url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:350325-1"
    }
  },
  {
    id: "delima",
    name: "Delima (Pomegranate)",
    scientificName: "Punica granatum",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🍎",
    originRegion: "Dataran Tinggi Iran Kuno & Pegunungan Transkaukasia",
    vavilovCenter: "Hilal Subur (Fertile Crescent)",
    coordinates: [34.0, 50.0],
    approxDate: "± 4.000 – 3.000 SM",
    domesticatingCivilization: "Peradaban Elam, Sumeria, & Persia Kuno",
    shortDescription: "Buah berlian merah delima berkulit tebal pelindung kafilah gurun yang menjadi lambang kesuburan dan keabadian peradaban kuno.",
    historicalStory: `Buah delima adalah simbol kesuburan paling sakral di dunia kuno Mediterania dan Timur Dekat. Dalam mitologi Yunani, Persephone terjebak di dunia bawah (Underworld) setelah memakan beberapa butir biji delima pemberian Hades. Buah berkulit keras ini sangat awet disimpan berbulan-bulan di karung unta kafilah gurun, menyediakan cairan asam manis penyegar dahaga di tengah padang pasir tandus.`,
    supermarketContrast: "Jus delima botolan di supermarket kini dipasarkan sebagai antioksidan superfood modern. Di makam-makam bangsawan Mesir Kuno dan istana Babilonia, buah delima dipahat di tiang kuil dan mahkota raja.",
    funFact: "Di Iran kuno era Zoroaster, ranting pohon delima digunakan dalam ritual suci doa api karena bijinya melambangkan kemakmuran tanpa batas.",
    ancientTradeRoutes: ["Jalur Sutra Darat", "Jalur Kafilah Persia-Mesir"],
    reference: {
      title: "Encyclopaedia Britannica - Pomegranate (Punica granatum)",
      url: "https://www.britannica.com/plant/pomegranate"
    }
  },
  {
    id: "buah-tin",
    name: "Buah Tin / Ara (Common Fig)",
    scientificName: "Ficus carica",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🫐",
    originRegion: "Lembah Sungai Yordan & Pesisir Levant (Palestina/Yordania)",
    vavilovCenter: "Hilal Subur (Fertile Crescent)",
    coordinates: [31.9, 35.5],
    approxDate: "± 9.400 – 9.200 SM (Situs Gilgal I, Lembah Yordan)",
    domesticatingCivilization: "Kebudayaan Neolitikum Awal Gilgal I",
    shortDescription: "Buah tertua yang pertama kali dibudidayakan manusia di muka bumi—bahkan mendahului penjinakan gandum dan jelai!",
    historicalStory: `Di situs Neolitikum Gilgal I di Lembah Yordan, para arkeolog menemukan buah ara partenokarpi (tanpa biji fertile) berusia 11.400 tahun yang membuktikan bahwa tanaman buah pertama yang dibudidayakan manusia bukanlah gandum, melainkan BUAH ARA (TIN)! Buah tin yang dikeringkan memiliki kadar gula alami tinggi yang awet disimpan berbulan-bulan, menjadi bekal perjalanan pertama manusia yang bertransisi dari pemburu-peramu menjadi petani.`,
    supermarketContrast: "Buah tin kering kemasan di supermarket adalah saksi bisu dari tanaman pertama yang pernah dirawat dan disetek oleh tangan manusia purba 11.000 tahun silam.",
    funFact: "Secara botani buah tin sebenarnya bukan buah sejati, melainkan bunga terbalik (syconium) di mana ratusan kuncup bunga kecil mekar menghadap ke dalam rongga buah.",
    ancientTradeRoutes: ["Rute Neolitikum Lembah Yordan", "Jalur Perdagangan Fenisia"],
    reference: {
      title: "Science - Early Domesticated Fig in the Jordan Valley 11,400 Years Ago",
      url: "https://www.science.org/doi/10.1126/science.1125910"
    }
  },
  {
    id: "pistachio",
    name: "Pistachio (Kacang Hijau Gurun)",
    scientificName: "Pistacia vera",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🥜",
    originRegion: "Gurun Kering Asia Tengah (Turkmenistan, Uzbekistan, Iran Timur Laut)",
    vavilovCenter: "Hilal Subur (Fertile Crescent)",
    coordinates: [37.5, 60.0],
    approxDate: "± 6.000 SM (Situs Gua Djebel)",
    domesticatingCivilization: "Masyarakat Agropastoral Kuno Asia Tengah & Persia",
    shortDescription: "Kacang hijau gurun bercangkang renyah yang dinobatkan Ratu Sheba sebagai makanan bangsawan eksklusif istana.",
    historicalStory: `Legenda menceritakan bahwa Ratu Sheba dari Yaman kuno begitu terobsesi dengan rasa gurih pistachio sampai-sampai ia mengeluarkan dekrit kerajaan yang menyita seluruh panen pistachio negeri dan melarang rakyat jelata memakannya! Pohon pistachio memiliki akar tunggang yang menghujam sedalam 10 meter ke dalam tanah untuk mencari mata air bawah tanah di gurun paling tandus.`,
    supermarketContrast: "Di supermarket Anda membeli kacang pistachio panggang asin kemasan. Di Tiongkok zaman Jalur Sutra, pistachio dijuluki 'Kacang Tersenyum' (Kai Xin Guo) karena belahan cangkangnya menyerupai senyuman yang membawa keberuntungan.",
    funFact: "Pistachio yang diangkut dalam jumlah besar di lambung kapal kargo dapat mengalami pemanasan spontan (self-heating) dan memicu kebakaran jika disimpan di tempat lembap karena kandungan minyaknya yang sangat tinggi.",
    ancientTradeRoutes: ["Jalur Sutra Darat", "Rute Kerajaan Persia Achaemenid"],
    reference: {
      title: "Kew Royal Botanic Gardens - Pistacia vera (Pistachio)",
      url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:70258-1"
    }
  },
  {
    id: "milet",
    name: "Milet / Jawawut (Foxtail Millet)",
    scientificName: "Setaria italica",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🌾",
    originRegion: "Dataran Tinggi Loess, Lembah Sungai Kuning (Tiongkok Utara)",
    vavilovCenter: "Lembah Sungai Yangtze & Kuning",
    coordinates: [36.5, 112.0],
    approxDate: "± 8.000 – 6.000 SM (Situs Cishan)",
    domesticatingCivilization: "Kebudayaan Cishan & Peiligang Kuno",
    shortDescription: "Serealia makanan pokok pertama Tiongkok utara ribuan tahun sebelum beras mendominasi daratan Asia.",
    historicalStory: `Jauh sebelum nasi beras menjadi makanan utama di seluruh Tiongkok, peradaban Lembah Sungai Kuning kuno di utara ditopang oleh milet (jawawut). Di situs neolitikum Cishan, arkeolog menemukan puluhan lubang lumbung bawah tanah yang menyimpan lebih dari 50 ton milet purba dari 8.000 SM. Milet membutuhkan air sepertiga lebih sedikit daripada gandum dan padi, menjadikannya penyelamat kekeringan di tanah loess Tiongkok utara.`,
    supermarketContrast: "Di supermarket modern barat milet seringkali hanya dijual sebagai pakan burung kenari. Padahal milet adalah makanan pokok para kaisar pertama Tiongkok Dinasti Shang dan Zhou ribuan tahun silam.",
    funFact: "Di situs arkeologi Lajia di Tiongkok barat (berusia 4.000 tahun), para ilmuwan menemukan mangkuk terbalik yang berisi fosil mie tertua di dunia yang terbuat dari adonan tepung milet!",
    ancientTradeRoutes: ["Jalur Stepa Eurasia Kuno", "Lumbung Pangan Dinasti Shang"],
    reference: {
      title: "Nature - Millet noodles in late Neolithic China",
      url: "https://www.nature.com/articles/437967a"
    }
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
    shortDescription: "'Raja Segala Buah' di Asia Selatan, tempat bernaung dan bermeditasi Sang Buddha Gautama dalam kitab Tripitaka.",
    historicalStory: `Dalam kebudayaan India, pohon mangga adalah lambang cinta dan pencerahan spiritual. Amrapali menghadiahkan kebun mangga luas kepada Sang Buddha Gautama untuk dijadikan tempat peristirahatan dan meditasi para biksu. Biksu pengelana Tiongkok Xuanzang (Tong Samgong) pada abad ke-7 Masehi membawa catatan tertulis tentang kelezatan buah mangga ke Asia Timur. Kaisar Mughal Akbar menanam kebun mangga 'Lakhi Bagh' berisi 100.000 pohon di Darbhanga.`,
    supermarketContrast: "Di supermarket modern mangga dijual dalam berbagai varietas manis. Di tanah kelahirannya di India, mangga dinobatkan sebagai buah nasional dan memiliki lebih dari 1.000 kultivar kultus.",
    funFact: "Pola motif kain batik 'Paisley' yang terkenal di dunia berbentuk tetesan air melengkung aslinya adalah stilasi dari bentuk buah mangga muda India (motif 'kalka').",
    ancientTradeRoutes: ["Perjalanan Biksu Xuanzang ke India", "Jalur Maritim Samudra Hindia"],
    reference: {
      title: "Kew Royal Botanic Gardens - Mangifera indica (Mango)",
      url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:69922-1"
    }
  },
  {
    id: "kapulaga",
    name: "Kapulaga Asli (Cardamom)",
    scientificName: "Elettaria cardamomum",
    category: "spice",
    categoryLabel: "Rempah-rempah",
    icon: "🫚",
    originRegion: "Perbukitan Kapulaga (Cardamom Hills), Ghats Barat, India Selatan",
    vavilovCenter: "Anak Benua India & Lembah Indus",
    coordinates: [9.8, 77.1],
    approxDate: "± 3.000 SM",
    domesticatingCivilization: "Peradaban Dravida Kuno India Selatan",
    shortDescription: "'Ratu Segala Rempah' beraroma kamfer mint harum yang mengharumkan kopi gahwa Arab dan kari kerajaan Mughal.",
    historicalStory: `Jika lada hitam adalah 'Raja Rempah', maka kapulaga adalah 'Ratunya'. Tumbuh di lantai hutan hujan berkabut Pegunungan Ghats Barat India, polong kapulaga dipetik manual satu per satu sebelum merekah. Pedagang Arab kuno membawanya melintasi samudra ke Timur Tengah, di mana kapulaga menjadi bahan mutlak dalam tradisi menyeduh kopi Arab (gahwa) sebagai simbol kehormatan tertinggi menyambut tamu agung.`,
    supermarketContrast: "Kapulaga hijau asli adalah rempah termahal ketiga di dunia setelah saffron dan vanila karena setiap polongnya harus dipetik secara manual dengan tangan.",
    funFact: "Di Skandinavia (Swedia dan Finlandia), kapulaga adalah bumbu kue paling populer yang digunakan dalam roti kayu manis 'kardemummabulle', dibawa oleh prajurit Viking dari Konstantinopel pada abad ke-10!",
    ancientTradeRoutes: ["Jalur Kafilah Dupa & Rempah", "Rute Angin Muson India"],
    reference: {
      title: "Kew Royal Botanic Gardens - Elettaria cardamomum (True Cardamom)",
      url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:796538-1"
    }
  },
  {
    id: "lapis-lazuli",
    name: "Lapis Lazuli (Batu Biru Purba)",
    scientificName: "Lazurite / Mineral Alami",
    category: "material",
    categoryLabel: "Kayu, Serat & Material",
    icon: "💎",
    originRegion: "Tambang Sar-e-Sang, Lembah Kokcha, Badakhshan (Afghanistan Timur Laut)",
    vavilovCenter: "Asia Tengah & Stepa Eurasia",
    coordinates: [36.2, 70.8],
    approxDate: "± 7.000 SM (Situs Mehrgarh & Ebla)",
    domesticatingCivilization: "Penambang Kuno Badakhshan, Peradaban Sumeria & Firaun Mesir",
    shortDescription: "Komoditas mineral tertua dalam sejarah perdagangan internasional manusia: batu biru langit berbintik emas pirit yang menghiasi topeng emas Tutankhamun.",
    historicalStory: `Sebelum jalur rempah atau sutra lahir, rute perdagangan jarak jauh tertua di dunia adalah 'Jalur Lapis Lazuli' pada Zaman Perunggu. Selama lebih dari 6.000 tahun, HANYA ADA SATU TEMPAT DI SELURUH DUNIA yang menghasilkan batu biru ultramarin berkualitas tinggi: tambang Sar-e-Sang di jurang terjal pegunungan Hindu Kush, Badakhshan. Dari sini, batu lapis lazuli dibawa beribu kilometer melintasi padang pasir ke Sumeria dan ke makam Tutankhamun di Mesir.`,
    supermarketContrast: "Di era modern pigmen biru sintetis murah melimpah. Di Eropa era Renaisans, bubuk lapis lazuli murni yang digiling menjadi cat 'Ultramarine' bernilai lebih mahal dari emas, dan seniman seperti Michelangelo hanya diizinkan menggunakannya untuk melukis jubah Bunda Maria.",
    funFact: "Batu lapis lazuli disebutkan dalam Epos Gilgamesh Sumeria (± 2100 SM) sebagai tanduk banteng surgawi dan mahkota dewi cinta Ishtar.",
    ancientTradeRoutes: ["Jalur Lapis Lazuli Kuno (Badakhshan-Mesopotamia)", "Jalur Kafilah Teluk Persia"],
    reference: {
      title: "Encyclopaedia Britannica - Lapis Lazuli",
      url: "https://www.britannica.com/topic/lapis-lazuli"
    }
  },
  {
    id: "bawang-bombay",
    name: "Bawang Bombay (Onion)",
    scientificName: "Allium cepa",
    category: "spice",
    categoryLabel: "Rempah-rempah",
    icon: "🧅",
    originRegion: "Asia Tengah & Dataran Tinggi Iran-Afghanistan",
    vavilovCenter: "Asia Tengah & Stepa Eurasia",
    coordinates: [35.5, 62.0],
    approxDate: "± 5.000 SM (Zaman Perunggu Awal)",
    domesticatingCivilization: "Masyarakat Neolitikum Asia Tengah & Mesir Kuno",
    shortDescription: "Umbi lapis yang disembah orang Mesir Kuno sebagai simbol keabadian karena lapisan konsentris lingkarannya.",
    historicalStory: `Di Mesir Kuno, bawang bombay disembah sebagai simbol alam semesta dan kehidupan abadi karena lapisan-lapisan konsentrisnya yang melingkar sempurna. Para pendeta Mesir bersumpah dengan memegang sebutir bawang bombay, dan umbi bawang ditaruh di rongga mata mumi para firaun (seperti Firaun Ramses IV) untuk memberi nafas kehidupan di alam baka.`,
    supermarketContrast: "Di supermarket bawang bombay adalah sayuran dapur paling murah dan merakyat. Di zaman kuno, sifatnya yang tahan simpan berbulan-bulan menjadikannya penyelamat dehidrasi dan nutrisi buruh pembangun monumen peradaban.",
    funFact: "Para gladiator di Roma Kuno melumuri seluruh otot tubuh mereka dengan air perasan bawang bombay sebelum bertarung di Colosseum karena dipercaya dapat mengeraskan dan memperkuat otot.",
    ancientTradeRoutes: ["Jalur Sutra Darat", "Perdagangan Nil Mesir Kuno"],
    reference: {
      title: "Kew Royal Botanic Gardens - Allium cepa (Onion)",
      url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:527788-1"
    }
  },
  {
    id: "sapi-taurin",
    name: "Sapi Lembu Domestik (Taurine Cattle)",
    scientificName: "Bos taurus",
    category: "fauna",
    categoryLabel: "Hewan Ternak & Domestikasi",
    icon: "🐂",
    originRegion: "Hilal Subur & Anatolia Tenggara (Dari Aurochs Liar Bos primigenius)",
    vavilovCenter: "Hilal Subur (Fertile Crescent)",
    coordinates: [37.0, 38.0],
    approxDate: "± 8.500 SM (Situs Çayönü Tepesi & Dja'de el-Mughara)",
    domesticatingCivilization: "Masyarakat Neolitikum Awal Anatolia & Mesopotamia",
    shortDescription: "Hewan pekerja penarik bajak sawah yang melipatgandakan hasil panen manusia dan melahirkan industri susu peradaban dunia.",
    historicalStory: `Penjinakan aurochs liar raksasa bertanduk tajam setinggi 2 meter menjadi sapi jinak adalah salah satu prestasi penjinakan paling berbahaya manusia purba. Begitu sapi dipasangi kuk bajak tanah, manusia mampu menggarap lahan sepuluh kali lebih luas daripada mencangkul dengan tangan. Penemuan meminum susu sapi dewasa juga memicu mutasi genetik persistensi laktase tercepat dalam evolusi manusia di Eurasia barat.`,
    supermarketContrast: "Susu karton, keju cheddar, mentega, dan steak sapi di supermarket berakar dari penjinakan aurochs liar di lereng Anatolia tenggara 10.500 tahun lalu.",
    funFact: "Nenek moyang sapi liar (aurochs) berukuran sangat besar dan agresif hingga kaisar Romawi Julius Caesar menulis bahwa aurochs hampir seukuran gajah dan tidak takut pada manusia.",
    ancientTradeRoutes: ["Penyebaran Peternakan Neolitikum Eropa", "Jalur Mesopotamia"],
    reference: {
      title: "Science - Genome Sequencing Reveals the Evolutionary History of Domestic Cattle",
      url: "https://www.science.org/doi/10.1126/science.1169588"
    }
  },
  {
    id: "jeruk-mandarin",
    name: "Jeruk Mandarin (Mandarin Orange)",
    scientificName: "Citrus reticulata",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🍊",
    originRegion: "Lembah Sungai Nanling & Tiongkok Selatan",
    vavilovCenter: "Lembah Sungai Yangtze & Kuning",
    coordinates: [25.0, 113.0],
    approxDate: "± 2.500 SM",
    domesticatingCivilization: "Peradaban Tiongkok Kuno Lembah Selatan",
    shortDescription: "Satu dari tiga spesies jeruk purba asli di dunia yang menurunkan jeruk manis, jeruk bali, dan lemon modern.",
    historicalStory: `Semua jeruk yang kita kenal di supermarket hari ini—jeruk manis, jeruk keprok, lemon, grapefruit, hingga jeruk nipis—secara ilmiah BUKAN spesies asli alam murni, melainkan hasil perkawinan silang dari TIGA JERUK PURBA: Jeruk Mandarin (Citrus reticulata), Jeruk Bali / Pomelo (Citrus maxima), dan Jeruk Sitrun (Citrus medica)! Jeruk mandarin liar asli berkulit tipis yang mudah dikupas dan beraroma harum manis, menjadi simbol kemakmuran dan berkah para bangsawan pejabat istana Dinasti Tiongkok ('Mandarin').`,
    supermarketContrast: "Di supermarket Anda melihat puluhan jenis jeruk. Namun jeruk asli dari alam purba sebenarnya hanya jeruk mandarin liar kecil di hutan Tiongkok selatan dan jeruk bali raksasa di Asia Tenggara.",
    funFact: "Nama 'Mandarin' diberikan oleh bangsa Eropa karena warna jubah sutra oranye para pejabat tinggi kekaisaran Tiongkok (kaum Mandarin) persis sama dengan warna kulit buah jeruk ini.",
    ancientTradeRoutes: ["Jalur Sutra Maritim", "Diplomasi Istana Tiongkok"],
    reference: {
      title: "Nature - Genomics of the origin and evolution of Citrus",
      url: "https://www.nature.com/articles/nature25447"
    }
  },
  {
    id: "persik",
    name: "Persik / Peach (Peach)",
    scientificName: "Prunus persica",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🍑",
    originRegion: "Lembah Sungai Yangtze Atas (Zhejiang & Hunan, Tiongkok)",
    vavilovCenter: "Lembah Sungai Yangtze & Kuning",
    coordinates: [30.0, 118.0],
    approxDate: "± 6.000 – 4.000 SM (Situs Kuahuqiao)",
    domesticatingCivilization: "Kebudayaan Neolitikum Lembah Yangtze",
    shortDescription: "Buah keabadian para dewa Taois Tiongkok yang salah dinamai 'Persica' oleh bangsa Romawi karena mengira berasal dari Persia.",
    historicalStory: `Meskipun nama ilmiahnya 'Prunus persica' (yang berarti buah asal Persia), persik 100% berasal dari Lembah Sungai Yangtze di Tiongkok! Dalam mitologi Tiongkok, Ratu Barat Xiwangmu memiliki kebun persik surgawi yang buahnya hanya matang sekali setiap 3.000 tahun dan siapapun yang memakannya akan hidup abadi. Kafilah Jalur Sutra membawanya ke Persia kuno, di mana orang Yunani dan Romawi menjumpainya dan salah mengira buah tersebut asli dari Persia.`,
    supermarketContrast: "Persik kaleng manis dan jus buah peach di supermarket adalah buah sakral yang telah dibudidayakan lebih dari 8.000 tahun lalu di Tiongkok kuno.",
    funFact: "Kera Sakti Sun Wukong dalam epos legendaris Perjalanan ke Barat (Journey to the West) dihukum para dewa karena mencuri dan memakan habis buah persik keabadian di kebun surgawi.",
    ancientTradeRoutes: ["Jalur Sutra Darat", "Perdagangan Dinasti Han ke Persia"],
    reference: {
      title: "Nature Communications - Genome sequence of peach (Prunus persica) and origin of cultivation",
      url: "https://www.nature.com/articles/ncomms2725"
    }
  },
  {
    id: "terong",
    name: "Terong (Eggplant / Aubergine)",
    scientificName: "Solanum melongena",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🍆",
    originRegion: "Anak Benua India & Hutan Tropis Asia Tenggara hingga Tiongkok Selatan",
    vavilovCenter: "Anak Benua India & Lembah Indus",
    coordinates: [21.0, 80.0],
    approxDate: "± 2.000 SM",
    domesticatingCivilization: "Masyarakat Adat India Kuno & Dinasti Awal Tiongkok",
    shortDescription: "Sayuran ungu mengkilap yang aslinya berduri tajam, berbuah bulat kecil mirip telur ayam berwarna putih.",
    historicalStory: `Terong liar aslinya adalah buah kecil bulat berwarna putih kekuningan yang menyerupai telur ayam—inilah sebabnya dalam bahasa Inggris ia dinamai 'eggplant'! Tanaman liarnya dipenuhi duri tajam untuk melindungi diri. Petani kuno di India dan Tiongkok menyeleksi mutasi tanpa duri dengan buah memanjang berwarna ungu tua. Pedagang Arab memperkenalkannya ke Mediterania dan Spanyol pada abad ke-8 Masehi.`,
    supermarketContrast: "Terong balado Indonesia dan ratatouille Prancis di supermarket berakar dari semak berduri liar di perbukitan tropis India kuno ribuan tahun lalu.",
    funFact: "Di Eropa abad pertengahan, terong dijuluki 'Apel Kegilaan' (Mala insana) karena orang percaya memakannya bisa menyebabkan kegilaan dan kusta, sebelum disadari bahwa memasaknya membuatnya sangat lezat.",
    ancientTradeRoutes: ["Jalur Rempah Samudra Hindia", "Rute Kekhalifahan Islam ke Al-Andalus"],
    reference: {
      title: "Annals of Botany - The Domestication of Eggplant (Solanum melongena)",
      url: "https://academic.oup.com/aob/article/110/6/1119/2769062"
    }
  },
  {
    id: "sapi-zebu",
    name: "Sapi Zebu Berpunuk (Zebu Cattle)",
    scientificName: "Bos indicus",
    category: "fauna",
    categoryLabel: "Hewan Ternak & Domestikasi",
    icon: "🐂",
    originRegion: "Lembah Sungai Indus & Anak Benua India (Pakistan/India)",
    vavilovCenter: "Anak Benua India & Lembah Indus",
    coordinates: [25.0, 70.0],
    approxDate: "± 6.500 SM (Situs Mehrgarh)",
    domesticatingCivilization: "Peradaban Mehrgarh & Lembah Sungai Indus (Harappa)",
    shortDescription: "Sapi tangguh berpunuk lemak dan berkulit gelambir tahan iklim panas ekstrem tropis dan gigitan parasit.",
    historicalStory: `Cap stempel segel lempung dan tembikar di kota kuno Harappa dan Mohenjo-daro dari 2500 SM dipenuhi lukisan megah sapi jantan berpunuk dengan tanduk melengkung indah. Punuk lemak di punggungnya berfungsi mirip punuk unta: menyimpan cadangan energi saat musim kering. Sapi zebu memiliki kelenjar keringat di seluruh tubuhnya yang membuatnya sanggup bekerja di bawah terik khatulistiwa yang akan membunuh sapi eropa biasa.`,
    supermarketContrast: "Sapi zebu adalah nenek moyang sapi Brahman dan sapi Ongole yang diternakkan di seluruh Indonesia dan daerah tropis dunia hari ini.",
    funFact: "Dalam ajaran Hindu di India, sapi zebu berpunuk dianggap sebagai wahana suci (Nandi) dari Dewa Siwa dan dihormati sebagai simbol kesucian ibu pertiwi.",
    ancientTradeRoutes: ["Perdagangan Lembah Indus-Mesopotamia", "Jalur Maritim Samudra Hindia"],
    reference: {
      title: "Science - Genetic Evidence for a Second Domestication of Cattle in the Indus Valley",
      url: "https://www.science.org/doi/10.1126/science.277.5334.1978"
    }
  },
  {
    id: "wijen",
    name: "Wijen (Sesame)",
    scientificName: "Sesamum indicum",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🌾",
    originRegion: "Lembah Sungai Indus & Pesisir Anak Benua India",
    vavilovCenter: "Anak Benua India & Lembah Indus",
    coordinates: [24.0, 72.0],
    approxDate: "± 3.500 – 3.000 SM (Situs Harappa)",
    domesticatingCivilization: "Peradaban Harappa Lembah Indus",
    shortDescription: "Biji minyak tertua yang dibudidayakan manusia, sumber ungkapan legendaris 'Buka Pintu Wijen' (Open Sesame) Seribu Satu Malam.",
    historicalStory: `Arkeolog di situs Harappa menemukan sisa-sisa biji wijen hangus dari milenium ke-3 SM. Sekitar 2000 SM, pedagang Harappa mengekspor minyak wijen menggunakan kapal laut ke Mesopotamia (peradaban Akkadia), di mana kata Akkadia 'ellu' (minyak wijen) menjadi sinonim umum untuk minyak berharga. Polong biji wijen yang matang akan merekah terbuka secara mendadak dengan letupan kecil—inilah asal mula mantra ajaib Ali Baba 'Open Sesame' (Buka Wijen)!`,
    supermarketContrast: "Minyak wijen aromatik dan taburan onde-onde di supermarket modern berasal dari tanaman minyak tertua yang diperdagangkan lewat laut antara India dan Babilonia.",
    funFact: "Biji wijen memiliki kadar minyak hingga 55% dan kandungan antioksidan sesamin alami yang membuatnya tidak mudah tengik selama bertahun-tahun di iklim tropis.",
    ancientTradeRoutes: ["Jalur Niaga Meluhha (Indus) ke Mesopotamia", "Jalur Sutra Darat"],
    reference: {
      title: "Encyclopaedia Britannica - Sesame (Sesamum indicum)",
      url: "https://www.britannica.com/plant/sesame-plant"
    }
  },
  {
    id: "teff",
    name: "Teff (Biji Super Etiopia)",
    scientificName: "Eragrostis tef",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🌾",
    originRegion: "Dataran Tinggi Pegunungan Etiopia & Eritrea",
    vavilovCenter: "Dataran Tinggi Etiopia & Sahel Afrika",
    coordinates: [9.0, 39.5],
    approxDate: "± 4.000 – 1.000 SM",
    domesticatingCivilization: "Masyarakat Pertanian Kuno Dataran Tinggi Etiopia",
    shortDescription: "Biji serealia terkecil di planet bumi (150 butir teff setara bobot 1 butir gandum) yang menjadi rahasia stamina pelari maraton Etiopia.",
    historicalStory: `Kata 'teff' berasal dari kata Semitik Amharik 'teffa' yang berarti 'hilang'—karena jika sebutir bijinya jatuh ke tanah, biji tersebut begitu mungil sehingga seketika lenyap tak terlihat mata manusia! Dari butiran biji mikro inilah masyarakat Etiopia membuat 'injera', roti pipih fermentasi berpori asam empuk yang menjadi piring sekaligus makanan pokok kerajaan Axum kuno. Teff sangat kaya zat besi dan kalsium serta 100% bebas gluten.`,
    supermarketContrast: "Di supermarket barat modern teff dijual mahal sebagai superfood bebas gluten elit. Di Etiopia, teff adalah tanaman warisan sakral yang dilarang diekspor mentah selama bertahun-tahun demi menjaga ketahanan pangan rakyat.",
    funFact: "Hanya satu genggam kecil benih teff sudah cukup untuk menanami seluruh areal sawah seluas satu hektar!",
    ancientTradeRoutes: ["Jalur Kafilah Dataran Tinggi Axum", "Perdagangan Laut Merah"],
    reference: {
      title: "FAO - Traditional Food Plants: Teff (Eragrostis tef)",
      url: "https://www.fao.org/traditional-crops/teff/en/"
    }
  },
  {
    id: "ubi-yam",
    name: "Ubi Yam Afrika (White & Yellow Yam)",
    scientificName: "Dioscorea rotundata / cayenensis",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🍠",
    originRegion: "Sabana Lembah Sungai Niger & Hutan Afrika Barat",
    vavilovCenter: "Dataran Tinggi Etiopia & Sahel Afrika",
    coordinates: [8.5, 4.5],
    approxDate: "± 5.000 – 3.000 SM",
    domesticatingCivilization: "Masyarakat Petani Neolitikum Afrika Barat (Suku Yoruba & Igbo)",
    shortDescription: "Umbi raksasa yang beratnya bisa mencapai 50 kg per batang, tulang punggung peradaban Nok dan Kerajaan Benin kuno.",
    historicalStory: `Bagi suku Igbo dan Yoruba di Afrika Barat, ubi yam adalah 'Raja Segala Tanaman'. Setiap tahun mereka merayakan Festival Yam Baru (Iri Ji) sebagai perayaan paling meriah menyambut panen raya. Umbi yam dipukul-pukul di dalam lumpang kayu besar menjadi adonan kenyal pulen bernama 'fufu' yang disantap bersama sup pedas egusi.`,
    supermarketContrast: "Di supermarket barat kata 'yam' sering keliru digunakan untuk menyebut ubi jalar (sweet potato). Yam asli Afrika adalah tanaman umbi pemanjat sejati yang umbinya berkulit kasar berkayu seperti kulit pohon dengan daging putih padat.",
    funFact: "Kadar senyawa fitoestrogen yang tinggi pada ubi yam liar yang dikonsumsi suku Yoruba di kota Igbo-Ora dikaitkan oleh ilmuwan dengan tingkat kelahiran bayi kembar tertinggi di dunia!",
    ancientTradeRoutes: ["Jalur Perdagangan Lembah Niger Kuno", "Rute Trans-Sahara"],
    reference: {
      title: "Science - Domestication History of the African Yam (Dioscorea rotundata)",
      url: "https://www.science.org/doi/10.1126/science.aau1942"
    }
  },
  {
    id: "biji-kola",
    name: "Biji Kola (Kola Nut)",
    scientificName: "Cola nitida / Cola acuminata",
    category: "stimulant",
    categoryLabel: "Minuman & Stimulan",
    icon: "🌰",
    originRegion: "Hutan Hujan Tropis Dataran Rendah Afrika Barat (Pantai Gading, Ghana, Nigeria)",
    vavilovCenter: "Dataran Tinggi Etiopia & Sahel Afrika",
    coordinates: [6.0, -5.0],
    approxDate: "± 2.000 SM",
    domesticatingCivilization: "Komunitas Hutan Hujan Afrika Barat (Suku Ashanti & Akan)",
    shortDescription: "Kacang stimulan kafein pahit yang menjadi bahan resep asli rahasia dan pemberi nama minuman 'Coca-Cola'!",
    historicalStory: `Biji pohon kola mengandung konsentrasi kafein dan teobromina yang sangat tinggi. Di Afrika Barat kuno, mengunyah biji kola pahit adalah ritual kehormatan menyambut tamu, akad pernikahan, dan penambah stamina para pejalan kaki kafilah gurun untuk menahan lapar dan kantuk. Pada tahun 1886 di Atlanta, apoteker John Pemberton mencampur ekstrak daun koka dan ekstrak biji kola Afrika ini untuk menciptakan tonik minuman berkarbonasi paling terkenal di planet bumi: Coca-Cola!`,
    supermarketContrast: "Di supermarket kaleng Coca-Cola dingin dijual di setiap sudut dunia. Nama 'Cola' pada minuman tersebut diabadikan dari biji kacang pohon hutan Afrika Barat ini.",
    funFact: "Meskipun rasa awalnya sangat pahit saat dikunyah, air putih yang diminum sesaat setelah mengunyah biji kola akan terasa manis seperti madu di lidah.",
    ancientTradeRoutes: ["Jalur Kafilah Emas & Kola Trans-Sahara", "Perdagangan Kerajaan Ashanti"],
    reference: {
      title: "Kew Royal Botanic Gardens - Cola nitida (Kola Nut)",
      url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:822830-1"
    }
  },
  {
    id: "kenari",
    name: "Kenari Persia / Walnut (Persian Walnut)",
    scientificName: "Juglans regia",
    category: "produce",
    categoryLabel: "Buah & Sayuran",
    icon: "🪵",
    originRegion: "Pegunungan Asia Tengah (Kyrgyzstan, Lembah Fergana, & Iran Utara)",
    vavilovCenter: "Asia Tengah & Stepa Eurasia",
    coordinates: [41.3, 72.9],
    approxDate: "± 7.000 SM",
    domesticatingCivilization: "Masyarakat Pengumpul Hutan Pegunungan Asia Tengah & Persia",
    shortDescription: "Kacang cangkang keras menyerupai bentuk otak manusia yang tumbuh di hutan rimba kenari purba terbesar di dunia di Arslanbob, Kyrgyzstan.",
    historicalStory: `Di lereng Pegunungan Tian Shan di Kyrgyzstan terdapat hutan Arslanbob: rimba pohon kenari alami tertua dan terluas di planet bumi seluas 11.000 hektar. Legenda menceritakan bahwa Aleksander Agung dari Makedonia beristirahat di hutan ini pada 329 SM dan membawa karung-karung biji kenari kembali ke Yunani, yang kemudian disebarkan ke seluruh kekaisaran Romawi sebagai 'Kacang Kerajaan' (Juglans regia = buah Jupiter).`,
    supermarketContrast: "Kacang walnut kemasan di supermarket sering disebut 'California Walnut'. Asal-usul genetik aslinya adalah hutan rimba liar pegunungan Asia Tengah yang telah dipanen sejak Zaman Es.",
    funFact: "Pohon kenari menghasilkan senyawa kimia alami 'juglone' di daun dan akarnya yang meracuni tanaman lain di sekitarnya agar tidak tumbuh menyaingi pohon kenari (alelopati).",
    ancientTradeRoutes: ["Jalur Sutra Lembah Fergana", "Ekspedisi Aleksander Agung"],
    reference: {
      title: "PNAS - Phylogenomic insights into the origin and evolutionary history of walnut (Juglans regia)",
      url: "https://www.pnas.org/doi/10.1073/pnas.1908051116"
    }
  },
  {
    id: "gandum-rye",
    name: "Gandum Hitam / Rye (Cereal Rye)",
    scientificName: "Secale cereale",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🌾",
    originRegion: "Anatolia Tengah & Timur (Turki) ke Eropa Timur",
    vavilovCenter: "Cekungan Mediterania & Kaukasus",
    coordinates: [39.0, 35.0],
    approxDate: "± 4.000 SM (Sebagai gulma peniru gandum sebelum dibudidayakan)",
    domesticatingCivilization: "Petani Zaman Perunggu Eropa Timur & Anatolia",
    shortDescription: "Serealia tanah beku yang awalnya adalah gulma rumput liar sebelum berubah menjadi bahan roti hitam pumpernickel Eropa.",
    historicalStory: `Rye adalah contoh klasik evolusi botani 'mimikri Vavilovian': awalnya rye adalah rumput gulma liar yang tumbuh menyusup di ladang gandum. Karena petani selalu membuang gulma, rye secara evolusi bermutasi meniru bentuk daun dan biji gandum agar tidak dicabut! Ketika pertanian gandum menyebar ke utara Eropa yang bersuhu beku dan tanahnya asam di mana gandum mati, rye justru tumbuh subur dan akhirnya diadopsi sebagai makanan pokok roti hitam bangsa Slavia dan Skandinavia.`,
    supermarketContrast: "Roti rye hitam (rye bread) di supermarket adalah roti andalan musim dingin ekstrem Eropa yang lahir dari tanaman gulma peniru yang berhasil bertahan hidup dari seleksi tangan manusia.",
    funFact: "Jamur ergot (Claviceps purpurea) yang tumbuh pada bulir gandum rye yang basah mengandung senyawa alkaloid pemicu halusinasi ergotisme, yang diduga menjadi pemicu histeria massal pengadilan penyihir Salem di Massachusetts tahun 1692!",
    ancientTradeRoutes: ["Jalur Pertanian Neolitikum Eropa Utara", "Rute Slavia-Baltik"],
    reference: {
      title: "Encyclopaedia Britannica - Rye (Secale cereale)",
      url: "https://www.britannica.com/plant/rye"
    }
  },
  {
    id: "oat",
    name: "Oat / Gandum Haver (Oats)",
    scientificName: "Avena sativa",
    category: "staple",
    categoryLabel: "Pangan & Karbohidrat",
    icon: "🥣",
    originRegion: "Bulan Sabit Subur & Eropa Tengah/Timur",
    vavilovCenter: "Cekungan Mediterania & Kaukasus",
    coordinates: [45.0, 20.0],
    approxDate: "± 2.000 – 1.000 SM",
    domesticatingCivilization: "Petani Zaman Perunggu Eropa & Bangsa Kelt",
    shortDescription: "Bulir kaya serat beta-glukan penopang energi prajurit Kelt dan Skotlandia di dataran tinggi berangin dingin.",
    historicalStory: `Sama seperti rye, oat awalnya adalah gulma sekunder yang menyusup di ladang gandum emmer di Timur Dekat. Ketika tanaman gandum dibawa ke wilayah Eropa yang lembap dan berkabut dingin (seperti Skotlandia dan Irlandia), oat tumbuh jauh lebih unggul dan menggantikan gandum. Penulis Inggris abad ke-18 Samuel Johnson pernah menulis dalam kamusnya dengan nada mengejek: 'Oat adalah biji yang di Inggris dimakan oleh kuda, tetapi di Skotlandia dimakan oleh manusia!' Orang Skotlandia membalasnya dengan bangga: 'Dan itulah mengapa Inggris memiliki kuda terbaik, dan Skotlandia memiliki pria-pria terkuat!'`,
    supermarketContrast: "Oatmeal instan kaleng dan susu oat di supermarket modern adalah salah satu makanan sarapan tersehat di bumi penurun kolesterol darah alami.",
    funFact: "Kandungan serat larut beta-glukan pada oat membentuk gel pelindung lambung yang unik dalam memperlambat penyerapan glukosa dan mengikat asam empedu kolesterol.",
    ancientTradeRoutes: ["Jalur Zaman Perunggu Kelt", "Pasar Pertanian Eropa Utara"],
    reference: {
      title: "Nature - The oat genome provides insights into its unique nutrition and physiology",
      url: "https://www.nature.com/articles/s41586-022-04732-y"
    }
  }
];



// =========================================================================
// JALUR PERGERAKAN DENGAN TAHUN (SM / MASEHI) & ARAH NAVIGASI TERSTRUKTUR
// =========================================================================
const CHRONOLOGICAL_ROUTES = [
  {
    id: "neolithic-wheat-spread",
    name: "Migrasi Revolusi Neolitikum: Penyebaran Gandum (9500 SM – 4000 SM)",
    period: "± 9500 SM – 4000 SM",
    color: "#e67e22",
    description: "Pergerakan difusi tanaman gandum dan jelai dari episentrum Göbekli Tepe (Hilal Subur) ke Lembah Nil, Lembah Indus, dan Benua Eropa.",
    waypoints: [
      [37.7, 39.8],   // 1. Karacadag / Göbekli Tepe (9500 SM)
      [31.9, 35.2],   // 2. Lembah Yordan / Jericho (8500 SM)
      [30.0, 31.2],   // 3. Delta Nil Mesir (6000 SM)
      [27.3, 68.1],   // 4. Lembah Indus Mehrgarh (5500 SM)
      [38.0, 23.7],   // 5. Yunani Mediterania (5000 SM)
      [48.8, 12.5]    // 6. Lembah Danube Eropa Tengah (4500 SM)
    ],
    chronology: [
      { step: 1, year: "± 9.500 SM", place: "Pegunungan Karacadag, Anatolia (Turki)", note: "Domestikasi pertama gandum liar einkorn oleh pembangun Göbekli Tepe." },
      { step: 2, year: "± 8.500 SM", place: "Lembah Yordan & Jericho (Levant)", note: "Tanaman gandum emmer menjadi makanan pokok pemukiman Neolitikum tertua berbenteng batu." },
      { step: 3, year: "± 6.000 SM", place: "Delta Sungai Nil (Mesir Kuno)", note: "Pertanian gandum memasuki Afrika, membentuk pondasi peradaban Firaun." },
      { step: 4, year: "± 5.500 SM", place: "Mehrgarh & Lembah Indus (Pakistan)", note: "Gandum dan jelai menyebar ke timur membentuk cikal bakal peradaban Harappa." },
      { step: 5, year: "± 5.000 SM", place: "Semenanjung Balkan & Yunani", note: "Petani Neolitikum membawa benih gandum melintasi Laut Aegea ke Eropa." },
      { step: 6, year: "± 4.500 SM", place: "Lembah Sungai Danube (Eropa Tengah)", note: "Revolusi pertanian meluas ke Prancis, Jerman, hingga kepulauan Britania." }
    ]
  },
  {
    id: "austronesian-maritime-expansion",
    name: "Ekspansi Maritim Austronesia: Pisang, Tebu, Kelapa & Padi (3000 SM – 1200 M)",
    period: "± 3000 SM – 1200 Masehi",
    color: "#16a085",
    description: "Pelayaran samudra terjauh prasejarah manusia menggunakan perahu cadik, menyebarkan tanaman pangan tropis melintasi dua samudra besar (Pasifik & Hindia).",
    waypoints: [
      [24.0, 121.0],   // 1. Taiwan (3000 SM)
      [14.5, 121.0],   // 2. Filipina (2200 SM)
      [-6.2, 106.8],   // 3. Nusantara / Sundaland (1500 SM)
      [-4.5, 129.9],   // 4. Maluku & New Guinea (1000 SM)
      [-18.7, 46.8],   // 5. Madagaskar, Afrika Timur (500 M)
      [-17.6, -149.4], // 6. Polinesia & Hawaii (1000 M)
      [-37.0, 174.8]   // 7. Selandia Baru / Aotearoa (1250 M)
    ],
    chronology: [
      { step: 1, year: "± 3.000 SM", place: "Pulau Taiwan (Kebudayaan Dapenkeng)", note: "Lahirnya navigasi perahu cadik dan budidaya padi maritim." },
      { step: 2, year: "± 2.200 SM", place: "Kepulauan Filipina", note: "Migrasi gelombang pertama ke selatan membawa benih talas dan umbi." },
      { step: 3, year: "± 1.500 SM", place: "Nusantara (Kalimantan, Jawa, Sulawesi)", note: "Domestikasi kelapa, pisang, dan jahe menyebar ke seluruh Sundaland." },
      { step: 4, year: "± 1.000 SM", place: "Kepulauan Maluku & Melanesia", note: "Kontak dengan petani tebu purba Papua dan pohon rempah endemik." },
      { step: 5, year: "± 500 Masehi", place: "Madagaskar (Pesisir Afrika Timur)", note: "Pelaut Nusantara menyeberangi Samudra Hindia sejauh 6.000 km, memperkenalkan pisang dan ubi ke Afrika." },
      { step: 6, year: "± 1.000 Masehi", place: "Kepulauan Polinesia (Tahiti & Hawaii)", note: "Pelayaran Pasifik dengan 'tanaman kano' (kelapa, talas, sukun, tebu)." }
    ]
  },
  {
    id: "maritime-spice-route",
    name: "Jalur Rempah Maritim Purba: Maluku ke Alexandria & Roma (2000 SM – 1600 M)",
    period: "± 2000 SM – 1600 Masehi",
    color: "#d35400",
    description: "Jalur pelayaran rempah legendaris menghubungkan kepulauan terpencil Nusantara melintasi Samudra Hindia hingga pusat peradaban Mediterania.",
    waypoints: [
      [0.78, 127.36],   // Maluku Utara (2000 SM)
      [-4.52, 129.90],  // Kepulauan Banda (1500 SM)
      [2.2, 102.2],     // Selat Malaka (1000 SM)
      [10.8, 76.2],     // Malabar Kerala India (1200 SM)
      [12.8, 45.0],     // Aden / Yaman (500 SM)
      [31.2, 29.9],     // Alexandria Mesir (300 SM)
      [41.9, 12.5]      // Roma / Venesia Italia (100 M - 1600 M)
    ],
    chronology: [
      { step: 1, year: "± 2.000 SM", place: "Kepulauan Maluku & Banda", note: "Satu-satunya titik di bumi tempat cengkeh dan pala dipanen." },
      { step: 2, year: "± 1.720 SM", place: "Terqa, Mesopotamia (Suriah)", note: "Bukti arkeologis tertua cengkeh Maluku ditemukan di toples tanah liat dapur Mesopotamia." },
      { step: 3, year: "± 1.200 SM", place: "Pesisir Malabar (India)", note: "Hub perdagangan lada hitam; butiran lada dimasukkan ke lubang hidung mumi Ramses II Mesir." },
      { step: 4, year: "± 300 SM – 100 M", place: "Alexandria & Laut Merah", note: "Pedagang Yunani-Romawi memanfaatkan angin muson Samudra Hindia berlayar ke India." },
      { step: 5, year: "± 1.500 Masehi", place: "Venesia & Lisboa (Eropa)", note: "Rempah bernilai lebih mahal dari emas, memicu armada pelayaran Vasco da Gama dan Magellan." }
    ]
  },
  {
    id: "silk-road-overland",
    name: "Jalur Sutra Darat: Chang'an ke Konstantinopel & Roma (130 SM – 1453 M)",
    period: "± 130 SM – 1453 Masehi",
    color: "#c0392b",
    description: "Rute kafilah unta terpanjang di dunia membawa sutra, teh, porselen ke Barat dan menukar dengan benih apel, anggur, dan kuda kavaleri ke Timur.",
    waypoints: [
      [34.3, 108.9],    // 1. Chang'an / Xi'an (130 SM)
      [40.1, 94.6],     // 2. Dunhuang / Gua Mogao (100 SM)
      [43.2, 76.9],     // 3. Almaty / Tian Shan (100 SM)
      [39.6, 66.9],     // 4. Samarkand / Sogdia (50 SM)
      [33.3, 44.3],     // 5. Bagdad / Mesopotamia (750 M)
      [41.0, 28.9],     // 6. Konstantinopel / Istanbul (100 M - 1453 M)
      [41.9, 12.5]      // 7. Roma (100 M)
    ],
    chronology: [
      { step: 1, year: "± 130 SM", place: "Chang'an (Xi'an, Tiongkok)", note: "Kaisar Han Wu Di mengutus Zhang Qian membuka rute ke barat mencari 'Kuda Surgawi'." },
      { step: 2, year: "± 100 SM", place: "Pegunungan Tian Shan (Almaty, Kazakhstan)", note: "Benih apel liar Malus sieversii dipetik kafilah dan disebarkan ke barat dan timur." },
      { step: 3, year: "± 50 SM", place: "Samarkand (Uzbekistan)", note: "Pedagang Sogdiana menjadi perantara terbesar sutra, rempah, dan kaca Romawi." },
      { step: 4, year: "± 100 Masehi", place: "Konstantinopel & Roma", note: "Senator Romawi mengenakan jubah sutra Tiongkok; sutra ditukar seberat bobot emas." },
      { step: 5, year: "1453 Masehi", place: "Konstantinopel (Jatuh ke Utsmaniyah)", note: "Jalur darat ditutup, memaksa bangsa Eropa mencari jalur laut alternatif ke Asia." }
    ]
  },
  {
    id: "columbian-new-to-old",
    name: "Pertukaran Columbus: Dari Benua Amerika ke Afro-Eurasia (1493 M+)",
    period: "Mulai 1493 Masehi (Abad ke-16)",
    color: "#27ae60",
    description: "Tanaman asli Dunia Baru yang merevolusi seluruh kuliner bumi: Jagung, Kentang, Cabai, Tomat, Kakao, Singkong, Vanila, Nanas, dan Tembakau.",
    waypoints: [
      [19.4, -99.1],    // 1. Tenochtitlan / Meksiko (1493 M)
      [-12.0, -77.0],   // 2. Andes Peru (1532 M)
      [23.1, -82.3],    // 3. Havana Kuba (1510 M)
      [36.5, -6.3],     // 4. Seville / Cadiz Spanyol (1493 M)
      [15.4, 73.8],     // 5. Goa India (1510 M)
      [2.2, 102.2],     // 6. Malaka & Maluku (1511 M)
      [37.5, 127.0]     // 7. Korea & Tiongkok (1590 M)
    ],
    chronology: [
      { step: 1, year: "1493 Masehi", place: "Kepulauan Karibia & Spanyol", note: "Columbus membawa jagung, cabai, dan nanas pertama kali ke hadapan Raja Spanyol Ferdinand." },
      { step: 2, year: "1521 Masehi", place: "Lembah Meksiko ke Eropa", note: "Penaklukan Hernan Cortes membawa rahasia cokelat kakao dan tomat ke istana Madrid." },
      { step: 3, year: "1511 – 1520 M", place: "Goa (India) & Malaka (Nusantara)", note: "Pelaut Portugis membawa tanaman cabai merah ke Asia; kari India dan sambal Nusantara lahir!" },
      { step: 4, year: "1570 Masehi", place: "Dataran Tinggi Andes ke Eropa", note: "Kentang dibawa dari Peru ke Spanyol, lalu menyebar mengakhiri paceklik pangan Eropa." },
      { step: 5, year: "1590 Masehi", place: "Semenanjung Korea", note: "Cabai merah tiba di Korea via Jepang/Portugis, mengubah kimchi purba menjadi merah pedas." }
    ]
  },
  {
    id: "columbian-old-to-new",
    name: "Pertukaran Columbus: Dari Dunia Lama ke Benua Amerika (1493 M+)",
    period: "Mulai 1493 Masehi (Abad ke-16)",
    color: "#2980b9",
    description: "Komoditas Afro-Eurasia yang ditanam di benua Amerika: Gandum, Tebu, Kopi, Pisang, serta hewan ternak (Kuda, Sapi, Domba, Ayam, Babi).",
    waypoints: [
      [36.5, -6.3],     // 1. Pelabuhan Seville Spanyol (1493 M)
      [28.1, -15.4],    // 2. Kepulauan Canaria (1493 M)
      [18.4, -69.9],    // 3. Santo Domingo Karibia (1493 M)
      [19.4, -99.1],    // 4. Meksiko Daratan (1520 M)
      [-12.0, -77.0],   // 5. Lima Peru (1535 M)
      [-22.9, -43.1]    // 6. Rio de Janeiro Brasil (1727 M - Kopi)
    ],
    chronology: [
      { step: 1, year: "1493 Masehi", place: "Ekspedisi Kedua Columbus (17 Kapal)", note: "Membawa bibit tebu, gandum, jeruk, serta ternak hidup (kuda, sapi, babi, ayam) pertama kali ke Amerika." },
      { step: 2, year: "1516 Masehi", place: "Hispaniola (Karibia)", note: "Pabrik gula tebu pertama didirikan di Dunia Baru, memicu kedatangan budak jutaan jiwa dari Afrika." },
      { step: 3, year: "1530 – 1550 M", place: "Padang Rumput Amerika Utara & Selatan", note: "Kuda liar melarikan diri dan melahirkan populasi kuda liar Mustang dan budaya kavaleri suku Indian Plains." },
      { step: 4, year: "1727 Masehi", place: "Brasil", note: "Bibit kopi diselundupkan dari Guyana Prancis ke Brasil, mengawali industri kopi terbesar dunia hari ini." }
    ]
  }
];

// =========================================================================
// DATASET PARADOKS SUPERMARKET (THE DISH ANALYZER)
// =========================================================================
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

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { VAVILOV_CENTERS, COMMODITIES_DATA, DISH_ANALYSIS, CHRONOLOGICAL_ROUTES };
}
