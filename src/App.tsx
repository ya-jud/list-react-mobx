import { observer } from "mobx-react-lite";
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
          <button onClick={() => {Store.backAndForth(false)}}>Назад</button>
          <div>{
            btn.map((item, index) => {
              return(
                <span
                  key={index}
                  onClick={() => {Store.setPageNumber(index)}}
                >
                  { item }
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