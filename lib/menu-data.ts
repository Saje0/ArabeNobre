export type MenuItem = {
  id: string
  category: string
  price: number
  image: string
  dietary?: ('vegan' | 'spicy' | 'gluten-free')[]
  name: {
    pt: string
    en: string
    ar: string
  }
  description: {
    pt: string
    en: string
    ar: string
  }
  fullDescription: {
    pt: string
    en: string
    ar: string
  }
  ingredients: {
    pt: string[]
    en: string[]
    ar: string[]
  }
}

export const categories = {
  pt: [
    'Shawarmas',
    'Kibes',
    'Pizzas',
    'Esfihas',
    'Manakish',
    'Porções',
    'Bebidas',
    'doces-arabes',
  ],
  en: [
    'Shawarmas',
    'Kibes',
    'Pizzas',
    'Esfihas',
    'Manakish',
    'Portions',
    'Drinks',
    'Desserts',
  ],
  ar: [
    'شاورما',
    'كبة',
    'بيتزا',
    'صفيحة',
    'منقوشة',
    'صحون',
    'مشروبات',
    'حلويات',
  ],
}

export const categoryKeys = [
  'shawarmas',
  'kibes',
  'pizzas',
  'esfihas',
  'manakish',
  'porcoes',
  'bebidas',
  'doces-arabes',
]

export const menuItems: MenuItem[] = [
  // --------------------------
  // SHAWARMAS
  // --------------------------
  {
    id: 'shawarma-carne',
    category: 'shawarmas',
    price: 29.9,
    image: '/images/menu/shawerma/shawerma-meat2.png',
    name: {
      pt: 'Shawarma Carne',
      en: 'Beef Shawarma',
      ar: 'شاورما لحم',
    },
    description: {
      pt: 'Shawarma de carne no pão sírio com molho de tahine e vegetais.',
      en: 'Beef shawarma wrapped in Syrian bread with tahini sauce and vegetables.',
      ar: 'شاورما لحم ملفوفة بالخبز السوري مع صلصة الطحينة والخضار.',
    },
    fullDescription: {
      pt: 'Carne temperada, pão sírio enrolado, molho de tahine, alface, salsa, cebola, tomate e picles.',
      en: 'Seasoned beef wrapped in Syrian bread with tahini sauce, lettuce, parsley, onions, tomatoes, and pickles.',
      ar: 'لحم متبّل ملفوف بالخبز السوري مع صلصة الطحينة، خس، بقدونس، بصل، طماطم ومخلل.',
    },
    ingredients: {
      pt: [
        'Carne',
        'Pão sírio',
        'Molho de tahine',
        'Alface',
        'Salsa',
        'Cebola',
        'Tomate',
        'Picles',
      ],
      en: [
        'Beef',
        'Syrian bread',
        'Tahini sauce',
        'Lettuce',
        'Parsley',
        'Onion',
        'Tomato',
        'Pickles',
      ],
      ar: [
        'لحم',
        'خبز سوري',
        'صلصة طحينة',
        'خس',
        'بقدونس',
        'بصل',
        'طماطم',
        'مخلل',
      ],
    },
  },
  {
    id: 'shawarma-frango',
    category: 'shawarmas',
    price: 24.9,
    image: '/images/menu/shawerma/shawerma-chicken.png',
    name: {
      pt: 'Shawarma Frango',
      en: 'Chicken Shawarma',
      ar: 'شاورما دجاج',
    },
    description: {
      pt: 'Shawarma de frango no pão sírio com pasta de alho e vegetais.',
      en: 'Chicken shawarma wrapped in Syrian bread with garlic paste and vegetables.',
      ar: 'شاورما دجاج ملفوفة بالخبز السوري مع صلصة الثوم والخضار.',
    },
    fullDescription: {
      pt: 'Frango temperado, pão sírio, pasta de alho, alface, salsa, cebola, tomate e picles.',
      en: 'Seasoned chicken in Syrian bread with garlic paste, lettuce, parsley, onions, tomatoes, and pickles.',
      ar: 'دجاج متبّل داخل خبز سوري مع صلصة الثوم، خس، بقدونس، بصل، طماطم ومخلل.',
    },
    ingredients: {
      pt: [
        'Frango',
        'Pão sírio',
        'Pasta de alho',
        'Alface',
        'Salsa',
        'Cebola',
        'Tomate',
        'Picles',
      ],
      en: [
        'Chicken',
        'Syrian bread',
        'Garlic paste',
        'Lettuce',
        'Parsley',
        'Onion',
        'Tomato',
        'Pickles',
      ],
      ar: [
        'دجاج',
        'خبز سوري',
        'صلصة ثوم',
        'خس',
        'بقدونس',
        'بصل',
        'طماطم',
        'مخلل',
      ],
    },
  },
  {
    id: 'shawarma-misto',
    category: 'shawarmas',
    price: 29.9,
    image: '/images/menu/shawerma/shawerma-meat2.png',
    name: {
      pt: 'Shawarma Misto',
      en: 'Mixed Shawarma',
      ar: 'شاورما ميكس',
    },
    description: {
      pt: 'Shawarma mista com carne e frango no pão sírio.',
      en: 'Mixed shawarma with beef and chicken in Syrian bread.',
      ar: 'شاورما ميكس من اللحم والدجاج داخل الخبز السوري.',
    },
    fullDescription: {
      pt: 'Carne e frango temperados no pão sírio com tahine, pasta de alho, alface, salsa, cebola, tomate e picles.',
      en: 'Seasoned beef and chicken wrapped in Syrian bread with tahini, garlic paste, lettuce, parsley, onions, tomatoes, and pickles.',
      ar: 'لحم ودجاج متبّلان داخل خبز سوري مع طحينة وثوم وخس وبقدونس وبصل وطماطم ومخلل.',
    },
    ingredients: {
      pt: [
        'Carne',
        'Frango',
        'Pão sírio',
        'Tahine',
        'Pasta de alho',
        'Alface',
        'Salsa',
        'Cebola',
        'Tomate',
        'Picles',
      ],
      en: [
        'Beef',
        'Chicken',
        'Syrian bread',
        'Tahini',
        'Garlic paste',
        'Lettuce',
        'Parsley',
        'Onion',
        'Tomato',
        'Pickles',
      ],
      ar: [
        'لحم',
        'دجاج',
        'خبز سوري',
        'طحينة',
        'صلصة ثوم',
        'خس',
        'بقدونس',
        'بصل',
        'طماطم',
        'مخلل',
      ],
    },
  },
  {
    id: 'shawarma-falafel',
    category: 'shawarmas',
    price: 24.9,
    image: '/images/menu/shawerma/falafel.png',
    name: {
      pt: 'Shawarma Falafel',
      en: 'Falafel Shawarma',
      ar: 'شاورما فلافل',
    },
    description: {
      pt: 'Shawarma vegetariana de falafel com tahine e vegetais.',
      en: 'Vegetarian falafel shawarma with tahini and vegetables.',
      ar: 'شاورما فلافل نباتية مع طحينة وخضار.',
    },
    fullDescription: {
      pt: 'Falafel, pão sírio, bolinhos de kibe frito, tahine, salsa, alface e tomate.',
      en: 'Falafel in Syrian bread with fried kibbeh bites, tahini, parsley, lettuce and tomatoes.',
      ar: 'فلافل داخل خبز سوري مع قطع كبة مقلية، طحينة، بقدونس، خس وطماطم.',
    },
    ingredients: {
      pt: [
        'Falafel',
        'Pão sírio',
        'Kibe frito',
        'Tahine',
        'Salsa',
        'Alface',
        'Tomate',
      ],
      en: [
        'Falafel',
        'Syrian bread',
        'Fried kibbeh',
        'Tahini',
        'Parsley',
        'Lettuce',
        'Tomato',
      ],
      ar: ['فلافل', 'خبز سوري', 'كبة مقلية', 'طحينة', 'بقدونس', 'خس', 'طماطم'],
    },
  },
  {
    id: 'shawarma-kibe',
    category: 'shawarmas',
    price: 26.9,
    image: '/images/menu/shawerma/kebbe.png',
    name: {
      pt: 'Shawarma Kibe',
      en: 'Kibbeh Shawarma',
      ar: 'شاورما كبة',
    },
    description: {
      pt: 'Shawarma de carne e frango com kibe frito e vegetais.',
      en: 'Beef and chicken shawarma with fried kibbeh and vegetables.',
      ar: 'شاورما لحم ودجاج مع كبة مقلية وخضار.',
    },
    fullDescription: {
      pt: 'Carne e frango temperados, kibe frito, tahine, alface, salsa, cebola, tomate e picles.',
      en: 'Seasoned beef and chicken with fried kibbeh, tahini, lettuce, parsley, onions, tomatoes, and pickles.',
      ar: 'لحم ودجاج متبّلان مع كبة مقلية، طحينة، خس، بقدونس، بصل، طماطم ومخلل.',
    },
    ingredients: {
      pt: [
        'Carne',
        'Frango',
        'Kibe frito',
        'Tahine',
        'Pão sírio',
        'Alface',
        'Salsa',
        'Cebola',
        'Tomate',
        'Picles',
      ],
      en: [
        'Beef',
        'Chicken',
        'Fried kibbeh',
        'Tahini',
        'Syrian bread',
        'Lettuce',
        'Parsley',
        'Onion',
        'Tomato',
        'Pickles',
      ],
      ar: [
        'لحم',
        'دجاج',
        'كبة مقلية',
        'طحينة',
        'خبز سوري',
        'خس',
        'بقدونس',
        'بصل',
        'طماطم',
        'مخلل',
      ],
    },
  },

  // SHAWARMA EXTRAS
  // SHAWARMA FATIADO
  {
    id: 'shawarma-fatiado-carne',
    category: 'shawarmas',
    price: 39.9,
    image: '/images/menu/shawerma/shawerma-fatado-carne.jpg',
    name: {
      pt: 'Shawarma Fatiado Carne',
      en: 'Sliced Beef Shawarma Plate',
      ar: 'صحن شاورما لحم مقطع',
    },
    description: {
      pt: 'Carne fatiada servida com fritas, salada e molhos.',
      en: 'Sliced beef shawarma served with fries, salad, and sauces.',
      ar: 'شاورما لحم مقطعة تُقدّم مع البطاطا والسلطة والصلصات.',
    },
    fullDescription: {
      pt: 'Shawarma de carne fatiada com batatas fritas, salada fresca e dois molhos especiais.',
      en: 'Beef shawarma sliced and served with French fries, fresh salad, and two special sauces.',
      ar: 'شاورما لحم مقطعة تُقدّم مع بطاطا مقلية، سلطة طازجة، وصوصين مميزين.',
    },
    ingredients: {
      pt: ['Carne', 'Batata frita', 'Salada', 'Molhos especiais'],
      en: ['Beef', 'French fries', 'Salad', 'Special sauces'],
      ar: ['لحم', 'بطاطا مقلية', 'سلطة', 'صلصات خاصة'],
    },
  },
  {
    id: 'shawarma-fatiado-frango',
    category: 'shawarmas',
    price: 35.9,
    image: '/images/menu/shawerma/shawerma-fatado-frango.jpg',
    name: {
      pt: 'Shawarma Fatiado Frango',
      en: 'Sliced Chicken Shawarma Plate',
      ar: 'صحن شاورما دجاج مقطع',
    },
    description: {
      pt: 'Frango fatiado com fritas, salada e molhos.',
      en: 'Sliced chicken shawarma with fries, salad, and sauces.',
      ar: 'شاورما دجاج مقطعة مع البطاطا والسلطة والصلصات.',
    },
    fullDescription: {
      pt: 'Shawarma de frango fatiada servida com batatas fritas, salada fresca e dois molhos especiais.',
      en: 'Sliced chicken shawarma served with fries, fresh salad, and two special sauces.',
      ar: 'شاورما دجاج مقطعة تقدَّم مع بطاطا مقلية وسلطة طازجة وصوصين مميزين.',
    },
    ingredients: {
      pt: ['Frango', 'Batata frita', 'Salada', 'Molhos especiais'],
      en: ['Chicken', 'French fries', 'Salad', 'Special sauces'],
      ar: ['دجاج', 'بطاطا مقلية', 'سلطة', 'صلصات خاصة'],
    },
  },
  {
    id: 'shawarma-fatiado-misto',
    category: 'shawarmas',
    price: 39.9,
    image: '/images/menu/shawerma/misto-fatado.jpg',
    name: {
      pt: 'Shawarma Fatiado Misto',
      en: 'Mixed Sliced Shawarma Plate',
      ar: 'صحن شاورما ميكس مقطع',
    },
    description: {
      pt: 'Carne e frango fatiados com fritas, salada e molhos.',
      en: 'Sliced beef and chicken with fries, salad, and sauces.',
      ar: 'شاورما لحم ودجاج مقطعة مع البطاطا والسلطة والصلصات.',
    },
    fullDescription: {
      pt: 'Shawarma mista fatiada com batatas fritas, salada e dois molhos especiais.',
      en: 'Mixed beef and chicken shawarma sliced and served with fries, salad, and two special sauces.',
      ar: 'شاورما لحم ودجاج مقطعة تُقدّم مع بطاطا مقلية وسلطة وصوصين مميزين.',
    },
    ingredients: {
      pt: ['Carne', 'Frango', 'Batata frita', 'Salada', 'Molhos especiais'],
      en: ['Beef', 'Chicken', 'French fries', 'Salad', 'Special sauces'],
      ar: ['لحم', 'دجاج', 'بطاطا مقلية', 'سلطة', 'صلصات خاصة'],
    },
  },

  // SHAWARMA ÁRABE NOBRE
  {
    id: 'shawarma-arabe-nobre-carne',
    category: 'shawarmas',
    price: 49.9,
    image: '/images/menu/shawerma/ShawermaArabNobre.jpg',
    name: {
      pt: 'Shawarma Árabe Nobre Carne',
      en: 'Arabic Premium Beef Shawarma',
      ar: 'شاورما عربي فاخر لحم',
    },
    description: {
      pt: '1kg de shawarma de carne com fritas, salada e pães.',
      en: '1kg of beef shawarma with fries, salad, and bread.',
      ar: '١ كغ شاورما لحم مع بطاطا وسلطة وخبز.',
    },
    fullDescription: {
      pt: '1kg de shawarma de carne acompanhado de batatas fritas, salada fresca, pão sírio e dois molhos.',
      en: '1kg of beef shawarma served with fries, fresh salad, Syrian bread, and two sauces.',
      ar: '١ كغ شاورما لحم تُقدّم مع بطاطا مقلية وسلطة طازجة وخبز سوري وصوصين.',
    },
    ingredients: {
      pt: ['Carne', 'Batata frita', 'Salada', 'Pão sírio', 'Molhos'],
      en: ['Beef', 'French fries', 'Salad', 'Syrian bread', 'Sauces'],
      ar: ['لحم', 'بطاطا مقلية', 'سلطة', 'خبز سوري', 'صلصات'],
    },
  },
  {
    id: 'shawarma-arabe-nobre-frango',
    category: 'shawarmas',
    price: 44.9,
    image: '/images/menu/shawerma/arabe-nobre-grango.jpg',
    name: {
      pt: 'Shawarma Árabe Nobre Frango',
      en: 'Arabic Premium Chicken Shawarma',
      ar: 'شاورما عربي فاخر دجاج',
    },
    description: {
      pt: '1kg de shawarma de frango com fritas, salada e pães.',
      en: '1kg of chicken shawarma with fries, salad, and bread.',
      ar: '١ كغ شاورما دجاج مع بطاطا وسلطة وخبز.',
    },
    fullDescription: {
      pt: '1kg de shawarma de frango com batatas fritas, salada fresca, pão sírio e dois molhos.',
      en: '1kg of chicken shawarma served with fries, fresh salad, Syrian bread, and two sauces.',
      ar: '١ كغ شاورما دجاج تُقدّم مع بطاطا مقلية وسلطة طازجة وخبز سوري وصوصين.',
    },
    ingredients: {
      pt: ['Frango', 'Batata frita', 'Salada', 'Pão sírio', 'Molhos'],
      en: ['Chicken', 'French fries', 'Salad', 'Syrian bread', 'Sauces'],
      ar: ['دجاج', 'بطاطا مقلية', 'سلطة', 'خبز سوري', 'صلصات'],
    },
  },
  {
    id: 'shawarma-arabe-nobre-misto',
    category: 'shawarmas',
    price: 49.9,
    image: '/images/menu/shawerma/ShawermaArabNobre.jpg',
    name: {
      pt: 'Shawarma Árabe Nobre Misto',
      en: 'Arabic Premium Mixed Shawarma',
      ar: 'شاورما عربي فاخر ميكس',
    },
    description: {
      pt: '1kg de shawarma mista com fritas, salada e pães.',
      en: '1kg of mixed shawarma with fries, salad, and bread.',
      ar: '١ كغ شاورما ميكس مع بطاطا وسلطة وخبز.',
    },
    fullDescription: {
      pt: '1kg de carne e frango temperados com fritas, salada fresca, pão sírio e dois molhos.',
      en: '1kg of mixed beef and chicken served with fries, salad, Syrian bread, and two sauces.',
      ar: '١ كغ شاورما لحم ودجاج تُقدّم مع بطاطا مقلية وسلطة وخبز سوري وصوصين.',
    },
    ingredients: {
      pt: ['Carne', 'Frango', 'Batata frita', 'Salada', 'Pão sírio', 'Molhos'],
      en: [
        'Beef',
        'Chicken',
        'French fries',
        'Salad',
        'Syrian bread',
        'Sauces',
      ],
      ar: ['لحم', 'دجاج', 'بطاطا مقلية', 'سلطة', 'خبز سوري', 'صلصات'],
    },
  },

  // SHAWARMA COM HOMUS
  {
    id: 'shawarma-homus-carne',
    category: 'shawarmas',
    price: 39.9,
    image: '/images/menu/dishes/mabsa7awithmeat.jpg',
    name: {
      pt: 'Shawarma com Homus Carne',
      en: 'Beef Shawarma with Hummus',
      ar: 'شاورما لحم مع حمص',
    },
    description: {
      pt: 'Shawarma de carne servida com homus e pão sírio.',
      en: 'Beef shawarma served with hummus and Syrian bread.',
      ar: 'شاورما لحم تُقدّم مع حمص وخبز سوري.',
    },
    fullDescription: {
      pt: 'Porção de shawarma de carne com homus cremoso e pão sírio tradicional.',
      en: 'A serving of beef shawarma with creamy hummus and traditional Syrian bread.',
      ar: 'شاورما لحم مع حمص كريمي وخبز سوري تقليدي.',
    },
    ingredients: {
      pt: ['Carne', 'Homus', 'Pão sírio'],
      en: ['Beef', 'Hummus', 'Syrian bread'],
      ar: ['لحم', 'حمص', 'خبز سوري'],
    },
  },
  {
    id: 'shawarma-homus-frango',
    category: 'shawarmas',
    price: 34.9,
    image: '/images/menu/shawerma/ShawermaHomus.jpg',
    name: {
      pt: 'Shawarma com Homus Frango',
      en: 'Chicken Shawarma with Hummus',
      ar: 'شاورما دجاج مع حمص',
    },
    description: {
      pt: 'Shawarma de frango servida com homus e pão sírio.',
      en: 'Chicken shawarma served with hummus and Syrian bread.',
      ar: 'شاورما دجاج تُقدّم مع حمص وخبز سوري.',
    },
    fullDescription: {
      pt: 'Porção de shawarma de frango com homus cremoso e pão sírio tradicional.',
      en: 'A serving of chicken shawarma with creamy hummus and traditional Syrian bread.',
      ar: 'شاورما دجاج مع حمص كريمي وخبز سوري تقليدي.',
    },
    ingredients: {
      pt: ['Frango', 'Homus', 'Pão sírio'],
      en: ['Chicken', 'Hummus', 'Syrian bread'],
      ar: ['دجاج', 'حمص', 'خبز سوري'],
    },
  },
  {
    id: 'shawarma-homus-misto',
    category: 'shawarmas',
    price: 39.9,
    image: '/images/menu/shawerma/ShawermaHomus.jpg',
    name: {
      pt: 'Shawarma com Homus Misto',
      en: 'Mixed Shawarma with Hummus',
      ar: 'شاورما ميكس مع حمص',
    },
    description: {
      pt: 'Shawarma mista com homus e pão sírio.',
      en: 'Mixed shawarma with hummus and Syrian bread.',
      ar: 'شاورما ميكس تُقدّم مع حمص وخبز سوري.',
    },
    fullDescription: {
      pt: 'Porção de carne e frango temperados com homus cremoso e pão sírio.',
      en: 'A serving of mixed beef and chicken shawarma with creamy hummus and Syrian bread.',
      ar: 'شاورما لحم ودجاج مع حمص كريمي وخبز سوري.',
    },
    ingredients: {
      pt: ['Carne', 'Frango', 'Homus', 'Pão sírio'],
      en: ['Beef', 'Chicken', 'Hummus', 'Syrian bread'],
      ar: ['لحم', 'دجاج', 'حمص', 'خبز سوري'],
    },
  },

  // --------------------------
  // KIBES
  // --------------------------
  {
    id: 'kibe-frito-carne',
    category: 'kibes',
    price: 8.9,
    image: '/images/menu/kibes/kebbe.jpg',
    name: {
      pt: 'Kibe Frito de Carne',
      en: 'Fried Beef Kibbeh',
      ar: 'كبة مقلية باللحم',
    },
    description: {
      pt: 'Kibe tradicional frito recheado com carne.',
      en: 'Traditional fried kibbeh stuffed with seasoned beef.',
      ar: 'كبة مقلية محشوة بلحم متبّل.',
    },
    fullDescription: {
      pt: 'Kibe crocante feito com trigo para kibe e carne moída temperada, frito até dourar.',
      en: 'Crispy kibbeh made with bulgur wheat and seasoned ground beef, fried until golden.',
      ar: 'كبة مقرمشة مصنوعة من البرغل واللحم المفروم المتبّل، مقلية حتى تصبح ذهبية.',
    },
    ingredients: {
      pt: [
        'Trigo para kibe',
        'Carne moída',
        'Cebola',
        'Temperos árabes',
        'Óleo para fritura',
      ],
      en: [
        'Bulgur wheat',
        'Ground beef',
        'Onion',
        'Arabic spices',
        'Frying oil',
      ],
      ar: ['برغل', 'لحم مفروم', 'بصل', 'بهارات عربية', 'زيت للقلي'],
    },
  },
  {
    id: 'kibe-frito-queijo',
    category: 'kibes',
    price: 8.9,
    image: '/images/menu/kibes/kebbe.jpg',
    name: {
      pt: 'Kibe Frito de Queijo',
      en: 'Fried Cheese Kibbeh',
      ar: 'كبة مقلية بالجبنة',
    },
    description: {
      pt: 'Kibe frito recheado com queijo.',
      en: 'Fried kibbeh stuffed with cheese.',
      ar: 'كبة مقلية محشوة بالجبنة.',
    },
    fullDescription: {
      pt: 'Kibe tradicional crocante recheado com queijo derretido, frito até dourar.',
      en: 'Traditional crispy kibbeh filled with melted cheese and fried to a golden finish.',
      ar: 'كبة مقرمشة محشوة بالجبنة الذائبة، مقلية حتى تصبح ذهبية.',
    },
    ingredients: {
      pt: [
        'Trigo para kibe',
        'Queijo',
        'Cebola',
        'Temperos árabes',
        'Óleo para fritura',
      ],
      en: ['Bulgur wheat', 'Cheese', 'Onion', 'Arabic spices', 'Frying oil'],
      ar: ['برغل', 'جبنة', 'بصل', 'بهارات عربية', 'زيت للقلي'],
    },
  },
  {
    id: 'kibe-assado',
    category: 'kibes',
    price: 11.9,
    image: '/images/menu/kibes/kebbe.jpg',
    name: {
      pt: 'Kibe Assado',
      en: 'Baked Kibbeh',
      ar: 'كبة مشوية',
    },
    description: {
      pt: 'Kibe assado no forno, macio e temperado.',
      en: 'Oven-baked kibbeh, soft and well-seasoned.',
      ar: 'كبة مخبوزة في الفرن، طرية ومتّبلة.',
    },
    fullDescription: {
      pt: 'Kibe assado preparado com trigo e carne moída temperada, assado lentamente para manter a maciez.',
      en: 'Baked kibbeh made with bulgur and seasoned ground beef, slow-baked for tenderness.',
      ar: 'كبة بالبرغل واللحم المتبّل، مخبوزة ببطء للحفاظ على طراوتها.',
    },
    ingredients: {
      pt: ['Trigo para kibe', 'Carne moída', 'Cebola', 'Temperos árabes'],
      en: ['Bulgur wheat', 'Ground beef', 'Onion', 'Arabic spices'],
      ar: ['برغل', 'لحم مفروم', 'بصل', 'بهارات عربية'],
    },
  },
  // {
  //   id: 'kibe-nozes',
  //   category: 'kibes',
  //   price: 8.9,
  //   image: '',
  //   name: { pt: 'Kibe frito de carne com nozes', en: '', ar: '' },
  //   description: { pt: '', en: '', ar: '' },
  //   fullDescription: { pt: '', en: '', ar: '' },
  //   ingredients: { pt: [], en: [], ar: [] },
  // },
  // --------------------------
  // PIZZAS ÁRABES
  // --------------------------
  {
    id: 'pizza-arabe-nobre',
    category: 'pizzas',
    price: 64.9,
    image: '/images/menu/pizza/ArabeNobre.jpg',
    name: {
      pt: 'Pizza Árabe Nobre',
      en: 'Arabe Nobre Pizza',
      ar: 'بيتزا عربي نوبري',
    },
    description: {
      pt: 'Pizza especial com carnes e vegetais.',
      en: 'Special pizza with meat and vegetables.',
      ar: 'بيتزا خاصة مع اللحم والخضار.',
    },
    fullDescription: {
      pt: 'Molho de tomate, mussarela, pepperoni, carne especial, pimentão, tomate, cogumelos e azeitonas.',
      en: 'Tomato sauce, mozzarella, pepperoni, special meat, bell pepper, tomato, mushrooms, and olives.',
      ar: 'صلصة طماطم، موزاريلا، ببروني، لحم خاص، فلفل، طماطم، فطر وزيتون.',
    },
    ingredients: {
      pt: [
        'Molho de tomate',
        'Mussarela',
        'Pepperoni',
        'Carne especial',
        'Pimentão',
        'Tomate',
        'Cogumelos',
        'Azeitonas',
      ],
      en: [
        'Tomato sauce',
        'Mozzarella',
        'Pepperoni',
        'Special meat',
        'Bell pepper',
        'Tomato',
        'Mushrooms',
        'Olives',
      ],
      ar: [
        'صلصة طماطم',
        'موزاريلا',
        'ببروني',
        'لحم خاص',
        'فلفل',
        'طماطم',
        'فطر',
        'زيتون',
      ],
    },
  },
  {
    id: 'pizza-pepperoni',
    category: 'pizzas',
    price: 64.9,
    image: '/images/menu/pizza/pepproni.jpg',
    name: {
      pt: 'Pizza Pepperoni',
      en: 'Pepperoni Pizza',
      ar: 'بيتزا ببروني',
    },
    description: {
      pt: 'Pizza clássica com pepperoni.',
      en: 'Classic pepperoni pizza.',
      ar: 'بيتزا الببروني الكلاسيكية.',
    },
    fullDescription: {
      pt: 'Molho de tomate, mussarela, pepperoni e linguiça bovina defumada.',
      en: 'Tomato sauce, mozzarella, pepperoni, and smoked beef sausage.',
      ar: 'صلصة طماطم، موزاريلا، ببروني ونقانق لحم بقر مدخنة.',
    },
    ingredients: {
      pt: [
        'Molho de tomate',
        'Mussarela',
        'Pepperoni',
        'Linguiça bovina defumada',
      ],
      en: ['Tomato sauce', 'Mozzarella', 'Pepperoni', 'Smoked beef sausage'],
      ar: ['صلصة طماطم', 'موزاريلا', 'ببروني', 'نقانق لحم بقر مدخنة'],
    },
  },
  {
    id: 'pizza-burrata-buffalo',
    category: 'pizzas',
    price: 64.9,
    image: '/images/menu/pizza/pizza-buffalo.jpg',
    name: {
      pt: 'Pizza Burrata Buffalo',
      en: 'Burrata Buffalo Pizza',
      ar: 'بيتزا بوراتا بوفالو',
    },
    description: {
      pt: 'Pizza premium com burrata cremosa.',
      en: 'Premium pizza with creamy burrata.',
      ar: 'بيتزا فاخرة مع جبنة البوراتا الكريمية.',
    },
    fullDescription: {
      pt: 'Molho de tomate, mussarela, burrata cremosa, tomate cereja e manjericão.',
      en: 'Tomato sauce, mozzarella, creamy burrata, cherry tomatoes, and basil.',
      ar: 'صلصة طماطم، موزاريلا، بوراتا كريمية، طماطم كرزية وريحان.',
    },
    ingredients: {
      pt: [
        'Molho de tomate',
        'Mussarela',
        'Burrata',
        'Tomate cereja',
        'Manjericão',
      ],
      en: ['Tomato sauce', 'Mozzarella', 'Burrata', 'Cherry tomatoes', 'Basil'],
      ar: ['صلصة طماطم', 'موزاريلا', 'بوراتا', 'طماطم كرزية', 'ريحان'],
    },
  },
  {
    id: 'pizza-shawarma',
    category: 'pizzas',
    price: 54.9,
    image: '/images/menu/pizza/pizza-shawerma.jpg',
    name: {
      pt: 'Pizza Shawarma',
      en: 'Shawarma Pizza',
      ar: 'بيتزا شاورما',
    },
    description: {
      pt: 'Pizza com shawarma de frango ou carne.',
      en: 'Pizza topped with chicken or beef shawarma.',
      ar: 'بيتزا مغطاة بشاورما الدجاج أو اللحم.',
    },
    fullDescription: {
      pt: 'Molho de tomate, mussarela e shawarma de carne ou frango.',
      en: 'Tomato sauce, mozzarella, and chicken or beef shawarma.',
      ar: 'صلصة طماطم، موزاريلا وشاورما دجاج أو لحم.',
    },
    ingredients: {
      pt: ['Molho de tomate', 'Mussarela', 'Shawarma de frango ou carne'],
      en: ['Tomato sauce', 'Mozzarella', 'Chicken or beef shawarma'],
      ar: ['صلصة طماطم', 'موزاريلا', 'شاورما دجاج أو لحم'],
    },
  },
  {
    id: 'pizza-margherita',
    category: 'pizzas',
    price: 49.9,
    image: '/images/menu/pizza/PizzaCheese.jpg',
    name: {
      pt: 'Pizza Margherita',
      en: 'Margherita Pizza',
      ar: 'بيتزا مارغريتا',
    },
    description: {
      pt: 'Pizza clássica com manjericão fresco.',
      en: 'Classic pizza with fresh basil.',
      ar: 'بيتزا كلاسيكية مع ريحان طازج.',
    },
    fullDescription: {
      pt: 'Molho de tomate, mussarela e manjericão fresco.',
      en: 'Tomato sauce, mozzarella, and fresh basil.',
      ar: 'صلصة طماطم، موزاريلا، وريحان طازج.',
    },
    ingredients: {
      pt: ['Molho de tomate', 'Mussarela', 'Manjericão'],
      en: ['Tomato sauce', 'Mozzarella', 'Basil'],
      ar: ['صلصة طماطم', 'موزاريلا', 'ريحان'],
    },
  },
  {
    id: 'pizza-vegetariana',
    category: 'pizzas',
    price: 54.9,
    image: '/images/menu/pizza/pizza-vege.jpg',
    name: {
      pt: 'Pizza Vegetariana',
      en: 'Vegetarian Pizza',
      ar: 'بيتزا نباتية',
    },
    description: {
      pt: 'Pizza com legumes frescos.',
      en: 'Pizza with fresh vegetables.',
      ar: 'بيتزا بالخضار الطازجة.',
    },
    fullDescription: {
      pt: 'Molho de tomate, mussarela, berinjela, abobrinha, cogumelos, tomate e azeitonas.',
      en: 'Tomato sauce, mozzarella, eggplant, zucchini, mushrooms, tomato, and olives.',
      ar: 'صلصة طماطم، موزاريلا، باذنجان، كوسا، فطر، طماطم وزيتون.',
    },
    ingredients: {
      pt: [
        'Molho de tomate',
        'Mussarela',
        'Berinjela',
        'Abobrinha',
        'Cogumelos',
        'Tomate',
        'Azeitonas',
      ],
      en: [
        'Tomato sauce',
        'Mozzarella',
        'Eggplant',
        'Zucchini',
        'Mushrooms',
        'Tomato',
        'Olives',
      ],
      ar: [
        'صلصة طماطم',
        'موزاريلا',
        'باذنجان',
        'كوسا',
        'فطر',
        'طماطم',
        'زيتون',
      ],
    },
  },
  {
    id: 'pizza-sujoq',
    category: 'pizzas',
    price: 54.9,
    image: '/images/menu/pizza/Sujoq.jpg',
    name: {
      pt: 'Pizza Sujoq',
      en: 'Sujoq Pizza',
      ar: 'بيتزا سجق',
    },
    description: {
      pt: 'Pizza com linguiça árabe especial.',
      en: 'Pizza with special Arabic sausage.',
      ar: 'بيتزا مع سجق عربي خاص.',
    },
    fullDescription: {
      pt: 'Molho de tomate, mussarela e linguiça árabe sujoq.',
      en: 'Tomato sauce, mozzarella, and Arabic sujoq sausage.',
      ar: 'صلصة طماطم، موزاريلا وسجق عربي سجق.',
    },
    ingredients: {
      pt: ['Molho de tomate', 'Mussarela', 'Linguiça sujoq'],
      en: ['Tomato sauce', 'Mozzarella', 'Sujoq sausage'],
      ar: ['صلصة طماطم', 'موزاريلا', 'سجق سجق'],
    },
  },
  {
    id: 'pizza-xix',
    category: 'pizzas',
    price: 54.9,
    image: '/images/menu/pizza/XIX.jpg',
    name: {
      pt: 'Pizza XIX',
      en: 'XIX Chicken Pizza',
      ar: 'بيتزا دجاج XIX',
    },
    description: {
      pt: 'Pizza com frango e tempero árabe.',
      en: 'Pizza with chicken and Arabic seasoning.',
      ar: 'بيتزا بالدجاج والبهارات العربية.',
    },
    fullDescription: {
      pt: 'Molho de tomate, mussarela, frango, picles, molho de alho e tempero árabe.',
      en: 'Tomato sauce, mozzarella, chicken, pickles, garlic sauce, and Arabic spices.',
      ar: 'صلصة طماطم، موزاريلا، دجاج، مخلل، صلصة ثوم وبهارات عربية.',
    },
    ingredients: {
      pt: [
        'Molho de tomate',
        'Mussarela',
        'Frango',
        'Picles',
        'Molho de alho',
        'Tempero árabe',
      ],
      en: [
        'Tomato sauce',
        'Mozzarella',
        'Chicken',
        'Pickles',
        'Garlic sauce',
        'Arabic spices',
      ],
      ar: [
        'صلصة طماطم',
        'موزاريلا',
        'دجاج',
        'مخلل',
        'صلصة ثوم',
        'بهارات عربية',
      ],
    },
  },
  {
    id: 'pizza-doce',
    category: 'pizzas',
    price: 54.9,
    image: '/images/menu/pizza/Doce.jpg',
    name: {
      pt: 'Pizza Doce',
      en: 'Sweet Pizza',
      ar: 'بيتزا حلوة',
    },
    description: {
      pt: 'Pizza doce com chocolate e morango.',
      en: 'Sweet pizza with chocolate and strawberry.',
      ar: 'بيتزا حلوة بالشوكولاتة والفراولة.',
    },
    fullDescription: {
      pt: 'Chocolate branco ou preto com morango e pistache.',
      en: 'White or dark chocolate with strawberry and pistachio.',
      ar: 'شوكلاتة بيضاء أو داكنة مع فراولة وفستق.',
    },
    ingredients: {
      pt: ['Chocolate branco ou preto', 'Morango', 'Pistache'],
      en: ['White or dark chocolate', 'Strawberry', 'Pistachio'],
      ar: ['شوكلاتة بيضاء أو داكنة', 'فراولة', 'فستق'],
    },
  },
  // --------------------------
  // ESFIHAS
  // --------------------------
  {
    id: 'esfiha-queijo',
    category: 'esfihas',
    price: 7.9,
    image: '/images/menu/esfihas/esfiha quiho.JPG',
    name: {
      pt: 'Esfiha de Queijo',
      en: 'Cheese Esfiha',
      ar: 'صفيحة جبنة',
    },
    description: {
      pt: 'Esfiha assada recheada com queijo.',
      en: 'Baked esfiha filled with cheese.',
      ar: 'صفيحة مخبوزة محشوة بالجبنة.',
    },
    fullDescription: {
      pt: 'Massa artesanal assada com recheio cremoso de queijo.',
      en: 'Handmade baked dough filled with creamy cheese.',
      ar: 'عجينة مخبوزة محشوة بجبنة كريمية.',
    },
    ingredients: {
      pt: ['Massa', 'Queijo'],
      en: ['Dough', 'Cheese'],
      ar: ['عجين', 'جبنة'],
    },
  },
  {
    id: 'esfiha-carne',
    category: 'esfihas',
    price: 7.9,
    image: '/images/menu/esfihas/esfiha carne.JPG',
    name: {
      pt: 'Esfiha de Carne',
      en: 'Beef Esfiha',
      ar: 'صفيحة لحم',
    },
    description: {
      pt: 'Esfiha assada recheada com carne moída temperada.',
      en: 'Baked esfiha filled with seasoned ground beef.',
      ar: 'صفيحة مخبوزة محشوة بلحم مفروم متبّل.',
    },
    fullDescription: {
      pt: 'Massa assada com carne moída temperada com especiarias árabes.',
      en: 'Baked dough filled with ground beef seasoned with Arabic spices.',
      ar: 'عجين مخبوز محشو بلحم مفروم متبّل بالبهارات العربية.',
    },
    ingredients: {
      pt: ['Massa', 'Carne moída', 'Cebola', 'Temperos árabes'],
      en: ['Dough', 'Ground beef', 'Onion', 'Arabic spices'],
      ar: ['عجين', 'لحم مفروم', 'بصل', 'بهارات عربية'],
    },
  },
  {
    id: 'esfiha-frango',
    category: 'esfihas',
    price: 7.9,
    image: '/images/menu/esfihas/esfiha frango.JPG',
    name: {
      pt: 'Esfiha de Frango',
      en: 'Chicken Esfiha',
      ar: 'صفيحة دجاج',
    },
    description: {
      pt: 'Esfiha recheada com frango desfiado temperado.',
      en: 'Esfiha filled with seasoned shredded chicken.',
      ar: 'صفيحة محشوة بدجاج مبشور متبّل.',
    },
    fullDescription: {
      pt: 'Frango desfiado temperado com especiarias árabes em massa artesanal assada.',
      en: 'Shredded chicken seasoned with Arabic spices in baked handmade dough.',
      ar: 'دجاج مبشور متبّل بالبهارات العربية داخل عجينة مخبوزة.',
    },
    ingredients: {
      pt: ['Massa', 'Frango', 'Temperos'],
      en: ['Dough', 'Chicken', 'Spices'],
      ar: ['عجين', 'دجاج', 'بهارات'],
    },
  },
  {
    id: 'esfiha-zaatar',
    category: 'esfihas',
    price: 8.9,
    image: '/images/menu/esfihas/esfiha zatar.JPG',
    name: {
      pt: 'Esfiha de Zaatar',
      en: 'Zaatar Esfiha',
      ar: 'صفيحة زعتر',
    },
    description: {
      pt: 'Esfiha coberta com zaatar tradicional.',
      en: 'Esfiha topped with traditional zaatar.',
      ar: 'صفيحة مغطاة بالزعتر التقليدي.',
    },
    fullDescription: {
      pt: 'Zaatar libanês misturado com azeite sobre massa artesanal assada.',
      en: 'Lebanese zaatar mixed with olive oil over baked handmade dough.',
      ar: 'زعتر لبناني مع زيت الزيتون فوق عجينة مخبوزة.',
    },
    ingredients: {
      pt: ['Massa', 'Zaatar', 'Azeite'],
      en: ['Dough', 'Zaatar', 'Olive oil'],
      ar: ['عجين', 'زعتر', 'زيت زيتون'],
    },
  },
  {
    id: 'esfiha-mhamara',
    category: 'esfihas',
    price: 8.9,
    image: '/images/menu/esfihas/esfiha mhamra.JPG',
    name: {
      pt: 'Esfiha de Mhamara',
      en: 'Mhamara Esfiha',
      ar: 'صفيحة محمرة',
    },
    description: {
      pt: 'Esfiha coberta com pasta síria de pimentão.',
      en: 'Esfiha topped with Syrian pepper paste.',
      ar: 'صفيحة مغطاة بصلصة فليفلة سورية.',
    },
    fullDescription: {
      pt: 'Pasta de pimentão vermelho sírio levemente picante sobre massa assada.',
      en: 'Mild spicy Syrian red pepper paste over baked dough.',
      ar: 'صلصة فليفلة سورية حارة خفيفة فوق عجينة مخبوزة.',
    },
    ingredients: {
      pt: ['Massa', 'Pasta de pimentão', 'Azeite'],
      en: ['Dough', 'Pepper paste', 'Olive oil'],
      ar: ['عجين', 'معجون فليفلة', 'زيت زيتون'],
    },
  },
  {
    id: 'esfiha-espinafre',
    category: 'esfihas',
    price: 8.9,
    image: '/images/menu/esfihas/esfiha espinafre.JPG',
    name: {
      pt: 'Esfiha de Espinafre',
      en: 'Spinach Esfiha',
      ar: 'صفيحة سبانخ',
    },
    description: {
      pt: 'Esfiha recheada com espinafre fresco temperado.',
      en: 'Esfiha filled with seasoned fresh spinach.',
      ar: 'صفيحة محشوة بالسبانخ المتبّل.',
    },
    fullDescription: {
      pt: 'Espinafre fresco refogado com temperos árabes em massa assada.',
      en: 'Fresh sautéed spinach seasoned with Arabic spices in baked dough.',
      ar: 'سبانخ طازج مطبوخ مع بهارات عربية داخل عجينة مخبوزة.',
    },
    ingredients: {
      pt: ['Massa', 'Espinafre', 'Cebola', 'Temperos'],
      en: ['Dough', 'Spinach', 'Onion', 'Spices'],
      ar: ['عجين', 'سبانخ', 'بصل', 'بهارات'],
    },
  },
  {
    id: 'esfiha-pizza',
    category: 'esfihas',
    price: 8.9,
    image: '/images/menu/esfihas/esfiha-pizza.jpg',
    name: {
      pt: 'Esfiha Pizza',
      en: 'Pizza Esfiha',
      ar: 'صفيحة بيتزا',
    },
    description: {
      pt: 'Esfiha ao estilo pizza com mussarela e molho de tomate.',
      en: 'Pizza-style esfiha with mozzarella and tomato sauce.',
      ar: 'صفيحة على طريقة البيتزا مع موزاريلا وصلصة طماطم.',
    },
    fullDescription: {
      pt: 'Molho de tomate, mussarela e orégano em massa assada.',
      en: 'Tomato sauce, mozzarella, and oregano on baked dough.',
      ar: 'صلصة طماطم، موزاريلا وأوريغانو على عجينة مخبوزة.',
    },
    ingredients: {
      pt: ['Massa', 'Molho de tomate', 'Mussarela', 'Orégano'],
      en: ['Dough', 'Tomato sauce', 'Mozzarella', 'Oregano'],
      ar: ['عجين', 'صلصة طماطم', 'موزاريلا', 'أوريغانو'],
    },
  },
  {
    id: 'esfiha-carne-queijo',
    category: 'esfihas',
    price: 9.9,
    image: '/images/menu/esfiha/CarneQueijo.jpg',
    name: {
      pt: 'Esfiha Carne + Queijo',
      en: 'Beef & Cheese Esfiha',
      ar: 'صفيحة لحم وجبنة',
    },
    description: {
      pt: 'Esfiha recheada com carne e queijo.',
      en: 'Esfiha filled with beef and cheese.',
      ar: 'صفيحة محشوة باللحم والجبنة.',
    },
    fullDescription: {
      pt: 'Carne moída temperada combinada com queijo derretido em massa assada.',
      en: 'Seasoned ground beef combined with melted cheese in baked dough.',
      ar: 'لحم مفروم متبّل ممزوج مع جبنة ذائبة داخل عجينة مخبوزة.',
    },
    ingredients: {
      pt: ['Massa', 'Carne moída', 'Queijo'],
      en: ['Dough', 'Ground beef', 'Cheese'],
      ar: ['عجين', 'لحم مفروم', 'جبنة'],
    },
  },
  {
    id: 'esfiha-frango-queijo',
    category: 'esfihas',
    price: 9.9,
    image: '/images/menu/esfiha/FrangoQueijo.jpg',
    name: {
      pt: 'Esfiha Frango + Queijo',
      en: 'Chicken & Cheese Esfiha',
      ar: 'صفيحة دجاج وجبنة',
    },
    description: {
      pt: 'Esfiha recheada com frango e queijo.',
      en: 'Esfiha filled with chicken and cheese.',
      ar: 'صفيحة محشوة بالدجاج والجبنة.',
    },
    fullDescription: {
      pt: 'Frango desfiado temperado combinado com queijo derretido.',
      en: 'Seasoned shredded chicken mixed with melted cheese.',
      ar: 'دجاج مبشور متبّل ممزوج مع جبنة ذائبة.',
    },
    ingredients: {
      pt: ['Massa', 'Frango', 'Queijo'],
      en: ['Dough', 'Chicken', 'Cheese'],
      ar: ['عجين', 'دجاج', 'جبنة'],
    },
  },
  {
    id: 'esfiha-zaatar-queijo',
    category: 'esfihas',
    price: 9.9,
    image: '/images/menu/esfihas/esfiha-zaatar-cheese.jpg',
    name: {
      pt: 'Esfiha Zaatar + Queijo',
      en: 'Zaatar & Cheese Esfiha',
      ar: 'صفيحة زعتر وجبنة',
    },
    description: {
      pt: 'Esfiha com zaatar e queijo.',
      en: 'Esfiha topped with zaatar and cheese.',
      ar: 'صفيحة مغطاة بالزعتر والجبنة.',
    },
    fullDescription: {
      pt: 'Zaatar tradicional combinado com queijo derretido sobre massa assada.',
      en: 'Traditional zaatar combined with melted cheese on baked dough.',
      ar: 'زعتر تقليدي ممزوج مع جبنة ذائبة على عجينة مخبوزة.',
    },
    ingredients: {
      pt: ['Massa', 'Zaatar', 'Queijo'],
      en: ['Dough', 'Zaatar', 'Cheese'],
      ar: ['عجين', 'زعتر', 'جبنة'],
    },
  },
  {
    id: 'esfiha-mhamara-queijo',
    category: 'esfihas',
    price: 9.9,
    image: '/images/menu/esfihas/mahmra e quijo.JPG',
    name: {
      pt: 'Esfiha Mhamara + Queijo',
      en: 'Mhamara & Cheese Esfiha',
      ar: 'صفيحة محمرة وجبنة',
    },
    description: {
      pt: 'Esfiha de pasta de pimentão com queijo.',
      en: 'Esfiha with pepper paste and cheese.',
      ar: 'صفيحة بصلصة الفليفلة مع الجبنة.',
    },
    fullDescription: {
      pt: 'Pasta síria de pimentão acompanhada de queijo derretido.',
      en: 'Syrian pepper paste topped with melted cheese.',
      ar: 'معجون فليفلة سوري مع جبنة ذائبة.',
    },
    ingredients: {
      pt: ['Massa', 'Pasta de pimentão', 'Queijo'],
      en: ['Dough', 'Pepper paste', 'Cheese'],
      ar: ['عجين', 'معجون فليفلة', 'جبنة'],
    },
  },
  {
    id: 'esfiha-espinafre-queijo',
    category: 'esfihas',
    price: 9.9,
    image: '/images/menu/esfihas/esfiha espinafre.JPG',
    name: {
      pt: 'Esfiha Espinafre + Queijo',
      en: 'Spinach & Cheese Esfiha',
      ar: 'صفيحة سبانخ وجبنة',
    },
    description: {
      pt: 'Esfiha de espinafre com queijo.',
      en: 'Esfiha with spinach and cheese.',
      ar: 'صفيحة سبانخ مع جبنة.',
    },
    fullDescription: {
      pt: 'Espinafre refogado temperado combinado com queijo derretido.',
      en: 'Seasoned sautéed spinach combined with melted cheese.',
      ar: 'سبانخ مطبوخ ومتبّل ممزوج مع جبنة ذائبة.',
    },
    ingredients: {
      pt: ['Massa', 'Espinafre', 'Queijo'],
      en: ['Dough', 'Spinach', 'Cheese'],
      ar: ['عجين', 'سبانخ', 'جبنة'],
    },
  },
  {
    id: 'esfiha-pepperoni',
    category: 'esfihas',
    price: 9.9,
    image: '/images/menu/esfiha/Pepperoni.jpg',
    name: {
      pt: 'Esfiha Pepperoni',
      en: 'Pepperoni Esfiha',
      ar: 'صفيحة ببروني',
    },
    description: {
      pt: 'Esfiha com pepperoni.',
      en: 'Esfiha topped with pepperoni.',
      ar: 'صفيحة مغطاة بالببروني.',
    },
    fullDescription: {
      pt: 'Massa assada com pepperoni fatiado e toque de mussarela.',
      en: 'Baked dough with sliced pepperoni and a touch of mozzarella.',
      ar: 'عجينة مخبوزة مع شرائح ببروني ولمسة من الموزاريلا.',
    },
    ingredients: {
      pt: ['Massa', 'Pepperoni', 'Mussarela'],
      en: ['Dough', 'Pepperoni', 'Mozzarella'],
      ar: ['عجين', 'ببروني', 'موزاريلا'],
    },
  },
  {
    id: 'esfiha-pepperoni-queijo',
    category: 'esfihas',
    price: 9.9,
    image: '/images/menu/esfiha/PepperoniQueijo.jpg',
    name: {
      pt: 'Esfiha Pepperoni + Queijo',
      en: 'Pepperoni & Cheese Esfiha',
      ar: 'صفيحة ببروني وجبنة',
    },
    description: {
      pt: 'Esfiha de pepperoni com queijo.',
      en: 'Esfiha with pepperoni and cheese.',
      ar: 'صفيحة ببروني مع جبنة.',
    },
    fullDescription: {
      pt: 'Pepperoni fatiado combinado com queijo derretido.',
      en: 'Sliced pepperoni combined with melted cheese.',
      ar: 'شرائح ببروني ممزوجة مع جبنة ذائبة.',
    },
    ingredients: {
      pt: ['Massa', 'Pepperoni', 'Queijo'],
      en: ['Dough', 'Pepperoni', 'Cheese'],
      ar: ['عجين', 'ببروني', 'جبنة'],
    },
  },
  // ESFIHAS DOCES
  {
    id: 'esfiha-doce-chocolate-preto',
    category: 'esfihas',
    price: 11.9,
    image: '/images/menu/esfihas/esfiha-doce-straw.jpeg',
    name: {
      pt: 'Esfiha Doce Chocolate Preto',
      en: 'Dark Chocolate Sweet Esfiha',
      ar: 'صفيحة حلوة بشوكلاتة داكنة',
    },
    description: {
      pt: 'Esfiha doce com chocolate preto, morango e pistache.',
      en: 'Sweet esfiha with dark chocolate, strawberry, and pistachio.',
      ar: 'صفيحة حلوة مع شوكولاتة داكنة وفراولة وفستق.',
    },
    fullDescription: {
      pt: 'Massa doce assada com chocolate preto derretido, morangos frescos e pistache.',
      en: 'Baked sweet dough topped with melted dark chocolate, fresh strawberries, and pistachios.',
      ar: 'عجينة حلوة مخبوزة مع شوكولاتة داكنة مذابة وفراولة طازجة وفستق.',
    },
    ingredients: {
      pt: ['Massa doce', 'Chocolate preto', 'Morangos', 'Pistache'],
      en: ['Sweet dough', 'Dark chocolate', 'Strawberries', 'Pistachio'],
      ar: ['عجين حلو', 'شوكلاتة داكنة', 'فراولة', 'فستق'],
    },
  },
  {
    id: 'esfiha-doce-chocolate-branco',
    category: 'esfihas',
    price: 11.9,
    image: '/images/menu/esfihas/esfiha-code-white-straw.jpeg',
    name: {
      pt: 'Esfiha Doce Chocolate Branco',
      en: 'White Chocolate Sweet Esfiha',
      ar: 'صفيحة حلوة بشوكلاتة بيضاء',
    },
    description: {
      pt: 'Esfiha doce com chocolate branco, morango e pistache.',
      en: 'Sweet esfiha with white chocolate, strawberry, and pistachio.',
      ar: 'صفيحة حلوة مع شوكولاتة بيضاء وفراولة وفستق.',
    },
    fullDescription: {
      pt: 'Massa doce ao forno com chocolate branco cremoso, morangos frescos e pistache.',
      en: 'Oven-baked sweet dough with creamy white chocolate, fresh strawberries, and pistachios.',
      ar: 'عجينة حلوة مخبوزة مع شوكولاتة بيضاء كريمية وفراولة طازجة وفستق.',
    },
    ingredients: {
      pt: ['Massa doce', 'Chocolate branco', 'Morangos', 'Pistache'],
      en: ['Sweet dough', 'White chocolate', 'Strawberries', 'Pistachio'],
      ar: ['عجين حلو', 'شوكلاتة بيضاء', 'فراولة', 'فستق'],
    },
  },
  {
    id: 'esfiha-doce-halawa',
    category: 'esfihas',
    price: 12.9,
    image: '/images/menu/esfihaDoce/Halawa.jpg',
    name: {
      pt: 'Esfiha Doce Halawa',
      en: 'Halawa Sweet Esfiha',
      ar: 'صفيحة حلوة بحلاوة طحينية',
    },
    description: {
      pt: 'Esfiha doce com halawa e pistache.',
      en: 'Sweet esfiha with halawa and pistachio.',
      ar: 'صفيحة حلوة مع حلاوة طحينية وفستق.',
    },
    fullDescription: {
      pt: 'Massa doce com pasta de gergelim árabe (halawa) e pistache moído.',
      en: 'Sweet dough topped with Arabic sesame halawa and crushed pistachios.',
      ar: 'عجينة حلوة مع حلاوة طحينية مصنوعة من السمسم وفستق مطحون.',
    },
    ingredients: {
      pt: ['Massa doce', 'Halawa (gergelim)', 'Pistache'],
      en: ['Sweet dough', 'Halawa (sesame paste)', 'Pistachio'],
      ar: ['عجين حلو', 'حلاوة طحينية', 'فستق'],
    },
  },
  // --------------------------
  // MANAKISH
  // --------------------------
  {
    id: 'manakish-zatar',
    category: 'manakish',
    price: 16.9,
    image: '/images/menu/manakish/manakish-zaatar-2.jpg',
    name: {
      pt: 'Manakish Zatar',
      en: 'Zaatar Manakish',
      ar: 'منقوشة زعتر',
    },
    description: {
      pt: 'Manakish tradicional com zaatar.',
      en: 'Traditional manakish topped with zaatar.',
      ar: 'منقوشة تقليدية مغطاة بالزعتر.',
    },
    fullDescription: {
      pt: 'Massa crocante por fora e macia por dentro, coberta com zaatar libanês e azeite.',
      en: 'Crispy outside and soft inside, topped with Lebanese zaatar and olive oil.',
      ar: 'عجينة مقرمشة من الخارج وطريّة من الداخل، مغطاة بزَعتر لبناني وزيت زيتون.',
    },
    ingredients: {
      pt: ['Massa', 'Zaatar', 'Azeite'],
      en: ['Dough', 'Zaatar', 'Olive oil'],
      ar: ['عجين', 'زعتر', 'زيت زيتون'],
    },
  },
  {
    id: 'manakish-zatar-queijo',
    category: 'manakish',
    price: 18.9,
    image: '/images/menu/manakish/zatar quijo.jpeg',
    name: {
      pt: 'Manakish Zatar com Queijo',
      en: 'Zaatar with Cheese Manakish',
      ar: 'منقوشة زعتر مع جبنة',
    },
    description: {
      pt: 'Manakish com zaatar e queijo.',
      en: 'Manakish topped with zaatar and cheese.',
      ar: 'منقوشة مغطاة بالزعتر والجبنة.',
    },
    fullDescription: {
      pt: 'Combinação de zaatar libanês com queijo derretido sobre massa assada.',
      en: 'A combination of Lebanese zaatar and melted cheese over baked dough.',
      ar: 'مزيج من الزعتر اللبناني والجبنة الذائبة فوق عجينة مخبوزة.',
    },
    ingredients: {
      pt: ['Massa', 'Zaatar', 'Queijo', 'Azeite'],
      en: ['Dough', 'Zaatar', 'Cheese', 'Olive oil'],
      ar: ['عجين', 'زعتر', 'جبنة', 'زيت زيتون'],
    },
  },
  {
    id: 'manakish-coalhada-verduras',
    category: 'manakish',
    price: 18.9,
    image: '/images/menu/manakish/coahada verd.jpeg',
    name: {
      pt: 'Manakish Coalhada Seca com Verduras',
      en: 'Labneh with Vegetables Manakish',
      ar: 'منقوشة لبنة مع خضار',
    },
    description: {
      pt: 'Manakish com coalhada seca e verduras.',
      en: 'Manakish topped with labneh and fresh vegetables.',
      ar: 'منقوشة مغطاة بلبنة وخضار طازجة.',
    },
    fullDescription: {
      pt: 'Coalhada seca cremosa combinada com verduras frescas em massa assada ao estilo árabe.',
      en: 'Creamy labneh combined with fresh vegetables on traditional baked dough.',
      ar: 'لبنة كريمية مع خضار طازجة فوق عجينة مخبوزة.',
    },
    ingredients: {
      pt: ['Massa', 'Coalhada seca', 'Verduras', 'Azeite'],
      en: ['Dough', 'Labneh', 'Vegetables', 'Olive oil'],
      ar: ['عجين', 'لبنة', 'خضار', 'زيت زيتون'],
    },
  },
  {
    id: 'manakish-queijo-verduras',
    category: 'manakish',
    price: 18.9,
    image: '/images/menu/manakish/QueijoVerduras.jpg',
    name: {
      pt: 'Manakish Queijo com Verduras',
      en: 'Cheese with Vegetables Manakish',
      ar: 'منقوشة جبنة مع خضار',
    },
    description: {
      pt: 'Manakish com queijo e verduras.',
      en: 'Manakish topped with cheese and vegetables.',
      ar: 'منقوشة مغطاة بالجبنة والخضار.',
    },
    fullDescription: {
      pt: 'Queijo derretido e verduras frescas sobre massa assada crocante.',
      en: 'Melted cheese and fresh vegetables on baked Middle Eastern bread.',
      ar: 'جبنة ذائبة مع خضار طازجة فوق عجينة مخبوزة.',
    },
    ingredients: {
      pt: ['Massa', 'Queijo', 'Verduras'],
      en: ['Dough', 'Cheese', 'Vegetables'],
      ar: ['عجين', 'جبنة', 'خضار'],
    },
  },
  {
    id: 'manakish-sujoq',
    category: 'manakish',
    price: 18.9,
    image: '/images/menu/manakish/Sujoq.jpg',
    name: {
      pt: 'Manakish Sujoq',
      en: 'Sujoq Manakish',
      ar: 'منقوشة سجق',
    },
    description: {
      pt: 'Manakish com linguiça árabe sujoq, maionese e picles.',
      en: 'Manakish with Arabic sujoq sausage, mayo, and pickles.',
      ar: 'منقوشة بالسجق العربي مع المايونيز والمخلل.',
    },
    fullDescription: {
      pt: 'Sujok árabe picante com maionese cremosa e picles sobre massa assada.',
      en: 'Spicy Arabic sujoq sausage combined with creamy mayo and pickles on baked dough.',
      ar: 'سجق عربي حار مع مايونيز كريمي ومخللات فوق عجينة مخبوزة.',
    },
    ingredients: {
      pt: ['Massa', 'Sujok', 'Maionese', 'Picles'],
      en: ['Dough', 'Sujoq sausage', 'Mayonnaise', 'Pickles'],
      ar: ['عجين', 'سجق', 'مايونيز', 'مخلل'],
    },
  },
  {
    id: 'manakish-xix',
    category: 'manakish',
    price: 18.9,
    image: '/images/menu/manakish/XIX.jpg',
    name: {
      pt: 'Manakish XIX',
      en: 'XIX Chicken Manakish',
      ar: 'منقوشة دجاج',
    },
    description: {
      pt: 'Manakish com frango temperado, maionese e picles.',
      en: 'Manakish with seasoned chicken, mayo, and pickles.',
      ar: 'منقوشة بالدجاج المتبّل مع المايونيز والمخلل.',
    },
    fullDescription: {
      pt: 'Frango temperado com especiarias árabes, maionese e picles sobre massa assada.',
      en: 'Chicken seasoned with Arabic spices topped with mayo and pickles on baked dough.',
      ar: 'دجاج متبّل بالبهارات العربية مع مايونيز ومخللات فوق عجينة مخبوزة.',
    },
    ingredients: {
      pt: ['Massa', 'Frango', 'Maionese', 'Picles'],
      en: ['Dough', 'Chicken', 'Mayonnaise', 'Pickles'],
      ar: ['عجين', 'دجاج', 'مايونيز', 'مخلل'],
    },
  },
  {
    id: 'manakish-mhamra',
    category: 'manakish',
    price: 16.9,
    image: '/images/menu/manakish/Mhamra.jpg',
    name: {
      pt: 'Manakish Mhamra',
      en: 'Mhamara Manakish',
      ar: 'منقوشة محمرة',
    },
    description: {
      pt: 'Manakish com pasta síria de pimentão mhamara.',
      en: 'Manakish topped with Syrian mhamara pepper paste.',
      ar: 'منقوشة مغطاة بصلصة محمرة سورية.',
    },
    fullDescription: {
      pt: 'Pasta de pimentão sírio levemente picante sobre massa assada.',
      en: 'Lightly spicy Syrian red pepper paste on baked dough.',
      ar: 'صلصة فليفلة سورية حارة خفيفة فوق عجينة مخبوزة.',
    },
    ingredients: {
      pt: ['Massa', 'Pasta de pimentão', 'Azeite'],
      en: ['Dough', 'Pepper paste', 'Olive oil'],
      ar: ['عجين', 'معجون فليفلة', 'زيت زيتون'],
    },
  },
  {
    id: 'manakish-mhamra-queijo',
    category: 'manakish',
    price: 18.9,
    image: '/images/menu/manakish/manakish-mhamara-cheese.jpg',
    name: {
      pt: 'Manakish Mhamra com Queijo',
      en: 'Mhamara with Cheese Manakish',
      ar: 'منقوشة محمرة مع جبنة',
    },
    description: {
      pt: 'Manakish com pasta mhamara e queijo.',
      en: 'Manakish topped with mhamara and cheese.',
      ar: 'منقوشة مغطاة بصلصة المحمرة والجبنة.',
    },
    fullDescription: {
      pt: 'Pasta síria de mhamara combinada com queijo derretido em massa assada.',
      en: 'Syrian mhamara paste combined with melted cheese on baked dough.',
      ar: 'صلصة محمرة سورية ممزوجة مع جبنة ذائبة فوق عجينة مخبوزة.',
    },
    ingredients: {
      pt: ['Massa', 'Pasta mhamara', 'Queijo'],
      en: ['Dough', 'Mhamara paste', 'Cheese'],
      ar: ['عجين', 'صلصة محمرة', 'جبنة'],
    },
  },
  // Porcoes | dishes
  {
    id: 'combo-arabe-nobre',
    category: 'porcoes',
    price: 74.9,
    image: '/images/menu/dishes/arabe nobre.jpeg',
    name: {
      pt: 'Combo Árabe Nobre',
      en: 'Noble Arabic Combo',
      ar: 'الوجبة العربية النخبة',
    },
    description: {
      pt: 'Combo completo com clássicos da culinária árabe.',
      en: 'Complete combo with classic Arabic dishes.',
      ar: 'وجبة عربية كاملة تضم أشهر الأطباق العربية.',
    },
    fullDescription: {
      pt: 'Inclui kibe cru, tabule, homus, coalhada seca e baba ganoush. Acompanha 2 pães sírios e 2 pães de forno.',
      en: 'Includes raw kibbeh, tabbouleh, hummus, labneh, and baba ganoush. Served with 2 Syrian breads and 2 oven breads.',
      ar: 'يحتوي على كبة نية، تبولة، حمص، لبنة، وبابا غنوج. يُقدّم مع خبزين سوريين وخبزين مشويين.',
    },
    ingredients: {
      pt: [
        'Kibe cru',
        'Tabule',
        'Homus',
        'Coalhada seca',
        'Baba ganoush',
        'Pão sírio',
        'Pão de forno',
      ],
      en: [
        'Raw kibbeh',
        'Tabbouleh',
        'Hummus',
        'Labneh',
        'Baba ganoush',
        'Syrian bread',
        'Oven bread',
      ],
      ar: [
        'كبة نية',
        'تبولة',
        'حمص',
        'لبنة',
        'بابا غنوج',
        'خبز سوري',
        'خبز فرن',
      ],
    },
  },
  {
    id: 'charuto-uva',
    category: 'porcoes',
    price: 39.9,
    image: '/images/menu/dishes/wr23nb.jpg',
    name: {
      pt: 'Charuto de Uva (8 unid.)',
      en: 'Grape Leaf Rolls (8 pcs)',
      ar: 'ورق عنب (٨ قطع)',
    },
    description: {
      pt: 'Charutos de folha de uva recheados.',
      en: 'Stuffed grape leaves.',
      ar: 'ورق عنب محشو.',
    },
    fullDescription: {
      pt: 'Folhas de uva recheadas com arroz temperado ao estilo árabe.',
      en: 'Grape leaves stuffed with seasoned rice prepared in the Arabic style.',
      ar: 'أوراق عنب محشوة بالأرز المتبّل على الطريقة العربية.',
    },
    ingredients: {
      pt: ['Folha de uva', 'Arroz', 'Temperos árabes'],
      en: ['Grape leaves', 'Rice', 'Arabic spices'],
      ar: ['ورق عنب', 'أرز', 'بهارات عربية'],
    },
  },
  {
    id: 'prato-falafel',
    category: 'porcoes',
    price: 25.9,
    image: '/images/menu/dishes/falafel.jpg',
    name: {
      pt: 'Prato de Falafel (6 unid.)',
      en: 'Falafel Plate (6 pcs)',
      ar: 'طبق فلافل (٦ قطع)',
    },
    description: {
      pt: 'Porção de falafel crocante.',
      en: 'Portion of crispy falafel.',
      ar: 'طبق فلافل مقرمش.',
    },
    fullDescription: {
      pt: 'Bolinhos tradicionais de grão-de-bico fritos até ficarem crocantes.',
      en: 'Traditional chickpea patties fried until crispy.',
      ar: 'كرات الحمص المقلية التقليدية حتى تصبح مقرمشة.',
    },
    ingredients: {
      pt: ['Grão-de-bico', 'Temperos', 'Óleo para fritura'],
      en: ['Chickpeas', 'Spices', 'Frying oil'],
      ar: ['حمص', 'بهارات', 'زيت للقلي'],
    },
  },
  {
    id: 'kibe-cru',
    category: 'porcoes',
    price: 32.9,
    image: '/images/menu/dishes/kebbe nia.jpg',
    name: {
      pt: 'Kibe Cru (300g)',
      en: 'Raw Kibbeh (300g)',
      ar: 'كبة نية (٣٠٠ غرام)',
    },
    description: {
      pt: 'Kibe cru fresco e temperado.',
      en: 'Fresh seasoned raw kibbeh.',
      ar: 'كبة نية طازجة ومتّبلة.',
    },
    fullDescription: {
      pt: 'Massa de trigo com carne moída fresca e temperos árabes.',
      en: 'Ground beef mixed with bulgur wheat and Arabic spices, served raw.',
      ar: 'لحم مفروم ممزوج بالبرغل والبهارات العربية ويُقدّم نيئاً.',
    },
    ingredients: {
      pt: ['Carne fresca', 'Trigo para kibe', 'Cebola', 'Temperos'],
      en: ['Fresh beef', 'Bulgur wheat', 'Onion', 'Spices'],
      ar: ['لحم طازج', 'برغل', 'بصل', 'بهارات'],
    },
  },
  {
    id: 'coalhada-seca',
    category: 'porcoes',
    price: 29.9,
    image: '/images/menu/dishes/labne.png',
    name: {
      pt: 'Coalhada Seca',
      en: 'Labneh',
      ar: 'لبنة',
    },
    description: {
      pt: 'Coalhada seca cremosa.',
      en: 'Creamy strained yogurt (labneh).',
      ar: 'لبنة كريمية.',
    },
    fullDescription: {
      pt: 'Iogurte árabe coado, cremoso e levemente ácido, ideal para acompanhar pratos.',
      en: 'Creamy strained Arabic yogurt, lightly tangy and perfect as a side dish.',
      ar: 'لبنة عربية مصفّاة، كريمية وحموضتها خفيفة، مثالية كمقبلات.',
    },
    ingredients: {
      pt: ['Iogurte', 'Sal'],
      en: ['Yogurt', 'Salt'],
      ar: ['لبن', 'ملح'],
    },
  },
  {
    id: 'homus',
    category: 'porcoes',
    price: 22.9,
    image: '/images/menu/dishes/hommus.jpg',
    name: {
      pt: 'Homus',
      en: 'Hummus',
      ar: 'حمص | مسبحة',
    },
    description: {
      pt: 'Creme de grão-de-bico com tahine.',
      en: 'Chickpea cream with tahini.',
      ar: 'كريمة حمص مع طحينة.',
    },
    fullDescription: {
      pt: 'Pasta árabe tradicional feita com grão-de-bico, tahine, limão e azeite.',
      en: 'Traditional Arabic spread made from chickpeas, tahini, lemon, and olive oil.',
      ar: 'مزيج عربي تقليدي مصنوع من الحمص والطحينة والليمون وزيت الزيتون.',
    },
    ingredients: {
      pt: ['Grão-de-bico', 'Tahine', 'Limão', 'Azeite', 'Sal'],
      en: ['Chickpeas', 'Tahini', 'Lemon', 'Olive oil', 'Salt'],
      ar: ['حمص', 'طحينة', 'ليمون', 'زيت زيتون', 'ملح'],
    },
  },
  {
    id: 'baba-ganoush',
    category: 'porcoes',
    price: 23.9,
    image: '/images/menu/dishes/baba-ghanosh.jpg',
    name: {
      pt: 'Baba Ganoush',
      en: 'Baba Ganoush',
      ar: 'بابا غنوج',
    },
    description: {
      pt: 'Creme árabe de berinjela defumada.',
      en: 'Creamy smoked eggplant dip.',
      ar: 'كريمة باذنجان مدخّن.',
    },
    fullDescription: {
      pt: 'Pasta cremosa de berinjela assada com tahine, limão e azeite.',
      en: 'Creamy roasted eggplant mixed with tahini, lemon, and olive oil.',
      ar: 'باذنجان مشوي ممزوج مع طحينة وليمون وزيت الزيتون.',
    },
    ingredients: {
      pt: ['Berinjela', 'Tahine', 'Limão', 'Azeite', 'Sal'],
      en: ['Eggplant', 'Tahini', 'Lemon', 'Olive oil', 'Salt'],
      ar: ['باذنجان', 'طحينة', 'ليمون', 'زيت زيتون', 'ملح'],
    },
  },
  {
    id: 'tabule',
    category: 'porcoes',
    price: 19.9,
    image: '/images/menu/dishes/taboule.jpg',
    name: {
      pt: 'Tabule',
      en: 'Tabbouleh',
      ar: 'تبولة',
    },
    description: {
      pt: 'Salada árabe tradicional.',
      en: 'Traditional Arabic salad.',
      ar: 'سلطة عربية تقليدية.',
    },
    fullDescription: {
      pt: 'Mistura fresca de salsa, tomate, cebola, trigo para kibe, limão e azeite.',
      en: 'Fresh mix of parsley, tomato, onion, bulgur wheat, lemon, and olive oil.',
      ar: 'مزيج طازج من البقدونس والطماطم والبصل والبرغل والليمون وزيت الزيتون.',
    },
    ingredients: {
      pt: ['Salsa', 'Tomate', 'Cebola', 'Trigo para kibe', 'Limão', 'Azeite'],
      en: ['Parsley', 'Tomato', 'Onion', 'Bulgur', 'Lemon', 'Olive oil'],
      ar: ['بقدونس', 'طماطم', 'بصل', 'برغل', 'ليمون', 'زيت زيتون'],
    },
  },
  {
    id: 'batata-frita',
    category: 'porcoes',
    price: 19.9,
    image: '/images/menu/dishes/fries.jpg',
    name: {
      pt: 'Batata Frita 200g',
      en: 'French Fries 200g',
      ar: 'بطاطا مقلية 200غ',
    },
    description: {
      pt: 'Porção de batatas fritas crocantes.',
      en: 'Portion of crispy French fries.',
      ar: 'طبق بطاطا مقلية مقرمشة.',
    },
    fullDescription: {
      pt: 'Batatas cortadas e fritas até ficarem douradas e crocantes.',
      en: 'Fresh potatoes fried until golden and crispy.',
      ar: 'بطاطا طازجة مقلية حتى تصبح ذهبية ومقرمشة.',
    },
    ingredients: {
      pt: ['Batata', 'Óleo para fritura', 'Sal'],
      en: ['Potatoes', 'Frying oil', 'Salt'],
      ar: ['بطاطا', 'زيت للقلي', 'ملح'],
    },
  },
  {
    id: 'pao-sirio',
    category: 'porcoes',
    price: 2.5,
    image: '/images/menu/dishes/hq720.jpg',
    name: {
      pt: 'Pão Sírio / Forno',
      en: 'Syrian Bread / Oven Bread',
      ar: 'خبز سوري / خبز فرن',
    },
    description: {
      pt: 'Pão árabe tradicional.',
      en: 'Traditional Arabic bread.',
      ar: 'خبز عربي تقليدي.',
    },
    fullDescription: {
      pt: 'Pão leve e macio, perfeito para acompanhar pratos árabes.',
      en: 'Soft and light bread, perfect with Arabic dishes.',
      ar: 'خبز خفيف وطري، مثالي مع الأطباق العربية.',
    },
    ingredients: {
      pt: ['Farinha', 'Água', 'Fermento', 'Sal'],
      en: ['Flour', 'Water', 'Yeast', 'Salt'],
      ar: ['دقيق', 'ماء', 'خميرة', 'ملح'],
    },
  },
  // Drinks
  {
    id: 'refrigerante-lata',
    category: 'bebidas',
    price: 5.9,
    image: '/images/menu/drinks/coca-cola.jpg',
    name: {
      pt: 'Refrigerante lata',
      en: 'Soda (can)',
      ar: 'مشروب غازي (علبة)',
    },
    description: {
      pt: 'Refrigerante em lata.',
      en: 'Soda in a can.',
      ar: 'مشروب غازي معبأ في علبة.',
    },
    fullDescription: {
      pt: 'Bebida gaseificada servida gelada.',
      en: 'Carbonated drink served cold.',
      ar: 'مشروب غازي يقدّم بارداً.',
    },
    ingredients: {
      pt: ['Água gaseificada', 'Açúcar', 'Aromas'],
      en: ['Carbonated water', 'Sugar', 'Flavorings'],
      ar: ['ماء غازي', 'سكر', 'منكهات'],
    },
  },
  {
    id: 'refrigerante-600ml',
    category: 'bebidas',
    price: 8.9,
    image: '/images/menu/drinks/full-coca.jpg',
    name: {
      pt: 'Refrigerante 600ml',
      en: 'Soda 600ml',
      ar: 'مشروب غازي 600مل',
    },
    description: {
      pt: 'Refrigerante garrafa 600ml.',
      en: '600ml bottle of soda.',
      ar: 'قارورة مشروب غازي 600مل.',
    },
    fullDescription: {
      pt: 'Bebida gaseificada em garrafa de 600ml.',
      en: 'Carbonated drink in a 600ml bottle.',
      ar: 'مشروب غازي في عبوة 600مل.',
    },
    ingredients: {
      pt: ['Água gaseificada', 'Açúcar', 'Aromas'],
      en: ['Carbonated water', 'Sugar', 'Flavorings'],
      ar: ['ماء غازي', 'سكر', 'منكهات'],
    },
  },
  {
    id: 'refrigerante-1l',
    category: 'bebidas',
    price: 12.9,
    image: '/images/menu/drinks/full-coca.jpg',
    name: {
      pt: 'Refrigerante 1L',
      en: 'Soda 1L',
      ar: 'مشروب غازي 1 لتر',
    },
    description: {
      pt: 'Refrigerante garrafa 1 litro.',
      en: '1-liter bottle of soda.',
      ar: 'قارورة مشروب غازي سعة 1 لتر.',
    },
    fullDescription: {
      pt: 'Bebida gaseificada para compartilhar.',
      en: 'Carbonated drink ideal for sharing.',
      ar: 'مشروب غازي مناسب للمشاركة.',
    },
    ingredients: {
      pt: ['Água gaseificada', 'Açúcar', 'Aromas'],
      en: ['Carbonated water', 'Sugar', 'Flavorings'],
      ar: ['ماء غازي', 'سكر', 'منكهات'],
    },
  },
  {
    id: 'suco-natural-350ml',
    category: 'bebidas',
    price: 11.9,
    image:
      '/images/menu/drinks/fresh-mint-lemonade-in-glass-with-ice-and-mint-lea.jpg',
    name: {
      pt: 'Suco natural 350ml',
      en: 'Natural Juice 350ml',
      ar: 'عصير طبيعي 350مل',
    },
    description: {
      pt: 'Suco natural fresco.',
      en: 'Fresh natural juice.',
      ar: 'عصير طبيعي طازج.',
    },
    fullDescription: {
      pt: 'Suco feito com frutas naturais e servido gelado.',
      en: 'Juice made from fresh fruits and served cold.',
      ar: 'عصير مصنوع من فواكه طبيعية ويقدّم بارداً.',
    },
    ingredients: {
      pt: ['Frutas naturais', 'Água', 'Açúcar (opcional)'],
      en: ['Natural fruits', 'Water', 'Sugar (optional)'],
      ar: ['فواكه طبيعية', 'ماء', 'سكر (اختياري)'],
    },
  },
  {
    id: 'agua-mineral',
    category: 'bebidas',
    price: 3.9,
    image: '/images/menu/drinks/agua2.jpg',
    name: {
      pt: 'Água mineral',
      en: 'Mineral Water',
      ar: 'مياه معدنية',
    },
    description: {
      pt: 'Água mineral natural.',
      en: 'Natural mineral water.',
      ar: 'مياه معدنية طبيعية.',
    },
    fullDescription: {
      pt: 'Água mineral pura e refrescante.',
      en: 'Pure and refreshing mineral water.',
      ar: 'مياه معدنية نقية ومنعشة.',
    },
    ingredients: {
      pt: ['Água mineral'],
      en: ['Mineral water'],
      ar: ['مياه معدنية'],
    },
  },
  {
    id: 'cha-arabe',
    category: 'bebidas',
    price: 8.9,
    image: '/images/menu/drinks/Chai.jpg',
    name: {
      pt: 'Chá árabe',
      en: 'Arabic Tea',
      ar: 'شاي عربي',
    },
    description: {
      pt: 'Chá árabe tradicional.',
      en: 'Traditional Arabic tea.',
      ar: 'شاي عربي تقليدي.',
    },
    fullDescription: {
      pt: 'Chá preto servido quente ao estilo árabe.',
      en: ' black tea served hot in the Arabic style.',
      ar: 'شاي أسود  يُقدّم ساخناً على الطريقة العربية.',
    },
    ingredients: {
      pt: ['Chá preto', 'Água', 'Açúcar (opcional)'],
      en: ['Black tea', 'Water', 'Sugar (optional)'],
      ar: ['شاي أسود', 'ماء', 'سكر (اختياري)'],
    },
  },
  {
    id: 'cha-arabe-hortela',
    category: 'bebidas',
    price: 6.9,
    image: '/images/menu/drinks/TeaMent-1.webp',
    name: {
      pt: 'Chá árabe com hortelã',
      en: 'Arabic Mint Tea',
      ar: 'شاي عربي بالنعناع',
    },
    description: {
      pt: 'Chá árabe com folhas de hortelã fresca.',
      en: 'Arabic tea with fresh mint leaves.',
      ar: 'شاي عربي مع أوراق النعناع الطازجة.',
    },
    fullDescription: {
      pt: 'Chá preto tradicional servido com hortelã fresca, muito aromático.',
      en: 'Traditional black tea served with fresh mint, very aromatic.',
      ar: 'شاي أسود تقليدي مع نعناع طازج، ذو نكهة قوية وعطرة.',
    },
    ingredients: {
      pt: ['Chá preto', 'Hortelã fresca', 'Água', 'Açúcar (opcional)'],
      en: ['Black tea', 'Fresh mint', 'Water', 'Sugar (optional)'],
      ar: ['شاي أسود', 'نعناع طازج', 'ماء', 'سكر (اختياري)'],
    },
  },
  {
    id: 'cafe-passado',
    category: 'bebidas',
    price: 5.9,
    image:
      '/images/menu/drinks/traditional-arabic-coffee-in-ornate-cup-with-dates.jpg',
    name: {
      pt: 'Café passado',
      en: 'Brewed Coffee',
      ar: 'قهوة مفلترة',
    },
    description: {
      pt: 'Café tradicional coado.',
      en: 'Traditional filtered coffee.',
      ar: 'قهوة مفلترة تقليدية.',
    },
    fullDescription: {
      pt: 'Café coado no filtro, sabor equilibrado e aroma suave.',
      en: 'Filtered coffee with balanced flavor and smooth aroma.',
      ar: 'قهوة مصفّاة ذات نكهة متوازنة ورائحة لطيفة.',
    },
    ingredients: {
      pt: ['Café', 'Água'],
      en: ['Coffee', 'Water'],
      ar: ['قهوة', 'ماء'],
    },
  },
  {
    id: 'cafe-arabe',
    category: 'bebidas',
    price: 8.9,
    image:
      '/images/menu/drinks/traditional-arabic-coffee-in-ornate-cup-with-dates.jpg',
    name: {
      pt: 'Café árabe',
      en: 'Arabic Coffee',
      ar: 'قهوة عربية',
    },
    description: {
      pt: 'Café aromático preparado ao estilo árabe.',
      en: 'Aromatic coffee prepared in the Arabic style.',
      ar: 'قهوة محضّرة على الطريقة العربية.',
    },
    fullDescription: {
      pt: 'Café forte preparado com especiarias árabes, aroma intenso e sabor marcante.',
      en: 'Strong Arabic coffee prepared with spices, intense aroma, and bold flavor.',
      ar: 'قهوة عربية قوية تُحضّر مع البهارات، ذات رائحة قوية ونكهة مميزة.',
    },
    ingredients: {
      pt: ['Café árabe', 'Água', 'Especiarias'],
      en: ['Arabic coffee', 'Water', 'Spices'],
      ar: ['قهوة عربية', 'ماء', 'بهارات'],
    },
  },
  // Desserts
  {
    id: 'doce-arabe-1',
    category: 'doces-arabes',
    price: 11.9,
    image: '/images/menu/desserts/ninho.JPG',
    name: {
      pt: 'Doce Árabe 1',
      en: 'Arabic Sweet 1',
      ar: 'حلوى عربية 1',
    },
    description: {
      pt: 'Seleção com 5 doces árabes tradicionais.',
      en: 'Selection of 5 traditional Arabic sweets.',
      ar: 'مجموعة من ٥ حلويات عربية تقليدية.',
    },
    fullDescription: {
      pt: 'Inclui 5 doces árabes: Ninho, folhado doce, esfiha doce de chocolate preto, esfiha doce de chocolate branco e esfiha doce de halawa.',
      en: 'Includes 5 Arabic sweets: Ninho, sweet puff, dark chocolate sweet esfiha, white chocolate sweet esfiha, and halawa sweet esfiha.',
      ar: 'يتضمن ٥ حلويات عربية: نينه، صفيحة حلوة، صفيحة شوكولاتة داكنة، صفيحة شوكولاتة بيضاء، وصفيحة حلاوة طحينية.',
    },
    ingredients: {
      pt: [
        'Massa árabe',
        'Chocolate preto',
        'Chocolate branco',
        'Pistache',
        'Halawa',
        'Creme Ninho',
      ],
      en: [
        'Arabic dough',
        'Dark chocolate',
        'White chocolate',
        'Pistachio',
        'Halawa',
        'Ninho cream',
      ],
      ar: [
        'عجينة عربية',
        'شوكلاتة داكنة',
        'شوكلاتة بيضاء',
        'فستق',
        'حلاوة طحينية',
        'كريمة نينه',
      ],
    },
  },
  {
    id: 'doce-arabe-2',
    category: 'doces-arabes',
    price: 13.9,
    image: '/images/menu/desserts/folhado.jpeg',
    name: {
      pt: 'Doce Árabe 2',
      en: 'Arabic Sweet 2',
      ar: 'حلوى عربية 2',
    },
    description: {
      pt: 'Seleção premium com 5 doces árabes.',
      en: 'Premium selection of 5 Arabic sweets.',
      ar: 'مجموعة مميزة من ٥ حلويات عربية.',
    },
    fullDescription: {
      pt: 'Inclui 5 doces árabes premium: baklava tradicional, baklava com pistache, folhado especial, halawa premium e doce árabe misto.',
      en: 'Includes 5 premium Arabic sweets: classic baklava, pistachio baklava, special puff pastry sweet, premium halawa, and mixed Arabic sweet.',
      ar: 'يتضمن ٥ حلويات عربية فاخرة: بقلاوة تقليدية، بقلاوة بالفستق، صفيحة عربية فاخرة، حلاوة طحينية مميزة، وحلوى عربية مشكلة.',
    },
    ingredients: {
      pt: [
        'Massa filo',
        'Pistache',
        'Nozes',
        'Mel',
        'Halawa premium',
        'Massa folhada',
      ],
      en: [
        'Filo dough',
        'Pistachio',
        'Nuts',
        'Honey',
        'Premium halawa',
        'Puff pastry',
      ],
      ar: [
        'عجينة فيلو',
        'فستق',
        'مكسرات',
        'عسل',
        'حلاوة طحينية فاخرة',
        'عجينة مورقة',
      ],
    },
  },
  {
    id: 'doce-arabe-3',
    category: 'doces-arabes',
    price: 13.9,
    image: '/images/menu/desserts/doce grande.jpeg',
    name: {
      pt: 'Doce Árabe 3',
      en: 'Arabic Sweet 3',
      ar: 'حلوى عربية 3',
    },
    description: {
      pt: 'Seleção premium com 5 doces árabes.',
      en: 'Premium selection of 5 Arabic sweets.',
      ar: 'مجموعة مميزة من ٥ حلويات عربية.',
    },
    fullDescription: {
      pt: 'Inclui 5 doces árabes premium: baklava tradicional, baklava com pistache, folhado especial, halawa premium e doce árabe misto.',
      en: 'Includes 5 premium Arabic sweets: classic baklava, pistachio baklava, special puff pastry sweet, premium halawa, and mixed Arabic sweet.',
      ar: 'يتضمن ٥ حلويات عربية فاخرة: بقلاوة تقليدية، بقلاوة بالفستق، صفيحة عربية فاخرة، حلاوة طحينية مميزة، وحلوى عربية مشكلة.',
    },
    ingredients: {
      pt: [
        'Massa filo',
        'Pistache',
        'Nozes',
        'Mel',
        'Halawa premium',
        'Massa folhada',
      ],
      en: [
        'Filo dough',
        'Pistachio',
        'Nuts',
        'Honey',
        'Premium halawa',
        'Puff pastry',
      ],
      ar: [
        'عجينة فيلو',
        'فستق',
        'مكسرات',
        'عسل',
        'حلاوة طحينية فاخرة',
        'عجينة مورقة',
      ],
    },
  },
  {
    id: 'doce-arabe-4',
    category: 'doces-arabes',
    price: 13.9,
    image: '/images/menu/desserts/doce mini.jpeg',
    name: {
      pt: 'Doce Árabe 4',
      en: 'Arabic Sweet 4',
      ar: 'حلوى عربية 4',
    },
    description: {
      pt: 'Seleção premium com 5 doces árabes.',
      en: 'Premium selection of 5 Arabic sweets.',
      ar: 'مجموعة مميزة من ٥ حلويات عربية.',
    },
    fullDescription: {
      pt: 'Inclui 5 doces árabes premium: baklava tradicional, baklava com pistache, folhado especial, halawa premium e doce árabe misto.',
      en: 'Includes 5 premium Arabic sweets: classic baklava, pistachio baklava, special puff pastry sweet, premium halawa, and mixed Arabic sweet.',
      ar: 'يتضمن ٥ حلويات عربية فاخرة: بقلاوة تقليدية، بقلاوة بالفستق، صفيحة عربية فاخرة، حلاوة طحينية مميزة، وحلوى عربية مشكلة.',
    },
    ingredients: {
      pt: [
        'Massa filo',
        'Pistache',
        'Nozes',
        'Mel',
        'Halawa premium',
        'Massa folhada',
      ],
      en: [
        'Filo dough',
        'Pistachio',
        'Nuts',
        'Honey',
        'Premium halawa',
        'Puff pastry',
      ],
      ar: [
        'عجينة فيلو',
        'فستق',
        'مكسرات',
        'عسل',
        'حلاوة طحينية فاخرة',
        'عجينة مورقة',
      ],
    },
  },
]
