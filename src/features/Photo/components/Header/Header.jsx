import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
import "./Header.scss";

Header.propTypes = {};

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className=" justify-content-between">
          <Col xs="auto">
            <NavLink
              to="/photos"
              end
              className={({ isActive }) =>
                isActive
                  ? "header__link header__title header__link--active"
                  : "header__link header__title"
              }
            >
              Photo App
            </NavLink>
          </Col>

          <Col xs="auto">
            <NavLink
              to="/sign-in"
              className={({ isActive }) =>
                isActive ? "header__link header__link--active" : "header__link"
              }
            >
              Sign In
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
