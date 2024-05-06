"use client";
import { getDestinationBasicInfo } from "@/components/firebase/firebase";
import Link from "next/link";
import React from "react";
import styles from "./destinations.module.css";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Destinations() {
  const [destinations, setDestinations] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const destinationsData = await getDestinationBasicInfo();
        setDestinations(destinationsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Render your component with fetched destinations data
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upravljaj z destinacijami</h1>
      <ul className={styles.destination}>
        {destinations.map((destination) => (
          <Link key={destination.id} href={`destinations/${destination.id}`}>
            <li className={styles.eachDestination}>
              <div>
                <div>{destination.basicInfo.country}</div>
                <div>{destination.basicInfo.cityArea}</div>
                <div>{destination.basicInfo.description}</div>
              </div>
              <Image
                src={destination.basicInfo.image ?? ''}
                width={500}
                height={500}
                alt="Slika bleda"
                className={styles.picture}
              />

            </li>
          </Link>
        ))}
      </ul>
      <Link href={"destinations/add-destination"}>
        <div className={styles.addDestination}>
          <div>Kreiraj novo destinacijo</div>
        </div>
      </Link>
   
    </div>
  );
}
