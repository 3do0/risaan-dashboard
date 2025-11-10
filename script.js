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
});
