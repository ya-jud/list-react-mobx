import { action, observable,autorun } from "mobx";
import Data from "./types";

class Store {
  @observable listData: Data[] = [];

  @action
  async getApiData() {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(results => {
        this.listData = [...this.listData, ...results];
      });
  };
};

const store = new Store();
autorun(() => {
  store.getApiData();
});

export default store;