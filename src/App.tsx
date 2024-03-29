import "./App.css";
import {
  Companies,
  Customers,
  Features,
  Footer,
  Hero,
  Order,
  Restaurant,
} from "./component/sections";

function App() {
  return (
    <>
      <Hero />
      <Companies />
      <Features />
      <Restaurant />
      <Customers />
      <Order />
      <Footer />
    </>
  );
}
export default App;
