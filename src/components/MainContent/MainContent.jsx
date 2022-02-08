import ListUser from "./ListUser/ListUser";
import "./MainContent.scss";


export default function MainContent() {
  return (
    <div className="container main__table">
      <div className="content__table border-top border-3 p-3 rounded mb-5">
        <ListUser />
      </div>
    </div>
  );
}
