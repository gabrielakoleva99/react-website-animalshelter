import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our pets!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/image1.jpg'
              text='Check out our puppies'
              label='Doggs'
              path='/pets'
            />
            <CardItem
              src='images/cat.jpg'
              text='Rescue a cat'
              label='Cats'
              path='/pets'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/ferrets.jpg'
              text='Give a loving home to a ferret'
              label='Ferrets'
              path='/pets'
            />
            <CardItem
              src='images/bunny.jpg'
              text='Maybe you prefer bunnies'
              label='Bunnies'
              path='/pets'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;