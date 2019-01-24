import { observable, autorun, action } from 'mobx';
import languages from './data/language';

class LanguageStore {
  @observable languages = languages;
  
}

export { languages };
export default LanguageStore;