import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../../pages/Home/Home';
import City from '../City/City';
import CityCard from '../CityCard/CityCard';

function RouterConfig() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city" element={<City />} />
        <Route path="/city/:id" element={<CityCard />} />
      </Routes>
    </Router>
  );
}

export default RouterConfig;
