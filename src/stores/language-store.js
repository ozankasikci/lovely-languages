import { observable, autorun, action } from 'mobx';
import languages from './data/language';

class LanguageStore {
  @observable languages = languages;
  @observable selectedAllLanguages = true;
  @observable selectedLanguages = [];
}

export { languages };
export default LanguageStore;