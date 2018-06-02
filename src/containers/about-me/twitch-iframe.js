import React, { Component } from "react";
import axios from "axios/index";
import "twitch-embed";
import { TwitchClientId } from "../../configs";
import Icon from "../../components/icon/icon";

class TwitchIframe extends Component {
  state = {
    loading: false,
    success: false,
    stream: null
  };

  componentDidMount() {
    this.setState({
      loading: true
    });

    axios
      .get("https://api.twitch.tv/kraken/streams/51872815", {
        headers: {
          Accept: "application/vnd.twitchtv.v5+json",
          "Client-ID": TwitchClientId
        }
      })
      .then(res => {
        this.setState({
          loading: false,
          success: true,
          stream: res.data.stream
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          success: false,
          error
        });
      });
  }

  render() {
    const { stream, loading, success, error } = this.state;
    const live = stream && stream.stream_type === "live";

    return (
      <div
        className={`twitchIframe ${loading ? "loading" : undefined} ${
          !stream ? "offline" : undefined
        }`}
      >
        {!loading &&
          success &&
          window.innerWidth > 1000 &&
          live && (
            <iframe
              title={`${stream.channel.name} livestream`}
              src={`https://player.twitch.tv/?channel=${
                stream.channel.name
              }&muted=true`}
              frameBorder="0"
              allowFullScreen
            />
          )}
        {!loading &&
          success &&
          live && (
            <span className="live">
              <a
                href="https://www.twitch.tv/sbsrnt"
                rel="noopener noreferrer"
                target="_blank"
              >
                I'M LIVE ON <Icon name="twitch" />
              </a>
            </span>
          )}
        {!stream && (
          <span className="live not-really">
            <a
              href="https://www.twitch.tv/sbsrnt"
              rel="noopener noreferrer"
              target="_blank"
            >
              OFFLINE
            </a>
          </span>
        )}
        {!loading && error && live(<p>Could not load stream.</p>)}
      </div>
    );
  }
}

export default TwitchIframe;
