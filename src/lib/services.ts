import { db } from "@/firebase/firebase.config";
import type { TPricingPackage } from "@/types";
import { addDoc, collection } from "firebase/firestore";

export const addNewPricingPackageToDB = async (
  newPricingPackage: TPricingPackage,
) => {
  return await addDoc(collection(db, "pricing-packages"), newPricingPackage);
};
