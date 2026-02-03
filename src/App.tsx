import { useEffect, useState } from 'react';
import RestaurantList from './components/RestaurantList';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Changelog from './components/Changelog';

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
      <Header />
      {page === 'home' ? (
        <>
          <Hero />
          <RestaurantList />
        </>
      ) : (
        <Changelog />
      )}
      <Footer />
    </div>
  );
}

export default App;
