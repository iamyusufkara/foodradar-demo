import { Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants';

function RestaurantList() {
  return (
    <>
      <div className="container">
        <h3>Restaurants in deiner Nähe</h3>
      </div>

      <div className="cards-row">
        <div className="cards-grid">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="item">
              <Link to={`/restaurants/${restaurant.id}`}>
                <img src={restaurant.images.cover} style={{ width: '100%', height: 'auto' }} />
                <h4>{restaurant.name}</h4>
                <p>{restaurant.cuisine}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RestaurantList;
