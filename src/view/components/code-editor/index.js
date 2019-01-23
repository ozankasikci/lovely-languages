import './styles.scss';
import 'ace-builds';
import 'ace-builds/webpack-resolver';
import { languages } from '../../../stores/language-store';
import { algorithms } from '../../../stores/algorithm-store';
import CodeSnippet from '../code-snippet';

export default function () {
  return {
    view: () => {
      return (
        <div className="uk-child-width-1-2@m" uk-grid>
          { languages.map((language, i) => {
            const id = `editor-${language.extension}`;
            return (<CodeSnippet languageName={language.name} selector={id} i={i}/>) ;
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
