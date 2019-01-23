import './styles.scss';
import { languageStore } from '../../../stores';

export default function () {
  return {
    view: () => {
      return (
        <ul className="languages-list-left uk-nav uk-nav-default uk-nav-left">
          <ul className="uk-nav-default uk-nav-center uk-nav-parent-icon" uk-nav>
            { languageStore.languages.map(language => {
              return (<li><a href="#">{language}</a></li>);
            }) }
          </ul>
        </ul>
      );
    },
  };
}
