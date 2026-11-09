/* iana's bistro — 9–13 noiembrie 2026.
   Datele provin din Meniu saptamana 09-13.11.docx.
   Vineri: meniu neprecizat. La patiserie: doar Pain au Chocolat, 12 RON.
   Alergenii sunt identificati pe baza ingredientelor declarate; verificati
   etichetele furnizorilor si retetele complete inainte de publicare. */
window.IANA_MENU = {
  "title": "iana's bistro",
  "week": "9–13 noiembrie 2026",
  "days": [
    {
      "key": "luni",
      "label": "Luni",
      "date": "9 nov",
      "menus": [
        {
          "label": "Meniul zilei",
          "price": 45,
          "dishes": [
            {
              "name": "Supă norvegiană cu somon și creveți",
              "quantity": "300 ml",
              "ingredients": "Ceapă, usturoi, ceapă verde, file de somon, creveți, mărar, morcov, smântână de gătit.",
              "allergens": [
                2,
                4,
                7
              ]
            },
            {
              "name": "Plăcintă cu brânză și spanac",
              "quantity": "300 g",
              "ingredients": "Făină, ou, brânză feta, spanac, smântână.",
              "allergens": [
                1,
                3,
                7
              ],
              "check": "Tipul de făină și compoziția ingredientelor trebuie confirmate la bucătărie."
            }
          ]
        }
      ],
      "dessert": {
        "name": "Cheesecake San Sebastian",
        "quantity": "120 g",
        "ingredients": "Cremă de brânză, smântână, zahăr, ou, amidon de porumb.",
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
      "date": "10 nov",
      "menus": [
        {
          "label": "Meniul zilei",
          "price": 45,
          "dishes": [
            {
              "name": "Supă cremă de zucchini cu crutoane",
              "quantity": "300 ml",
              "ingredients": "Zucchini, ceapă, morcov, cartof, smântână vegetală. Crutoane (compoziție neprecizată).",
              "allergens": [
                1
              ],
              "check": "Crutoanele sunt menționate în denumire, dar nu au ingrediente în document. Verificați compoziția crutoanelor și a smântânii vegetale pentru alergeni."
            },
            {
              "name": "Pui teriyaki cu orez",
              "quantity": "250 g",
              "ingredients": "Pulpe de pui, ghimbir, usturoi, sos de soia, mirin, ceapă, ceapă verde, susan, ulei de susan, orez.",
              "allergens": [
                6,
                11
              ],
              "check": "Orezul apare în denumire, nu în lista furnizată de ingrediente. Sosul de soia poate conține și grâu (gluten); verificați eticheta."
            }
          ]
        }
      ],
      "dessert": {
        "name": "Cinnamon rolls",
        "quantity": "150 g",
        "ingredients": "Făină, ou, zahăr, cremă de brânză, scorțișoară, unt, lapte, drojdie.",
        "allergens": [
          1,
          3,
          7
        ],
        "included": true
      }
    },
    {
      "key": "miercuri",
      "label": "Miercuri",
      "date": "11 nov",
      "menus": [
        {
          "label": "Meniul zilei",
          "price": 45,
          "dishes": [
            {
              "name": "Supă cremă de linte",
              "quantity": "300 ml",
              "ingredients": "Linte, ceapă, țelină, morcov, cartof, smântână vegetală de gătit, roșii, ardei, ulei de măsline.",
              "allergens": [
                9
              ],
              "check": "Verificați compoziția smântânii vegetale pentru eventuali alergeni suplimentari."
            },
            {
              "name": "Falafel cu hummus și salată Tabbouleh",
              "quantity": "250 g",
              "ingredients": "Falafel (compoziție detaliată neprecizată), năut, cușcuș, ceapă, usturoi, pătrunjel, ulei de măsline, pastă de susan.",
              "allergens": [
                1,
                11
              ],
              "check": "Rețeta de falafel nu este detaliată în document. Cușcușul conține de regulă grâu; verificați produsul."
            }
          ]
        }
      ],
      "dessert": {
        "name": "Dovleac copt cu nucă, scorțișoară și miere",
        "quantity": "120 g",
        "ingredients": "Dovleac, nucă, scorțișoară, miere.",
        "allergens": [
          8
        ],
        "included": true
      }
    },
    {
      "key": "joi",
      "label": "Joi",
      "date": "12 nov",
      "menus": [
        {
          "label": "Meniul zilei",
          "price": 45,
          "dishes": [
            {
              "name": "Supă cremă de legume",
              "quantity": "300 ml",
              "ingredients": "Cartof, usturoi, țelină, ceapă, praz, lapte, ardei, ulei de măsline.",
              "allergens": [
                7,
                9
              ]
            },
            {
              "name": "Orzo cu pui și spanac",
              "quantity": "250 g",
              "ingredients": "Făină, ou, sare, piept de pui, spanac, rozmarin.",
              "allergens": [
                1,
                3
              ],
              "check": "Compoziția orzo este preluată din document: făină, ou, sare. Confirmați ingredientele pastei folosite."
            }
          ]
        }
      ],
      "dessert": {
        "name": "Albă ca Zăpada",
        "quantity": "150 g",
        "ingredients": "Făină, lapte, amidon, lămâie, zahăr, ou, ulei vegetal.",
        "allergens": [
          1,
          3,
          7
        ],
        "included": true
      }
    },
    {
      "key": "vineri",
      "label": "Vineri",
      "date": "13 nov",
      "menus": [],
      "pending": "Meniul de vineri este în pregătire. Revenim cu detaliile în curând."
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
      "name": "Pain au Chocolat",
      "price": 12,
      "category": "Produse de patiserie"
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
