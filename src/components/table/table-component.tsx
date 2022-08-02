import "./table-styles.sass";
import Store from "../../store/index";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

const tableComponent = (): JSX.Element => {

  const [listData, setData]: any = useState([]);
  useEffect(() => {
    console.log(listData);
    setData(Store.listData);
    console.log(listData);
  });
  return(
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Заголовок</th>
          <th>Описание</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{ (Store.listData.length > 1) ? listData[0].id : "no data" }</th>
          <td>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</td>
          <td>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</td>
        </tr>
      </tbody>
    </table>
  );
};

export default observer(tableComponent);