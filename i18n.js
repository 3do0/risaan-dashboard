(function (global) {
  const translations = {
    ar: {
      direction: "rtl",
      meta: {
        title: "ريسان ERP - لوحة التحكم",
        homeTitle: "ريسان ERP - اختر النظام",
      },
      logoutConfirm: "هل تريد تسجيل الخروج؟",
      pageInfo: {
        dashboardSuffix: "لوحة التحكم",
      },
      strings: {
        nav: {
          dashboard: "لوحة التحكم",
          invoices: "الفواتير",
          clients: "العملاء",
          suppliers: "الموردين",
          reports: "التقارير",
          more: "المزيد",
          systemSettings: "إعدادات النظام",
        },
        reportsDropdown: {
          finance: {
            title: "التقارير المالية",
            desc: "عرض التقارير المالية والإيرادات",
          },
          analytics: {
            title: "التحليلات",
            desc: "تحليل أداء الأنظمة والمبيعات",
          },
          custom: {
            title: "التقارير المخصصة",
            desc: "إنشاء تقارير حسب احتياجاتك",
          },
        },
        mega: {
          finance: {
            title: "العمليات المالية",
            expenses: "المصروفات",
            revenue: "الدخل",
            bank: "البنوك والنقد",
            quotes: "عرض سعر",
          },
          accounting: {
            title: "المحاسبة",
            doubleEntry: "قيد مزدوج",
            budgeting: "مخطط الموازنة",
            goals: "الأهداف المالية",
          },
          settings: {
            title: "الإعدادات",
            printing: "إعدادات الطباعة",
            general: "الإعدادات العامة",
          },
        },
        system: {
          change: "تغيير النظام",
        },
        user: {
          profile: "البروفايل",
          languageLabel: "اللغة",
          logout: "تسجيل الخروج",
        },
        language: {
          ar: "العربية",
          en: "الإنجليزية",
        },
        page: {
          lastUpdate: "آخر تحديث: اليوم، 10:30 ص",
        },
        actions: {
          filter: "فلترة",
          export: "تصدير",
          add: "إضافة جديد",
        },
        stats: {
          totalInvoices: "إجمالي الفواتير",
          totalInvoicesValue: "1,248",
          totalInvoicesChange: "+12.5% من الشهر الماضي",
          totalRevenue: "إجمالي الإيرادات",
          totalRevenueValue: "524,750 ر.س",
          totalRevenueChange: "+8.2% من الشهر الماضي",
          pendingInvoices: "الفواتير المعلقة",
          pendingInvoicesValue: "87",
          pendingInvoicesChange: "-3.1% من الشهر الماضي",
          activeClients: "العملاء النشطون",
          activeClientsValue: "342",
          activeClientsChange: "+15.3% من الشهر الماضي",
        },
        table: {
          title: "آخر الفواتير",
          viewAll: "عرض الكل ←",
          headers: {
            invoice: "رقم الفاتورة",
            customer: "العميل",
            date: "التاريخ",
            amount: "المبلغ",
            status: "الحالة",
            actions: "الإجراءات",
          },
        },
        support: {
          title: "دعم ريسان",
          subtitle: "كيف يمكننا مساعدتك؟",
          emailTitle: "دعم ريسان",
          emailDesc: "support@risanerp.com",
          callTitle: "نظام الدعم",
          callDesc: "+966 XX XXX XXXX",
          zoomTitle: "اجتماع زووم",
          zoomDesc: "حدد موعد للاستشارة",
          messengerTitle: "Messenger",
          messengerDesc: "تواصل معنا عبر ماسنجر",
          buttonLabel: "الدعم",
          buttonAria: "فتح قائمة الدعم",
        },
        footer: {
          copy: "© 2025 Risan ERP – جميع الحقوق محفوظة",
        },
        home: {
          headerTitle: "اختر النظام الذي تريد الدخول إليه",
          systems: {
            accounting: {
              title: "نظام المحاسبة",
              desc: "إدارة الحسابات والقيود المحاسبية",
            },
            hr: {
              title: "الموارد البشرية",
              desc: "إدارة الموظفين والرواتب",
            },
            pos: {
              title: "نقاط البيع",
              desc: "إدارة المبيعات والمخزون",
            },
            crm: {
              title: "إدارة العملاء (CRM)",
              desc: "متابعة العملاء والمبيعات",
            },
            projects: {
              title: "إدارة المشاريع",
              desc: "تخطيط وتنفيذ المشاريع",
            },
            support: {
              title: "الدعم الفني",
              desc: "إدارة التذاكر والدعم",
            },
            products: {
              title: "إدارة المنتجات",
              desc: "إدارة المنتجات والمخزون",
            },
            main: {
              title: "الداش بورد الرئيسية",
              desc: "نظرة عامة على جميع الأنظمة",
            },
          },
        },
      },
      systemNames: {
        accounting: "نظام المحاسبة",
        hr: "نظام الموارد البشرية",
        pos: "نظام نقاط البيع",
        crm: "نظام إدارة العملاء",
        projects: "نظام إدارة المشاريع",
        products: "نظام إدارة المنتجات",
        support: "نظام الدعم الفني",
        main: "الداش بورد الرئيسية",
      },
      statuses: {
        paid: "مدفوع",
        pending: "معلق",
        overdue: "متأخر",
      },
      actionButtons: {
        view: "عرض",
        download: "تحميل",
      },
    },
    en: {
      direction: "ltr",
      meta: {
        title: "Risan ERP - Dashboard",
        homeTitle: "Risan ERP - Choose a system",
      },
      logoutConfirm: "Do you want to log out?",
      pageInfo: {
        dashboardSuffix: "Dashboard",
      },
      strings: {
        nav: {
          dashboard: "Dashboard",
          invoices: "Invoices",
          clients: "Customers",
          suppliers: "Suppliers",
          reports: "Reports",
          more: "More",
          systemSettings: "System Settings",
        },
        reportsDropdown: {
          finance: {
            title: "Financial Reports",
            desc: "Review revenue and financial insights",
          },
          analytics: {
            title: "Analytics",
            desc: "Analyze performance and sales",
          },
          custom: {
            title: "Custom Reports",
            desc: "Build reports for your needs",
          },
        },
        mega: {
          finance: {
            title: "Financial Operations",
            expenses: "Expenses",
            revenue: "Revenue",
            bank: "Bank & Cash",
            quotes: "Quotations",
          },
          accounting: {
            title: "Accounting",
            doubleEntry: "Double Entry",
            budgeting: "Budget Planner",
            goals: "Financial Goals",
          },
          settings: {
            title: "Settings",
            printing: "Print Settings",
            general: "General Settings",
          },
        },
        system: {
          change: "Switch System",
        },
        user: {
          profile: "Profile",
          languageLabel: "Language",
          logout: "Sign out",
        },
        language: {
          ar: "Arabic",
          en: "English",
        },
        page: {
          lastUpdate: "Last update: Today, 10:30 AM",
        },
        actions: {
          filter: "Filter",
          export: "Export",
          add: "Add New",
        },
        stats: {
          totalInvoices: "Total Invoices",
          totalInvoicesValue: "1,248",
          totalInvoicesChange: "+12.5% vs last month",
          totalRevenue: "Total Revenue",
          totalRevenueValue: "SAR 524,750",
          totalRevenueChange: "+8.2% vs last month",
          pendingInvoices: "Pending Invoices",
          pendingInvoicesValue: "87",
          pendingInvoicesChange: "-3.1% vs last month",
          activeClients: "Active Customers",
          activeClientsValue: "342",
          activeClientsChange: "+15.3% vs last month",
        },
        table: {
          title: "Latest Invoices",
          viewAll: "View all →",
          headers: {
            invoice: "Invoice #",
            customer: "Customer",
            date: "Date",
            amount: "Amount",
            status: "Status",
            actions: "Actions",
          },
        },
        support: {
          title: "Risan Support",
          subtitle: "How can we help?",
          emailTitle: "Risan Support",
          emailDesc: "support@risanerp.com",
          callTitle: "Support Line",
          callDesc: "+966 XX XXX XXXX",
          zoomTitle: "Zoom Meeting",
          zoomDesc: "Book a consultation slot",
          messengerTitle: "Messenger",
          messengerDesc: "Chat with us on Messenger",
          buttonLabel: "Support",
          buttonAria: "Open support menu",
        },
        footer: {
          copy: "© 2025 Risan ERP – All rights reserved",
        },
        home: {
          headerTitle: "Choose the system you want to access",
          systems: {
            accounting: {
              title: "Accounting System",
              desc: "Manage accounts and journal entries",
            },
            hr: {
              title: "Human Resources",
              desc: "Manage employees and payroll",
            },
            pos: {
              title: "Point of Sale",
              desc: "Manage sales and inventory",
            },
            crm: {
              title: "CRM",
              desc: "Track customers and opportunities",
            },
            projects: {
              title: "Project Management",
              desc: "Plan and execute projects",
            },
            support: {
              title: "Support Desk",
              desc: "Handle tickets and requests",
            },
            products: {
              title: "Product Management",
              desc: "Manage products and stock",
            },
            main: {
              title: "Main Dashboard",
              desc: "Overview across all systems",
            },
          },
        },
      },
      systemNames: {
        accounting: "Accounting System",
        hr: "HR System",
        pos: "Point of Sale",
        crm: "CRM System",
        projects: "Projects System",
        products: "Products System",
        support: "Support System",
        main: "Main Dashboard",
      },
      statuses: {
        paid: "Paid",
        pending: "Pending",
        overdue: "Overdue",
      },
      actionButtons: {
        view: "View",
        download: "Download",
      },
    },
  };

  const systemKeys = Object.keys(translations.ar.systemNames);

  global.RISAAN_I18N = {
    translations,
    defaultLanguage: "ar",
    systemKeys,
  };
})(window);
