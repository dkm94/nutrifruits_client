const data = [
  {
    "genus": "Malus",
    "name": "Apple",
    "id": 6,
    "family": "Rosaceae",
    "order": "Rosales",
    "nutritions": {
      "carbohydrates": 11.4,
      "protein": 0.3,
      "fat": 0.4,
      "calories": 52,
      "sugar": 10.3
    },
    "img": "apple.png"
  },
  {
    "genus": "Musa",
    "name": "Banana",
    "id": 1,
    "family": "Musaceae",
    "order": "Zingiberales",
    "img": "bananes.png",
    "nutritions": {
      "carbohydrates": 22,
      "protein": 1,
      "fat": 0.2,
      "calories": 96,
      "sugar": 17.2
    }
  },
  {
    "genus": "Fragaria",
    "name": "Blueberry",
    "id": 52,
    "family": "Rosaceae",
    "order": "Rosales",
    "img": "blueberry.png",

    "nutritions": {
      "carbohydrates": 5.5,
      "protein": 0,
      "fat": 0.4,
      "calories": 29,
      "sugar": 5.4
    }
  },
  {
    "genus": "Prunus",
    "name": "Cherry",
    "id": 9,
    "family": "Rosaceae",
    "order": "None",
    "img": "cherry.png",

    "nutritions": {
      "carbohydrates": 12,
      "protein": 1,
      "fat": 0.3,
      "calories": 50,
      "sugar": 8
    }
  },
  {
    "genus": "Citrus",
    "name": "Lemon",
    "id": 26,
    "family": "Rutaceae",
    "order": "Sapindales",
    "img": "lemon.png",

    "nutritions": {
      "carbohydrates": 9,
      "protein": 1.1,
      "fat": 0.3,
      "calories": 29,
      "sugar": 2.5
    }
  },
  {
    "genus": "Mangifera",
    "name": "Mango",
    "id": 27,
    "family": "Anacardiaceae",
    "order": "Sapindales",
    "img": "mango.png",

    "nutritions": {
      "carbohydrates": 15,
      "protein": 0.82,
      "fat": 0.38,
      "calories": 60,
      "sugar": 13.7
    }
  },
  {
    "genus": "Citrus",
    "name": "Orange",
    "id": 2,
    "family": "Rutaceae",
    "order": "Sapindales",
    "img": "orange.png",

    "nutritions": {
      "carbohydrates": 8.3,
      "protein": 1,
      "fat": 0.2,
      "calories": 43,
      "sugar": 8.2
    }
  },
  {
    "genus": "Pyrus",
    "name": "Pear",
    "id": 4,
    "family": "Rosaceae",
    "order": "Rosales",
    "img": "pear.png",

    "nutritions": {
      "carbohydrates": 15,
      "protein": 0.4,
      "fat": 0.1,
      "calories": 57,
      "sugar": 10
    }
  },
  {
    "genus": "Ananas",
    "name": "Pineapple",
    "id": 10,
    "family": "Bromeliaceae",
    "order": "Poales",
    "img": "pineapple.png",

    "nutritions": {
      "carbohydrates": 13.12,
      "protein": 0.54,
      "fat": 0.12,
      "calories": 50,
      "sugar": 9.85
    }
  },
  {
    "genus": "Rubus",
    "name": "Raspberry",
    "id": 23,
    "family": "Rosaceae",
    "order": "Rosales",
    "img": "raspberry.png",

    "nutritions": {
      "carbohydrates": 12,
      "protein": 1.2,
      "fat": 0.7,
      "calories": 53,
      "sugar": 4.4
    }
  },
  {
    "genus": "Fragaria",
    "name": "Strawberry",
    "id": 3,
    "family": "Rosaceae",
    "order": "Rosales",
    "img": "strawberry.png",

    "nutritions": {
      "carbohydrates": 5.5,
      "protein": 0.8,
      "fat": 0.4,
      "calories": 29,
      "sugar": 5.4
    }
  },
  {
    "genus": "Solanum",
    "name": "Tomato",
    "id": 5,
    "family": "Solanaceae",
    "order": "Solanales",
    "img": "tomato.png",

    "nutritions": {
      "carbohydrates": 3.9,
      "protein": 0.9,
      "fat": 0.2,
      "calories": 74,
      "sugar": 2.6
    }
  },
  {
    "genus": "Citrullus",
    "name": "Watermelon",
    "id": 25,
    "family": "Cucurbitaceae",
    "order": "Cucurbitales",
    "img": "watermelon.png",

    "nutritions": {
      "carbohydrates": 8,
      "protein": 0.6,
      "fat": 0.2,
      "calories": 30,
      "sugar": 6
    }
  },
  {
    "name": "Apricot",
    "id": 30,
    "img": "apricot.png",
    "nutritions": {
      "carbohydrates": 9.01,
      "protein": 1.4,
      "fat": 0.4,
      "calories": 45,
      "sugar": 9
    }
  },
  {
    "name": "Avocado",
    "id": 31,
    "img": "avocado.png",
    "nutritions": {
      "carbohydrates": 3.13,
      "protein": 1.8,
      "fat": 15,
      "calories": 205,
      "sugar": 0.7
    }
  },
  {
    "name": "Blackberries",
    "id": 32,
    "img": "blackberry.png",
    "nutritions": {
      "carbohydrates": 10,
      "protein": 1.8,
      "fat": 0.5,
      "calories": 47,
      "sugar": 4.9
    }
  },
  {
    "name": "Clementine",
    "id": 33,
    "img": "clementine.png",
    "nutritions": {
      "carbohydrates": 12,
      "protein": 0.81,
      "fat": 0.2,
      "calories": 47,
      "sugar": 9.19
    }
  },
  {
    "name": "Cranberry",
    "id": 34,
    "img": "cranberry.png",
    "nutritions": {
      "carbohydrates": 82,
      "protein": 0.4,
      "fat": 0.13,
      "calories": 46,
      "sugar": 8.78
    }
  },
  {
    "name": "Date",
    "id": 35,
    "img": "date.png",
    "nutritions": {
      "carbohydrates": 75,
      "protein": 2.5,
      "fat": 0.4,
      "calories": 282,
      "sugar": 66.47
    }
  },
  {
    "name": "Fig",
    "id": 36,
    "img": "fig.png",
    "nutritions": {
      "carbohydrates": 19,
      "protein": 0.8,
      "fat": 0.3,
      "calories": 74,
      "sugar": 16
    }
  },
  {
    "name": "Grapes",
    "id": 37,
    "img": "grape.png",
    "nutritions": {
      "carbohydrates": 17,
      "protein": 0.6,
      "fat": 0.4,
      "calories": 69,
      "sugar": 16
    }
  },
  {
    "name": "Kiwi",
    "id": 38,
    "img": "kiwi.png",
    "nutritions": {
      "carbohydrates": 15,
      "protein": 1.1,
      "fat": 0.5,
      "calories": 61,
      "sugar": 9
    }
  },
  {
    "name": "Lime",
    "id": 40,
    "img": "lime.png",
    "nutritions": {
      "carbohydrates": 11,
      "protein": 0.7,
      "fat": 0.2,
      "calories": 30,
      "sugar": 1.7
    }
  },
  {
    "name": "Lychee",
    "id": 41,
    "img": "litchi.png",
    "nutritions": {
      "carbohydrates": 17,
      "protein": 0.8,
      "fat": 0.4,
      "calories": 66,
      "sugar": 15 
    }
  },
  {
    "name": "Olive",
    "id": 42,
    "img": "olive.png",
    "nutritions": {
      "carbohydrates": 6.3,
      "protein": 0.8,
      "fat": 11,
      "calories": 115,
      "sugar": 0.8
    }
  },
  {
    "name": "Papaya",
    "id": 43,
    "img": "papaya.png",
    "nutritions": {
      "carbohydrates": 11,
      "protein": 0.5,
      "fat": 0.3,
      "calories": 43,
      "sugar": 7.8
    }
  },
  {
    "name": "Peaches",
    "id": 44,
    "img": "peaches.png",
    "nutritions": {
      "carbohydrates": 9.5,
      "protein": 0.9,
      "fat": 0.3,
      "calories": 39,
      "sugar": 8.4
    }
  }
]
export default (data)