/* iana's bistro — 16–20 noiembrie 2026.
   Sursa: Meniu saptamana 16-20.11.docx. Alergeni orientativi; verificati etichetele. */
window.IANA_MENU = {
  "title": "iana's bistro",
  "week": "16–20 noiembrie 2026",
  "days": [
    {
      "key": "luni",
      "label": "Luni",
      "date": "16 nov",
      "menus": [
        {
          "label": "Meniul zilei",
          "price": 45,
          "dishes": [
            {
              "name": "Supă cremă de ciuperci",
              "quantity": "300 ml",
              "ingredients": "Ceapă, usturoi, cartof, ciuperci, ulei de măsline.",
              "allergens": []
            },
            {
              "name": "Quesadilla cu pui și cartofi Crispers",
              "quantity": "300 g",
              "ingredients": "Făină, piept de pui, mozzarella, iaurt, paprika, cartofi Crispers (compoziție neprecizată).",
              "allergens": [
                1,
                7
              ]
            }
          ]
        }
      ],
      "dessert": {
        "name": "Brioșă cu ciocolată",
        "quantity": "120 g",
        "ingredients": "Făină, smântână, zahăr, ouă, praf de copt, pastă de vanilie, cacao.",
        "allergens": [
          1,
          3,
          7
        ],
        "included": true
      }
    },
    {
      "key": "marti",
      "label": "Marți",
      "date": "17 nov",
      "menus": [
        {
          "label": "Meniul zilei",
          "price": 45,
          "dishes": [
            {
              "name": "Supă cremă de roșii cu busuioc și crutoane",
              "quantity": "300 ml",
              "ingredients": "Roșii, ceapă, țelină, cartof, smântână vegetală, busuioc, orez, crutoane (compoziție neprecizată).",
              "allergens": [
                1,
                9
              ]
            },
            {
              "name": "Lasagna",
              "quantity": "250 g",
              "ingredients": "Făină, ou, sare, carne de vită, morcov, ceapă, usturoi, sos de roșii, parmezan, ulei de măsline, rozmarin, busuioc, cimbru.",
              "allergens": [
                1,
                3,
                7
              ]
            }
          ]
        }
      ],
      "dessert": {
        "name": "Chec cu portocale",
        "quantity": "150 g",
        "ingredients": "Făină, ou, zahăr, sirop de portocale, scorțișoară, unt, lapte, drojdie.",
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
      "date": "18 nov",
      "menus": [
        {
          "label": "Meniul zilei",
          "price": 39,
          "dishes": [
            {
              "name": "Supă cremă de linte",
              "quantity": "300 ml",
              "ingredients": "Linte, ceapă, țelină, morcov, cartof, smântână vegetală de gătit, roșii, ardei, ulei de măsline.",
              "allergens": [
                9
              ]
            },
            {
              "name": "Steak de conopidă cu hummus și sos chimichurri",
              "quantity": "250 g",
              "ingredients": "Conopidă, ulei de măsline, boia, usturoi, pătrunjel, pastă de susan, hummus (compoziție completă neprecizată).",
              "allergens": [
                11
              ]
            }
          ]
        }
      ],
      "dessert": {
        "name": "Mousse de cocos cu ciocolată neagră",
        "quantity": "120 g",
        "ingredients": "Lapte de cocos, cacao, ciocolată neagră.",
        "allergens": [],
        "included": true
      }
    },
    {
      "key": "joi",
      "label": "Joi",
      "date": "19 nov",
      "menus": [
        {
          "label": "Meniul zilei",
          "price": 45,
          "dishes": [
            {
              "name": "Supă de ceapă",
              "quantity": "300 ml",
              "ingredients": "Ceapă, morcov, cartof, smântână vegetală, ulei de măsline.",
              "allergens": []
            },
            {
              "name": "Plăcintă britanică cu carne și cartofi",
              "quantity": "250 g",
              "ingredients": "Ceapă, usturoi, rozmarin, cimbru, făină, carne de vită, cartof.",
              "allergens": [
                1
              ]
            }
          ]
        }
      ],
      "dessert": {
        "name": "Bomboane tiramisu",
        "quantity": "120 g",
        "included": true,
        "ingredients": "Mascarpone, frișcă lichidă, gălbenuș de ou pasteurizat, zahăr, cacao, biscuiți amaretti, cafea decofeinizată.",
        "allergens": [
          1,
          3,
          7
        ]
      }
    },
    {
      "key": "vineri",
      "label": "Vineri",
      "date": "20 nov",
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
