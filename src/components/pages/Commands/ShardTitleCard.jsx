import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const shardData = [
  {
    shard: "[2/2656]",
    ping: "108ms",
    servers: "1,335",
    users: "27,219",
    connections: 2,
    listeners: 8,
  },
  {
    shard: "[2/2656]",
    ping: "108ms",
    servers: "1,335",
    users: "27,219",
    connections: 2,
    listeners: 8,
  },
  {
    shard: "[2/2656]",
    ping: "108ms",
    servers: "1,335",
    users: "27,219",
    connections: 2,
    listeners: 8,
  },
  {
    shard: "[2/2656]",
    ping: "108ms",
    servers: "1,335",
    users: "27,219",
    connections: 2,
    listeners: 8,
  },
  {
    shard: "[2/2656]",
    ping: "108ms",
    servers: "1,335",
    users: "27,219",
    connections: 2,
    listeners: 8,
  },
  {
    shard: "[2/2656]",
    ping: "108ms",
    servers: "1,335",
    users: "27,219",
    connections: 2,
    listeners: 8,
  },
  {
    shard: "[2/2656]",
    ping: "108ms",
    servers: "1,335",
    users: "27,219",
    connections: 2,
    listeners: 8,
  },
  {
    shard: "[2/2656]",
    ping: "108ms",
    servers: "1,335",
    users: "27,219",
    connections: 2,
    listeners: 8,
  },
  {
    shard: "[2/2656]",
    ping: "108ms",
    servers: "1,335",
    users: "27,219",
    connections: 2,
    listeners: 8,
  },
  {
    shard: "[2/2656]",
    ping: "108ms",
    servers: "1,335",
    users: "27,219",
    connections: 2,
    listeners: 8,
  },
  {
    shard: "[2/2656]",
    ping: "108ms",
    servers: "1,335",
    users: "27,219",
    connections: 2,
    listeners: 8,
  },
  {
    shard: "[2/2656]",
    ping: "108ms",
    servers: "1,335",
    users: "27,219",
    connections: 2,
    listeners: 8,
  },
  {
    shard: "[2/2656]",
    ping: "108ms",
    servers: "1,335",
    users: "27,219",
    connections: 2,
    listeners: 8,
  },
  {
    shard: "[2/2656]",
    ping: "108ms",
    servers: "1,335",
    users: "27,219",
    connections: 2,
    listeners: 8,
  },
  {
    shard: "[2/2656]",
    ping: "108ms",
    servers: "1,335",
    users: "27,219",
    connections: 2,
    listeners: 8,
  },
];

const ShardTitleCard = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div>
        <input
          id="shard_search"
          class="searchbar fs18 tWhite sRadius"
          type="search"
          placeholder="Search a server (by ID)..."
          name="q"
        />
        <ul id="shard_tiles" className="shard_ul_tiles">
          {shardData.map((data) => (
            <li
              data-aos="fade-up"
              data-aos-duration="2000"
              class="tile small sRadius"
              style={{ backgroundColor: "black", display: "block" }}
              data_shard_id="0"
              data_shard="1"
            >
              <div class="tile_title fs16">
                <span>Shard [2/2656]</span>
                <span style={{ backgroundColor: "green" }}></span>
              </div>
              <div class="tile_info fs16">
                <ul>
                  <li>
                    Ping: <strong>108ms</strong>
                  </li>
                  <li>
                    Servers: <strong>1,335</strong>
                  </li>
                  <li>
                    Users: <strong>27,219</strong>
                  </li>
                  <li>
                    Connections: <strong>2</strong>
                  </li>
                  <li>
                    Listeners: <strong>8</strong>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ShardTitleCard;
