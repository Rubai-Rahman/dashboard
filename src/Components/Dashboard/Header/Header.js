import React from "react";
import { Container, Dropdown, Form, Navbar } from "react-bootstrap";
import logo from "../../../assests/logo/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import user_img from "../../../assests/logo/user.png";

const Header = ({ show, setShow }) => {
  // const handleNotification = e =>{
  //   e.preventDefault();
  //  alert("hello ")

  // }
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container fluid className="navContainer">
          <Navbar.Brand href="#home" style={{ marginRight: 176 }}>
            <img
              alt=""
              src={logo}
              width="24"
              height="24"
              style={{
                borderRadius: 50,
                marginLeft: 16,
                marginTop: 50,
                marginRight: 8,
              }}
              className=""
            />
            <h4
              className="d-inline-block align-top"
              style={{
                color: "#2D5BFF",
                fontWeight: 700,
                fontSize: 11,
                lineHeight: 11,
              }}
            >
              LOOGO
            </h4>
          </Navbar.Brand>
          <Form
            className="d-flex"
            style={{
              width: 365,
              height: 32,
              borderRadius: 4,
              padding: 8,
              background: "#F1F3F8",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search "
              style={{
                width: 173,
                height: 17,
                fontWeight: 400,
                lineHeight: 17,
                color: "#8F8F8F",
                fontSize: 14,
                border: "none",
                backgroundColor: "transparent",
                resize: "none",
                outline: "none",
              }}
            />
            <button style={{ border: "none" }}>
              <AiOutlineSearch style={{ width: 20, height: 20, border: 6 }} />
            </button>
          </Form>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Dropdown align="end">
                <button
                  onClick={() => setShow(true)}
                  style={{
                    border: "none",
                    marginRight: 42,
                    outline: "none",
                  }}
                >
                  <IoNotificationsSharp
                    style={{
                      border: "none",
                      height: 25,
                      width: 20,
                      color: "#E1E1E1",
                      backgroundColor: "#ffff",
                    }}
                  />
                </button>
                <img
                  src={user_img}
                  alt="userImg"
                  style={{
                    width: 21,
                    height: 21,
                    objectFit: "cover",
                    margin: 2,
                    marginRight: 8,
                  }}
                />
                <Dropdown.Toggle
                  style={{
                    width: 55,
                    height: 17,
                    fontWeight: 400,
                    fontSize: 14,
                    marginRight: 40,
                    color: "black",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  id="dropdown-basic"
                >
                  Riandra
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Setting</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
