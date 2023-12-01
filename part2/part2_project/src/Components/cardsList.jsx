import { timeAgo } from "../util/time.js";
import noneImg from "../img/!img.svg";
import "../css/card.css";

const Cards = ({ card }) => {
  const { createdAt, description, imageSource, title, id, url } = card;

  function formatDate(value) {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  }

  return (
    <a href={url} className="card">
      <div className="cardImgBox">
        <img className="cardImg" src={imageSource || noneImg} alt={title} />
      </div>
      <div className="cardText">
        <p className="timeAgo">{timeAgo(createdAt)}</p>
        <h6 className="cardDescription">{description}</h6>
        <p className="makeDate">{formatDate(createdAt)}</p>
      </div>
    </a>
  );
};

export default function CardsList({ cardData }) {
  return (
    <ul className="CardList">
      {cardData?.map((card) => (
        <li className="cardBox" key={card.id}>
          <Cards card={card} />
        </li>
      ))}
    </ul>
  );
}
