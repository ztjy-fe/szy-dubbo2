import { Store, IOptions } from 'plume2';
import { fromJS } from 'immutable';
import ListActor from './actor/list-actor';
import { loadData } from './webapi';

export default class AppStore extends Store {

  bindActor() {
    return [new ListActor()];
  }

  init = async () => {
    const listData = loadData();
    this.dispatch('listActor: init', fromJS(listData));
  };
}
