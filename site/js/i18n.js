(() => {
  const cache = {};
  let currentLang = localStorage.getItem('lang') || 'en';

  async function loadLang(lang) {
    if (cache[lang]) return cache[lang];
    try {
      const res = await fetch(`js/lang/${lang}.json`);
      if (!res.ok) throw new Error(`Failed to load ${lang}.json`);
      cache[lang] = await res.json();
      return cache[lang];
    } catch (e) {
      console.warn(`i18n: Could not load ${lang}.json`, e);
      return null;
    }
  }

  function applyLang(strings) {
    if (!strings) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (strings[key] !== undefined) {
        el.textContent = strings[key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (strings[key] !== undefined) {
        el.innerHTML = strings[key];
      }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      if (strings[key] !== undefined) {
        el.setAttribute('alt', strings[key]);
      }
    });

    document.documentElement.setAttribute('lang', currentLang);
  }

  function updateToggles() {
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });
  }

  async function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const strings = await loadLang(lang);
    applyLang(strings);
    updateToggles();
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', async () => {
    // Bind toggle buttons
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (lang !== currentLang) {
          switchLang(lang);
        }
      });
    });

    // Pre-load English so we have it cached
    await loadLang('en');

    // If saved language is not English, apply it
    if (currentLang !== 'en') {
      await switchLang(currentLang);
    } else {
      updateToggles();
    }
  });
})();
