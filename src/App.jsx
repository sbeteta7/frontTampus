import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Login from "./Login";
import Navegar from "./Navegar";
import Home from "./Home";
import Publicar from "./Publicar";
import Perfil from "./Perfil";
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
          <Route path="/Publicar" element={<Publicar/>} />
          <Route path="/Perfil" element={<Perfil/>} />
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
