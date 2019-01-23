import Cards from '../components/cards';
import HorizontalFilter from '../components/horizontal-filter';
import LanguagesListLeft from '../components/languages-list-left';
import { productController } from '../../controllers';

export default function() {
  return {
    view() {
      return (
        <section className="uk-section uk-section-small uk-section-default uk-padding-remove-bottom"
          data-uk-filter="target: .js-filter">
          <LanguagesListLeft/>
        </section>
      );
    },
  };
}