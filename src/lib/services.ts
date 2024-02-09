import { db } from "@/firebase/firebase.config";
import type { TPicture, TPricingPackage, TTestimonial } from "@/types";

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

export const addNewPicture = async (picture: Omit<TPicture, "id">) => {
  await addDoc(collection(db, "company"), picture);
};

export const addNewTestimonialToDB = async (newTestimonial: TTestimonial) => {
  return await addDoc(collection(db, "testimonials"), newTestimonial);
};

export const getTestimonialsFromDB = async () => {
  let testimonials: TTestimonial[] = [];

  const q = query(collection(db, "testimonials"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) =>
    testimonials.push({
      id: doc.id,
      ...doc.data(),
    } as TTestimonial),
  );

  return testimonials;
};
