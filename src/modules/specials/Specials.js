import DishCard from "./components/DishCard";
import greekSalad from "../../assets/images/greek salad.jpg";
import bruchetta from "../../assets/images/restauranfood.jpg";
import lemonDessert from "../../assets/images/lemon dessert.jpg";

const Specials = () => {
  return (
    <section>
      <div>
        <h2>Specials</h2>
        <button>Online Menu</button>
      </div>
      <div>
        <DishCard
          img={greekSalad}
          alt="greek salad"
          title="Greek Salad"
          price="$12.99"
          desc="A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. This classic combination is delicious, so we stick to it, just adding a handful of mint leaves for a fresh finishing touch. Our olives of choice are Kalamata olives."
        />
        <DishCard
          img={bruchetta}
          alt="bruchetta"
          title="Bruchetta"
          price="$5.99"
          desc="A starter dish from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt. "
        />
        <DishCard
          img={lemonDessert}
          alt="lemon dessert"
          title="Our Special Lemon Dessert"
          price="$5.00"
          desc="Lemon Lush is a layered dessert with a pecan crust topped with a lemon cheesecake layer, lemon pudding, and finally, whipped topping and more pecans. Try our special Lemon Cream Cheese Dump Cake for another favorite lemon dessert!"
        />
      </div>
    </section>
  );
};

export default Specials;
