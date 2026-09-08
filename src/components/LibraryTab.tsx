import { useState } from "react";
import RenderBook from "./RenderBook";

interface Book {
  id: string;
  imageLink: string;
  title: string;
  author: string;
  subTitle: string;
  averageRating: string;
}

export default function SavedTab() {
  const [savedBooks, setSavedBooks] = useState<Book[]>([]);

  return (
    <>
      <div className="section--wrapper">
        <h3 className="section--title">Saved Books</h3>
        <span className="section--count">2 items</span>
        <div className="section__books">
          {savedBooks.map((book: Book) => (
            <RenderBook
              key={book.id}
              id={book.id}
              imageLink={book.imageLink}
              title={book.title}
              author={book.author}
              subTitle={book.subTitle}
              averageRating={book.averageRating}
            />
          ))}
        </div>
      </div>

      <div className="section--wrapper">
        <h3 className="section--title">Finished</h3>
        <span className="section--count">13 items</span>
        <div className="section__books">
          <div className="section__book">
            {/*  */}
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}
