"use client";
import CountryInput from "@/components/code/destination-inputs/country-input";
import NestedInput from "@/components/code/destination-inputs/nested-input";
import { Button } from "@/components/ui/button";
import {
  Activities,
  Activity,
  Attraction,
  Attractions,
  Country,
  Desinations,
  defaultValues,
} from "@/lib/constants/interfaces";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import styles from "./add-destination.module.css";
import DescriptionInput from "@/components/code/destination-inputs/description-input";

export default function App() {
  const [currentObject, setCurrentObject] = useState({
    country: defaultValues.country,
    mustSeeAttractions: defaultValues.mustSeeAttractions,
    activities: defaultValues.activities,
  });

  const handleFormInputs = (
    property: keyof Desinations,
    value: any,
    nested: boolean,
    subProperty?: string,
    index?: number
  ) => {
    setCurrentObject((prevObject: any) => {
      const updatedObject = { ...prevObject };
      if (!updatedObject[property]) {
        updatedObject[property] = nested ? [] : {};
      }

      if (subProperty) {
        if (!updatedObject[property][subProperty]) {
          updatedObject[property][subProperty] = nested ? [] : {};
        }

        // Update the specific item in the array if applicable
        if (index !== undefined && nested) {
          (updatedObject[property][subProperty] as any[])[index] = value;
        } else {
          updatedObject[property][subProperty] = value;
        }
      } else {
        // Update the specific item in the array if applicable
        if (index !== undefined && nested) {
          (updatedObject[property] as any[])[index] = value;
        } else {
          updatedObject[property] = value;
        }
      }
      return updatedObject;
    });
  };

  // const addAttribute = (attributeName: string) => {
  //   setCurrentObject((prevObject: any) => ({
  //     ...prevObject,
  //     [attributeName]: [
  //       ...(prevObject[attributeName] || []),
  //       (defaultValues as { [key: string]: any })[attributeName][0],
  //     ],
  //   }));
  // };

  const addAttribute = (
    parentAttributeName: string,
    nestedAttributeName: string
  ) => {
    setCurrentObject((prevObject: any) => ({
      ...prevObject,
      [parentAttributeName]: {
        ...prevObject[parentAttributeName],
        [nestedAttributeName]: [
          ...(prevObject[parentAttributeName][nestedAttributeName] || []),
          (defaultValues as { [key: string]: any })[parentAttributeName][
          nestedAttributeName
          ][0],
        ],
      },
    }));
  };

  const deleteAttribute = (
    indexToDelete: number,
    attributeName: string,
    attributeName2: string
  ) => {
    setCurrentObject((prevObject: any) => ({
      ...prevObject,
      [attributeName]: {
        ...prevObject[attributeName],
        [attributeName2]: prevObject[attributeName][attributeName2].filter(
          (_: any, index: number) => index !== indexToDelete
        ),
      },
    }));
  };

  // const deleteAttribute = (indexToDelete: number, attributeName: string) => {
  //   setCurrentObject((prevObject: any) => ({
  //     ...prevObject,
  //     [attributeName]: prevObject[attributeName].filter(
  //       (_: any, index: number) => index !== indexToDelete
  //     ),
  //   }));
  // };

  console.log(currentObject)

  return (
    <>
      <div className={styles.title}>🍹⛱️Dodaj novo destinacjo🌴🌊</div>
      <CountryInput
        onValueChange={(value: Country) =>
          handleFormInputs("country", value, false)
        }
        defaultValues={defaultValues.country}
      />
      <Separator className={styles.separator} />

      {/* MUST SEE ATTRACTIONS MUST SEE ATTRACTIONS MUST SEE ATTRACTIONS MUST SEE ATTRACTIONS MUST SEE ATTRACTIONS MUST SEE ATTRACTIONS MUST SEE ATTRACTIONS  */}

      <div className={styles.sectionDescription}>
        <DescriptionInput onValueChange={(value: Attractions) =>
          handleFormInputs("mustSeeAttractions", value, false, "description")
        }
          defaultValues={currentObject.mustSeeAttractions.description} />
      </div>
      {currentObject.mustSeeAttractions.attractions.map((attraction, index) => (
        <>
          <div className={styles.attraction}>
            <Button
              key={index + 1}
              onClick={() => {
                deleteAttribute(index, "mustSeeAttractions", "attractions");
              }}
              variant={"destructive"}
              className={styles.deleteAttraction}
            >
              Odstrani atrakcijo {index + 1}
            </Button>
            <NestedInput
              key={index}
              onValueChange={(value: Attraction) =>
                handleFormInputs(
                  "mustSeeAttractions",
                  value,
                  true,
                  "attractions",
                  index
                )
              }
              defaultValues={attraction}
              index={index}
            />
          </div>
          <Separator className={styles.separator} />
        </>
      ))}
      <div className={styles.attraction}>
        <Button
          variant={"secondary"}
          onClick={() => {
            addAttribute("mustSeeAttractions", "attractions");
          }}
        >
          Dodaj atrakcijo 🏛️
        </Button>
      </div>
      <Separator className={styles.separator} />

      {/* DEJAVNOST DEJAVNOST DEJAVNOST DEJAVNOST DEJAVNOST DEJAVNOST DEJAVNOST DEJAVNOST DEJAVNOST DEJAVNOST DEJAVNOST DEJAVNOST DEJAVNOST DEJAVNOST DEJAVNOST DEJAVNOST DEJAVNOST DEJAVNOST DEJAVNOST DEJAVNOST DEJAVNOST DEJAVNOST DEJAVNOST DEJAVNOST */}
      <div className={styles.sectionDescription}>
        <DescriptionInput onValueChange={(value: Activities) =>
          handleFormInputs("activities", value, false, "description")
        }
          defaultValues={currentObject.mustSeeAttractions.description} />
      </div>
      {currentObject.activities.activities.map((attraction, index) => (
        <>
          <div className={styles.attraction}>
            <Button
              key={index + 1}
              onClick={() => {
                deleteAttribute(index, "activities", "activities");
              }}
              variant={"destructive"}
              className={styles.deleteAttraction}
            >
              Odstrani dejavnost {index + 1}
            </Button>
            <NestedInput
              key={index}
              onValueChange={(value: Activity) =>
                handleFormInputs(
                  "activities",
                  value,
                  true,
                  "activities",
                  index
                )
              }
              defaultValues={attraction}
              index={index}
            />
          </div>
          <Separator className={styles.separator} />
        </>
      ))}
      <div className={styles.attraction}>
        <Button
          variant={"secondary"}
          onClick={() => {
            addAttribute("activities", "activities");
          }}
        >
          Dodaj dejavnost 🏛️
        </Button>
      </div>
      <Separator className={styles.separator} />


    </>
  );
}
