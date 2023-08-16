const DishCard = ({ img, alt, title, price, desc }) => {
  return (
    <div>
      <img src={img} alt={alt} />
      <div>
        <h3>{title}</h3>
        <span>{price}</span>
      </div>
      <p>{desc}</p>
      <a href="">Order a delivery</a>
    </div>
  );
};

export default DishCard;
