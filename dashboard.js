document.addEventListener('DOMContentLoaded', () => {
  const i18nConfig = window.RISAAN_I18N || {};
  const translations = i18nConfig.translations || {};
  const DEFAULT_LANGUAGE = i18nConfig.defaultLanguage || 'ar';
  const SUPPORTED_SYSTEM_KEYS = i18nConfig.systemKeys || [];

  const systemTitleElement = document.getElementById('systemTitle');
  const currentSystemNameElement = document.getElementById('currentSystemName');
  const navUser = document.getElementById('navUser');
  const userDropdown = document.getElementById('userDropdown');
  const systemSwitcherBtn = document.getElementById('systemSwitcherBtn');
  const systemDropdown = document.getElementById('systemDropdown');

  const urlParams = new URLSearchParams(window.location.search);
  const urlLangParam = urlParams.get('lang');
  const storedLang = localStorage.getItem('dashboardLang');
  let currentLanguage = DEFAULT_LANGUAGE;

  if (urlLangParam && translations[urlLangParam]) {
    currentLanguage = urlLangParam;
  } else if (storedLang && translations[storedLang]) {
    currentLanguage = storedLang;
  }

  const resolveSystemKey = value => {
    if (value && SUPPORTED_SYSTEM_KEYS.includes(value)) {
      return value;
    }

    const legacyMatch = SUPPORTED_SYSTEM_KEYS.find(
      key =>
        translations.ar?.systemNames?.[key] === value ||
        translations.en?.systemNames?.[key] === value
    );

    return legacyMatch || SUPPORTED_SYSTEM_KEYS[0] || 'accounting';
  };

  let storedSystemPreference = localStorage.getItem('selectedSystemKey');

  if (!storedSystemPreference) {
    const legacyValue = localStorage.getItem('selectedSystem');
    if (legacyValue) {
      storedSystemPreference = resolveSystemKey(legacyValue);
      localStorage.removeItem('selectedSystem');
    }
  }

  let currentSystemKey = resolveSystemKey(storedSystemPreference);
  localStorage.setItem('selectedSystemKey', currentSystemKey);

  const getTranslation = key => {
    if (!key) return undefined;
    return key.split('.').reduce((acc, part) => {
      if (acc && Object.prototype.hasOwnProperty.call(acc, part)) {
        return acc[part];
      }
      return undefined;
    }, translations[currentLanguage]?.strings);
  };

  const syncUrlLangParam = lang => {
    const url = new URL(window.location.href);
    if (lang === DEFAULT_LANGUAGE) {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', lang);
    }
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  };

  const isAbsoluteUrl = href => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(href);

  const buildUrlWithLang = (href, lang) => {
    if (!href || href.startsWith('#')) return href;
    const absolute = isAbsoluteUrl(href);
    const url = new URL(href, window.location.origin);
    if (lang === DEFAULT_LANGUAGE) {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', lang);
    }
    if (absolute) {
      return url.toString();
    }
    const path = url.pathname.startsWith('/') ? url.pathname.slice(1) : url.pathname;
    return `${path}${url.search}${url.hash}`;
  };

  const updateLangAwareLinks = () => {
    document.querySelectorAll('[data-keep-lang]').forEach(link => {
      const baseHref = link.getAttribute('data-base-href') || link.getAttribute('href');
      if (!baseHref || baseHref.startsWith('#')) return;
      if (!link.getAttribute('data-base-href')) {
        link.setAttribute('data-base-href', baseHref);
      }
      link.setAttribute('href', buildUrlWithLang(baseHref, currentLanguage));
    });
  };

  const updateDocumentLanguage = () => {
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = translations[currentLanguage]?.direction || 'rtl';
    const dashboardTitle = translations[currentLanguage]?.meta?.title;
    if (dashboardTitle) {
      document.title = dashboardTitle;
    }
  };

  const applyTextTranslations = () => {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      if (element.hasAttribute('data-i18n-attr')) {
        return;
      }
      const key = element.getAttribute('data-i18n');
      const value = getTranslation(key);
      if (typeof value === 'string') {
        element.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(element => {
      const attr = element.getAttribute('data-i18n-attr');
      const key = element.getAttribute('data-i18n');
      const value = getTranslation(key);
      if (attr && typeof value === 'string') {
        element.setAttribute(attr, value);
      }
    });
  };

  const updateStatuses = () => {
    document.querySelectorAll('[data-status-label]').forEach(badge => {
      const statusKey = badge.getAttribute('data-status-label');
      const text = translations[currentLanguage]?.statuses?.[statusKey];
      if (text) {
        badge.textContent = text;
      }
    });
  };

  const updateActionButtons = () => {
    document.querySelectorAll('[data-action-label]').forEach(button => {
      const key = button.getAttribute('data-action-label');
      const text = translations[currentLanguage]?.actionButtons?.[key];
      if (text) {
        button.textContent = text;
      }
    });
  };

  const updateSystemLabels = () => {
    const systemNames = translations[currentLanguage]?.systemNames || {};
    const activeName = systemNames[currentSystemKey] || systemNames[SUPPORTED_SYSTEM_KEYS[0]];

    if (currentSystemNameElement && activeName) {
      currentSystemNameElement.textContent = activeName;
    }

    if (systemTitleElement && activeName) {
      const suffix = translations[currentLanguage]?.pageInfo?.dashboardSuffix || '';
      systemTitleElement.textContent = suffix ? `${activeName} – ${suffix}` : activeName;
    }

    document.querySelectorAll('[data-system-label]').forEach(span => {
      const key = span.getAttribute('data-system-label');
      if (systemNames[key]) {
        span.textContent = systemNames[key];
      }
    });

    document.querySelectorAll('.system-dropdown-item').forEach(item => {
      const key = item.getAttribute('data-system');
      if (key === currentSystemKey) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  };

  const updateLanguageOptions = () => {
    document.querySelectorAll('.language-option').forEach(option => {
      const lang = option.getAttribute('data-lang');
      if (lang === currentLanguage) {
        option.classList.add('active');
      } else {
        option.classList.remove('active');
      }
    });
  };

  const setSystem = systemKey => {
    if (!SUPPORTED_SYSTEM_KEYS.includes(systemKey)) return;
    currentSystemKey = systemKey;
    localStorage.setItem('selectedSystemKey', systemKey);
    updateSystemLabels();
  };

  const setLanguage = lang => {
    if (!translations[lang]) return;
    currentLanguage = lang;
    localStorage.setItem('dashboardLang', lang);
    syncUrlLangParam(lang);
    updateDocumentLanguage();
    applyTextTranslations();
    updateStatuses();
    updateActionButtons();
    updateSystemLabels();
    updateLanguageOptions();
    updateLangAwareLinks();
  };

  setLanguage(currentLanguage);

  const navLinks = document.querySelectorAll('.nav-link:not(.nav-link-group .nav-link)');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const dropdownItems = document.querySelectorAll('.dropdown-item');
  dropdownItems.forEach(item => {
    item.addEventListener('click', e => e.preventDefault());
  });

  if (navUser && userDropdown) {
    navUser.addEventListener('click', function(e) {
      e.stopPropagation();
      userDropdown.classList.toggle('active');
    });

    document.addEventListener('click', function(e) {
      if (!navUser.contains(e.target) && !userDropdown.contains(e.target)) {
        userDropdown.classList.remove('active');
      }
    });

    const userDropdownItems = userDropdown.querySelectorAll('.user-dropdown-item');
    userDropdownItems.forEach(item => {
      item.addEventListener('click', function(e) {
        if (this.classList.contains('language-item')) {
          return;
        }
        e.preventDefault();
        userDropdown.classList.remove('active');

        if (this.classList.contains('logout')) {
          const message = translations[currentLanguage]?.logoutConfirm || '';
          if (!message || confirm(message)) {
            window.location.href = buildUrlWithLang('index.html', currentLanguage);
          }
        }
      });
    });
  }

  document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const lang = option.getAttribute('data-lang');
      if (lang && lang !== currentLanguage) {
        setLanguage(lang);
      }
    });
  });

  if (systemSwitcherBtn && systemDropdown) {
    systemSwitcherBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      systemDropdown.classList.toggle('active');
    });

    document.addEventListener('click', function(e) {
      if (!systemSwitcherBtn.contains(e.target) && !systemDropdown.contains(e.target)) {
        systemDropdown.classList.remove('active');
      }
    });

    const systemDropdownItems = systemDropdown.querySelectorAll('.system-dropdown-item');
    systemDropdownItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        const systemType = this.getAttribute('data-system');
        setSystem(systemType);
        systemDropdown.classList.remove('active');
      });
    });
  }

  const statCards = document.querySelectorAll('.stat-card');
  statCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  const actionButtons = document.querySelectorAll('.action-btn');
  actionButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });

  const tableRows = document.querySelectorAll('.data-table tbody tr');
  tableRows.forEach(row => {
    row.addEventListener('click', function() {
      this.style.background = '#F1F5F9';
      setTimeout(() => {
        this.style.background = '';
      }, 300);
    });
  });

  const navIconBtns = document.querySelectorAll('.nav-icon-btn');
  navIconBtns.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
    });

    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

  const supportFab = document.getElementById('supportFab');
  const supportMenu = document.getElementById('supportMenu');

  if (supportFab && supportMenu) {
    supportFab.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      supportMenu.classList.toggle('active');
    });

    document.addEventListener('click', function(e) {
      if (!supportFab.contains(e.target) && !supportMenu.contains(e.target)) {
        supportMenu.classList.remove('active');
      }
    });

    const supportOptions = supportMenu.querySelectorAll('.support-option');
    supportOptions.forEach(option => {
      option.addEventListener('click', function(e) {
        e.preventDefault();
        supportMenu.classList.remove('active');
      });
    });
  }

  const megaMenuItems = document.querySelectorAll('.mega-menu-item');
  megaMenuItems.forEach(item => {
    item.addEventListener('click', e => e.preventDefault());
  });

  const navLinkGroups = document.querySelectorAll('.nav-link-group');
  navLinkGroups.forEach(group => {
    const dropdownLink = group.querySelector('.nav-link.has-dropdown');
    if (dropdownLink) {
      dropdownLink.addEventListener('click', e => e.preventDefault());
    }
  });
});

