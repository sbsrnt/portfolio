import React, { Component } from "react";
import me from "../../assets/me.jpg";
import TwitchIframe from "./twitch-iframe";
import "./styles/styles.css";

class AboutMe extends Component {
  state = {
    showScroll: true
  };

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({ showScroll: false }), 4500);
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  render() {
    return (
      <div className="aboutMe">
        <div className="container">
          <img src={me} alt="" />
          <h2>Sebastian Krzyżanowski</h2>
          <h2 className="title">Frontend Engineer</h2>
          <div className="description">
            <p>Welcome to my portfolio.</p>
            <p>
              I am a <span>Frontend Engineer</span> located in Gdańsk, Poland{" "}
              <span>who aims to be a unicorn developer</span>.
            </p>
            <p>Doing my best to be up to date with latest tech.</p>
            <p>
              Also sharing programming love while coding my private projects on{" "}
              <a href="https://www.twitch.tv/sbsrnt">Twitch</a>.
            </p>
          </div>
        </div>
        {window.innerWidth > 815 && <TwitchIframe />}
        <div
          className={`icon-scroll ${
            !this.state.showScroll ? "hidden" : undefined
          }`}
        />
      </div>
    );
  }
}

export default AboutMe;
