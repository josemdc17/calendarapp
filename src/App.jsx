import "./App.css";
import Calendar from "./components/calendar";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">

      <Header />

      <div className="mainWrapper">
        <Calendar />
      </div>

      <Footer />
      
    </div>
  );
}

export default App;
