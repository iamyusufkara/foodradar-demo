import { useEffect, useState } from 'react';
import RestaurantList from './components/RestaurantList';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Changelog from './components/Changelog';
import NavBar from './components/NavBar';

function App() {
  const [page, setPage] = useState(() =>
    typeof window !== 'undefined' && window.location.hash === '#changelog' ? 'changelog' : 'home',
  );

  useEffect(() => {
    const onHashChange = () =>
      setPage(window.location.hash === '#changelog' ? 'changelog' : 'home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div>
      <NavBar />
      {page === 'home' ? (
        <>
          <Hero />
          <div className="container">
            <RestaurantList />
          </div>
        </>
      ) : (
        <Changelog />
      )}
      <Footer />
    </div>
  );
}

export default App;
