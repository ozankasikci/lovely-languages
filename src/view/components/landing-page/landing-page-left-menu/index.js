import './styles.scss';
import { algorithmStore } from '../../../../stores';

export default function () {
  return {
    view: () => {
      return (
        <div className="uk-height-1-1 languages-list-left uk-nav uk-nav-primary uk-nav-left">
          <ul className="uk-list">
            { algorithmStore.algorithms.map(a => {
              return (<li><a href="#" 
                className={algorithmStore.selectedAlgorithm.name === a.name ? 'active' : ''}
                onclick={
                  (e) => {
                    e.preventDefault();
                    algorithmStore.setAlgorithm(a.name);

                    if (m.route.get() !== '/index') {
                      m.route.set('#!/index');
                    }
                  }
                }>{a.name}</a></li>);
            }) }
          </ul>
        </div>
      );
    },
  };
}
