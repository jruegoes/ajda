"use client";
import React, { useEffect, useState } from "react";
import DestinationModule from "../add-destination/page";
import { getDestination } from "@/components/firebase/firebase";

export default function Destination({ params }: any) {
  const [destinationData, setDestinationData] = useState<any>(null);
  useEffect(() => {
    const fetchDestinationData = async () => {
      try {
        const data = await getDestination(params.destinationId);
        setDestinationData(data);
      } catch (error) {
        console.error("Error fetching destination data:", error);
      }
    };

    fetchDestinationData();
  }, [params.destinationId]);

  return (
    <>
      <div>
        {destinationData && (
          <DestinationModule
            id={params.destinationId}
            value={destinationData}
          />
        )}
      </div>
    </>
  );
}
