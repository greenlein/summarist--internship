import "./Searchbar.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Searchbar() {
  return (
    <>
      <div className="container--searchbar">
        <div className="row--searchbar">
          <form action="" className="search__form">
            <input type="text" placeholder="Search for books" className="search__form--input" />
            <button className="search__form--icon">
              <FaMagnifyingGlass />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
