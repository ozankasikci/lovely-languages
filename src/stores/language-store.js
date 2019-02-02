import { observable, autorun, action } from 'mobx';
import languages from './data/language';

class LanguageStore {
  @observable languages = languages;
  @observable selectedAllLanguages = true;
  @observable selectedLanguage = false;
}

export { languages };
export default LanguageStore;