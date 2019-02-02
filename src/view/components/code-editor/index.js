import './styles.scss';
import { algorithmStore, languageStore } from '../../../stores';
import CodeSnippet from '../code-snippet';

export default function () {
  return {
    view: () => {
      const allLanguagesActive = languageStore.selectedAllLanguages ? 'active' : '';
      const languageButtons = [
        <a
          className={`uk-category-btn uk-button uk-button-default ${allLanguagesActive}`}
          href="#"
          onclick={e => {
            e.preventDefault();
            languageStore.selectedAllLanguages = true;
          }}
        >All</a>
      ];

      const buttons = languageButtons.concat(
        languageStore.languages.map((language, i) => {
          return (<a
            className="uk-category-btn uk-button uk-button-default"
            href="#"
            onclick={e => {
              e.preventDefault();
              languageStore.selectedAllLanguages = false;
              languageStore.selectedLanguage = language.extension;
            }}
          >{language.name}</a>);
        }));

      return (
        <div>
          <div className="lang-list">{buttons}</div>
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
