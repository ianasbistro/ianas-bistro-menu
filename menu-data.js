/* IANA'S BISTRO — Meniul 19-23 octombrie 2026.
   Compozitia preparatelor si informatiile despre posibile urme provin din datele
   furnizate de bucatarie. Revizuiti la orice modificare de reteta sau furnizor. */
window.IANA_MENU = {
  title: "iana's bistro",
  week: "19–23 octombrie 2026",
  days: [
    { key: "luni", label: "Luni", date: "19 oct", menus: [
      { label: "Meniu 1", price: 45, dishes: [
        { name: "Supa clara de vita cu taitei de casa", quantity: "300 ml", ingredients: "Supa de oase de vita, telina, morcov, patrunjel, faina, ou.", allergens: [1,3,9] },
        { name: "Pui Gorgonzola cu cartofi Crispers", quantity: "300 g", ingredients: "Piept de pui, ulei de masline, ceapa, usturoi, parmesan, smantana de gatit, gorgonzola, cimbru verde; cartofi Crispers: cartofi.", allergens: [7] }
      ]},
      { label: "Meniu 2", price: 40, vegetarian: true, dishes: [
        { name: "Supa crema de rosii coapte cu crutoane", quantity: "300 ml", ingredients: "Rosii, ceapa, usturoi, sare, piper, busuioc, ardei, smantana de gatit, ulei de masline, paine din grau, unt, cimbru, usturoi granulat.", allergens: [1,7] },
        { name: "Bol cu orez", quantity: "250 g", ingredients: "Orez, avocado, castraveti, edamame, morcov, susan, sos de soia (apa, soia, grau, sare), nori.", allergens: [1,6,11] }
      ]}
    ], dessert: { name: "Gomboti cu prune", quantity: "150 g", included: true, ingredients: "Cartof, ou, faina, prune, scortisoara, pesmet, unt, zahar.", allergens: [1,3,7] }},
    { key: "marti", label: "Marti", date: "20 oct", menus: [
      { label: "Meniu 1", price: 45, dishes: [
        { name: "Ciorba de legume cu zdrente de ou", quantity: "300 ml", ingredients: "Ceapa, morcov, telina, ardei, cartof, ou, patrunjel, ulei de floarea-soarelui.", allergens: [3,9] },
        { name: "Chiftele de porc si vita cu sos marinara", quantity: "250 g", ingredients: "Chiftele: carne de porc, carne de vita, apa, pesmet din faina de grau, ceapa. Sos marinara: sos de rosii, busuioc, ceapa, usturoi.", allergens: [1] }
      ]},
      { label: "Meniu 2", price: 40, vegetarian: true, dishes: [
        { name: "Ciorba de legume cu zdrente de ou", quantity: "300 ml", ingredients: "Ceapa, morcov, telina, ardei, cartof, ou, patrunjel, ulei de floarea-soarelui.", allergens: [3,9] },
        { name: "Chiftele de legume cu sos marinara", quantity: "250 g", ingredients: "Chiftele: naut, mazare, morcovi, ardei gras, porumb, varza kale; fara ou, faina sau pesmet. Sos marinara: sos de rosii, busuioc, ceapa, usturoi.", allergens: [], allergenStatus: "none", note: "Fara gluten, conform retetei declarate." }
      ]}
    ], dessert: { name: "Orez cu lapte si scortisoara", quantity: "200 g", included: true, ingredients: "Orez, lapte, vanilie, unt, scortisoara, zahar.", allergens: [7] }},
    { key: "miercuri", label: "Miercuri", date: "21 oct", menus: [
      { label: "Meniu 1", price: 45, dishes: [
        { name: "Ciorba radauteana", quantity: "300 ml", ingredients: "Telina, ardei, ceapa, ou, smantana, usturoi, piept de pui.", allergens: [3,7,9] },
        { name: "Mamaliguta cu branza si smantana", quantity: "250 g", ingredients: "Malai, branza telemea, smantana.", allergens: [7] }
      ]},
      { label: "Meniu 2", price: 40, vegetarian: true, dishes: [
        { name: "Supa crema de legume cu crutoane", quantity: "300 ml", ingredients: "Ceapa, morcov, telina, ardei, cartof, ulei de masline, smantana vegetala (ulei de floarea-soarelui, amidon, guma din seminte de carruba, metilceluloza, emulgator E435); crutoane: paine din grau, unt, cimbru, usturoi granulat.", allergens: [1,7,9] },
        { name: "Mamaliguta cu branza si smantana", quantity: "250 g", ingredients: "Malai, branza telemea, smantana.", allergens: [7] }
      ]}
    ], dessert: { name: "Salam de biscuiti", quantity: "120 g", included: true, ingredients: "Biscuiti (faina alba de grau, zahar, ulei vegetal de palmier, sirop de glucoza-fructoza, amidon, lapte praf, sare, lecitina de soia), esenta de rom, cacao, unt, ciocolata, lapte, rahat, zahar, fulgi de cocos. Ciocolata: zahar, masa de cacao, unt de cacao, pudra de cacao, grasime vegetala (palmier, shea), lecitina din soia.", allergens: [1,6,7], traces: "Biscuitii pot contine urme de fructe cu coaja lemnoasa. Ciocolata poate contine urme de arahide, fructe cu coaja lemnoasa, lapte, gluten si oua.", check: "Verificati si compozitia rahatului utilizat." }},
    { key: "joi", label: "Joi", date: "22 oct", menus: [
      { label: "Meniu 1", price: 45, dishes: [
        { name: "Supa crema de linte", quantity: "300 ml", ingredients: "Linte, ceapa, morcov, cartof, smantana vegetala (ulei de floarea-soarelui, amidon, guma din seminte de carruba, metilceluloza, emulgator E435).", allergens: [], allergenStatus: "none" },
        { name: "Butter Chicken cu orez", quantity: "250 g", ingredients: "Piept de pui, orez, iaurt, usturoi, garam masala (piper negru, cardamom, ghimbir, ienibahar, nucsoara, turmeric, cuisoare, ardei iute chili, scortisoara, frunze de dafin, chimion, oregano, usturoi granulat, sare), usturoi granulat, smantana, sos de rosii, caju.", allergens: [7,8], traces: "Amestecul garam masala poate contine urme de telina, gluten, oua, lapte si mustar." }
      ]},
      { label: "Meniu 2", price: 40, vegetarian: true, dishes: [
        { name: "Supa crema de linte", quantity: "300 ml", ingredients: "Linte, ceapa, morcov, cartof, smantana vegetala (ulei de floarea-soarelui, amidon, guma din seminte de carruba, metilceluloza, emulgator E435).", allergens: [], allergenStatus: "none" },
        { name: "Bol vegetarian cu orez", quantity: "250 g", ingredients: "Orez, avocado, castraveti, edamame, morcov, susan, sos de soia (apa, soia, grau, sare), nori.", allergens: [1,6,11] }
      ]}
    ], dessert: { name: "Tarta cu lime", quantity: "150 g", included: true, ingredients: "Biscuiti (faina alba de grau, zahar, ulei vegetal de palmier, sirop de glucoza-fructoza, amidon, lapte praf, sare, lecitina de soia), cacao, lime, lamaie, smantana pentru frisca, lapte condensat, zahar.", allergens: [1,6,7], traces: "Biscuitii pot contine urme de fructe cu coaja lemnoasa." }},
    { key: "vineri", label: "Vineri", date: "23 oct", menus: [
      { label: "Meniu 1", price: 45, dishes: [
        { name: "Supa crema de broccoli cu cheddar", quantity: "300 ml", ingredients: "Broccoli, cartof, morcov, ceapa, branza cheddar, smantana.", allergens: [7] },
        { name: "Sandwich of the Day", quantity: "300 g", ingredients: "Focaccia (faina alba de grau, apa, drojdie proaspata, ulei de masline extravirgin, zahar, sare, rozmarin), ulei de masline, sos pesto (ulei vegetal de floarea-soarelui, caju, busuioc, branza Grana Padano, lapte, ou, branza Pecorino Romano, ulei de masline, seminte de pin), stracciatella, prosciutto cotto (sunca de porc), rosii uscate (rosii, ulei de masline, otet din vin alb, patrunjel, chili, piper), mozzarella.", allergens: [1,3,7,8], traces: "Sosul pesto poate contine urme de alte nuci, alune sau soia. Producatorul declara ca pesto nu contine gluten.", check: "Glutenul (1) provine din focaccia, nu din pesto. Otetul din vin alb poate necesita verificarea continutului de sulfiti pe eticheta. Confirmati la furnizor ce inseamna «alune» pe eticheta pesto." }
      ]}
    ], dessert: { name: "Briosa cu ciocolata", quantity: "120 g", included: true, ingredients: "Zahar, faina, ulei de masline, unt, oua, ciocolata (zahar, masa de cacao, unt de cacao, pudra de cacao, grasime vegetala din palmier si shea, lecitina din soia).", allergens: [1,3,6,7], traces: "Ciocolata poate contine urme de arahide, fructe cu coaja lemnoasa, lapte, gluten si oua.", check: "Tipul de faina nu este precizat; soia (6) este prezenta prin lecitina din ciocolata." }}
  ],
  drinks: [
    { category: "Cafea", items: [
      { name: "Espresso", price: 12 },
      { name: "Espresso dublu", price: 14 },
      { name: "Cappuccino", price: 16, allergens: [7], check: "Alergenul 7 presupune preparare cu lapte; confirmati reteta servita." },
      { name: "Long Black", price: 16 }
    ]},
    { category: "Ciocolata calda si ceai", items: [
      { name: "Ciocolata calda Classic", price: 18, ingredients: "Lapte, zahar, amidon, unt de cacao, praf de cacao.", allergens: [7], note: "Fara gluten, conform retetei declarate." },
      { name: "Ciocolata calda alba", price: 18, ingredients: "Lapte, zahar, lapte praf, amidon, unt de cacao, alune de padure (hazelnuts).", allergens: [7,8], note: "Fara gluten, conform retetei declarate." },
      { name: "Ceai", price: 14, note: "Blueberry Merlot · Cherry Blossom · Earl Grey · Mango Peach · Raspberry Nectar" }
    ]},
    { category: "Limonade", items: [
      { name: "Limonada clasica", price: 18 },
      { name: "Limonada cu capsune", price: 22 }
    ]},
    { category: "Racoritoare si apa", items: [
      { name: "Pepsi", price: 13 }, { name: "Pepsi Zero", price: 13 }, { name: "7UP", price: 13 },
      { name: "Lipton Ice Tea", price: 13 }, { name: "Evervess Tonic", price: 14 },
      { name: "Aqua Carpatica plata", price: 11 }, { name: "Aqua Carpatica carbogazoasa", price: 11 }
    ]}
  ],
  pastry: [
    { name: "Croissant cu unt", price: 12, ingredients: "Faina, apa, unt.", allergens: [1,7], check: "Tipul de faina nu este precizat; alergenul 1 este dedus din utilizarea obisnuita a fainii de grau." },
    { name: "Pain au Chocolat", price: 14, ingredients: "Faina, apa, unt, ciocolata (zahar, masa de cacao, unt de cacao, pudra de cacao, grasime vegetala din palmier si shea, lecitina din soia).", allergens: [1,6,7], traces: "Ciocolata poate contine urme de arahide, fructe cu coaja lemnoasa, lapte, gluten si oua.", check: "Tipul de faina nu este precizat; soia (6) este ingredient declarat al ciocolatei." }
  ],
  allergenLegend: [
    "Cereale care contin gluten", "Crustacee", "Oua", "Peste", "Arahide", "Soia", "Lapte si produse derivate", "Fructe cu coaja lemnoasa", "Telina", "Mustar", "Seminte de susan", "Dioxid de sulf si sulfiti", "Lupin", "Moluste"
  ]
};
