import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from "react";
import {SearchAndSortContext} from "../../../context"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
 


const Navbar_ = () => {
  let location = useLocation();
  const [visible, setVisible] = useState("inline-block");
  useEffect(() => {
    if(location.pathname === "/posts")
    setVisible('inline-block');
    else
    setVisible('none');
  },[location])


 const {filter, setFilter, setModal} = useContext(SearchAndSortContext);
 console.log(filter.sort);
    return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Link className="nav-link sm" to="/posts">
                  Posts
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link sm" to="/about">
                  About
                </Link>
              </Nav.Item>
              <NavDropdown
                title="Sort by"
                id="basic-nav-dropdown"
                style={{ display: visible }}
              >
                <NavDropdown.Item
                  title="title"
                  onClick={(e) =>
                    setFilter({ ...filter, sort: e.target.title })
                  }
                >
                  Title
                </NavDropdown.Item>
                <NavDropdown.Item
                  title="body"
                  onClick={(e) =>
                    setFilter({ ...filter, sort: e.target.title })
                  }
                >
                  Description
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button
              style={{ display: visible, marginRight: "10px" }}
              variant="outline-secondary"
              onClick={() => setModal(true)}
            >
              Create Post
            </Button>

            <form className="d-flex">
              <input
                className="form-control me-2"
                style={{ display: visible }}
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={filter.query}
                onChange={(e) =>
                  setFilter(
                    { ...filter, query: e.target.value },
                    e.preventDefault()
                  )
                }
              />
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navbar_;

