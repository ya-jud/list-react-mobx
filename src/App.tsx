import { observer } from "mobx-react-lite";
import { useState } from "react";
import Store from "./store/index";
import "./styles.sass";

import Search from "./components/search/search-component";
import TableComponent from "./components/table/table-component";

const App = (): JSX.Element => {
  let btn: number[] = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div className='main-box'>
      <div className="content">
        <Search />
        <TableComponent />
        <div className="navigation">
          <button onClick={() => {Store.setUserId(false)}}>Назад</button>
          <div>{
            btn.map((item, index) => {
              return(
                <span key={index}>{ item }</span>
              );
            })
          }</div>
          <button onClick={() => {Store.setUserId(true)}}>Далее</button>
        </div>
      </div>
    </div>
  );
};

export default observer(App);