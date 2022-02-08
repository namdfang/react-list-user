import { useEffect, useState } from "react";
import callApi from "../../../../apis/user";
import "./Modal.scss";

export default function Modal(props) {
  const {
    handleSubmitAdd,
    setShowModal,
    setShowToast,
    setMessage,
    showModal,
    add,
    setAdd,
    user,
    handleSubmitEdit,
    index,
    infoUser,
  } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [valueBtn, setValueBtn] = useState("");
  const [valueTitle, setValueTitle] = useState("");

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setCity(user.city);
  }, [user]);

  useEffect(() => {
    if (add === true) {
      setValueBtn("Add");
      setValueTitle("Add user");
      setName("");
      setEmail("");
      setCity("");
    } else {
      setValueBtn("Update");
      setValueTitle("Edit user");
    }
  }, []);

  const onSave = (e) => {
    e.preventDefault();
    if (add === true) {
      callApi("", "POST", {
        name,
        email,
        city,
      }).then((res) => {
        handleSubmitAdd(res.data);
        setShowModal(!showModal);
        setShowToast(true);
        setMessage(`You have been created successful user: ${name}!!`);
        setAdd(false);
      });
    } else {
      callApi(`/${infoUser.id}`, "PUT", {
        name,
        email,
        city,
      }).then((res) => {
        handleSubmitEdit(res.data, index);
        setShowModal(!showModal);
        setShowToast(true);
        setMessage(`You have been updated successful!!`);
      });
    }
  };

  return (
    <div className="modal fade show modal__add" id="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modal-label">
              {valueTitle}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="close"
              onClick={() => {
                setShowModal(!showModal);
                setAdd(false);
              }}
            ></button>
          </div>
          <div className="modal-body text-center">
            <form onSubmit={onSave}>
              <div className="form-group">
                <label>
                  <b>Name:</b>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="" className="me-3 mt-4">
                  <b>City:</b>
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="" className="me-1 mt-4 mb-5">
                  <b>email:</b>
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => {
                  setShowModal(!showModal);
                  setAdd(false);
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary ms-5 px-4"
                value="Add"
              >
                {valueBtn}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
