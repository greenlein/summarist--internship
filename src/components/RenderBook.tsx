import { CiClock2, CiStar } from "react-icons/ci";
import { useNavigate } from "react-router";

interface RenderBookProps {
  id: string;
  imageLink: string;
  title: string;
  author: string;
  subTitle: string;
  averageRating: string;
}

export default function RenderBook({
  id,
  imageLink: image,
  title,
  author,
  subTitle: desc,
  averageRating: rating,
}: RenderBookProps) {
  const navigate = useNavigate();

  return (
    <a className="book--wrapper" onClick={() => navigate(`/book/${id}`)}>
      <figure className="book__img--wrapper">
        <img src={image} alt="" className="book__img" />
      </figure>
      <h4 className="book__title">{title}</h4>
      <p className="book__author">{author}</p>
      <p className="book__desc">{desc}</p>
      <div className="book__footer">
        <figure className="book__details">
          <CiClock2 className="book__icon" />
          <span className="book__length">4:52</span>
        </figure>
        <figure className="book__details">
          <CiStar className="book__icon" />
          <span className="book__rating">{rating}</span>
        </figure>
      </div>
    </a>
  );
}
