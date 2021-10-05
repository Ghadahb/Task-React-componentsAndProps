import "./App.css";
import Home from "./Components/Home";
import ProductList from "./Components/ProductList";
import Product from "./Components/Product";

function App() {
  return (
    <div>
      <Home 
      className="home" />
      <ProductList 
      className="products"/>
      
    </div>
  );
}



export default App;
