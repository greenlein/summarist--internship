import { SkeletonWrapper } from "react-skeletonify";

export const SkeletonBook = () => {
  return (
    <>
      <SkeletonWrapper loading={true}>
        <a className="book--wrapper">
          <figure className="book__img--wrapper">
            <img alt="" className="book__img" />
          </figure>
          <h4 className="book__title" style={{ width: "100%" }}>
            placeholder text
          </h4>
          <p className="book__author" style={{ width: "60%" }}>
            placeholder text
          </p>
          <p className="book__desc" style={{ width: "80%" }}>
            placeholder text
          </p>
          <br />
        </a>
      </SkeletonWrapper>
    </>
  );
};

export const SkeletonSelected = () => {
  return (
    <>
      <SkeletonWrapper loading={true}>
        <div className="selected--wrapper">
          <p className="selected--desc">placeholder text</p>
          <div className="selected--divider"></div>
          <figure className="selected__img--wrapper">
            <img alt="" className="book__img" />
          </figure>
          <div className="selected__content">
            <h4 className="selected__title">placeholder text</h4>
            <span className="selected__author">placeholder text</span>
            <div className="selected__duration--wrapper">
              <figure className="selected__play--wrapper"></figure>
              <span className="selected__duration">placeholder text</span>
            </div>
          </div>
        </div>
      </SkeletonWrapper>
    </>
  );
};

export const SkeletonSearch = () => {
  return (
    <>
      <SkeletonWrapper loading={true}>
        <a className="result--wrapper">
          <figure className="result__img--wrapper">
            <img alt="" className="result__img" />
          </figure>
          <div className="result__content">
            <div className="result__title">placeholder</div>
            <div className="result__author" style={{ width: "120px" }}>
              placeholder
            </div>
            <div className="result__duration--wrapper">
              <div className="result__duration">placeholder</div>
            </div>
          </div>
        </a>
      </SkeletonWrapper>
    </>
  );
};
