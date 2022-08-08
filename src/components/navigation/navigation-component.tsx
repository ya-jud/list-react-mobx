import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Store from "../../store/index";
import "./styles.sass";

const navigationComponent = (): JSX.Element => {
  let navigate = useNavigate();
  return (
    <div className="navigation">
      <button onClick={() => {Store.backAndForth(false)}}>Назад</button>
      <div>{
        Store.listData.map((item: any, index: number) => {
          return(
            <span
              key={index}
              onClick={() => {
                Store.setPageNumber(index)
              }}
            >
              <Link
                to={`tablePage=${index + 1}`}
                className={
                  ((index + 1) === Store.pageNumber) ?
                  "isActivePage" :
                  "default"
                }
              >
                {index + 1}
              </Link>
            </span>
          );
        })
      }</div>
      {/* здесь нужно брать нынешний путь и менять его */}
      <button onClick={() => {Store.backAndForth(true)}}>Далее</button>
    </div>
  );
};

export default observer(navigationComponent);