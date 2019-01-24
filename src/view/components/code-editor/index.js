import './styles.scss';
import { algorithmStore, languageStore } from '../../../stores';
import CodeSnippet from '../code-snippet';

export default function () {
  return {
    view: () => {
      return (
        <div className="uk-child-width-1-2@m" uk-grid>
          { languageStore.languages.map((language, i) => {
            const id = `editor-${language.extension}`;
            return (<CodeSnippet languageName={language.name} selector={id} i={i}/>) ;
          }) }
        </div>
      );
    },
    oncreate: () => {
      algorithmStore.createEditors();
      algorithmStore.setEditorValues();
    },
  };
}
