import './styles.scss';
import { algorithmStore, languageStore } from '../../../stores';
import CodeSnippet from '../code-snippet';

export default function () {
  return {
    view: () => {
      const allLanguagesActive = languageStore.selectedAllLanguages ? 'active' : '';

      // add default "all" button
      const languageButtons = [
        <a
          className={`uk-category-btn uk-button uk-button-default ${allLanguagesActive}`}
          href="#"
          onclick={e => {
            e.preventDefault();
            languageStore.selectedAllLanguages = !languageStore.selectedAllLanguages;
          }}
        >All</a>,
      ];

      // add other language buttons
      const buttons = languageButtons.concat(
        languageStore.languages.map((language, i) => {
          const active = `${languageStore.selectedAllLanguages
            ? 'active'
            : languageStore.selectedLanguages.includes(language.name) && 'active'}`;

          return (<a
            className={`uk-category-btn uk-button uk-button-default ${active}`}
            href="#"
            onclick={e => {
              e.preventDefault();
              languageStore.selectedAllLanguages = false;
              
              if (!languageStore.selectedLanguages.includes(language.name)) {
                languageStore.selectedLanguages.push(language.name);
              } else {
                const langIndex = languageStore.selectedLanguages.findIndex(lang => lang === language.name);
                languageStore.selectedLanguages.splice(langIndex, 1);
              }
            }
            }
          >{language.name}</a>);
        }));

      return (
        <div>
          <div className="lang-list">{buttons}</div>
          <div className="uk-child-width-1-2@m" uk-grid>
            { languageStore.languages.map((language, i) => {
              const classNames = languageStore.selectedLanguages.includes(language.name) || allLanguagesActive ? '' : 'uk-hidden';
              const id = `editor-${language.extension}`;
              return (<CodeSnippet classNames={classNames} languageName={language.name} selector={id} i={i}/>);
            })}
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
