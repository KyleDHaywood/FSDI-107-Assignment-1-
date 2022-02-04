import "../public/styles/App.css";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Catalog from "./components/catalog";

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Welcome to My Super Online Store</h1>
      <Catalog></Catalog>
      <Footer></Footer>
    </div>
  );
};

export default App;
