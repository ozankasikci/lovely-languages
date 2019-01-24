import { observable, autorun, toJS, computed, action } from 'mobx';
import algorithms from './data/algorithm';

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