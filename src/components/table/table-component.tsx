import { observer } from "mobx-react-lite";
import "./styles.sass";

import Store from "../../store/index";
import Data from "../../@types/types";

type Props = { data: Data[] }

const tableComponent = (props: Props): JSX.Element => {
  const arrowSvg = () => {
    return(
      <svg className="arrowSvg" viewBox="0 0 5 9">
        <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" />
      </svg>
    );
  }
  return(
    Store.isLoading ?
    ( <div className="noData">no data</div> ) :
    (<table>
      <thead>
        <tr>
          <th><span>ID{arrowSvg()}</span></th>
          <th><span>Заголовок{arrowSvg()}</span></th>
          <th><span>Описание{arrowSvg()}</span></th>
        </tr>
      </thead>
      <tbody>{
        props.data.map((item: any, index: number) => {
          return(
            <tr key={index}>
              <th>{ item.id }</th>
              <td>{ item.title }</td>
              <td>{ item.body }</td>
            </tr>
          )
        })
      }</tbody>
    </table>)
  );
};

export default observer(tableComponent);