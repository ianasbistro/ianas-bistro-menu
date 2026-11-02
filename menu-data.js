/* iana's bistro — Meniul 2–6 noiembrie 2026.
   Bazat pe documentul furnizat: vineri încă nu este stabilit; includerea desertului de miercuri a fost confirmată.
   Alergenii sunt deduși din ingrediente și trebuie confirmați cu etichetele folosite în bucătărie. */
window.IANA_MENU = {
  "title": "iana's bistro",
  "week": "2–6 noiembrie 2026",
  "days": [
    {
      "key": "luni",
      "label": "Luni",
      "date": "2 nov",
      "menus": [
        {
          "label": "Meniu 1",
          "price": 45,
          "dishes": [
            {
              "name": "Supă miso cu legume, ciuperci și ghimbir",
              "quantity": "300 ml",
              "ingredients": "Ceapă, usturoi, ghimbir, ciuperci, ceapă verde, pastă miso, sos de soia, ulei de susan, morcov, ardei.",
              "allergens": [
                1,
                6,
                11
              ],
              "check": "Alergenii 1 (grâu) și 6 (soia) provin din sosul de soia descris anterior. Verificați etichetele pastei miso și sosului de soia pentru compoziția exactă."
            },
            {
              "name": "Pui teriyaki cu orez (preparat în bucătăria noastră)",
              "quantity": "300 g",
              "ingredients": "Pulpe de pui, sos de soia, miere, zahăr brun, amidon, usturoi, ceapă, ghimbir, ulei de susan, orez, ceapă verde.",
              "allergens": [
                1,
                6,
                11
              ],
              "check": "Alergenii 1 și 6 depind de sosul de soia folosit; verificați eticheta."
            }
          ]
        }
      ],
      "dessert": {
        "name": "Pavlova",
        "quantity": "120 g",
        "ingredients": "Albuș de ou, zahăr, lămâie, smântână pentru frișcă, lapte condensat, mascarpone, afine.",
        "allergens": [
          3,
          7
        ],
        "included": true
      }
    },
    {
      "key": "marti",
      "label": "Marți",
      "date": "3 nov",
      "menus": [
        {
          "label": "Meniu 1",
          "price": 45,
          "dishes": [
            {
              "name": "Supă cremă de linte",
              "quantity": "300 ml",
              "ingredients": "Linte, ceapă, morcov, cartof, smântână vegetală.",
              "allergens": [],
              "check": "Verificați eticheta smântânii vegetale pentru alergeni suplimentari; lista ingredientelor nu indică explicit unul dintre cei 14 alergeni."
            },
            {
              "name": "Lasagna",
              "quantity": "250 g",
              "ingredients": "Făină, ou, sare, carne de vită, morcov, ceapă, usturoi, sos de roșii, parmezan, ulei de măsline, rozmarin, busuioc, cimbru.",
              "allergens": [
                1,
                3,
                7
              ],
              "check": "Alergenul 1 presupune făină de grâu. Verificați compoziția sosului de roșii, dacă este un produs cumpărat."
            }
          ]
        }
      ],
      "dessert": {
        "name": "iana's Tiramisu",
        "quantity": "150 g",
        "ingredients": "Mascarpone, frișcă lichidă, gălbenuș de ou pasteurizat, zahăr, cacao, biscuiți amaretti (zahăr, făină de grâu, sâmburi de caise 13%, albuș de ou, proteine din lapte, agenți de creștere E500 și E503, arome), cafea decofeinizată.",
        "allergens": [
          1,
          3,
          7
        ],
        "note": "Compoziția biscuiților amaretti a fost comunicată anterior.",
        "included": true
      }
    },
    {
      "key": "miercuri",
      "label": "Miercuri",
      "date": "4 nov",
      "menus": [
        {
          "label": "Meniu 1",
          "price": 45,
          "dishes": [
            {
              "name": "Supă cremă de dovleac copt",
              "quantity": "300 ml",
              "ingredients": "Dovleac, ceapă, țelină, morcov, cartof, smântână vegetală de gătit, roșii, ardei, ulei de măsline.",
              "allergens": [
                9
              ],
              "check": "Verificați alergenii de pe eticheta smântânii vegetale de gătit."
            },
            {
              "name": "Tocăniță French style cu vită și legume",
              "quantity": "250 g",
              "ingredients": "Carne de vită, morcov, ardei, ceapă, usturoi, vin roșu, praz.",
              "allergens": [],
              "check": "Vinul roșu poate conține sulfiți (alergenul 12); verificați eticheta vinului utilizat pentru stabilirea declarației complete."
            }
          ]
        }
      ],
      "dessert": {
        "name": "Cinnamon rolls",
        "quantity": "120 g",
        "ingredients": "Făină, drojdie, lapte, unt, ou, pastă de vanilie, scorțișoară, zahăr brun, cremă de brânză.",
        "allergens": [
          1,
          3,
          7
        ],
        "included": true
      }
    },
    {
      "key": "joi",
      "label": "Joi",
      "date": "5 nov",
      "menus": [
        {
          "label": "Meniu 1",
          "price": 45,
          "dishes": [
            {
              "name": "Supă cremă de cartof dulce și bacon crocant",
              "quantity": "300 ml",
              "ingredients": "Cartof dulce, usturoi, țelină, ceapă, praz, lapte, bacon, ulei de măsline.",
              "allergens": [
                7,
                9
              ],
              "check": "Verificați eticheta baconului pentru eventuali alergeni suplimentari."
            },
            {
              "name": "Rigatoni cu somon și feta",
              "quantity": "250 g",
              "ingredients": "Făină, ou, sare, file de somon, brânză feta, smântână de gătit, rozmarin.",
              "allergens": [
                1,
                3,
                4,
                7
              ],
              "check": "Rețeta din document menționează făină și ou; verificați compoziția pastelor rigatoni utilizate în bucătărie."
            }
          ]
        }
      ],
      "dessert": {
        "name": "Ruladă de dovleac",
        "quantity": "150 g",
        "ingredients": "Dovleac, făină, ou, zahăr, ulei de floarea-soarelui, praf de copt.",
        "allergens": [
          1,
          3
        ],
        "check": "Alergenul 1 presupune făină de grâu; verificați sortimentul utilizat.",
        "included": true
      }
    },
    {
      "key": "vineri",
      "label": "Vineri",
      "date": "6 nov",
      "menus": [],
      "pending": true
    }
  ],
  "drinks": [
    {
      "category": "Cafea",
      "items": [
        {
          "name": "Espresso",
          "price": 12
        },
        {
          "name": "Espresso dublu",
          "price": 14
        },
        {
          "name": "Cappuccino",
          "price": 16,
          "allergens": [
            7
          ],
          "note": "Preparat cu lapte."
        },
        {
          "name": "Long Black",
          "price": 16
        }
      ]
    },
    {
      "category": "Ciocolată caldă și ceai",
      "items": [
        {
          "name": "Ciocolată caldă Classic",
          "price": 18,
          "ingredients": "Lapte, zahăr, amidon, unt de cacao, cacao.",
          "allergens": [
            7
          ],
          "check": "Compoziția exactă a amestecului se verifică la produsul folosit."
        },
        {
          "name": "Ciocolată caldă albă",
          "price": 18,
          "ingredients": "Lapte, zahăr, lapte praf, amidon, unt de cacao, alune de pădure.",
          "allergens": [
            7,
            8
          ],
          "check": "Compoziția exactă a amestecului se verifică la produsul folosit."
        },
        {
          "name": "Ceai",
          "price": 14,
          "note": "Blueberry Merlot · Cherry Blossom · Earl Grey · Mango Peach · Raspberry Nectar"
        }
      ]
    },
    {
      "category": "Limonadă",
      "items": [
        {
          "name": "Limonadă clasică",
          "price": 18
        },
        {
          "name": "Limonadă cu căpșune",
          "price": 22
        }
      ]
    },
    {
      "category": "Băuturi răcoritoare și apă",
      "items": [
        {
          "name": "Pepsi",
          "price": 13
        },
        {
          "name": "Pepsi Zero",
          "price": 13
        },
        {
          "name": "7UP",
          "price": 13
        },
        {
          "name": "Lipton Ice Tea",
          "price": 13
        },
        {
          "name": "Evervess Tonic",
          "price": 14
        },
        {
          "name": "Aqua Carpatica plată",
          "price": 11
        },
        {
          "name": "Aqua Carpatica carbogazoasă",
          "price": 11
        }
      ]
    }
  ],
  "pastry": [
    {
      "name": "Croissant cu unt",
      "price": 12,
      "category": "Produse de patiserie",
      "ingredients": "Făină, apă, unt.",
      "allergens": [
        1,
        7
      ],
      "check": "Verificați compoziția croissantului de la furnizor."
    },
    {
      "name": "Pain au Chocolat",
      "price": 14,
      "category": "Produse de patiserie",
      "ingredients": "Făină, apă, unt, ciocolată (zahăr, masă de cacao, unt de cacao, pudră de cacao, grăsime vegetală din palmier și shea, lecitină din soia).",
      "allergens": [
        1,
        6,
        7
      ],
      "traces": "Ciocolata poate conține urme de arahide, fructe cu coajă lemnoasă, lapte, gluten și ouă."
    },
    {
      "name": "Sandwich Focaccia cu mortadella",
      "price": 32,
      "category": "Sandwich-uri",
      "ingredients": "Focaccia, ulei de măsline, sos pesto, stracciatella, mortadella, roșii uscate, mozzarella. Sos pesto: ulei vegetal de floarea-soarelui, caju, busuioc, brânză Grana Padano, lapte, ou, brânză Pecorino Romano, ulei de măsline, semințe de pin.",
      "allergens": [
        1,
        3,
        7,
        8
      ],
      "check": "Compoziția ingredientelor cumpărate (focaccia, mortadella, stracciatella, roșii uscate) trebuie confirmată din etichete."
    },
    {
      "name": "Sandwich Fresh",
      "price": 18,
      "category": "Sandwich-uri",
      "ingredients": "Croissant cu unt, cremă de brânză, mușchi file, cașcaval, cheddar, salată verde.",
      "allergens": [
        1,
        7
      ],
      "check": "Verificați alergeni suplimentari și compoziția mezelului, croissantului și a cremei de brânză."
    }
  ],
  "allergenLegend": [
    "Cereale care conțin gluten",
    "Crustacee",
    "Ouă",
    "Pește",
    "Arahide",
    "Soia",
    "Lapte și produse derivate",
    "Fructe cu coajă lemnoasă",
    "Țelină",
    "Muștar",
    "Semințe de susan",
    "Dioxid de sulf și sulfiți",
    "Lupin",
    "Moluște"
  ]
};
