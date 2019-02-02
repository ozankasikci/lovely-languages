import './styles.scss';
import { algorithmStore } from '../../../../stores';

export default function () {
  return {
    view: () => {
      return (
        <div className="uk-height-1-1 languages-list-left uk-nav uk-nav-primary uk-nav-left">
          <ul className="uk-list">
            { algorithmStore.algorithms.map(a => {
              return (<li><a href="#" onclick={
                (e) => {
                  e.preventDefault();
                  algorithmStore.setAlgorithm(a.name);
                }
              }>{a.name}</a></li>);
            }) }
          </ul>
        </div>
      );
    },
  };
}
