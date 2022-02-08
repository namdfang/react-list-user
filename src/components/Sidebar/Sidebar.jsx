import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="infor__admin d-flex p-2">
        <img
          src="https://i.pinimg.com/originals/9e/77/2f/9e772f9199293fe810fe60c54b371bcc.jpg"
          alt=""
        />
        <div className="ms-3">
          <span className="">Dang Phuong Nam</span>
          <p className="admin__status">
            <i className="fas fa-circle"></i> Online
          </p>
        </div>
      </div>
      <div className="box__search pb-3">
          <form action="" method="post">
          <input type="text" placeholder="Search..."/>
          <button type="submit"><i className="fas fa-search"></i></button>
          </form>
      </div>
      <p className="sidebar__nav py-2 px-3">MAIN NAVIGATION</p>
        <div className="sidebar__menu">
            <div className="menu-name menu-product px-3 py-3">
                <div className="menu d-flex justify-content-between" data-bs-target="#menu-products" data-bs-toggle="collapse">
                    <span><i className="fas fa-columns me-2"></i> Sản phẩm</span>
                    <span><i className="fas fa-angle-down"></i></span>
                </div>
                <div className="collapse" id="menu-products">
                    <p className="nav-link"><i className="fas fa-dot-circle"></i> Tất cả sản phẩm</p>
                    <p className="nav-link"><i className="fas fa-dot-circle"></i> Thêm sản phẩm</p>
                    <p className="nav-link"><i className="fas fa-dot-circle"></i> Thống kê danh mục</p>
                </div>
            </div>

            <div className="menu-name menu-product px-3 py-3">
                <div className="menu d-flex justify-content-between" data-bs-target="#menu-order" data-bs-toggle="collapse">
                    <span><i className="fas fa-columns me-2"></i>Quản lí đơn hàng</span>
                    <span><i className="fas fa-angle-down"></i></span>
                </div>
                <div className="collapse" id="menu-order">
                    <p className="nav-link">Đơn đang hoạt động</p>
                    <p className="nav-link">Đơn đã thanh toán</p>
                    <p className="nav-link">Đơn đã hủy</p>
                </div>
            </div>

            <div className="menu-name menu-product px-3 py-3">
                <div className="menu d-flex justify-content-between" data-bs-target="#menu-users" data-bs-toggle="collapse">
                    <span><i className="fas fa-columns me-2"></i>Quản lý người dùng</span>
                    <span><i className="fas fa-angle-down"></i></span>
                </div>
                <div className="collapse" id="menu-users">
                    <p className="nav-link" href="#">users</p>
                    <p className="nav-link" href="#">admins</p>  
                </div>
            </div>
        </div>
    </div>
  );
}
