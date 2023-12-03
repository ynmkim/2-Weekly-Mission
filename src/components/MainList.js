import noImageSource from "../img/logo.svg";

function MainLink({ item }) {
  const { createdAt, url, imageSource, description } = item;
  // title 파일도 디스크럭션 가능 에러 자꾸 떠서 일단 삭제.

  return (
    <li className="card" key={item.id}>
      <a href={url} target="_blank" className="cardATag" rel="noreferrer">
        <div className="imgHover">
          {imageSource ? (
            <img src={imageSource} className="cardImgtag" alt="cardNews" />
          ) : (
            <img src={noImageSource} className="cardImgtag" alt="cardNews" />
          )}
        </div>
        <div className="textLine">
          <h1 className="cardDescripTag">{description}</h1>
          <p className="cardDateTag">{createdAt}</p>
        </div>
      </a>
    </li>
  );
}
{
  /* <div className="card-img_wrapper">
{imageSource ? (
  <img
    className="card-img"
    src={imageSource}
    alt={`${title}-img`}
  />
) : (
  <img className="card-img" src={NoImg} alt={`${title}-img`} />
)} */
}
export default MainLink;
