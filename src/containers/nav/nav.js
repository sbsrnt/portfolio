import React, { Component } from "react";
import "./styles.css";
import Modal from "../../components/modal/modal";

class Nav extends Component {
  state = {
    menuOpen: false
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleModalCloseViaESC, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleModalCloseViaESC, false);
  }

  handleNavClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  handleModalItemClick = () => {
    this.setState({ menuOpen: false });
  };

  handleModalCloseViaESC = e => {
    if (this.state.menuOpen && e.keyCode === 27) {
      this.setState({ menuOpen: false });
    }
  };

  render() {
    return (
      <div>
        <div
          className={`hamburger ${this.state.menuOpen ? "open" : undefined}`}
          onClick={this.handleNavClick}
        >
          <span />
          <span />
          <span />
        </div>
        <Modal
          menuOpen={this.state.menuOpen}
          handleModalItemClick={this.handleModalItemClick}
        />
      </div>
    );
  }
}

Nav.propTypes = {};
Nav.defaultProps = {};

export default Nav;
