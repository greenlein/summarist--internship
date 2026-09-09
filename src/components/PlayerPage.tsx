import axios from "axios";
import type { Book } from "../types/book";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./PlayerPage.css";

export default function PlayerPage() {
  const { bookId } = useParams();
  const [book, setBook] = useState({} as Book);

  useEffect(() => {
    const fetchBook = async () => {
      const { data } = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${bookId}`);
      setBook(data);
    };
    fetchBook();
  }, [bookId]);

  return (
    <>
      <div className="summary">
        <div className="audio__book--summary">
          <div className="audio__book--summary-title">
            <b>{book.title}</b>
          </div>
          <div className="audio__book--summary-text">{book.summary}</div>
        </div>
      </div>
    </>
  );
}
