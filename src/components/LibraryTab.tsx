import { useEffect, useState } from "react";
import RenderBook from "../functions/RenderBook";
import type { Book } from "../types/book";
import { getSavedBooks, getFinishedBooks } from "../functions/HandleSavedBooks";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import axios from "axios";
import "../pages/Account.css";

export default function SavedTab() {
  const userId = useSelector((state: RootState) => state.auth.uid);
  const [savedBooksData, setSavedBooksData] = useState<Book[]>([]);
  const [finishedBooksData, setFinishedBooksData] = useState<Book[]>([]);

  const fetchBooksData = async (bookIds) => {
    return await Promise.all(
      bookIds.map(async (bookId) => {
        const { data } = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${bookId}`);

        return data;
      }),
    );
  };

  useEffect(() => {
    if (!userId) return;

    getSavedBooks(userId).then(async (bookIds) => {
      const data = await fetchBooksData(bookIds);
      setSavedBooksData(data);
    });

    getFinishedBooks(userId).then(async (bookIds) => {
      const data = await fetchBooksData(bookIds);
      setFinishedBooksData(data);
    });
  }, [userId]);

  return (
    <>
      <div className="section--wrapper">
        <h3 className="section--title">Saved Books</h3>
        <span className="section--count section__sub-title">2 items</span>
        <div className="section__books">
          {savedBooksData.map((book: Book) => (
            <RenderBook
              key={book.id}
              id={book.id}
              imageLink={book.imageLink}
              title={book.title}
              author={book.author}
              subTitle={book.subTitle}
              averageRating={book.averageRating}
              subscriptionRequired={book.subscriptionRequired}
            />
          ))}
        </div>
      </div>

      <div className="section--wrapper">
        <h3 className="section--title">Finished</h3>
        <span className="section--count section__sub-title">13 items</span>
        <div className="section__books">
          {finishedBooksData.map((book: Book) => (
            <RenderBook
              key={book.id}
              id={book.id}
              imageLink={book.imageLink}
              title={book.title}
              author={book.author}
              subTitle={book.subTitle}
              averageRating={book.averageRating}
              subscriptionRequired={book.subscriptionRequired}
            />
          ))}
        </div>
      </div>
    </>
  );
}
