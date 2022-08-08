import { Outlet } from "react-router-dom";
import "./styles.sass";

import NavigationComponent from "../../components/navigation/navigation-component";
import TableComponent from "../../components/table/table-component";
import Search from "../../components/search/search-component";

const tablePage = (): JSX.Element => {
  return(
    <div className="contentTable">
      <Search />
      <Outlet />
      <NavigationComponent />
    </div>
  );
};

export default tablePage;