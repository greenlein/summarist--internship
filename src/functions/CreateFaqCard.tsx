import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface CreateFaqCardProps {
  title: string;
  body: string;
}

export const CreateFaqCard = ({ title, body }: CreateFaqCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion__card">
      <div className="accordion__header" onClick={() => setIsOpen(!isOpen)}>
        <div className="accordion__title">{title}</div>
        {isOpen ? (
          <BsChevronUp style={{ width: "24px", height: "24px" }} />
        ) : (
          <BsChevronDown style={{ width: "24px", height: "24px" }} />
        )}
      </div>
      {isOpen && (
        <div className="collapse show">
          <div className="accordion__body">{body}</div>
        </div>
      )}
    </div>
  );
};
