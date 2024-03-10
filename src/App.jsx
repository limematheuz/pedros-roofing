import './App.css'
import { BrowserRouter} from "react-router-dom";
import Router from "./Router";
import Menu from "./components/Menu/Menu";
import MenuResponsive from "./components/Menu/MenuResponsive";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <MenuResponsive />
      <Router/>
    </BrowserRouter>
  )
}

export default App;
