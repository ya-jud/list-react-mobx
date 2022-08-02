import { action, observable, autorun, computed } from "mobx";
import Data from "./types";

class Store {
  @observable listData: Data[] = [];

  @computed
  setData(results: Data[]) {
    return this.listData = [...this.listData, ...results];
  }

  @action
  async getApiData() {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(results => {
        this.setData(results);
      });
  };
};

const store = new Store();
store.getApiData();

export default store;