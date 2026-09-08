import "../pages/Account.css";
import { useEffect, useState } from "react";
import RenderBook from "./RenderBook";
import axios from "axios";
import { FaCirclePlay } from "react-icons/fa6";

interface Book {
  id: string;
  imageLink: string;
  title: string;
  author: string;
  subTitle: string;
  averageRating: string;
}

export default function ForYouTab() {
  const [selected, setSelected] = useState<Book[]>([]);
  const [recommended, setRecommended] = useState<Book[]>([]);
  const [suggested, setSuggested] = useState<Book[]>([]);

  const fetchSelected = async () => {
    const { data } = await axios.get<Book[]>(
      `https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected`,
    );
    setSelected(data);
  };

  const fetchRecommended = async () => {
    const { data } = await axios.get<Book[]>(
      `https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended`,
    );
    setRecommended(data);
  };

  const fetchSuggested = async () => {
    const { data } = await axios.get<Book[]>(
      `https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested`,
    );
    setSuggested(data);
  };

  useEffect(() => {
    fetchSelected();
    fetchRecommended();
    fetchSuggested();
  }, []);

  return (
    <>
      <div className="section">
        <h3 className="section__title">Selected just for you</h3>
        {selected.length > 0 && (
          <>
            <div className="selected--wrapper">
              <p className="selected--desc">{selected[0].subTitle}</p>
              <div className="selected--divider"></div>
              <figure className="selected__img--wrapper">
                <img src={selected[0].imageLink} alt="" className="book__img" />
              </figure>
              <div className="selected__content">
                <h4 className="selected__title">{selected[0].title}</h4>
                <span className="selected__author">{selected[0].author}</span>
                <div className="selected__duration--wrapper">
                  <figure className="selected__play--wrapper">
                    <FaCirclePlay className="selected__play--icon" />
                  </figure>
                  <span className="selected__duration">3 mins 23 secs</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="section">
        <h3 className="section__title">Recommended For You</h3>
        <span className="section__sub-title">We think you'll like these</span>
        <div className="books">
          {recommended.map((book: Book) => (
            <RenderBook
              id={book.id}
              key={book.id}
              imageLink={book.imageLink}
              title={book.title}
              author={book.author}
              subTitle={book.subTitle}
              averageRating={book.averageRating}
            />
          ))}
        </div>
      </div>

      <div className="section">
        <h3 className="section__title">Suggested Books</h3>
        <span className="section__sub-title">Browse these books</span>
        <div className="books">
          {suggested.map((book: Book) => (
            <RenderBook
              id={book.id}
              key={book.id}
              imageLink={book.imageLink}
              title={book.title}
              author={book.author}
              subTitle={book.subTitle}
              averageRating={book.averageRating}
            />
          ))}
        </div>
      </div>
    </>
  );
}
