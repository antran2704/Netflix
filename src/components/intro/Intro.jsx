import "./intro.scss";
import ReactPlayer from "react-player";
import { GoMute, GoUnmute } from "react-icons/go";
import { useState } from "react";
function Intro() {
  const [isMute, setMute] = useState(true);

  function handleMute() {
    setMute(!isMute);
  }
  return (
    <div className="intro">
      <ReactPlayer
        playing={true}
        loop={true}
        volume={1}
        width="100%"
        height="100%"
        muted={isMute}
        url="https://vimeo.com/235307580"
        className="video-intro"
      />
      <div className="intro-infor">
        <h1 className="intro-heading">Netflix Elite</h1>
        <p className="intro-desc">
          Netflix Elite Launch Campaign Director: Fernanda Weinfeld Production
          Company: Awake Film Agency: Akqa
        </p>
      </div>
      {isMute ? (
        <GoMute onClick={handleMute} className="intro-icon" />
      ) : (
        <GoUnmute onClick={handleMute} className="intro-icon" />
      )}
      <div className="bottom"></div>
    </div>
  );
}

export default Intro;
