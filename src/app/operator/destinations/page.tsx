"use client";
import { getDestinationBasicInfo } from "@/components/firebase/firebase";
import Link from "next/link";
import React from "react";
import styles from "./destinations.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { auth } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import Logout from "@/components/code/auth/log-out";

export default function Destinations() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem("user");
  const [loading, setLoading] = useState(true);

  const isLoggedOut = (!user && !userSession)

  useEffect(() => {
    if (isLoggedOut) {
      router.push("/operator");
    } else {
      setLoading(false);
    }
  }, [user]);

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


  if(loading) {
    return <div>Loading</div>
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upravljaj z destinacijami</h1>
      <Logout />
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
                src={destination.basicInfo.image ?? ""}
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
