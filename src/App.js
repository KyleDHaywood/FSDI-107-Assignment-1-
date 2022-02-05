import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Catalog from "./components/catalog";

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <main>
        <h2>Welcome to My Super Online Store</h2>
        <Catalog></Catalog>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default App;
