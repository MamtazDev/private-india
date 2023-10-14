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
              <img
                src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </Link>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServerList;
