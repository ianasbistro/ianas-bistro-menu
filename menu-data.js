/* iana's bistro — Meniul 23–27 noiembrie 2026.
   Sursa: Meniu saptamana 23-27.11.docx; confirmati alergenii ingredientelor compuse. */
window.IANA_MENU = {
  "title": "iana's bistro",
  "week": "23–27 noiembrie 2026",
  "days": [
    {
      "key": "luni",
      "label": "Luni",
      "date": "23 nov",
      "menus": [
        {
          "label": "Meniul zilei",
          "price": 45,
          "dishes": [
            {
              "name": "Supă cremă de roșii coapte și crutoane",
              "quantity": "300 ml",
              "ingredients": "Roșii, ceapă, țelină, cartof, smântână vegetală, busuioc, orez; crutoane (compoziție neprecizată în document).",
              "allergens": [
                1,
                9
              ],
              "note": "Crutoanele sunt menționate în denumire, dar nu au compoziția precizată. Confirmați alergenii acestora."
            },
            {
              "name": "Orzo cu pui și spanac",
              "quantity": "250 g",
              "ingredients": "Făină, ou, sare, piept de pui, spanac, rozmarin.",
              "allergens": [
                1,
                3
              ]
            }
          ]
        }
      ],
      "dessert": {
        "name": "Pavlova",
        "quantity": "150 g",
        "ingredients": "Albuș de ou, zahăr, amidon, zeamă de lămâie, smântână pentru frișcă, mascarpone, lapte condensat, afine, căpșune, coacăze.",
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
      "date": "24 nov",
      "menus": [
        {
          "label": "Meniul zilei",
          "price": 45,
          "dishes": [
            {
              "name": "Supă cremă de legume",
              "quantity": "300 ml",
              "ingredients": "Cartof, usturoi, țelină, ceapă, dovlecei, praz, lapte, ardei, ulei de măsline.",
              "allergens": [
                7,
                9
              ]
            },
            {
              "name": "Cod la cuptor cu sos de lămâie și cartofi",
              "quantity": "250 g",
              "ingredients": "File de cod, lămâie, ulei de măsline, cartofi.",
              "allergens": [
                4
              ]
            }
          ]
        }
      ],
      "dessert": {
        "name": "Cremșnit",
        "quantity": "150 g",
        "ingredients": "Albuș de ou, zahăr, amidon, zeamă de lămâie, smântână pentru frișcă, mascarpone, făină.",
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
      "date": "25 nov",
      "menus": [
        {
          "label": "Meniul zilei",
          "price": 45,
          "dishes": [
            {
              "name": "Supă cremă de conopidă",
              "quantity": "300 ml",
              "ingredients": "Conopidă, ceapă, țelină, morcov, cartof, smântână vegetală de gătit, roșii, ardei, ulei de măsline.",
              "allergens": [
                9
              ],
              "note": "Verificați compoziția smântânii vegetale."
            },
            {
              "name": "Salată caldă de legume cu pui",
              "quantity": "250 g",
              "ingredients": "Vinete, dovlecei, roșii, ardei, ulei de măsline, piept de pui.",
              "allergens": []
            }
          ],
          "alternative": {
            "name": "Salată caldă de legume cu tofu",
            "quantity": "250 g",
            "ingredients": "Vinete, dovlecei, roșii, ardei, ulei de măsline, tofu.",
            "allergens": [
              6
            ]
          }
        }
      ],
      "dessert": {
        "name": "Mousse de ciocolată cu avocado",
        "quantity": "120 g",
        "ingredients": "Lapte, ciocolată, avocado.",
        "allergens": [
          7
        ],
        "note": "Verificați eticheta ciocolatei pentru alți alergeni și posibile urme.",
        "included": true
      }
    },
    {
      "key": "joi",
      "label": "Joi",
      "date": "26 nov",
      "menus": [
        {
          "label": "Meniul zilei",
          "price": 45,
          "dishes": [
            {
              "name": "Supă cremă de dovleac copt",
              "quantity": "300 ml",
              "ingredients": "Dovleac, cartof, usturoi, morcov, țelină, ceapă, praz, ardei, smântână de gătit, ulei de măsline.",
              "allergens": [
                7,
                9
              ]
            },
            {
              "name": "Pui cu sos cheddar",
              "quantity": "250 g",
              "ingredients": "Piept de pui, ceapă, usturoi, rozmarin, cheddar, mozzarella, cimbru, făină, cartof.",
              "allergens": [
                1,
                7
              ]
            }
          ]
        }
      ],
      "dessert": {
        "name": "Ruladă cu mere",
        "quantity": "150 g",
        "allergens": [
          1,
          3,
          7
        ],
        "included": true,
        "ingredients": "Mere, făină, lapte, ou, pastă de vanilie, zahăr."
      }
    },
    {
      "key": "vineri",
      "label": "Vineri",
      "date": "27 nov",
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
