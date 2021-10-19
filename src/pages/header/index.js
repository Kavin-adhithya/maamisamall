import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import "./header.css";
import { Form, FormControl } from "react-bootstrap";
import { relative } from "path";
import { Modal, Button } from "react-bootstrap";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Modal show={false} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>SIGN UP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#e6e3e3",
            }}
          >
            <img src="login.png" style={{ height: "30%", width: "40%" }}></img>

            
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2 style={{padding:5,margin:5,top:0,flexDirection:'column'}}>Sign Up!</h2>
              <input
                type="text"
                placeholder="UserName"
                style={{ padding: 2, margin: 5 }}
              ></input>
              <input
                type="password"
                placeholder="Password"
                style={{ padding: 2, margin: 5 }}
              ></input>
              <input
                type="email"
                placeholder="example@email.com"
                style={{ padding: 2, margin: 5 }}
              ></input>
              <input
                type="phoneNumber"
                placeholder="PhoneNumber"
                style={{ padding: 2, margin: 5 }}
              ></input>
              <Button variant="primary" onClick={handleClose}>
                submit
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      <div style={{ backgroundColor: "white" }}>
        <nav className="navbar navbar-expand-lg navbar-light container">
          <img
            className="navbar-brand"
            src="logo.png"
            style={{ height: 80, width: 80 }}
          ></img>
          <a className="navbar-brand" href="/">
            Maamisamall
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ justifyContent: "space-between" }}
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <div className="header_location">
                    <FaMapMarkerAlt className="location_icon" />
                    <div style={{ marginLeft: 5 }}>
                      <p className="location_city">Chennai</p>
                      <h5 className="location_place">Vandalur</h5>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search for the delicious food"
                className="me-2"
                aria-label="Search"
              />
              <img
                src="search.svg"
                alt="search"
                style={{ position: "relative", left: -35 }}
              ></img>
            </Form>
            <div>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a
                    className="nav-link header_location"
                    href="/"
                    onClick={handleShow}
                  >
                    <FaRegUser style={{ fontSize: 18, color: "black" }} />
                    <p className="header_login">Login</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link header_location" href="/">
                    <BiCart style={{ fontSize: 24, color: "black" }} />
                    <p className="header_cart">Cart</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
