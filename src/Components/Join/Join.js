import React from "react";
import { withRouter } from "react-router-dom";
import "./Join.css";

const Join = () => {
  // const [name, setName] = useState("");
  // const [room, setRoom] = useState("Nutrifruit");
  return (
    <div className="joinOuterContainer">
      <div className="JoinInnerContainer">
        <h1 className="heading"> Join </h1>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            // onChange={(event) => setName(event.target.value)}
          />
        {/* <div> <input placeholder="Room" className='joinInput mt-20' type='text' onChange={ (event)=> setRoom(event.target.value)} /></div> */}
        {/* <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default withRouter(Join);
