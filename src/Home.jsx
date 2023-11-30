import Header from "./components/Header";
import HomeCP from "./components/HomeCP";
import Footer from "./components/Footer";
import HomeCP_02 from "./components/HomeCP_02";
import { AuthProvider } from "./components/Context";
function Home() {

  return (
    <>
      <div>
        
          <Header/>
          <HomeCP/>
          <HomeCP_02/>
          <Footer/>
        
      </div>
    </>
  )
}

export default Home;