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
          <button>Назад</button>
          <span>1 2 3 4 5 6</span>
          <button>Далее</button>
        </div>
      </div>
    </div>
  );
};

export default App;