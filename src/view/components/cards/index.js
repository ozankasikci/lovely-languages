import Card from '../card';
import { bikeStore } from '../../../stores';

export default class {
  view() {
    return (
      <section className="uk-section uk-section-small uk-section-default uk-padding-remove-bottom"
        data-uk-filter="target: .js-filter">
        <div className="uk-container uk-container-expand uk-margin-large-bottom">
          <div
            className="uk-grid uk-grid-medium uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l  uk-child-width-1-6@xl uk-grid-match js-filter"
            data-uk-grid="masonry: true" data-uk-sortable="handle: .drag-icon">
            { bikeStore.bikes.map((bike, index) => {
              return (<Card bike={bike} key={index}/>);
            }) }
          </div>
        </div>
      </section>
    );
  }
}
