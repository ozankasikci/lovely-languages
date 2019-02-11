import { observable, autorun, toJS, computed, action } from 'mobx';
import algorithms from './data/algorithm';
import languages from './data/language';
import isEmpty from 'lodash/isEmpty';

class AlgorithmStore {
  @observable algorithms = algorithms;
  @observable selectedAlgorithm = algorithms.find(a => a.name === 'Hello World');
  @observable editors = [];

  @action setAlgorithm(name) {
    this.selectedAlgorithm = algorithms.find(a => a.name === name);
    this.setEditorValues();
  }

  @action createEditors = () => {
    if (!isEmpty(this.editors)) {
      return;
    }

    this.editors = languages.map(language => {
      const mode = `ace/mode/${language.aceMode}`;
      const session = ace.createEditSession(language.name, mode);
      const id = `editor-${language.extension}`;

      const editor = ace.edit(id, {
        editSession: session,
        maxLines: 50,
        minLines: 10,
        fontSize: 14,
        showPrintMargin: false,
        highlightGutterLine: false,
        showLineNumbers: false,
        highlightActiveLine: false,
        showGutter: false,
        mode,
        theme: 'ace/theme/gruvbox',
        bug: 1,
      });

      return { instance: editor, language };
    });
  };

  @action setEditorValues = () => {
    this.editors.forEach((editor) => {
      const { language } = editor;
      const { fileName } = this.selectedAlgorithm;
      const code = require(`../algorithms/${fileName}/${fileName}.${language.extension}`);
      editor.instance.setValue(code, 1);
    });
  }
}

export default AlgorithmStore;