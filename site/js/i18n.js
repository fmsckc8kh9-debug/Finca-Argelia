(() => {
  const cache = {};
  let currentLang = localStorage.getItem('lang') || 'en';
  let switching = false;

  async function loadLang(lang) {
    if (cache[lang]) return cache[lang];
    try {
      const res = await fetch(`js/lang/${lang}.json`);
      if (!res.ok) throw new Error(`Failed to load ${lang}.json`);
      cache[lang] = await res.json();
      return cache[lang];
    } catch (e) {
      console.warn(`i18n: Could not load ${lang}.json`, e);
      // Fall back to English if available
      if (lang !== 'en' && cache['en']) {
        console.warn('i18n: Falling back to English');
        return cache['en'];
      }
      return null;
    }
  }

  function sanitizeHTML(str) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    // Remove script and event handler content
    doc.querySelectorAll('script, style').forEach(el => el.remove());
    return doc.body.innerHTML;
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
        el.innerHTML = sanitizeHTML(strings[key]);
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

  function setTogglesDisabled(disabled) {
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.disabled = disabled;
    });
  }

  function updateToggles() {
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });
  }

  async function switchLang(lang) {
    if (switching) return;
    switching = true;
    setTogglesDisabled(true);
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const strings = await loadLang(lang);
    applyLang(strings);
    updateToggles();
    setTogglesDisabled(false);
    switching = false;
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

    // Pre-load English so we have it cached as fallback
    await loadLang('en');

    // If saved language is not English, apply it
    if (currentLang !== 'en') {
      await switchLang(currentLang);
    } else {
      applyLang(cache['en']);
      updateToggles();
    }
  });
})();
