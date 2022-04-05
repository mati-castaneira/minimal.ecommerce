import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrito from "../containers/Carrito";
import Producto from "../containers/Producto";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import UsarContexto from "../context/UsarContexto";
import "../assets/css/Home.css"

function App() {
  return (
    <div className="home">
      

      <BrowserRouter>
      <UsarContexto>
      <Layout>
      <Routes>
        <Route exact path="/" element={ <Home />}></Route>
        <Route exact path="/producto" element={ <Producto />}></Route>
        <Route exact path="/carrito" element={ <Carrito />}></Route>
      </Routes>
      </Layout>
      </UsarContexto>
      </BrowserRouter>
    </div>
  );
}

export default App;
