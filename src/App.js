import './App.css';
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListUser from './components/ListUser';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Details from './components/Details';


function App() {
  return (
    <div className="App">
    <Navigation />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ListUser"  element={<ListUser />} />
      <Route path="Details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
