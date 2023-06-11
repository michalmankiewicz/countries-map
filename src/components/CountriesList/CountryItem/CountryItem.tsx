import { CurrencyCircleDollar, House, UsersThree } from '@phosphor-icons/react';
import './CountryItem.scss';
import { Country } from '../../../types/countries';

type Props = Country & {
  onClick: (coords: Country['coords'], name: Country['name']) => void;
  activeCountry: string;
};

function CountryItem(props: Props) {
  const currency = props.currency.join(', ');
  const capital = props.capital.join(', ');
  const population = props.population > 10000 ? (props.population / 1000000).toFixed(2) : '<0.01';

  return (
    <li
      className={`country-item ${props.activeCountry === props.name ? 'country-item--active' : ''}`}
      onClick={() => props.onClick(props.coords, props.name)}
    >
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
