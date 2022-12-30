import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

export const API_URL = process.env.REACT_APP_API_URL;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="App__pages">
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
