export interface Country {
    cityArea: string;
    country: string;
    language: string;
    currency: string;
    description: string;
  }
  
export interface Attraction {
    name: string;
    description: string;
    image: string;
  }

  export interface Attractions {
    description: string;
    attractions: Attraction[]
  }

  export interface Activity {
    name: string;
    description: string;
    image: string;
}


export interface Activities {
    description: string;
    activities: Activity[]
}

export interface Shopping {
  description: string,
  name: string,
  link: string,
  image: string
}

export interface Shoppings {
  description: string;
  shoppings: Shopping[]
}

export interface LanguageTip {
  description: string,
  name: string,
  image: string,
}

export interface LanguageTips {
  description: string;
  languageTips: LanguageTip[]
}

export type Desinations = {
    country: Country,
    mustSeeAttractions: Attractions,
    activities: Activities
    shoppings: Shoppings
    languageTips: LanguageTips

}

export const defaultValues: Desinations = {
    country: {
      cityArea: "Kamnik",
      country: "austria",
      language: "Danish",
      currency: "CHF",
      description: 'big cuntry'
    },
    mustSeeAttractions: {
      description: 'tukaj je veliko atrakcij',
      attractions: [
        {
          name: "Kip rudolfa masjtra",
          description: "najaci kip na svetu fixxxxxx",
          image: "https.gogl.com",
        },
        {
          name: "second one",
          description: "seconde onetwtew",
          image: "hehehe siuuu",
        },
      ],
    },
    activities: {
      description: 'Tukaj je veliko za početi',
      activities: [
        {
          name: 'skakanje v vodo',
          description: 'big skakenje v vodo',
          image:'hehe siu'
        },
        {
          name: 'skakanje v vodo 2',
          description: 'big skakenje v vodo 2',
          image:'hehe siu 2'
        }
      ]
    },
    shoppings: {
      description: 'Tukaj je veliko za početi',
      shoppings: [
        {
          name: 'skakanje v vodo',
          description: 'big skakenje v vodo',
          link: 'www.btc.si',
          image:'hehe siu'
        },
        {
          name: 'skakanje v vodo 2',
          description: 'big skakenje v vodo 2',
          link: 'www.hofer.si',
          image:'hehe siu 2'
        }
      ]
    },
    languageTips: {
      description: 'Tukaj je veliko za početi',
      languageTips: [
        {
          name: 'skakanje v vodo',
          description: 'big skakenje v vodo',
          image:'hehe siu'
        },
        {
          name: 'skakanje v vodo 2',
          description: 'big skakenje v vodo 2',
          image:'hehe siu 2'
        }
      ]
    }
  };