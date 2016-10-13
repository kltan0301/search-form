import React from 'react';

const PlaceItem = (place) => {
  return (
    <p className="placeItem">{place.placeName.description}</p>
  );
}
export default PlaceItem;
