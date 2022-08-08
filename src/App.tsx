import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router-dom";
import TableComponent from "./components/table/table-component";
import Store from "./store/index";
import "./styles.sass";

import TablePage from "./views/tablePage/tablePage";

const App = (): JSX.Element => {
  return (
    <div className="main-box">
      <Routes>
        <Route path="/*">
          <Route path="/*" element={<TablePage />}>
            {
              Store.listData.map((item: any, index: number) => {
                return(
                  <Route
                    key={index}
                    path={`tablePage=${index + 1}`}
                    element={<TableComponent data={item}/>}
                  />
                );
              })
            }
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default observer(App);