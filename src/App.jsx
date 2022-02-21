import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Shelf from "./components/Shelf/Shelf";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <Banner/>
        <Shelf/>
        <Newsletter/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
