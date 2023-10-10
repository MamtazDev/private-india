import React from "react";
import serverimg from "../../../../assets/g7.jpg";
import "./ServerList.css";
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
            <img src={serverimg} alt="" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServerList;
