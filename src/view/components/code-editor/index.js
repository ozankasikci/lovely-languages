import './styles.scss';
import 'ace-builds';
import 'ace-builds/webpack-resolver';
import { toJS } from 'mobx';
import { languages } from '../../../stores/language-store';
import { algorithms } from '../../../stores/algorithm-store';

export default function () {
  return {
    view: () => {
      return (
        <div className="uk-child-width-1-2@m" uk-grid>
          { languages.map((language, i) => {
            const id = `editor-${language.extension}`;
            return (<div key={i} id={id}>editor</div>);
          }) }
        </div>
      );
    },
    oncreate: () => {
      const algorithm = algorithms[0];
      algorithm.oncreate(algorithm.fileName);
    },
  };
}
