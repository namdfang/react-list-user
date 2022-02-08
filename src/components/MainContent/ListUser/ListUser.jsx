import React, { useEffect, useState } from "react";
import { Popover, OverlayTrigger, Toast } from "react-bootstrap";
import callApi from "../../../apis/user";
import Modal from "./Modal/Modal";
import "./ListUser.scss";

export default function ListUser() {
  const [listUser, setListUser] = useState([]);
  const [user, setUser] = useState({});
  const [index, setIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [add, setAdd] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    callApi("", "GET", null).then((res) => {
      setListUser(res.data);
    });
  }, []);

  const handleDeleteUser = (id) => {
    callApi(`/${id}`, "DELETE", null).then(() => {
      const i = listUser.filter((item) => item.id !== id);
      setListUser(i);
      setShowToast(true);
      setMessage("You have been deleted!!");
    });
  };

  const handleSubmitAdd = (data) => {
    setListUser([...listUser, data]);
  };

  const handleSubmitEdit = (data, index) => {
    const arr = [...listUser];
    arr[index] = data;
    setListUser(arr);
  };

  const popover = (id) => (
    <Popover id="popover-basic" className="px-2 py-3 text-center">
      <b>Are you sure delete user?</b>
      <button
        onClick={() => handleDeleteUser(id)}
        className="btn btn-primary py-1 me-5"
      >
        Oki
      </button>
      <button className="border py-1 mt-1">Cancel</button>
    </Popover>
  );

  return (
    <div>
      <div>
        <div>
          <Toast
            onClose={() => setShowToast(false)}
            show={showToast}
            delay={5000}
            autohide
            className="toast"
          >
            <Toast.Header>
              <i className="far fa-bell me-1"></i>
              <strong className="me-auto"> Notification</strong>
              <small>1 second ago</small>
            </Toast.Header>
            <Toast.Body>
              <b>{message}</b>
            </Toast.Body>
          </Toast>
        </div>
      </div>
      <div className="d-flex justify-content-between mb-4">
        <h5 className="mt-1">List user</h5>
        <button
          className="btn btn-primary me-5"
          data-bs-toggle="modal"
          data-bs-target="#modal"
          onClick={() => {
            setShowModal(!showModal);
            setAdd(true);
          }}
        >
          Add user
        </button>
      </div>

      {showModal && 
        <Modal
          showModal={showModal}
          handleSubmitAdd={handleSubmitAdd}
          setAdd={setAdd}
          add={add}
          setShowModal={setShowModal}
          setShowToast={setShowToast}
          setMessage={setMessage}
          handleSubmitEdit={handleSubmitEdit}
          user={user}
          index={index}
        />
      }

      <table className="table table-hover table-bordered text-break text-center">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>City</th>
            <th>Email</th>
            <th className="actions">Actions</th>
          </tr>
        </thead>
        <tbody className="table-user">
          {listUser.map((item, index) => (
            <tr key={item.id}>
              <th>{index + 1}</th>
              <th>{item.name}</th>
              <th>{item.city}</th>
              <th>{item.email}</th>
              <th className="d-flex justify-content-around px-0 actions">
                <OverlayTrigger
                  trigger="click"
                  placement="top"
                  rootClose
                  overlay={popover(item.id)}
                >
                  <button className="btn btn__delete border">
                    <i className="fas fa-trash"></i>Delete
                  </button>
                </OverlayTrigger>
                <button
                  type="button"
                  className="btn btn__edit border px-3 me-0"
                  data-bs-toggle="modal"
                  data-bs-target="#modalEdit"
                  onClick={() => {
                    setUser(item);
                    setIndex(index);
                    setShowModal(!showModal);
                  }}
                >
                  <i className="fad fa-user-edit me-1"></i>
                  Edit
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
