import "./App.css";
import Navbar from "./components/Navbar";
import NewsCard from "./components/newscard/NewsCard";
import CategoryButton from "./components/CategoryButton";
import NewsCardLandscape from "./components/newscardlandscape/NewsCardLandscape";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NewsCard />
      <br />
      <CategoryButton />
      <br />
      <NewsCardLandscape />
    </div>
  );
}

export default App;
