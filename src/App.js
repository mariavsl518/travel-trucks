import './App.css';
import { Routes, Route } from 'react-router';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage.jsx';
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx';
import DetailsPage from './pages/DetailsPage/DetailsPage.jsx';
import ReviewsPage from './pages/ReviewsPage/ReviewsPage.jsx';

function App() {
  return (
    <Layout>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/details' element={<DetailsPage />} />
        <Route path='/reviews' element={<ReviewsPage/>}/>
      </Routes>

    </Layout>
  );
}

export default App;
