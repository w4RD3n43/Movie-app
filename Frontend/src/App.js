import Header from "./components/Header";
import Footer from "./components/Footer";
import Movies from "./container/Movies";
import AddMovie from "./components/AddMovie";
function App() {
  return (
    <>
      <Header/>
      <Movies/>
      <AddMovie/>
      <Footer/>
    </>
  );
}

export default App;
