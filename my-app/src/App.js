import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './layout/footer';
import Header from './layout/header';
import Main from './layout/main';
import Movies from './components/movies';
import Movie from './components/movie';
import Full from './components/full';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <BrowserRouter>
        <Routes>
          <Route path="/movie/:id" element={<Full/>} />
          <Route path="/" element={<Main/>} />
        </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
