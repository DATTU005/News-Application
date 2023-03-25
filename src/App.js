import "./App.css";
import Navbar from "./components/Navbar";
import NewsCard from "./components/newscard/NewsCard";
import CategoryButton from "./components/CategoryButton";
import NewsCardLandscape from "./components/newscardlandscape/NewsCardLandscape";
import ExploreButton from "./components/explorebutton/ExploreButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsPage from "./components/NewPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NewsCard />
      <br />
      <CategoryButton />
      <br />
      <NewsCardLandscape />
      <ExploreButton />
    </div>
  );
}

export default App;
