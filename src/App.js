import "./App.css";
import Footer from "./modules/footer/Footer";
import Navbar from "./modules/navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
