import { NameSpace } from '../../const';
import { useAppSelector } from '../../hooks';

function MainEmpty(): JSX.Element {
  const cityName = useAppSelector((state) => state[NameSpace.Data].cityName);
  return (
    <div className="cities">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in {cityName}</p>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    </div>
  );
}

export default MainEmpty;
