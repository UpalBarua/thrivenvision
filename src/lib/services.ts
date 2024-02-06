import { db } from "@/firebase/firebase.config";
import type { TPricingPackage } from "@/types";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

export const addNewPricingPackageToDB = async (
  newPricingPackage: TPricingPackage,
) => {
  return await addDoc(collection(db, "pricing-packages"), newPricingPackage);
};

export const getPricingPackagesFromDB = async () => {
  let pricingPackages: TPricingPackage[] = [];

  const q = query(collection(db, "pricing-packages"), orderBy("price"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) =>
    pricingPackages.push({
      id: doc.id,
      ...doc.data(),
    } as TPricingPackage),
  );

  return pricingPackages;
};
