document.addEventListener('DOMContentLoaded', () => {
  const selectedSystem = localStorage.getItem('selectedSystem') || 'نظام المحاسبة';
  const systemTitleElement = document.getElementById('systemTitle');
  const currentSystemName = document.getElementById('currentSystemName');

  if (systemTitleElement) {
    systemTitleElement.textContent = `${selectedSystem} – لوحة التحكم`;
  }

  if (currentSystemName) {
    currentSystemName.textContent = selectedSystem;
  }

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
    item.addEventListener('click', function(e) {
      e.preventDefault();
    });
  });

  const navUser = document.getElementById('navUser');
  const userDropdown = document.getElementById('userDropdown');

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
        e.preventDefault();
        userDropdown.classList.remove('active');

        if (this.classList.contains('logout')) {
          if (confirm('هل تريد تسجيل الخروج؟')) {
            window.location.href = 'index.html';
          }
        }
      });
    });
  }

  const systemSwitcherBtn = document.getElementById('systemSwitcherBtn');
  const systemDropdown = document.getElementById('systemDropdown');

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
        const systemType = this.getAttribute('data-system');
        const systemNames = {
          accounting: 'نظام المحاسبة',
          hr: 'نظام الموارد البشرية',
          pos: 'نظام نقاط البيع',
          crm: 'نظام إدارة العملاء',
          projects: 'نظام إدارة المشاريع',
          products: 'نظام إدارة المنتجات'
        };

        if (systemNames[systemType]) {
          localStorage.setItem('selectedSystem', systemNames[systemType]);
        }
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

  const searchBtn = document.querySelector('[aria-label="البحث"]');
  if (searchBtn) {
    searchBtn.addEventListener('click', function(e) {
      e.preventDefault();
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  }

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
    item.addEventListener('click', function(e) {
      e.preventDefault();
    });
  });

  const navLinkGroups = document.querySelectorAll('.nav-link-group');
  navLinkGroups.forEach(group => {
    const dropdownLink = group.querySelector('.nav-link.has-dropdown');
    const dropdown = group.querySelector('.nav-dropdown');

    if (dropdownLink && dropdown) {
      dropdownLink.addEventListener('click', function(e) {
        e.preventDefault();
      });
    }
  });
});
