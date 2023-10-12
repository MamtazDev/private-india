import React from "react";
import ServerList from "./ServerList";
const ServerItems = () => {
  return (
    <>
      <div className="server_page">
        <div className="server_title">
          <p>Server List</p>
        </div>

        <div>
          <ServerList />
          <ServerList />
        </div>
      </div>
    
    </>
   
  );
};

export default ServerItems;
