document.addEventListener('DOMContentLoaded', () => {
  const selectedSystem = localStorage.getItem('selectedSystem') || 'نظام المحاسبة';
  const systemTitleElement = document.getElementById('systemTitle');

  if (systemTitleElement) {
    systemTitleElement.textContent = `${selectedSystem} – لوحة التحكم`;
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

  const navUser = document.querySelector('.nav-user');
  if (navUser) {
    navUser.addEventListener('click', function() {
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
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
  if (supportFab) {
    supportFab.addEventListener('click', function(e) {
      e.preventDefault();

      this.style.transform = 'scale(0.9)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);

      alert('مرحباً! سيتم توجيهك إلى صفحة الدعم الفني.\n\nيمكنك التواصل معنا عبر:\n• البريد الإلكتروني: support@risanerp.com\n• الهاتف: +966 XX XXX XXXX\n• الدردشة المباشرة');
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
