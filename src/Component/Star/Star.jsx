import { GiRoundStar } from "react-icons/gi";

const Star = ({ rating }) => {
  const star = Array.from({ length: 5 }, (elem, idx) => {
    return (
      <span key={idx}>
        {rating >= idx + 1 ? <GiRoundStar /> : <span></span>}
      </span>
    );
  });
  return <div className="text-yellow-500 flex">{star}</div>;
};

export default Star;
