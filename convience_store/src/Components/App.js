import { Route } from "react-router-dom";
import "./App.scss";
import Convience from "./Convience";
// import ProductList from "./ProductList";
// import SearchForm from "./SearchForm";

function App() {
  return (
    <div className="App">
      <Route path="/:comp?" component={Convience} />
    </div>
  );
}

export default App;
