import React from "react";
import serverimg from "../../../../assets/g7.jpg";
import "./ServerList.css";
import { Link } from "react-router-dom";
const data = [
  { title: "Server Name" },
  { title: "Server Name" },
  { title: "Server Name" },
  { title: "Server Name" },
  { title: "Server Name" },
  { title: "Server Name" },
];

const ServerList = () => {
  return (
    <>
      <div className="serverlist">
        {data.map((item) => (
          <div className="server_content">
            <Link to="/server/setting">
              <img src={serverimg} alt="" />
            </Link>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServerList;
