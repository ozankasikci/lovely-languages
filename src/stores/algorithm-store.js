import { observable, autorun, toJS, computed, action } from 'mobx';
import algorithms from './data/algorithm';

class AlgorithmStore {
  @observable algorithms = algorithms;

}

export default AlgorithmStore;