import restaurantsData from '../data/restaurants.json';

type Restaurant = {
  id: string;
  name: string;
  cuisine: string;
  images: { cover: string; gallery?: string[] };
};

function RestaurantList() {
  const restaurants: Restaurant[] = (restaurantsData as { restaurants: Restaurant[] }).restaurants;

  return (
    <>
      <div className="container">
        <h3>Restaurants in deiner Nähe</h3>
      </div>

      <div className="cards-row">
        <div className="cards-grid">
          {restaurants.map((rest) => (
            <div key={rest.id} className="item">
              <img src={rest.images.cover} style={{ width: '100%', height: 'auto' }} />
              <h4>{rest.name}</h4>
              <p>{rest.cuisine}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RestaurantList;
