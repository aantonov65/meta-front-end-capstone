import TestimonialCard from "./components/TestimonialCard";

const Testimonials = () => {
  return (
    <section>
      <h2>Testimonials</h2>
      <div>
        <TestimonialCard
          rating={4.7}
          name="Ricardo Bonnuci"
          review="The food was excellent, and the service was great!"
        />
        <TestimonialCard
          rating={4.9}
          name="Mark Altury"
          review="One of the best restaurants in town!"
        />
        <TestimonialCard
          rating={5.0}
          name="Jack Willer"
          review="Everything was perfect"
        />
        <TestimonialCard rating="4.6" name="Would definitely visit again." />
      </div>
    </section>
  );
};

export default Testimonials;
