import { action, observable, autorun, makeAutoObservable, runInAction } from "mobx";
import Data from "./types";

class Store {
  @observable isLoading: boolean = true
  @observable listData: Data[][] = [];
  @observable userId: number = 1;

  constructor(){
    makeAutoObservable(this);
  }

  @action
  async getApiData() {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(results => {
        for(let i = 0; i < Math.ceil(results.length/10); i++) {
          this.listData[i] = results.slice((i * 10), (i * 10) + 10);
        }
      });
    runInAction(() => {
      this.isLoading = false;
    });
  };
  @action
  setUserId(value: boolean) {
    if(value && this.userId !== 10)
      this.userId += 1;
    if(!value && this.userId !== 1)
      this.userId -= 1;
  }
};

const store = new Store();
autorun(async () => {
  await store.getApiData();
});

export default store;