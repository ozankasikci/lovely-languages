import { observable, autorun, toJS, computed, action } from 'mobx';
import { languages } from './language-store';

export const algorithms = [
  {
    name: 'Hello World',
    fileName: 'hello-world',

    oncreate: (fileName) => {
      languages.forEach(language => {
        const id = `editor-${language.extension}`;
        ace.edit(id, {
          maxLines: 50,
          minLines: 10,
          value: require(`../data/algorithm/${fileName}/${fileName}.${language.extension}`),
          mode: `ace/mode/${language.aceMode}`,
          theme: 'ace/theme/monokai',
          bug: 1,
        });
      });
    },
  },
];

class AlgorithmStore {
  @observable algorithms = algorithms;

  constructor() {
    autorun(() => console.log(this.report));
  }

  @action addBike(data) {
    console.log(data);
    this.bikes.push({
      mediaId: data.mediaId,
      displayName: data.displayName,
      new: false,
    });
  }

  @action addBikes(data) {
    console.log('adding bikes');
    data.products.forEach((bike) => {
      console.log('adding bike', bike.displayName);
      this.addBike(bike);
    });
  }
}

export default AlgorithmStore;