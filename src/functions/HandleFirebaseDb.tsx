import { db } from "../firebase";
import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";

export const getSavedBooks = async (userId: string) => {
  if (!userId) return;

  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().savedBooks;
  }
  return [];
};

export const getFinishedBooks = async (userId: string) => {
  if (!userId) return;

  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().finishedBooks;
  }
  return [];
};

export const addSavedBook = async (userId: string, bookId: string | undefined) => {
  if (!bookId || !userId) return;

  const docRef = doc(db, "users", userId);
  await updateDoc(docRef, { savedBooks: arrayUnion(bookId) });
};

export const addFinishedBook = async (userId: string, bookId: string) => {
  if (!bookId || !userId) return;

  const docRef = doc(db, "users", userId);
  await updateDoc(docRef, { finishedBooks: arrayUnion(bookId) });
};

export const removeSavedBook = async (userId: string, bookId: string | undefined) => {
  if (!bookId || !userId) return;

  const docRef = doc(db, "users", userId);
  await updateDoc(docRef, { savedBooks: arrayRemove(bookId) });
};
