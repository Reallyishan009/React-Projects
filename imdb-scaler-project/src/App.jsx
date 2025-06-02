import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import WatchList from "./components/WatchList";
import Navbar from "./components/NavBar";
import MovieContextWrapper from "./components/MovieContextWrapper";
import { Provider } from "react-redux";
import store from "./components/Redux/store";

function App() {
  return (
    <Provider store={store}>
      <MovieContextWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </MovieContextWrapper>
    </Provider>
  );
}

export default App;