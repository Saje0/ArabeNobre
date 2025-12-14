export type Language = 'pt' | 'en' | 'ar'

export const translations = {
  pt: {
    nav: {
      home: 'Início',
      menu: 'Cardápio',
      about: 'Sobre Nós',
      gallery: 'Galeria',
      reservations: 'Reservas',
      contact: 'Contato',
      reserve: 'Reservar Mesa',
    },
    hero: {
      headline: 'O sabor autêntico do Oriente Médio, com alma brasileira.',
      description:
        'Uma experiência gastronômica única que celebra a fusão entre a rica tradição árabe e a calorosa hospitalidade brasileira.',
      cta: 'Reservar Agora',
    },
    dishes: {
      title: 'Nossos Pratos Especiais',
      subtitle: 'Descubra nossos melhores e mais pedidos pratos',
      viewMenu: 'Ver Cardápio Completo',
      dish1: {
        name: 'Shawarma Carne',
        description:
          'Carne envolta em pão sírio com molho de tahine, alface, salsinha, cebola, tomate e picles.',
      },
      dish2: {
        name: 'Shawarma Frango',
        description:
          'Frango no pão sírio com pasta de alho, alface, tomate e picles.',
      },
      dish3: {
        name: 'Pizza Marguerita',
        description: 'Pizza com molho de tomate, mussarela e manjericão.',
      },
      dish4: {
        name: 'Esfiha Mhamra com Queijo',
        description:
          'Esfiha aberta com pasta de pimentão vermelho temperado e queijo.',
      },
    },
    about: {
      title: 'Nossa História',
      subtitle: 'Uma Fusão de Culturas',
      description1:
        'Somos especializados na autêntica culinária síria, especialmente em pratos rápidos do Oriente Médio, como shawarma, falafel, manakish, pizza árabe e entradas que carregam o sabor de casa e a alma das ruas do Levante.',

      description2:
        'O Arabe Nobre nasceu de um sonho de unir duas tradições culinárias ricas — os sabores intensos e atemporais do Oriente Médio com o espírito acolhedor e caloroso do Brasil.',
      description3:
        'Cada prato é preparado com ingredientes frescos e receitas transmitidas por gerações, reinterpretadas com criatividade e um toque moderno que reflete a fusão dessas duas culturas.',
      founderHeadChef: 'Fundador & Chef Executivo',
      furnaceSpecialistChef: 'Chef Especialista em Forno',
      furnaceSpecialist: 'Especialista em Forno',
      jaafarDescription:
        'Jaafar traz vasta experiência em culinária tradicional de forno, adquirida na Síria, Líbano e Egito, preservando sabores e técnicas autênticas.',
    },
    gallery: {
      title: 'Galeria',
      subtitle: 'Momentos especiais no Arabe Nobre',
    },
    testimonials: {
      title: 'O Que Dizem Nossos Clientes',
      subtitle: 'Experiências que marcam',
      quote1:
        'Uma experiência gastronômica incrível! Os sabores são autênticos e o ambiente é acolhedor. Voltarei muitas vezes.',
      quote2:
        'O melhor restaurante árabe que já conheci no Brasil. A fusão de culturas é perfeita e a qualidade é impecável.',
      quote3:
        'Desde o atendimento até a sobremesa, tudo foi excepcional. O Shawerma é simplesmente divino',
    },
    reservation: {
      title: 'Faça Sua Reserva',
      subtitle: 'Garanta seu lugar para uma experiência inesquecível',
      name: 'Nome Completo',
      phone: 'Telefone',
      date: 'Data',
      time: 'Horário',
      guests: 'Número de Convidados',
      submit: 'Confirmar Reserva',
      whatsapp: 'Reservar via WhatsApp',
    },
    location: {
      title: 'Localização & Horários',
      subtitle: 'Venha nos visitar',
      address: 'Rua das Palmeiras, 123 - Jardins, São Paulo - SP',
      hours: 'Horário de Funcionamento',
      monday: 'Segunda-feira',
      tuesday: 'Terça-feira',
      wednesday: 'Quarta-feira',
      thursday: 'Quinta-feira',
      friday: 'Sexta-feira',
      saturday: 'Sábado',
      sunday: 'Domingo',
      closed: 'Fechado',
      phone: 'Telefone',
      email: 'Email',
    },
    footer: {
      newsletter: 'Receba nossas novidades',
      emailPlaceholder: 'Seu email',
      subscribe: 'Inscrever',
      copyright: '© 2025 Arabe Nobre. Todos os direitos reservados.',
      quickLinks: 'Links Rápidos',
      followUs: 'Siga-nos',
    },
  },
  en: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      about: 'About Us',
      gallery: 'Gallery',
      reservations: 'Reservations',
      contact: 'Contact',
      reserve: 'Book a Table',
    },
    hero: {
      headline:
        'The authentic taste of the Middle East, with a Brazilian soul.',
      description:
        'A unique gastronomic experience that celebrates the fusion between rich Arabic tradition and warm Brazilian hospitality.',
      cta: 'Book Now',
    },
    dishes: {
      title: 'Our Special Dishes',
      subtitle: 'Discover our most popular and delicious dishes',
      viewMenu: 'View Full Menu',
      dish1: {
        name: 'Beef Shawarma',
        description:
          'Arabic bread wrap filled with beef, tahini sauce, lettuce, parsley, onion, tomato, and pickles.',
      },
      dish2: {
        name: 'Chicken Shawarma',
        description:
          'Arabic bread wrap filled with seasoned chicken, garlic paste, lettuce, tomato, and pickles.',
      },
      dish3: {
        name: 'Margherita Pizza',
        description:
          'Pizza topped with tomato sauce, mozzarella cheese, and fresh basil.',
      },
      dish4: {
        name: 'Mhamra Esfiha with Cheese',
        description:
          'Open-faced flatbread topped with seasoned red pepper paste and cheese.',
      },
    },
    about: {
      title: 'Our Story',
      subtitle: 'A Fusion of Cultures',
      description1:
        'We specialize in authentic Syrian cuisine, especially Middle Eastern street-style dishes such as shawarma, falafel, manakish, Arabic-style pizza, and appetizers that carry the warmth of home and the soul of the Levant.',

      description2:
        'Arabe Nobre was born from a dream to unite two rich culinary traditions — the bold, timeless flavors of the Middle East and the warm, welcoming spirit of Brazil.',
      description3:
        'Every dish is crafted with fresh ingredients and recipes passed down through generations, reimagined with creativity and a modern touch that reflects the fusion of both cultures.',
      founderHeadChef: 'Founder & Head Chef',
      furnaceSpecialistChef: 'Furnace Specialist Chef',
      furnaceSpecialist: 'Furnace Specialist',
      jaafarDescription:
        'Jaafar brings extensive experience in traditional furnace cooking, gained across Syria, Lebanon, and Egypt, preserving authentic flavors and techniques.',
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Special moments at Arabe Nobre',
    },
    testimonials: {
      title: 'What Our Guests Say',
      subtitle: 'Experiences that leave a mark',
      quote1:
        'An incredible gastronomic experience! The flavors are authentic and the atmosphere is welcoming. I will return many times.',
      quote2:
        'The best Arabic restaurant I have ever visited in Brazil. The fusion of cultures is perfect and the quality is impeccable.',
      quote3:
        'From the service to the dessert, everything was exceptional. The Shawarma is simply divine',
    },
    reservation: {
      title: 'Make Your Reservation',
      subtitle: 'Secure your spot for an unforgettable experience',
      name: 'Full Name',
      phone: 'Phone',
      date: 'Date',
      time: 'Time',
      guests: 'Number of Guests',
      submit: 'Confirm Reservation',
      whatsapp: 'Book via WhatsApp',
    },
    location: {
      title: 'Location & Hours',
      subtitle: 'Come visit us',
      address: 'Rua das Palmeiras, 123 - Jardins, São Paulo - SP',
      hours: 'Opening Hours',
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      closed: 'Closed',
      phone: 'Phone',
      email: 'Email',
    },
    footer: {
      newsletter: 'Get our updates',
      emailPlaceholder: 'Your email',
      subscribe: 'Subscribe',
      copyright: '© 2025 Arabe Nobre. All rights reserved.',
      quickLinks: 'Quick Links',
      followUs: 'Follow Us',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      menu: 'القائمة',
      about: 'من نحن',
      gallery: 'معرض الصور',
      reservations: 'الحجوزات',
      contact: 'تواصل معنا',
      reserve: 'احجز طاولة',
    },
    hero: {
      headline: 'المذاق الأصيل للشرق الأوسط بروح برازيلية.',
      description:
        'تجربة طهي فريدة تحتفي بالاندماج بين التقاليد العربية الغنية وكرم الضيافة البرازيلية.',
      cta: 'احجز الآن',
    },
    dishes: {
      title: 'أطباقنا المميزة',
      subtitle: 'اكتشف أشهى وأشهر أطباقنا',
      viewMenu: 'عرض القائمة الكاملة',
      dish1: {
        name: 'شاورما لحم',
        description:
          'خبز عربي محشو بلحم بقري مع صلصة الطحينة، خس، بقدونس، بصل، طماطم ومخللات.',
      },
      dish2: {
        name: 'شاورما دجاج',
        description:
          'خبز عربي محشو بدجاج متبل مع صلصة الثوم، خس، طماطم ومخللات.',
      },
      dish3: {
        name: 'بيتزا مارغريتا',
        description: 'بيتزا بصلصة الطماطم وجبنة الموزاريلا والريحان الطازج.',
      },
      dish4: {
        name: 'صفَيحة محمرة بالجبنة',
        description:
          'عجينة صفيحة مفتوحة محشوة مع صلصة الفليفلة الحمراء المتبلة مع الجبنة.',
      },
    },
    about: {
      title: 'قصتنا',
      subtitle: 'اندماج الثقافات',
      description1:
        'نحن مختصّون في المطبخ السّوري الأصيل، وتحديدًا في الوجبات الشرقية السريعة مثل الشاورما، الفلافل، المناقيش، البيتزا، والمقبلات التي تحمل نكهة البيت العربي وروح الشارع الشامي.',

      description2:
        'وُلد عربي نوبري من حلمٍ يجمع بين ثقافتين غنيّتين بالتقاليد الطهوية و نكهات الشرق الأوسط القوية والعريقة واللمسة البرازيلية الدافئة والترحيبية',
      description3:
        'كل طبق نقدّمه يُحضَّر من مكوّنات طازجة ووصفات متوارثة عبر الأجيال، تمت إعادة تقديمها بإبداع ولمسة حديثة تعكس اندماج الثقافتين.',
      founderHeadChef: 'المؤسس والطاهي الرئيسي',
      furnaceSpecialistChef: 'طاهي متخصص في الأفران',
      furnaceSpecialist: 'متخصص في الأفران',
      jaafarDescription:
        'يجلب جعفر خبرة واسعة في الطبخ التقليدي بالأفران، المكتسبة في سوريا ولبنان ومصر، محافظًا على النكهات والتقنيات الأصيلة.',
    },
    gallery: {
      title: 'معرض الصور',
      subtitle: 'لحظات مميزة في عربي نوبري',
    },
    testimonials: {
      title: 'ماذا يقول ضيوفنا',
      subtitle: 'تجارب لا تُنسى',
      quote1:
        'تجربة طهي مذهلة! النكهات أصيلة والأجواء مرحبة. سأعود مرات عديدة.',
      quote2:
        'أفضل مطعم عربي زرته في البرازيل. اندماج الثقافات مثالي والجودة لا تشوبها شائبة.',
      quote3: 'من الخدمة إلى الحلوى، كان كل شيء استثنائياً.الشاورما رائعة',
    },
    reservation: {
      title: 'احجز طاولتك',
      subtitle: 'احجز مكانك لتجربة لا تُنسى',
      name: 'الاسم الكامل',
      phone: 'الهاتف',
      date: 'التاريخ',
      time: 'الوقت',
      guests: 'عدد الضيوف',
      submit: 'تأكيد الحجز',
      whatsapp: 'احجز عبر واتساب',
    },
    location: {
      title: 'الموقع وساعات العمل',
      subtitle: 'تفضلوا بزيارتنا',
      address: 'روا داس بالميراس، 123 - جاردينز، ساو باولو - SP',
      hours: 'ساعات العمل',
      monday: 'الاثنين',
      tuesday: 'الثلاثاء',
      wednesday: 'الأربعاء',
      thursday: 'الخميس',
      friday: 'الجمعة',
      saturday: 'السبت',
      sunday: 'الأحد',
      closed: 'مغلق',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
    },
    footer: {
      newsletter: 'احصل على آخر أخبارنا',
      emailPlaceholder: 'بريدك الإلكتروني',
      subscribe: 'اشترك',
      copyright: '© 2025 عربي نوبري. جميع الحقوق محفوظة.',
      quickLinks: 'روابط سريعة',
      followUs: 'تابعونا',
    },
  },
}

export function getTranslation(lang: Language) {
  return translations[lang]
}

export function isRTL(lang: Language): boolean {
  return lang === 'ar'
}
