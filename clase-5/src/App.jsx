import "./App.css";
import Navbar from "./components/Navbar";
import { personajes } from "./data/personajes";
import { Cards } from "./components/Cards";

function App() {
  return (
    <main>
      {/* <Navbar /> */}
      <section>
        <Cards personajes={personajes} />
      </section>
    </main>
  );
}

export default App;
