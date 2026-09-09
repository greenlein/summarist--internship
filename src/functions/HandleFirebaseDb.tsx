import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export const getSavedBooks = async (userId: string) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().savedBooks;
  }
  return [];
};

export const getFinishedBooks = async (userId: string) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().finishedBooks;
  }
  return [];
};

export const getSubscriptionStatus = async (userId: string) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().subscription;
  }
  return [];
};

export const addSavedBook = async (userId: string, bookId: string) => {
  const docRef = doc(db, "users", userId);
  const currentSavedBooks = await getSavedBooks(userId);

  const newSavedList = [...currentSavedBooks, bookId];

  await updateDoc(docRef, { savedBooks: newSavedList });
};

export const removeSavedBook = async (userId: string, bookId: string) => {
  const docRef = doc(db, "users", userId);
  const currentSavedBooks = await getSavedBooks(userId);

  const updatedList = currentSavedBooks.filter((book) => book !== bookId);

  await updateDoc(docRef, { savedBooks: updatedList });
};
