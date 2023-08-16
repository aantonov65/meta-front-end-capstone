const TestimonialCard = ({ rating, name, review }) => {
  return (
    <>
      <div>Rating {rating}</div>
      <div>{name}</div>
      <div>{review}</div>
    </>
  );
};

export default TestimonialCard;
