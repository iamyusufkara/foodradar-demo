import RestaurantList from './RestaurantList';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Willkommen bei FoodRadar!</h1>
      <p>Entdecke die besten Restaurants in deiner Nähe.</p>
      <RestaurantList />
    </div>
  );
}

export default HomePage;
