import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const auth = getAuth();
const currentUser = auth.currentUser;

if (!currentUser) {
  throw new Error("User is not authenticated");
}

const db = getFirestore();

const docRef = await addDoc(collection(db, "users", currentUser.uid, "checkout_sessions"), {
  price: "price_1GqIC8HYgolSBA35zoTTN2Zl",
  trial_period_days: 7,
  success_url: `${window.location.origin}/for-you`,
  cancel_url: `${window.location.origin}/choose-plan`,
});

// Wait for the CheckoutSession to get attached by the extension
const unsubscribe = onSnapshot(docRef, (snap) => {
  const data = snap.data();
  if (!data) return; // guards against the initial empty snapshot

  const { error, url } = data;
  if (error) {
    alert(`An error occurred: ${error.message}`);
    unsubscribe();
  }
  if (url) {
    unsubscribe();
    window.location.assign(url);
  }
});
