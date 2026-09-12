import "./Searchbar.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import axios from "axios";
import { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router";
import { SkeletonSearch } from "../functions/SkeletonStates";
import type { Book } from "../types/book";

export default function Searchbar() {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get<Book[]>(
        `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${search}`,
      );
      setBooks(data);
    } finally {
      setLoading(false);
    }
  }

  const handleBookClick = (id: string) => {
    setBooks([]);
    setSearch("");
    navigate(`/book/${id}`);
  };

  return (
    <div className="container--searchbar">
      <div className="row--searchbar">
        <form
          action=""
          className="search__form"
          onChange={(event) => setSearch(event.target.value)}
          onSubmit={handleSubmit}
        >
          <input type="text" placeholder="Search for books" className="search__form--input" />
          <i className="search__form--icon">
            <FaMagnifyingGlass />
          </i>
        </form>

        {(loading || books.length > 0) && (
          <div
            className="modal__backdrop"
            onClick={() => setBooks([])}

          >
            <div className="search__modal--container">
              {loading && new Array(5).fill(0).map((_, i) => <SkeletonSearch key={i} />)}

              {!loading &&
                books.map((book) => (
                  <a className="result--wrapper" key={book.id} onClick={() => handleBookClick(book.id)}>
                    <figure className="result__img--wrapper">
                      <img src={book.imageLink} alt="" className="result__img" />
                    </figure>
                    <div className="result__content">
                      <div className="result__title">{book.title}</div>
                      <div className="result__author">{book.author}</div>
                      <div className="result__duration--wrapper">
                        <AiOutlineStar />
                        <div className="result__duration">&nbsp;{book.averageRating}</div>
                      </div>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
