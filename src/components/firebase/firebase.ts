import { Destination } from "@/lib/constants/interfaces";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";


//add or update destination
export async function addOrUpdateDestination(
  destination: Destination,
  destinationId: string
) {
  const docRef = doc(db, "destinations", destinationId);
 

  try {
    const docSnap = await getDoc(docRef); // Use getDoc for a single document

    if (docSnap.exists()) {
      // Document already exists, update it
      await updateDoc(docRef, destination);
      console.log("Document updated successfully");
    } else {
      // Document doesn't exist, add it
      await setDoc(docRef, destination);
      console.log("Document added successfully");
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

//get destinations
export async function getDestinations() {
  try {
    const querySnapshot = await getDocs(collection(db, "destinations"));
    const destinationsData: any = [];
    querySnapshot.forEach((doc) => {
      destinationsData.push({ id: doc.id, ...doc.data() });
    });
    return destinationsData; // Return the data
  } catch (e) {
    console.error("Error getting documents: ", e);
    throw e; // Re-throw the error to be caught by the caller
  }
}

export async function getDestinationBasicInfo() {
  try {
    const querySnapshot = await getDocs(collection(db, "destinations"));
    const basicInfoArray: any = [];

    querySnapshot.forEach((doc) => {
      const basicInfo = doc.data().basicInfo;
      const id = doc.id;
      basicInfoArray.push({ id, basicInfo });
    });

    return basicInfoArray;
  } catch (e) {
    console.error("Error getting documents: ", e);
    throw e;
  }
}

//get destination by id
export async function getDestination(destinationId: string) {
  try {
    const docRef = doc(db, "destinations", destinationId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      return docSnapshot.data();
    } else {
      return null; // or throw an error, depending on your requirement
    }
  } catch (e) {
    console.error("Error getting document:", e);
    throw e; // Rethrow the error to handle it elsewhere if needed
  }
}

//get destinations by id
export async function getDestinationIds() {
  try {
    const querySnapshot = await getDocs(collection(db, "destinations"));
    const docIds = querySnapshot.docs.map((doc) => doc.id);
    return docIds;
  } catch (e) {
    console.error("Error getting document IDs:", e);
    return [];
  }
}

//delete destination
export async function deleteDestination(destinationId: string) {
  try {
    // Reference the document to delete
    const destinationDocRef = doc(db, "destinations", destinationId);

    // Delete the document
    await deleteDoc(destinationDocRef);

    console.log("Document successfully deleted");
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}
