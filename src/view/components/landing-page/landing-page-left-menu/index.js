import './styles.scss';
import { languageStore } from '../../../stores';

export default function () {
  return {
    view: () => {
      return (
        <div className="languages-list-left uk-nav uk-nav-default uk-nav-left">
          <ul className="uk-list uk-list-striped">
              { languageStore.languages.map(language => {
                return (<li><a href="#">{language}</a></li>);
              }) }
          </ul>
        </div>
      );
    },
  };
}
