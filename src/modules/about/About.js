import staff1 from "../../assets/images/Mario and Adrian A.jpg";
import staff2 from "../../assets/images/Mario and Adrian b.jpg";

const About = () => {
  return (
    <section>
      <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
          numquam neque exercitationem ipsa, et nulla amet. Blanditiis, rerum!
          Veniam, consequatur repellendus impedit cum possimus rem aliquam
          nostrum! Quos, laboriosam facilis.
        </p>
      </div>
      <img src={staff1} alt="staff" />
      <img src={staff2} alt="staff" />
    </section>
  );
};

export default About;
