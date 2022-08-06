import { observer } from "mobx-react-lite";
import "./table-styles.sass";

import Data from "../../store/types";
import Store from "../../store/index";

const tableComponent = (): JSX.Element => {
  return(
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Заголовок</th>
          <th>Описание</th>
        </tr>
      </thead>
      <tbody>{
        Store.isLoading ?
        (<tr><th>no data</th></tr>) :
        (Store.listData[Store.userId - 1].map((item: any, index: number) => {
          return(
            <tr key={index}>
              <th>{ item.id }</th>
              <td>{ item.title }</td>
              <td>{ item.body }</td>
            </tr>
          )
        }))
      }</tbody>
    </table>
  );
};

export default observer(tableComponent);