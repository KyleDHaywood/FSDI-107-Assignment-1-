import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Catalog from "./components/catalog";
import Hero from "./components/hero";
import About from "./components/about";
import ToDo from "./components/toDo";

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <main>
        <h2>Welcome to My Super Online Store</h2>
        <Catalog></Catalog>
      </main>
      <Footer></Footer>
      <ToDo></ToDo>
    </div>
  );
};

export default App;
