import React from 'react';

const PlaceItem = (place) => {
  return (
    <li>
      <p>{place.placeName.description}</p>
    </li>
  );
}
export default PlaceItem;
