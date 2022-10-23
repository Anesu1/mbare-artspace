import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Museum from "./components/Museum";
import Partners from "./components/Partners";
import Space from "./components/Space";
import SpaceLovers from "./components/SpaceLovers";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <SpaceLovers />
      <Partners />
      <Space />
      <Museum />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
