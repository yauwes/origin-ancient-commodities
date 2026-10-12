/**
 * ORIGIN: PETA KOMODITAS ALAM PERADABAN PURBA
 * Main Application Logic & Interactive Leaflet Engine
 */

let map;
let commodityMarkers = [];
let vavilovLayerGroup;
let tradeRoutesLayerGroup;
let activeCategory = 'all';
let searchQuery = '';
let currentTileLayer;

// Basemap Tile Providers (Reliable & Free without API keys)
const TILE_PROVIDERS = {
  vintage: {
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://openstreetmap.org">OSM</a>',
    subdomains: 'abcd',
    maxZoom: 19,
    containerClass: 'map-theme-vintage'
  },
  dark: {
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://openstreetmap.org">OSM</a>',
    subdomains: 'abcd',
    maxZoom: 19,
    containerClass: 'map-theme-dark'
  },
  satellite: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    maxZoom: 18,
    containerClass: 'map-theme-satellite'
  }
};

// Story Tour Stations
const TOUR_STEPS = [
  {
    commodityId: "gandum",
    title: "1. Hilal Subur: Kelahiran Pertanian & Roti Pertama",
    desc: "10.000 tahun lalu di Pegunungan Karacadag (dekat Göbekli Tepe, Turki), manusia pertama kali menjinakkan gandum liar einkorn, mengakhiri era berburu-meramu dan melahirkan kota-kota pertama di muka bumi."
  },
  {
    commodityId: "cengkeh",
    title: "2. Kepulauan Maluku: Misteri Rempah Paling Berharga",
    desc: "Selama ribuan tahun, cengkeh HANYA tumbuh di 5 pulau vulkanik kecil di Maluku Utara. Di Roma kuno dan Tiongkok Dinasti Han, aroma cengkeh adalah kemewahan gaib yang nilainya melebihi emas murni."
  },
  {
    commodityId: "jagung",
    title: "3. Lembah Balsas Meksiko: Mukjizat Teosinte ke Jagung",
    desc: "Bangsa Maya dan Olmek merekayasa rumput liar teosinte menjadi jagung berkepala bulir raksasa. Jagung begitu suci hingga mitologi Maya menyebut manusia diciptakan dari adonan tepung jagung."
  },
  {
    commodityId: "padi",
    title: "4. Lembah Sungai Yangtze: Arsitek Peradaban Asia",
    desc: "Padi sawah basah dibudidayakan 9.000 SM di tepi Sungai Yangtze, Tiongkok. Kebutuhan membangun irigasi dan terasering lereng melahirkan tata kelola birokrasi dan kekaisaran tertua di Asia."
  },
  {
    commodityId: "kentang",
    title: "5. Dataran Tinggi Andes: 4.000 Jenis Umbi Penyelamat Eropa",
    desc: "Di lereng es beku Danau Titicaca, peradaban Inka membudidayakan kentang dan mengeringkannya menjadi chuño. Ketika dibawa ke Eropa abad ke-16, kentang mengakhiri paceklik kelaparan benua itu."
  },
  {
    commodityId: "lada-hitam",
    title: "6. Pesisir Malabar India: 'Emas Hitam' di Hidung Firaun",
    desc: "Lada hitam asli hutan hujan Kerala ditemukan di lubang hidung mumi Firaun Ramses II (1213 SM). Obsesi bangsa Romawi pada rempah ini memicu perdagangan laut lintas Samudra Hindia pertama."
  },
  {
    commodityId: "kopi",
    title: "7. Hutan Kaffa Etiopia: Minuman Para Sufi & Penjaga Malam",
    desc: "Sebelum menjadi minuman global di kafe-kafe modern, biji kopi arabika dikunyah suku Oromo Etiopia dan diseduh para sufi Yaman abad ke-15 untuk menjaga zikir semalaman."
  },
  {
    commodityId: "apel",
    title: "8. Pegunungan Tian Shan Kazakhstan: Rimba Apel Liar Dunia",
    desc: "Semua apel di rak supermarket modern berasal dari satu hutan rimba apel purba di Almaty, Kazakhstan, yang bijinya disebarkan oleh beruang cokelat dan kafilah penunggang kuda Jalur Sutra."
  }
];

let currentTourIndex = 0;

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  initHUDControls();
  initDrawer();
  initModals();
  initDishAnalyzer();
  initTour();
  renderCommodityMarkers();
  updateCounters();
});

/**
 * Inisialisasi Peta Leaflet dengan View Dunia
 */
function initMap() {
  const mapElement = document.getElementById('map');
  
  // Set default view centered at equator showing Afro-Eurasia and Americas
  map = L.map('map', {
    center: [20, 15],
    zoom: 2.5,
    minZoom: 2,
    maxZoom: 18,
    worldCopyJump: true,
    zoomControl: false
  });

  // Position zoom controls at bottom-right
  L.control.zoom({ position: 'bottomright' }).addTo(map);

  // Set default tile theme (Vintage Cartography)
  setMapTheme('vintage');

  // Layer groups for toggleable elements
  vavilovLayerGroup = L.layerGroup().addTo(map);
  tradeRoutesLayerGroup = L.layerGroup().addTo(map);

  renderVavilovCenters();
  renderTradeRoutes();
}

/**
 * Ganti tema visual peta (Vintage, Dark, Satellite)
 */
function setMapTheme(themeKey) {
  const provider = TILE_PROVIDERS[themeKey] || TILE_PROVIDERS.vintage;
  const mapElement = document.getElementById('map');

  if (currentTileLayer) {
    map.removeLayer(currentTileLayer);
  }

  currentTileLayer = L.tileLayer(provider.url, {
    attribution: provider.attribution,
    subdomains: provider.subdomains || 'abc',
    maxZoom: provider.maxZoom
  }).addTo(map);

  // Adjust CSS filter class
  mapElement.className = provider.containerClass;

  // Update active state in theme buttons
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === themeKey);
  });
}

/**
 * Render Vavilov Centers of Origin (Lingkaran / Area Asal Agrikultur)
 */
function renderVavilovCenters() {
  vavilovLayerGroup.clearLayers();

  VAVILOV_CENTERS.forEach(center => {
    const circle = L.circle(center.coordinates, {
      radius: center.radius,
      color: center.color,
      weight: 2,
      opacity: 0.8,
      fillColor: center.color,
      fillOpacity: 0.12,
      dashArray: '6, 8'
    });

    const popupHtml = `
      <div class="popup-container">
        <div class="popup-header">
          <span style="font-size:1.3rem;">🏛️</span>
          <div>
            <h4 style="color:${center.color}">${center.name}</h4>
            <span class="popup-latin">${center.period}</span>
          </div>
        </div>
        <p class="popup-body">${center.description}</p>
        <div style="font-size:0.75rem; color:#94a3b8; margin-top:0.4rem;">
          <strong>Komoditas Asli:</strong> ${center.commodities.join(', ')}
        </div>
      </div>
    `;

    circle.bindPopup(popupHtml);
    vavilovLayerGroup.addLayer(circle);
  });
}

/**
 * Render Jalur Perdagangan Kuno (Trade Routes & Columbian Exchange)
 */
function renderTradeRoutes() {
  tradeRoutesLayerGroup.clearLayers();

  TRADE_ROUTES.forEach(route => {
    const polyline = L.polyline(route.waypoints, {
      color: route.color,
      weight: 3.5,
      opacity: 0.75,
      dashArray: '8, 6',
      lineCap: 'round',
      smoothFactor: 1.5
    });

    const popupHtml = `
      <div class="popup-container">
        <div class="popup-header">
          <span style="font-size:1.3rem;">⛵</span>
          <div>
            <h4 style="color:${route.color}">${route.name}</h4>
            <span class="popup-latin">${route.period}</span>
          </div>
        </div>
        <p class="popup-body">${route.description}</p>
      </div>
    `;

    polyline.bindPopup(popupHtml);
    tradeRoutesLayerGroup.addLayer(polyline);
  });
}

/**
 * Render Marker Komoditas Berdasarkan Filter Aktif & Pencarian
 */
function renderCommodityMarkers() {
  // Bersihkan marker yang ada
  commodityMarkers.forEach(m => map.removeLayer(m));
  commodityMarkers = [];

  const filteredCommodities = COMMODITIES_DATA.filter(c => {
    const matchCategory = (activeCategory === 'all' || c.category === activeCategory);
    const q = searchQuery.toLowerCase().trim();
    const matchQuery = !q || (
      c.name.toLowerCase().includes(q) ||
      c.scientificName.toLowerCase().includes(q) ||
      c.originRegion.toLowerCase().includes(q) ||
      c.vavilovCenter.toLowerCase().includes(q) ||
      c.shortDescription.toLowerCase().includes(q)
    );
    return matchCategory && matchQuery;
  });

  filteredCommodities.forEach(c => {
    const customIcon = L.divIcon({
      className: 'custom-div-icon',
      html: `<div class="commodity-marker-pin" title="${c.name}">${c.icon}</div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
      popupAnchor: [0, -20]
    });

    const marker = L.marker(c.coordinates, { icon: customIcon });

    const popupContent = `
      <div class="popup-container">
        <div class="popup-header">
          <span class="popup-icon">${c.icon}</span>
          <div>
            <h4>${c.name}</h4>
            <div class="popup-latin">${c.scientificName}</div>
          </div>
        </div>
        <div class="popup-body">
          <p><strong>Asal:</strong> ${c.originRegion}</p>
          <p style="margin-top:0.25rem;">${c.shortDescription}</p>
        </div>
        <button class="popup-btn" onclick="openCommodityDetail('${c.id}')">
          📖 Buka Kisah Sejarah & Paradoks
        </button>
      </div>
    `;

    marker.bindPopup(popupContent);

    // Click marker opens detail drawer directly
    marker.on('click', () => {
      openCommodityDetail(c.id);
    });

    marker.addTo(map);
    commodityMarkers.push(marker);
  });

  updateCounters(filteredCommodities.length);
}

/**
 * Perbarui Counter Komoditas di HUD
 */
function updateCounters(currentCount = COMMODITIES_DATA.length) {
  const counterEl = document.getElementById('commodityCounter');
  if (counterEl) {
    counterEl.textContent = `${currentCount} / ${COMMODITIES_DATA.length} Komoditas`;
  }
}

/**
 * Buka Side Drawer Dossier untuk Komoditas Tertentu
 */
window.openCommodityDetail = function(commodityId) {
  const commodity = COMMODITIES_DATA.find(c => c.id === commodityId);
  if (!commodity) return;

  const drawer = document.getElementById('detailDrawer');
  const drawerBody = document.getElementById('drawerBody');
  const drawerTitle = document.getElementById('drawerTitle');
  const drawerLatin = document.getElementById('drawerLatin');
  const drawerCategoryBadge = document.getElementById('drawerCategoryBadge');
  const drawerVavilovBadge = document.getElementById('drawerVavilovBadge');
  const btnDrawerFly = document.getElementById('btnDrawerFly');

  drawerTitle.textContent = commodity.name;
  drawerLatin.textContent = commodity.scientificName;
  drawerCategoryBadge.textContent = commodity.categoryLabel;
  drawerVavilovBadge.textContent = commodity.vavilovCenter;

  drawerBody.innerHTML = `
    <!-- Hero Box -->
    <div class="drawer-hero">
      <div class="drawer-hero-icon">${commodity.icon}</div>
      <div class="drawer-hero-meta">
        <div class="meta-row"><strong>Wilayah Asli:</strong> ${commodity.originRegion}</div>
        <div class="meta-row"><strong>Estimasi Waktu:</strong> ${commodity.approxDate}</div>
        <div class="meta-row"><strong>Peradaban Pertama:</strong> ${commodity.domesticatingCivilization}</div>
      </div>
    </div>

    <!-- Supermarket Paradox Contrast Callout -->
    <div class="supermarket-contrast-box">
      <div class="box-tag">
        <span>🛒</span> PARADOKS PERADABAN SUPERMARKET
      </div>
      <p>${commodity.supermarketContrast}</p>
    </div>

    <!-- Full Historical Narrative -->
    <div class="drawer-section">
      <h3><span>📜</span> Kisah Sejarah & Misteri Asal-Usul</h3>
      <p>${commodity.historicalStory}</p>
    </div>

    <!-- Fun Fact -->
    <div class="fun-fact-card">
      <div class="fact-title">
        <span>✨</span> FAKTA MENGEJUTKAN SEJARAH
      </div>
      <p>${commodity.funFact}</p>
    </div>

    <!-- Ancient Routes -->
    ${commodity.ancientTradeRoutes && commodity.ancientTradeRoutes.length > 0 ? `
      <div class="drawer-section" style="margin-top:0.25rem;">
        <h3><span>🗺️</span> Jalur Perdagangan Kuno Terkait</h3>
        <div style="display:flex; gap:0.4rem; flex-wrap:wrap; margin-top:0.4rem;">
          ${commodity.ancientTradeRoutes.map(r => `<span style="font-size:0.75rem; background:rgba(30,41,59,0.8); border:1px solid rgba(148,163,184,0.2); padding:3px 8px; border-radius:999px; color:#cbd5e1;">⚓ ${r}</span>`).join('')}
        </div>
      </div>
    ` : ''}
  `;

  // Setup Fly-To action
  btnDrawerFly.onclick = () => {
    map.flyTo(commodity.coordinates, 6, {
      duration: 1.5,
      easeLinearity: 0.25
    });
  };

  drawer.classList.add('open');
};

/**
 * Inisialisasi Kontrol HUD (Pills, Search, Toggles, Themes)
 */
function initHUDControls() {
  // Category Filter Pills
  document.querySelectorAll('.pill-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category || 'all';
      renderCommodityMarkers();
    });
  });

  // Search Input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderCommodityMarkers();
    });
  }

  // Vavilov Layer Toggle
  const toggleVavilov = document.getElementById('toggleVavilov');
  if (toggleVavilov) {
    toggleVavilov.addEventListener('change', (e) => {
      if (e.target.checked) {
        map.addLayer(vavilovLayerGroup);
      } else {
        map.removeLayer(vavilovLayerGroup);
      }
    });
  }

  // Trade Routes Toggle
  const toggleRoutes = document.getElementById('toggleRoutes');
  if (toggleRoutes) {
    toggleRoutes.addEventListener('change', (e) => {
      if (e.target.checked) {
        map.addLayer(tradeRoutesLayerGroup);
      } else {
        map.removeLayer(tradeRoutesLayerGroup);
      }
    });
  }

  // Theme selector buttons
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setMapTheme(btn.dataset.theme);
    });
  });

  // Random / Surprise Me Button
  const btnSurprise = document.getElementById('btnSurprise');
  if (btnSurprise) {
    btnSurprise.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * COMMODITIES_DATA.length);
      const randomCommodity = COMMODITIES_DATA[randomIndex];
      openCommodityDetail(randomCommodity.id);
      map.flyTo(randomCommodity.coordinates, 5, { duration: 1.5 });
    });
  }
}

/**
 * Inisialisasi Side Drawer Event
 */
function initDrawer() {
  const drawer = document.getElementById('detailDrawer');
  const closeBtn = document.getElementById('drawerCloseBtn');

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }
}

/**
 * Inisialisasi Modal Windows
 */
function initModals() {
  // Open / Close modal helpers
  window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
  };

  window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
  };

  // Close modals when clicking backdrop
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });
}

/**
 * Inisialisasi Fitur Paradoks Supermarket (The Dish Analyzer)
 */
function initDishAnalyzer() {
  const tabsContainer = document.getElementById('dishTabs');
  const contentContainer = document.getElementById('dishContent');
  if (!tabsContainer || !contentContainer) return;

  tabsContainer.innerHTML = '';
  DISH_ANALYSIS.forEach((dish, index) => {
    const btn = document.createElement('button');
    btn.className = `dish-tab-btn ${index === 0 ? 'active' : ''}`;
    btn.innerHTML = `<span>${dish.imageIcon}</span> <span>${dish.name.split(' ')[0]}</span>`;
    btn.onclick = () => renderDishDetail(dish.id);
    btn.dataset.dishId = dish.id;
    tabsContainer.appendChild(btn);
  });

  if (DISH_ANALYSIS.length > 0) {
    renderDishDetail(DISH_ANALYSIS[0].id);
  }
}

function renderDishDetail(dishId) {
  const dish = DISH_ANALYSIS.find(d => d.id === dishId);
  if (!dish) return;

  // Update tabs active state
  document.querySelectorAll('.dish-tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.dishId === dishId);
  });

  const contentContainer = document.getElementById('dishContent');
  contentContainer.innerHTML = `
    <div class="dish-hero-box">
      <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.35rem;">
        <span style="font-size:2rem;">${dish.imageIcon}</span>
        <div>
          <h3>${dish.name}</h3>
          <div class="dish-tagline">${dish.tagline}</div>
        </div>
      </div>
      <p class="dish-desc">${dish.description}</p>
    </div>

    <div style="font-family:var(--font-serif); font-size:0.95rem; color:var(--text-gold); margin-top:0.25rem;">
      🔍 Asal-Usul Komponen Bahan Sebelum Tahun 1492:
    </div>

    <div class="ingredient-list">
      ${dish.ingredients.map(ing => `
        <div class="ingredient-item">
          <div class="ing-left">
            <div class="ing-name">${ing.item}</div>
            <div class="ing-origin">📍 Asal Asli: ${ing.origin}</div>
            <div class="ing-status">${ing.pre1492Status}</div>
          </div>
          <span class="ing-distance-badge">${ing.distance}</span>
        </div>
      `).join('')}
    </div>

    <div class="supermarket-contrast-box" style="margin-top:0.5rem;">
      <div class="box-tag"><span>💡</span> Catatan Sejarah Kuliner</div>
      <p>${dish.historicalInsight}</p>
    </div>
  `;
}

/**
 * Inisialisasi Tur Sejarah Terpandu (Guided Story Tour)
 */
function initTour() {
  const tourPanel = document.getElementById('tourPanel');
  const btnStartTour = document.getElementById('btnStartTour');
  const btnTourNext = document.getElementById('btnTourNext');
  const btnTourPrev = document.getElementById('btnTourPrev');
  const btnTourClose = document.getElementById('btnTourClose');

  if (btnStartTour) {
    btnStartTour.addEventListener('click', () => {
      currentTourIndex = 0;
      tourPanel.classList.add('active');
      goToTourStep(0);
    });
  }

  if (btnTourClose) {
    btnTourClose.addEventListener('click', () => {
      tourPanel.classList.remove('active');
    });
  }

  if (btnTourNext) {
    btnTourNext.addEventListener('click', () => {
      if (currentTourIndex < TOUR_STEPS.length - 1) {
        currentTourIndex++;
        goToTourStep(currentTourIndex);
      } else {
        // Loop back to start
        currentTourIndex = 0;
        goToTourStep(0);
      }
    });
  }

  if (btnTourPrev) {
    btnTourPrev.addEventListener('click', () => {
      if (currentTourIndex > 0) {
        currentTourIndex--;
        goToTourStep(currentTourIndex);
      }
    });
  }
}

function goToTourStep(index) {
  const step = TOUR_STEPS[index];
  const commodity = COMMODITIES_DATA.find(c => c.id === step.commodityId);
  if (!step || !commodity) return;

  document.getElementById('tourStepBadge').textContent = `Langkah ${index + 1} dari ${TOUR_STEPS.length}`;
  document.getElementById('tourTitle').textContent = step.title;
  document.getElementById('tourText').textContent = step.desc;

  // Fly to commodity coordinates
  map.flyTo(commodity.coordinates, 5, {
    duration: 1.8,
    easeLinearity: 0.25
  });

  // Open detail drawer
  openCommodityDetail(commodity.id);
}
