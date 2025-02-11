import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({rating, onClick, isClickable, style}) => {
  // Function to handle the onClick event
  const handleClick = (i) => {
    if (!isClickable) {
      return;
    }
    onClick(i);
  };

  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => handleClick(i)} style={style}>
          {rating > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;
