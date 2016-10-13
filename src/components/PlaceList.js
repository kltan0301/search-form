import React from 'react';
import PlaceItem from './PlaceItem';

const PlaceList = (props) => {
  //get an array of places from google api
  const placeItems = props.places.map((place) => {
    return <PlaceItem key={place.id} placeName={place}/>
  })

  return (
    <ul>{placeItems}</ul>
  );
}

export default PlaceList;
