import { observable, autorun, computed, action } from 'mobx';

const languages = [
  {
    name: 'Javascript',
    extension: 'txt',
    aceMode: 'javascript',
  },
  {
    name: 'C++',
    extension: 'cpp',
    aceMode: 'c_cpp',
  },
  {
    name: 'GO',
    extension: 'go',
    aceMode: 'golang',
  },
  {
    name: 'Python',
    extension: 'py',
    aceMode: 'python',
  },
  {
    name: 'Java',
    extension: 'java',
    aceMode: 'java',
  },
];

class LanguageStore {
  @observable languages = languages;
  @observable pendingRequests = 0;

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

export { languages };
export default LanguageStore;