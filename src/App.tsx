import { observer } from "mobx-react-lite";
import Store from "./store/index";
import "./styles.sass";

import Search from "./components/search/search-component";
import TableComponent from "./components/table/table-component";

const App = (): JSX.Element => {
  return (
    <div className='main-box'>
      <div className="content">
        <Search />
        <TableComponent />
        <div className="navigation">
          <button onClick={() => {Store.backAndForth(false)}}>Назад</button>
          <div>{
            Store.listData.map((item: any, index: number) => {
              return(
                <span
                  key={index}
                  className={
                    ((index + 1) === Store.pageNumber) ?
                    "isActivePage" :
                    "default"
                  }
                  onClick={() => {Store.setPageNumber(index)}}
                >
                  {index + 1}
                </span>
              );
            })
          }</div>
          <button onClick={() => {Store.backAndForth(true)}}>Далее</button>
        </div>
      </div>
    </div>
  );
};

export default observer(App);