import image from "../../assets/images/restaurant.jpg";

const Hero = () => {
  return (
    <section>
      <div>
        <h1>Little Lemon</h1>
        <span>Chicago</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio a
          ratione itaque, fugiat id quaerat sint labore impedit quo molestiae
          asperiores totam voluptatem! Cumque magni blanditiis odio facilis.
          Voluptate, voluptatem?
        </p>
        <button>Reserve a Table</button>
      </div>
      <img src={image} alt="restaurant interior" />
    </section>
  );
};

export default Hero;
