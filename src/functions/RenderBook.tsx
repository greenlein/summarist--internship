import { CiClock2, CiStar } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import type { RootState } from "../redux/store";
import { SkeletonIgnore } from "react-skeletonify";

interface RenderBookProps {
  id: string;
  imageLink: string;
  title: string;
  author: string;
  subTitle: string;
  averageRating: string;
  subscriptionRequired: boolean;
}

export default function RenderBook({
  id,
  imageLink: image,
  title,
  author,
  subTitle: desc,
  averageRating: rating,
  subscriptionRequired,
}: RenderBookProps) {
  const navigate = useNavigate();
  const subscriptionStatus = useSelector((state: RootState) => state.auth.subscription);

  return (
    <a className="book--wrapper" onClick={() => navigate(`/book/${id}`)}>
      {subscriptionStatus === "basic" && subscriptionRequired && (
        <SkeletonIgnore>{subscriptionStatus !== "premium" && <div className="book__pill">Premium</div>}</SkeletonIgnore>
      )}
      <figure className="book__img--wrapper">
        <img src={image} alt="" className="book__img" />
      </figure>
      <h4 className="book__title">{title}</h4>
      <p className="book__author">{author}</p>
      <p className="book__desc">{desc}</p>
      <SkeletonIgnore>
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
      </SkeletonIgnore>
    </a>
  );
}
