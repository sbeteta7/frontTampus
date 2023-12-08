import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Login from "./Login";
import Navegar from "./Navegar";
import Home from "./Home";
import Publicar from "./Publicar";
import Perfil from "./Perfil";
import Register from "./Register";
import Reservas from "./Reservas";
import { AuthProvider } from "./components/Context";
function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Navegar" element={<Navegar />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Publicar" element={<Publicar/>} />
          <Route path="/Perfil" element={<Perfil/>} />
          <Route path="/Reservas" element={<Reservas />} />
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
