import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/Pages/HomePage';
import SearchPage from './components/Pages/SearchPage';

function App() {
  const {GetmoviesDetail} = useSelector((state) => state.infoMovies)
  return (
    <div className="app">
      <Router>
        <Navbar />
          <Routes>
              <Route path="/" element = {<HomePage/>}/>
              <Route path="/search" element = {<SearchPage/>}/>          
          </Routes>
      </Router>
    </div>
  );
}

export default App;
