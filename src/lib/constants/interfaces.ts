export interface Country {
    cityArea: string;
    country: string;
    language: string;
    currency: string;
  }
  
export interface Attraction {
    name: string;
    description: string;
    image: string;
  }

export type Desinations = {
    country: Country,
    mustSeeAttractions: Attraction[]

}

export const defaultValues: Desinations = {
    country: {
      cityArea: "Kamnik",
      country: "austria",
      language: "Danish",
      currency: "CHF",
    },
    mustSeeAttractions: [
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
  };