/**
 * Culinara Culinary Workshop Studio — Main Static Vanilla JavaScript
 * Handles Navigation, Theme & RTL Toggles, Modals, Toast Notifications,
 * Search Filters, Accordions, Tabs, Forms, and LocalStorage Persistence.
 */

// Global App State Data
const CULINARA_CLASSES = [
  {
    id: 'class_it_01',
    title: 'Artisan Pasta & Hand-Rolled Gnocchi',
    cuisine: 'Italian',
    chefName: 'Chef Matteao Rossi',
    chefTitle: 'Master Pastaiolo & Executive Instructor',
    chefAvatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=300&q=80',
    duration: '3.5 Hours',
    price: 145,
    rating: 4.9,
    reviewsCount: 128,
    skillLevel: 'Beginner to Intermediate',
    studioRoom: 'Tuscany Flour Lab (Station 4)',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    upcomingDates: [
      { date: 'Saturday, Aug 22, 2026', time: '10:00 AM - 1:30 PM', seatsLeft: 4 },
      { date: 'Sunday, Aug 23, 2026', time: '5:00 PM - 8:30 PM', seatsLeft: 2 },
      { date: 'Friday, Aug 28, 2026', time: '6:00 PM - 9:30 PM', seatsLeft: 6 }
    ]
  },
  {
    id: 'class_in_02',
    title: 'Royal Awadhi Biryani & Spice Tempering',
    cuisine: 'Indian',
    chefName: 'Chef Paresh Sharma',
    chefTitle: 'Spice Sommelier & Heritage Specialist',
    chefAvatar: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=300&q=80',
    duration: '4.0 Hours',
    price: 160,
    rating: 5.0,
    reviewsCount: 164,
    skillLevel: 'Intermediate',
    studioRoom: 'Brass Tandoor Kitchen (Station 1)',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    upcomingDates: [
      { date: 'Saturday, Aug 22, 2026', time: '4:00 PM - 8:00 PM', seatsLeft: 3 },
      { date: 'Thursday, Aug 27, 2026', time: '5:30 PM - 9:30 PM', seatsLeft: 5 }
    ]
  },
  {
    id: 'class_bk_03',
    title: 'Sourdough Science & French Viennoiserie',
    cuisine: 'Baking',
    chefName: 'Chef Julien Laurent',
    chefTitle: 'Master Boulanger',
    chefAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
    duration: '5.0 Hours',
    price: 185,
    rating: 4.95,
    reviewsCount: 210,
    skillLevel: 'All Levels',
    studioRoom: 'Pastry & Fermentation Lounge',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    upcomingDates: [
      { date: 'Sunday, Aug 23, 2026', time: '9:00 AM - 2:00 PM', seatsLeft: 1 },
      { date: 'Saturday, Aug 29, 2026', time: '9:00 AM - 2:00 PM', seatsLeft: 4 }
    ]
  },
  {
    id: 'class_fr_04',
    title: 'Classic French Bistro Classics & Red Wine Reductions',
    cuisine: 'French',
    chefName: 'Chef Julien Laurent',
    chefTitle: 'Master Boulanger & Escoffier Fellow',
    chefAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
    duration: '3.5 Hours',
    price: 175,
    rating: 4.88,
    reviewsCount: 94,
    skillLevel: 'Intermediate',
    studioRoom: 'Grand Hearth Studio',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    upcomingDates: [
      { date: 'Wednesday, Aug 26, 2026', time: '6:00 PM - 9:30 PM', seatsLeft: 5 }
    ]
  },
  {
    id: 'class_jp_05',
    title: 'Edomae Nigiri Sushi & Dashi Fundamentals',
    cuisine: 'Japanese',
    chefName: 'Chef Kenji Sato',
    chefTitle: 'Knife Master & Omakase Specialist',
    chefAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    duration: '3.0 Hours',
    price: 195,
    rating: 4.98,
    reviewsCount: 182,
    skillLevel: 'Intermediate to Advanced',
    studioRoom: 'Kyoto Hinoki Counter',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80',
    upcomingDates: [
      { date: 'Saturday, Aug 29, 2026', time: '6:30 PM - 9:30 PM', seatsLeft: 2 }
    ]
  },
  {
    id: 'class_mx_06',
    title: 'Oaxacan Mole Negro & Hand-Pressed Masa Tacos',
    cuisine: 'Mexican',
    chefName: 'Chef Isabel Gomez',
    chefTitle: 'Heritage Masa & Chili Specialist',
    chefAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    duration: '3.5 Hours',
    price: 140,
    rating: 4.92,
    reviewsCount: 115,
    skillLevel: 'Beginner',
    studioRoom: 'Comal & Hearth Suite',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    upcomingDates: [
      { date: 'Sunday, Aug 30, 2026', time: '4:00 PM - 7:30 PM', seatsLeft: 6 }
    ]
  },
  {
    id: 'class_th_07',
    title: 'Royal Thai Curry Pastes & Street Wok Mastery',
    cuisine: 'Thai',
    chefName: 'Chef Paresh Sharma',
    chefTitle: 'Southeast Asian Culinary Specialist',
    chefAvatar: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=300&q=80',
    duration: '3.0 Hours',
    price: 135,
    rating: 4.89,
    reviewsCount: 88,
    skillLevel: 'All Levels',
    studioRoom: 'Wok & Flame Station',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
    upcomingDates: [
      { date: 'Tuesday, Sep 01, 2026', time: '6:00 PM - 9:00 PM', seatsLeft: 4 }
    ]
  },
  {
    id: 'class_ps_08',
    title: 'French Macarons & Chocolate Tempering',
    cuisine: 'Baking',
    chefName: 'Chef Julien Laurent',
    chefTitle: 'Master Pastry Chef',
    chefAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
    duration: '4.0 Hours',
    price: 165,
    rating: 4.96,
    reviewsCount: 175,
    skillLevel: 'Intermediate',
    studioRoom: 'Marble Pastry Kitchen',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80',
    upcomingDates: [
      { date: 'Saturday, Sep 05, 2026', time: '1:00 PM - 5:00 PM', seatsLeft: 3 }
    ]
  }
];

const CULINARA_RECIPES = [
  {
    id: 'rec_it_01',
    title: 'Hand-Rolled Tagliatelle with Slow-Simmered Bolognese',
    cuisine: 'Italian',
    difficulty: 'Intermediate',
    prepTime: '45 Mins',
    cookTime: '3.5 Hours',
    servings: 4,
    chefName: 'Chef Matteao Rossi',
    winePairing: '2019 Barolo or Chianti Classico Riserva',
    ingredients: [
      { item: 'Tipo 00 Flour', amount: '400g' },
      { item: 'Farm Fresh Egg Yolks', amount: '4 whole + 2 yolks' },
      { item: 'Coarse Sea Salt', amount: '1 tsp' },
      { item: 'Pancetta, finely minced', amount: '150g' },
      { item: 'Minced Beef Chuck & Pork Shoulder', amount: '500g' },
      { item: 'Whole Milk', amount: '200ml' },
      { item: 'Dry White Wine', amount: '150ml' },
      { item: 'Triple Concentrated Tomato Paste', amount: '3 tbsp' }
    ],
    instructions: [
      { step: 1, title: 'Form the Flour Well', detail: 'Mound Tipo 00 flour onto wood board. Form a wide deep well in center. Add eggs and salt.' },
      { step: 2, title: 'Incorporate & Knead', detail: 'Using a fork, beat eggs incorporating flour slowly. Knead by hand for 10-12 minutes until smooth as silk.' },
      { step: 3, title: 'Rest Dough', detail: 'Wrap dough tightly in cling film. Rest at room temp for 45 mins to relax gluten.' },
      { step: 4, title: 'Sofrito & Meat Bloom', detail: 'Sauté pancetta until fat renders. Add finely diced carrot, celery, onion. Add meats and sear until lightly golden.' },
      { step: 5, title: 'Wine & Milk Reduction', detail: 'Pour in white wine; reduce fully. Add milk and simmer until absorbed to tenderize meat fibers.' }
    ],
    chefProTips: [
      'Always roll pasta on wood, never marble, so sauce clings to texture.',
      'Never boil Bolognese hard; keep at gentle single-bubble simmer for minimum 3 hours.'
    ]
  },
  {
    id: 'rec_in_02',
    title: 'Awadhi Kacchi Biryani Spice Bloom Secret',
    cuisine: 'Indian',
    difficulty: 'Advanced',
    prepTime: '60 Mins',
    cookTime: '2.0 Hours',
    servings: 6,
    chefName: 'Chef Paresh Sharma',
    winePairing: 'Off-dry Gewürztraminer or Sparkling Rose',
    ingredients: [
      { item: 'Long Grain Aged Basmati Rice', amount: '500g' },
      { item: 'Bone-in Goat/Lamb Shoulder', amount: '800g' },
      { item: 'Hung Curd (Greek Yogurt)', amount: '250g' },
      { item: 'Golden Fried Onions (Birista)', amount: '2 cups' },
      { item: 'Kashmiri Saffron Steeped in Milk', amount: '1/2 tsp' },
      { item: 'Kewra Water & Rose Water', amount: '1 tsp each' },
      { item: 'Shahi Jeera & Mace Powder', amount: '1 tbsp' }
    ],
    instructions: [
      { step: 1, title: 'Overnight Marination', detail: 'Massage lamb with yogurt, raw papaya paste, fried onions, and whole spices. Chill for 8 hours.' },
      { step: 2, title: '70% Rice Par-Boil', detail: 'Boil basmati rice with whole green cardamom, bay leaves, and salt until 70% cooked (grain snaps with resistance).' },
      { step: 3, title: 'Layering & Dum Seal', detail: 'Layer raw marinated meat at base, top with par-boiled rice, saffron milk, ghee, kewra water. Seal heavy pot with dough ring.' },
      { step: 4, title: 'Dum Cooking', detail: 'Cook on high heat for 10 mins, then transfer to a heavy tawa on low flame for 45 mins.' }
    ],
    chefProTips: [
      'Do not stir cooked biryani immediately. Let pot rest sealed for 20 mins off heat to let steam settle.'
    ]
  }
];

// Document Initialization
document.addEventListener('DOMContentLoaded', () => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
  initTheme();
  initDirection();
  initStickyHeader();
  initMobileMenu();
  initDropdowns();
  initBackToTop();
  initFilters();
  initAccordions();
  initTabs();
  initCountdownTimer();
  initFormSubmissions();
  initModalBackdropListeners();
});

/* ==========================================================================
   1. Theme Switcher (Light / Dark Mode)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('culinara_theme') || 'light';
  applyTheme(savedTheme);

  const themeBtns = document.querySelectorAll('#header-theme-toggle-btn, #mobile-theme-btn, [data-theme-toggle]');
  themeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('culinara_theme', next);
      showToast(`Switched to ${next === 'dark' ? 'Chef’s Table Dark & Moody' : 'Warm Home Kitchen Light'} theme`, 'info');
    });
  });
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }

  // Update desktop theme toggle buttons icon
  const desktopThemeBtns = document.querySelectorAll('#header-theme-toggle-btn');
  desktopThemeBtns.forEach((btn) => {
    if (theme === 'dark') {
      btn.innerHTML = `
        <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
      `;
    } else {
      btn.innerHTML = `
        <svg class="w-4 h-4 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
      `;
    }
  });

  // Update mobile drawer theme toggle buttons
  const mobileThemeLabels = document.querySelectorAll('.mobile-theme-label');
  mobileThemeLabels.forEach((label) => {
    label.textContent = theme === 'dark' ? 'Light Theme' : 'Dark Theme';
  });
}

/* ==========================================================================
   2. LTR / RTL Direction Toggle
   ========================================================================== */
function initDirection() {
  const savedDir = localStorage.getItem('culinara_direction') || 'ltr';
  applyDirection(savedDir);

  const rtlBtns = document.querySelectorAll('#header-rtl-toggle-btn, #mobile-rtl-btn, [data-rtl-toggle]');
  rtlBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('dir') || 'ltr';
      const next = current === 'rtl' ? 'ltr' : 'rtl';
      applyDirection(next);
      localStorage.setItem('culinara_direction', next);
      showToast(`Switched layout direction to ${next.toUpperCase()}`, 'info');
    });
  });
}

function applyDirection(dir) {
  document.documentElement.setAttribute('dir', dir);
  const desktopRtlBtns = document.querySelectorAll('#header-rtl-toggle-btn');
  desktopRtlBtns.forEach((btn) => {
    btn.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
  });

  const mobileRtlLabels = document.querySelectorAll('.mobile-rtl-label');
  mobileRtlLabels.forEach((label) => {
    label.textContent = dir === 'rtl' ? 'LTR Mode' : 'RTL Mode';
  });
}

/* ==========================================================================
   3. Sticky Header & Mobile Offcanvas Menu
   ========================================================================== */
function initStickyHeader() {
  const header = document.getElementById('main-sticky-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-md');
    } else {
      header.classList.remove('shadow-md');
    }
  });
}

function openStudioSidebar() {
  const mobileMenu = document.getElementById('mobile-fullscreen-menu');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (mobileMenu) mobileMenu.classList.remove('hidden');
  if (backdrop) backdrop.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeStudioSidebar() {
  const mobileMenu = document.getElementById('mobile-fullscreen-menu');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (mobileMenu) mobileMenu.classList.add('hidden');
  if (backdrop) backdrop.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

window.openStudioSidebar = openStudioSidebar;
window.closeStudioSidebar = closeStudioSidebar;

function initMobileMenu() {
  const hamburgerBtn = document.getElementById('mobile-hamburger-toggle-btn');
  const desktopSidebarBtn = document.getElementById('desktop-sidebar-toggle-btn');
  const backdrop = document.getElementById('sidebar-backdrop');
  const closeBtn = document.getElementById('sidebar-close-btn');

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openStudioSidebar);
  if (desktopSidebarBtn) desktopSidebarBtn.addEventListener('click', openStudioSidebar);
  if (backdrop) backdrop.addEventListener('click', closeStudioSidebar);
  if (closeBtn) closeBtn.addEventListener('click', closeStudioSidebar);

  // Close sidebar on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeStudioSidebar();
  });
}

function initDropdowns() {
  const dropdownContainers = document.querySelectorAll('.relative');
  dropdownContainers.forEach((container) => {
    const btn = container.querySelector('button[id$="-dropdown-btn"]');
    const menu = container.querySelector('div[class*="absolute top-full"]');
    if (!btn || !menu) return;

    let hoverTimeout;

    container.addEventListener('mouseenter', () => {
      clearTimeout(hoverTimeout);
      menu.classList.remove('hidden');
    });

    container.addEventListener('mouseleave', () => {
      hoverTimeout = setTimeout(() => {
        menu.classList.add('hidden');
      }, 150);
    });
  });
}

/* ==========================================================================
   4. Toast Notification Manager
   ========================================================================== */
function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const isDark = document.documentElement.classList.contains('dark');
  const id = 'toast_' + Date.now() + Math.random().toString(36).substring(2, 5);

  let iconSvg = '';
  if (type === 'success') {
    iconSvg = `<svg class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
  } else if (type === 'info') {
    iconSvg = `<svg class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
  } else {
    iconSvg = `<svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
  }

  const toastCard = document.createElement('div');
  toastCard.id = id;
  toastCard.className = `pointer-events-auto flex items-start gap-3 p-3.5 rounded-xl border shadow-xl transition-all duration-300 transform translate-y-0 ${isDark ? 'bg-[#1C1A17] border-[#38312B] text-stone-100' : 'bg-white border-[#E5D7C5] text-stone-900'
    }`;

  toastCard.innerHTML = `
    ${iconSvg}
    <div class="text-xs leading-relaxed font-medium flex-1">
      ${message}
    </div>
  `;

  toastContainer.appendChild(toastCard);

  setTimeout(() => {
    toastCard.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toastCard.remove(), 300);
  }, 4000);
}

/* ==========================================================================
   5. Booking Modal Logic & Confetti Trigger
   ========================================================================== */
let activeBookingClass = null;
let activeSlotIndex = 0;
let activeSeats = 1;

function openBookingModal(classId = 'class_it_01') {
  activeBookingClass = CULINARA_CLASSES.find((c) => c.id === classId) || CULINARA_CLASSES[0];
  activeSlotIndex = 0;
  activeSeats = 1;

  const modalBackdrop = document.getElementById('class-booking-modal-backdrop');
  if (!modalBackdrop) return;

  renderBookingModalContent();
  modalBackdrop.classList.remove('hidden');
}

function closeBookingModal() {
  const modalBackdrop = document.getElementById('class-booking-modal-backdrop');
  if (modalBackdrop) modalBackdrop.classList.add('hidden');
}

function renderBookingModalContent() {
  const card = document.getElementById('class-booking-modal-card');
  if (!card || !activeBookingClass) return;

  const isDark = document.documentElement.classList.contains('dark');
  const cClass = activeBookingClass;
  const currentSlot = cClass.upcomingDates[activeSlotIndex] || cClass.upcomingDates[0];
  const totalPrice = cClass.price * activeSeats;

  card.innerHTML = `
    <!-- Header -->
    <div class="p-6 border-b flex items-start justify-between ${isDark ? 'border-stone-800 bg-[#201D1A]' : 'border-[#EBE0D3] bg-[#F2EAE0]'}">
      <div>
        <span class="text-xs px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider ${isDark ? 'bg-amber-500/20 text-amber-400' : 'bg-[#D45B3A]/15 text-[#D45B3A]'}">
          ${cClass.cuisine} Workshop Booking
        </span>
        <h3 class="text-xl font-semibold mt-1 text-stone-900 dark:text-stone-100" style="font-weight: 540">
          ${cClass.title}
        </h3>
        <p class="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
          Led by ${cClass.chefName} • ${cClass.duration}
        </p>
      </div>
      <button onclick="closeBookingModal()" class="p-1.5 rounded-lg border transition-all ${isDark ? 'border-stone-700 text-stone-400 hover:text-white' : 'border-stone-300 text-stone-600 hover:text-stone-900'}">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>

    <!-- Form -->
    <form id="booking-modal-form" onsubmit="handleBookingModalSubmit(event)" class="p-6 space-y-5">
      <div>
        <label class="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
          1. Select Class Session Date & Time
        </label>
        <div class="space-y-2">
          ${cClass.upcomingDates.map((slot, idx) => `
            <button
              type="button"
              onclick="selectBookingSlot(${idx})"
              class="w-full flex items-center justify-between p-3 rounded-xl border text-xs text-left transition-all ${activeSlotIndex === idx
      ? isDark ? 'bg-[#2A241E] border-amber-500 text-amber-400 font-semibold' : 'bg-[#FAF1E6] border-[#D45B3A] text-[#D45B3A] font-semibold'
      : isDark ? 'bg-[#1E1B18] border-[#332C26] text-stone-300 hover:border-stone-600' : 'bg-white border-[#E8DFD3] text-stone-700 hover:border-stone-400'
    }"
            >
              <div class="flex items-center gap-2.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <div>
                  <div class="font-semibold">${slot.date}</div>
                  <div class="text-[11px] opacity-75">${slot.time}</div>
                </div>
              </div>
              <span class="text-[11px] px-2 py-0.5 rounded bg-stone-500/10 font-medium">
                ${slot.seatsLeft} spots remaining
              </span>
            </button>
          `).join('')}
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1.5">
            Number of Workstations
          </label>
          <select
            onchange="updateBookingSeats(this.value)"
            class="w-full p-2.5 text-xs rounded-xl border focus:outline-none ${isDark ? 'bg-[#1E1B18] border-[#38312B] text-white' : 'bg-white border-[#D6C8B5] text-stone-900'}"
          >
            <option value="1" ${activeSeats === 1 ? 'selected' : ''}>1 Workstation ($ ${cClass.price})</option>
            <option value="2" ${activeSeats === 2 ? 'selected' : ''}>2 Workstations ($ ${cClass.price * 2})</option>
            <option value="3" ${activeSeats === 3 ? 'selected' : ''}>3 Workstations ($ ${cClass.price * 3})</option>
            <option value="4" ${activeSeats === 4 ? 'selected' : ''}>4 Workstations ($ ${cClass.price * 4})</option>
          </select>
        </div>

        <div class="p-3 rounded-xl border flex flex-col justify-center text-xs ${isDark ? 'bg-[#1E1B18] border-[#332C26]' : 'bg-white border-[#E8DFD3]'}">
          <span class="text-stone-500 font-medium">Assigned Studio Location:</span>
          <span class="font-semibold mt-0.5">${cClass.studioRoom}</span>
        </div>
      </div>

      <div class="space-y-3 pt-1">
        <label class="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
          2. Student Information
        </label>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            required
            id="modal-student-name"
            value="Elena Rostova"
            placeholder="Full Name"
            class="w-full px-3 py-2 text-xs rounded-xl border focus:outline-none ${isDark ? 'bg-[#1E1B18] border-[#38312B] text-white' : 'bg-white border-[#D6C8B5] text-stone-900'}"
          />
          <input
            type="email"
            required
            id="modal-student-email"
            value="elena.rostova@culinara.com"
            placeholder="Email for confirmation"
            class="w-full px-3 py-2 text-xs rounded-xl border focus:outline-none ${isDark ? 'bg-[#1E1B18] border-[#38312B] text-white' : 'bg-white border-[#D6C8B5] text-stone-900'}"
          />
        </div>
      </div>

      <div class="p-4 rounded-xl border flex items-center justify-between ${isDark ? 'bg-[#201D1A] border-[#38312B]' : 'bg-[#F2ECE3] border-[#DFD3C3]'}">
        <div>
          <span class="text-xs text-stone-500">Total Workshop Investment</span>
          <div class="text-xl font-bold text-stone-900 dark:text-stone-100">
            $${totalPrice} USD
          </div>
        </div>
        <button
          type="submit"
          class="px-5 py-2.5 text-xs font-semibold rounded-xl shadow-sm transition-all flex items-center gap-2 cursor-pointer ${isDark ? 'bg-gradient-to-r from-[#FF6B35] to-[#E5A952] text-stone-950 hover:brightness-110' : 'bg-[#D45B3A] text-white hover:bg-[#B84526]'}"
        >
          Confirm Reservation
        </button>
      </div>
    </form>
  `;
}

function selectBookingSlot(idx) {
  activeSlotIndex = idx;
  renderBookingModalContent();
}

function updateBookingSeats(val) {
  activeSeats = parseInt(val, 10);
  renderBookingModalContent();
}

function handleBookingModalSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('modal-student-name').value || 'Elena Rostova';
  const email = document.getElementById('modal-student-email').value || 'elena.rostova@culinara.com';
  const currentSlot = activeBookingClass.upcomingDates[activeSlotIndex] || activeBookingClass.upcomingDates[0];

  const bookingId = 'BK-2026-' + Math.floor(Math.random() * 899 + 100);
  const newBooking = {
    id: bookingId,
    classId: activeBookingClass.id,
    classTitle: activeBookingClass.title,
    cuisine: activeBookingClass.cuisine,
    chefName: activeBookingClass.chefName,
    date: currentSlot.date,
    timeSlot: currentSlot.time,
    studioRoom: activeBookingClass.studioRoom,
    seats: activeSeats,
    totalPrice: activeBookingClass.price * activeSeats,
    studentName: name,
    studentEmail: email,
    status: 'Confirmed',
    bookingDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    recipeNotesAvailable: true
  };

  const existing = JSON.parse(localStorage.getItem('culinara_bookings') || '[]');
  localStorage.setItem('culinara_bookings', JSON.stringify([newBooking, ...existing]));

  showToast(`Successfully booked workshop: ${activeBookingClass.title}! Booking #${bookingId}`, 'success');

  // Show confirmation screen in modal
  const card = document.getElementById('class-booking-modal-card');
  const isDark = document.documentElement.classList.contains('dark');
  card.innerHTML = `
    <div class="p-8 text-center space-y-5">
      <div class="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
        <svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <div>
        <span class="text-xs uppercase tracking-widest font-semibold text-emerald-500">Reservation Confirmed</span>
        <h3 class="text-2xl font-bold mt-1 text-stone-900 dark:text-stone-100" style="font-weight: 540">
          You’re Booked for ${activeBookingClass.title}!
        </h3>
        <p class="text-xs text-stone-600 dark:text-stone-400 mt-2 max-w-md mx-auto leading-relaxed">
          Confirmation code <span class="font-mono font-bold text-amber-600 dark:text-amber-400">#${bookingId}</span> has been issued. Recipe notes and workstation assignment are now active in your student dashboard.
        </p>
      </div>
      <div class="flex items-center justify-center gap-3 pt-2">
        <a href="dashboard.html" class="px-5 py-2.5 text-xs font-semibold rounded-xl shadow-sm ${isDark ? 'bg-gradient-to-r from-[#FF6B35] to-[#E5A952] text-stone-950' : 'bg-[#D45B3A] text-white'}">
          Go to Student Dashboard
        </a>
        <button onclick="closeBookingModal()" class="px-4 py-2.5 text-xs font-medium rounded-xl border ${isDark ? 'border-stone-700 text-stone-300' : 'border-stone-300 text-stone-700'}">
          Continue Browsing
        </button>
      </div>
    </div>
  `;
}

/* ==========================================================================
   6. Recipe Modal Logic
   ========================================================================== */
function openRecipeModal(recipeId = 'rec_it_01') {
  const recipe = CULINARA_RECIPES.find((r) => r.id === recipeId) || CULINARA_RECIPES[0];
  const modalBackdrop = document.getElementById('recipe-notes-modal-backdrop');
  const card = document.getElementById('recipe-notes-modal-card');
  if (!modalBackdrop || !card) return;

  const isDark = document.documentElement.classList.contains('dark');
  const savedRecipes = JSON.parse(localStorage.getItem('culinara_saved_recipes') || '["rec_it_01"]');
  const isSaved = savedRecipes.includes(recipe.id);

  card.innerHTML = `
    <!-- Header -->
    <div class="p-6 border-b flex items-start justify-between ${isDark ? 'border-stone-800 bg-[#201D1A]' : 'border-[#EBE0D3] bg-[#F2EAE0]'}">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="text-xs px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider ${isDark ? 'bg-amber-500/20 text-amber-400' : 'bg-[#D45B3A]/15 text-[#D45B3A]'}">
            ${recipe.cuisine} Vault
          </span>
          <span class="text-xs text-stone-500">• ${recipe.difficulty} Level</span>
        </div>
        <h3 class="text-2xl font-semibold text-stone-900 dark:text-stone-100" style="font-weight: 540">
          ${recipe.title}
        </h3>
        <p class="text-xs text-stone-600 dark:text-stone-400 mt-1">
          Authored by ${recipe.chefName}
        </p>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="toggleBookmarkRecipe('${recipe.id}')" class="p-2 rounded-lg border transition-all ${isSaved ? (isDark ? 'bg-amber-500/20 border-amber-500 text-amber-400' : 'bg-[#D45B3A]/20 border-[#D45B3A] text-[#D45B3A]') : (isDark ? 'border-stone-700 text-stone-400' : 'border-stone-300 text-stone-600')}">
          <svg class="w-4 h-4 ${isSaved ? 'fill-current' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
        </button>
        <button onclick="closeRecipeModal()" class="p-2 rounded-lg border transition-all ${isDark ? 'border-stone-700 text-stone-400 hover:text-white' : 'border-stone-300 text-stone-600 hover:text-stone-900'}">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
    </div>

    <!-- Body -->
    <div class="p-6 space-y-6">
      <div class="grid grid-cols-3 gap-3 p-4 rounded-xl border text-center ${isDark ? 'bg-[#1E1B18] border-[#332C26]' : 'bg-white border-[#EAE0D2]'}">
        <div>
          <span class="text-xs text-stone-500">Prep Time</span>
          <div class="text-sm font-semibold mt-1">${recipe.prepTime}</div>
        </div>
        <div class="border-x border-stone-700/20">
          <span class="text-xs text-stone-500">Cook Time</span>
          <div class="text-sm font-semibold mt-1">${recipe.cookTime}</div>
        </div>
        <div>
          <span class="text-xs text-stone-500">Servings</span>
          <div class="text-sm font-semibold mt-1">${recipe.servings} portions</div>
        </div>
      </div>

      ${recipe.winePairing ? `
        <div class="p-3.5 rounded-xl border text-xs ${isDark ? 'bg-purple-950/20 border-purple-800/40 text-purple-200' : 'bg-amber-50 border-amber-200 text-amber-900'}">
          <span class="font-semibold">Sommelier Recommended Pairing: </span>
          <span>${recipe.winePairing}</span>
        </div>
      ` : ''}

      <div>
        <h4 class="text-base font-semibold mb-3">Mise en Place & Ingredients</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${recipe.ingredients.map((ing, idx) => `
            <div onclick="this.classList.toggle('line-through'); this.classList.toggle('opacity-50')" class="cursor-pointer flex items-center justify-between p-2.5 rounded-lg border text-xs ${isDark ? 'bg-[#201D1A] border-[#38312B]' : 'bg-white border-[#E8DFD3]'}">
              <span class="font-medium">${ing.item}</span>
              <span class="px-2 py-0.5 rounded text-[11px] font-semibold ${isDark ? 'bg-[#2C2723] text-amber-400' : 'bg-[#F2ECE3] text-[#D45B3A]'}">${ing.amount}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <h4 class="text-base font-semibold mb-3">Step-by-Step Execution Method</h4>
        <div class="space-y-3.5">
          ${recipe.instructions.map((step) => `
            <div class="p-4 rounded-xl border ${isDark ? 'bg-[#1E1B18] border-[#332C26]' : 'bg-white border-[#E8DFD3]'}">
              <div class="flex items-center gap-2 mb-1.5">
                <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${isDark ? 'bg-amber-500 text-stone-950' : 'bg-[#D45B3A] text-white'}">${step.step}</span>
                <span class="text-sm font-semibold">${step.title}</span>
              </div>
              <p class="text-xs leading-relaxed text-stone-600 dark:text-stone-400 pl-8">${step.detail}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="p-4 border-t flex items-center justify-between ${isDark ? 'border-stone-800 bg-[#201D1A]' : 'border-[#EBE0D3] bg-[#F2EAE0]'}">
      <button onclick="window.print()" class="px-3.5 py-1.5 text-xs font-medium rounded-lg border ${isDark ? 'border-stone-700 text-stone-300' : 'border-stone-300 text-stone-700'}">
        Print Chef Notes
      </button>
      <button onclick="closeRecipeModal()" class="px-4 py-2 text-xs font-semibold rounded-lg ${isDark ? 'bg-stone-800 text-stone-200' : 'bg-stone-200 text-stone-800'}">
        Close Viewer
      </button>
    </div>
  `;

  modalBackdrop.classList.remove('hidden');
}

function closeRecipeModal() {
  const modalBackdrop = document.getElementById('recipe-notes-modal-backdrop');
  if (modalBackdrop) modalBackdrop.classList.add('hidden');
}

function toggleBookmarkRecipe(recipeId) {
  const saved = JSON.parse(localStorage.getItem('culinara_saved_recipes') || '["rec_it_01"]');
  const exists = saved.includes(recipeId);
  let next;
  if (exists) {
    next = saved.filter((id) => id !== recipeId);
    showToast('Recipe removed from your student vault.', 'info');
  } else {
    next = [...saved, recipeId];
    showToast('Recipe saved to your student vault!', 'success');
  }
  localStorage.setItem('culinara_saved_recipes', JSON.stringify(next));
  openRecipeModal(recipeId);
}

function initModalBackdropListeners() {
  const bookingBackdrop = document.getElementById('class-booking-modal-backdrop');
  if (bookingBackdrop) {
    bookingBackdrop.addEventListener('click', (e) => {
      if (e.target === bookingBackdrop) closeBookingModal();
    });
  }

  const recipeBackdrop = document.getElementById('recipe-notes-modal-backdrop');
  if (recipeBackdrop) {
    recipeBackdrop.addEventListener('click', (e) => {
      if (e.target === recipeBackdrop) closeRecipeModal();
    });
  }
}

/* ==========================================================================
   7. Filters & Search (Workshops, Blog, Gallery)
   ========================================================================== */
function initFilters() {
  const filterBtns = document.querySelectorAll('[data-filter-btn]');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter-btn');

      // Toggle active button style
      filterBtns.forEach((b) => b.classList.remove('active', 'bg-amber-500', 'text-stone-950', 'bg-[#D45B3A]', 'text-white'));
      btn.classList.add('active');

      const items = document.querySelectorAll('[data-filter-item]');
      items.forEach((item) => {
        const itemCat = item.getAttribute('data-filter-item');
        if (category === 'all' || itemCat === category) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================================================
   8. Accordions (FAQs, Modules)
   ========================================================================== */
function initAccordions() {
  const accordionBtns = document.querySelectorAll('[data-accordion-btn]');
  accordionBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.accordion-icon');
      if (!content) return;

      const isHidden = content.classList.contains('hidden');
      if (isHidden) {
        content.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      } else {
        content.classList.add('hidden');
        if (icon) icon.classList.remove('rotate-180');
      }
    });
  });
}

/* ==========================================================================
   9. Tabs System (Pricing Billing Mode, Auth Modes)
   ========================================================================== */
function initTabs() {
  const tabBtns = document.querySelectorAll('[data-tab-btn]');
  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab-btn');
      const group = btn.getAttribute('data-tab-group');

      const groupBtns = document.querySelectorAll(`[data-tab-group="${group}"]`);
      groupBtns.forEach((b) => b.classList.remove('active-tab', 'bg-[#D45B3A]', 'text-white', 'bg-amber-500', 'text-stone-950'));
      btn.classList.add('active-tab');

      const groupContents = document.querySelectorAll(`[data-tab-content-group="${group}"]`);
      groupContents.forEach((content) => {
        if (content.id === targetId) {
          content.classList.remove('hidden');
        } else {
          content.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================================================
   10. Countdown Timer for Coming Soon Page
   ========================================================================== */
function initCountdownTimer() {
  const daysEl = document.getElementById('timer-days');
  const hoursEl = document.getElementById('timer-hours');
  const minsEl = document.getElementById('timer-mins');
  const secsEl = document.getElementById('timer-secs');
  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  const targetDate = new Date('2026-10-15T00:00:00').getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) return;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(minutes).padStart(2, '0');
    secsEl.textContent = String(seconds).padStart(2, '0');
  }, 1000);
}

/* ==========================================================================
   11. Form Submissions
   ========================================================================== */
function initFormSubmissions() {
  // Newsletter Form
  const newsletterForms = document.querySelectorAll('form[id*="newsletter-form"]');
  newsletterForms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast('Subscribed to Culinara Weekly Chef Digest & Early Access Passes!', 'success');
        input.value = '';
      }
    });
  });

  // Contact Form
  const contactForm = document.getElementById('contact-page-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! Your message has been sent to our culinary team.', 'success');
      contactForm.reset();
    });
  }

  // Auth Login Form
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Welcome back to Culinara Student Hub!', 'success');
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1000);
    });
  }
}

/* ==========================================================================
   12. Back To Top Smooth Scroll
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('footer-back-to-top-btn');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
