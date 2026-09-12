import axios from "axios";
import type { Book } from "../types/book";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./PlayerPage.css";
import { SkeletonWrapper } from "react-skeletonify";

export default function PlayerPage() {
  const { bookId } = useParams();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState({} as Book);

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get<Book>(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${bookId}`,
        );
        setBook(data);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [bookId]);

  return (
    <>
      <SkeletonWrapper loading={loading}>
        <div className="summary">
          <div className="audio__book--summary">
            <div className="audio__book--summary-title">
              <b>{book.title}</b>
            </div>
            <div className="audio__book--summary-text">{book.summary}</div>
          </div>
        </div>
      </SkeletonWrapper>
    </>
  );
}
