import './styles.scss';
import { algorithmStore, languageStore } from '../../../stores';
import CodeSnippet from '../code-snippet';

export default function () {
  return {
    view: () => {
      return (
        <div>
          <div className="lang-list">
            { languageStore.languages.map((language, i) => {
              return (<a class="uk-category-btn uk-button uk-button-default" href="">{language.name}</a>) ;
            }) }

          </div>
          <div className="uk-child-width-1-2@m" uk-grid>
            { languageStore.languages.map((language, i) => {
              const id = `editor-${language.extension}`;
              return (<CodeSnippet languageName={language.name} selector={id} i={i}/>) ;
            }) }
          </div>
        </div>
      );
    },
    oncreate: () => {
      algorithmStore.createEditors();
      algorithmStore.setEditorValues();
    },
  };
}
