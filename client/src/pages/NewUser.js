import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Form } from "react-bootstrap";
import "./NewUser.css";

export default function NewUser({ onIdSubmit }) {
  const location = useLocation();

  // var randomName = require('random-username-generator');
  // var new_username = rug.generate();

  // const idRef = useRef();

  // function handleSubmit(e) {
  //     e.preventDefault();

  //     onIdSubmit(idRef.current.value)
  // }

  // function createNewId() {
  //     onIdSubmit(randomName.generate())
  // }

  return (
    <div className="container newUser-bg  d-flex">
      <div className="col-6 mx-auto">
        <div className="p-2 mx-auto d-block text-center">
          <form>
            <div className="form-group">
              <label htmlFor="userNameId">Create User Name </label>
              <input
                type="text"
                placeholder="create user name"
                className="form-control"
                id="userNameId"
              />
            </div>

            <Link
              to="/dashboard"
              className={
                location.pathname === "/dashboard"
                  ? "nav-link"
                  : "nav-link text-white btn btn-primary w-100"
              }
            >
              Create User Name
            </Link>
          </form>

          {/* <Form onSubmit={handleSubmit} className="w-100">
            <Form.Group>
              <Form.Label>Enter your ID</Form.Label>
              <Form.Control type="text" ref={idRef} />
            </Form.Group>

            <Button type="submit" className="mr-2">
              Login
            </Button>
            <Button onClick={createNewId} variant="secondary">
              Create Username
            </Button>
          </Form> */}

        </div>
      </div>
    </div>
  );
}
