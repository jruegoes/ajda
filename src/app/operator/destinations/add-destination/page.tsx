"use client";
import CountryInput from "@/components/code/destination-inputs/country-input";
import MustSeeAttractionsInput from "@/components/code/destination-inputs/must-see-attractions";
import { Button } from "@/components/ui/button";
import {
  Attraction,
  Country,
  Desinations,
  defaultValues,
} from "@/lib/constants/interfaces";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import styles from './add-destination.module.css'

export default function App() {
  const [currentObject, setCurrentObject] = useState({
    country: defaultValues.country,
    mustSeeAttractions: defaultValues.mustSeeAttractions,
  });

  const handleFormInputs = (
    property: keyof Desinations,
    value: any,
    nested: boolean,
    index?: number
  ) => {
    setCurrentObject((prevObject: any) => {
      const updatedObject = { ...prevObject };

      // If the property doesn't exist yet, initialize it
      if (!updatedObject[property]) {
        if (nested) {
          updatedObject[property] = [];
        } else {
          updatedObject[property] = {};
        }
      }

      // Update the specific item in the array if applicable
      if (index !== undefined && nested) {
        (updatedObject[property] as any[])[index] = value; // casting to any[] since TypeScript can't infer the array type
      } else {
        updatedObject[property] = value;
      }

      return updatedObject;
    });
  };

  const addAttribute = (attributeName: string) => {
    setCurrentObject((prevObject: any) => ({
      ...prevObject,
      [attributeName]: [
        ...(prevObject[attributeName] || []),
        (defaultValues as { [key: string]: any })[attributeName][0],
      ],
    }));
  };

  const deleteAttribute = (indexToDelete: number, attributeName: string) => {
    setCurrentObject((prevObject: any) => ({
      ...prevObject,
      [attributeName]: prevObject[attributeName].filter(
        (_: any, index: number) => index !== indexToDelete
      ),
    }));
  };

  console.log(currentObject);

  return (
    <>
      <div className={styles.title}>🍹⛱️Dodaj novo destinacjo🌴🌊</div>
      <CountryInput
        onValueChange={(value: Country) =>
          handleFormInputs("country", value, false)
        }
        defaultValues={defaultValues.country}
      />
      <Separator />

      {currentObject.mustSeeAttractions.map((attraction, index) => (
        <>
          <div className={styles.attraction}>
            <Button
              key={index + 1}
              onClick={() => {
                deleteAttribute(index, "mustSeeAttractions");
              }}
              variant={"destructive"}
              className={styles.deleteAttraction}
            >
              Odstrani atrakcijo {index + 1}
            </Button>
            <MustSeeAttractionsInput
              key={index}
              onValueChange={(value: Attraction) =>
                handleFormInputs("mustSeeAttractions", value, true, index)
              }
              defaultValues={attraction}
              index={index}
            />
          </div>
          <Separator />
        </>
      ))}
      <div className={styles.attraction}>
        <Button
        variant={"secondary"}
          onClick={() => {
            addAttribute("mustSeeAttractions");
          }}
        >  
          Dodaj atrakcijo 🏛️
        </Button>
      </div>
    </>
  );
}
