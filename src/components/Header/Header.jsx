import "./Header.scss";

export default function Header() {
  return (
    <header className="main__header row text-white px-0 mx-0 text-center">
      <p className="logo col-12 col-sm-2 py-2 mb-0">
        <span className="fs-5"><b>Admin</b>LTE</span>
      </p>
      <div className="header__admin d-flex justify-content-between col-sm-10 px-0 mx-0 border-none">
        <button className="sidebar--btn btn btn-link btn-sm order-lg-0 me-4 me-lg-0 px-3">
          <i className="fas fa-bars"></i>
        </button>
        <nav className="d-flex align-items-center">
          <div className="admin__active d-flex ">
            <div className="active">
              <i className="far fa-envelope"></i>
              <span className="count count--success">4</span>
            </div>
            <div className="active">
              <i className="far fa-bell"></i>
              <span className="count count--warning">10</span>
            </div>
            <div className="active">
              <i className="far fa-flag"></i>
              <span className="count count--danger">9</span>
            </div>
          </div>
          <div className="admin__infor px-2 p-2">
            <img
              src="https://i.pinimg.com/originals/9e/77/2f/9e772f9199293fe810fe60c54b371bcc.jpg"
              alt="avatar"
            />
            <span className="ms-2">Dang Nam</span>
          </div>
          <div className="admin__setting py-2 px-3">
            <i className="fas fa-cogs"></i>
          </div>
        </nav>
      </div>
    </header>
  );
}
