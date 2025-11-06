const systemNames = {
  accounting: 'نظام المحاسبة',
  hr: 'نظام الموارد البشرية',
  pos: 'نظام نقاط البيع',
  crm: 'نظام إدارة العملاء',
  projects: 'نظام إدارة المشاريع',
  support: 'نظام الدعم الفني'
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
});
