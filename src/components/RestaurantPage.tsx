import { useParams } from 'react-router-dom';
import { restaurants } from '../data/restaurants';

type Params = {
  id: string;
};

export function RestaurantPage() {
  const params = useParams<Params>();
  const id = params.id;

  const restaraunt = restaurants.find((restaurant) => restaurant.id === id);

  return (
    <div>
      {restaraunt === undefined ? (
        <h1>Unbekannter Spot</h1>
      ) : (
        <>
          <h1>{restaraunt.name}</h1>
          <p>{restaraunt.cuisine}</p>
          <p>{restaraunt.rating}</p>
        </>
      )}
    </div>
  );
}

export default RestaurantPage;
