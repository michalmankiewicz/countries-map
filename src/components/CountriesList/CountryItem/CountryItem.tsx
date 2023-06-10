import { CurrencyCircleDollar, House, UsersThree } from '@phosphor-icons/react';
import React from 'react';
import './CountryItem.scss';
import { Country } from '../../../types/countries';

type Props = Country;

function CountryItem(props: Props) {
  const currency = props.currency.join(', ');
  const capital = props.capital.join(', ');
  const population = props.population / 1000000;

  return (
    <li className="country-item">
      <div className="country-item__img">
        <img src={props.imgUrl} />
      </div>
      <div className="country-item__description">
        <h3>{props.name}</h3>
        <div className="country-item__description--category">
          <House />
          <p>{capital}</p>
        </div>
        <div className="country-item__description--category">
          <CurrencyCircleDollar />
          <p>{currency}</p>
        </div>
        <div className="country-item__description--category">
          <UsersThree />
          <p>{population}m</p>
        </div>
      </div>
    </li>
  );
}

export default CountryItem;
