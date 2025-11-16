const systemNames = {
  accounting: 'نظام المحاسبة',
  hr: 'نظام الموارد البشرية',
  pos: 'نظام نقاط البيع',
  crm: 'نظام إدارة العملاء',
  projects: 'نظام إدارة المشاريع',
  support: 'نظام الدعم الفني',
  products: 'نظام إدارة المنتجات',
  main: 'الداش بورد الرئيسية'
};

document.addEventListener('DOMContentLoaded', () => {
  const systemCards = document.querySelectorAll('.system-card');

  systemCards.forEach(card => {
    card.addEventListener('click', function() {
      const systemType = this.getAttribute('data-system');
      const systemName = systemNames[systemType];

      if (systemName) {
        localStorage.setItem('selectedSystem', systemName);
      }
    });

    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
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
});
